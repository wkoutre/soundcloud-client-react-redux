import React from 'react';
import ReactDOM from 'react-dom';
import { CLIENT_ID } from '../../constants/auth';

class Stream extends React.Component {
	componentDidUpdate() {
		const audioElement = ReactDOM.findDOMNode(this.refs.audio);

		if (!audioElement) { return; }

		const { activeTrack } = this.props;

		if (activeTrack) {
			audioElement.play();
		} else {
			audioElement.pause();
		}
	}

	render() {
		const { user, tracks = [], onAuth, onPlay, activeTrack } = this.props;

		return (
			<div>
				<div>
				{
					user ?
						<div>{user.username}</div> :
						<button onClick={onAuth} type="button">Login</button>
				}
				</div>
				<br/>
				<div>
					{
						tracks.map( (track, key) => {
							return(
								<div className="track" key={key}>
									{track.origin.title}
									<button
										type="button"
										onClick={ () => onPlay(track)}>
											Play
									</button>
								</div>
							)
						})
					}
				</div>
				{
					activeTrack ?
						<audio
							id="audio"
							ref="audio"
							src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}></audio> :
							null
				}
			</div>
		);
	}
}

export default Stream;

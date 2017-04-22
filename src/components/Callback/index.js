import React from 'react';

class Callback extends React.Component {
	componentDidMount() {
		window.setTimeout(opener.SC.connectCallback, 1);
	}

	render() {
		return (
			<div>
				<p>This page will be closing soon.</p>
			</div>		
		)
	}
}

export default Callback;

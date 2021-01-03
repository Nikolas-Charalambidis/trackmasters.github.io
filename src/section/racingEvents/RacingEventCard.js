import React from "react";

import { useMediaQuery } from 'react-responsive';

export default function RacingEventCard(props) {

	const [text, setText] = React.useState("default");
	const isS = useMediaQuery({query: '(max-width: 640px)'})

	return (
		isS ?
		<React.Fragment>

			<div className="uk-grid uk-card-body uk-card-hover uk-grid-collapse uk-child-width-1-2 uk-margin" data-uk-grid="">
				<div className="uk-card-media-left uk-cover-container">
					<div className="uk-card-body">
						<p className="event-number uk-margin-remove uk-text-center">#{props.index}</p>
						<p className="event-detail uk-margin-remove-top">{props.date}</p>
					</div>
				</div>
				<div className="uk-flex-middle">
					<div className="uk-card-body uk-card-media-top" uk-toggle={`target: #toggle-animation-${props.index}; animation: uk-animation-fade; mode: hover`}>
						<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove uk-padding-remove"
								onMouseOver={() => setText("Informace")}>
							<span className="racing-button-icon" uk-icon="icon: link; ratio: 2"></span>
						</button>
						<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove uk-padding-remove"
								onMouseOver={() => setText("Registrace")}>
							<span className="racing-button-icon" uk-icon="icon: sign-in; ratio: 2"></span>
						</button>
						<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove uk-padding-remove"
								onMouseOver={() => setText("Výsledky")}>
							<span className="racing-button-icon" uk-icon="icon: list; ratio: 2"></span>
						</button>
					</div>
					<div className="uk-card-body uk-card-media-bottom uk-text-center uk-padding-remove">
						<p id={`toggle-animation-${props.index}`} className="event-detail uk-margin-remove uk-transition-fade uk-transition-opaque" hidden>{text}</p>
					</div>
				</div>
			</div>

		</React.Fragment>

			:

		<React.Fragment>
			<div className="uk-card uk-card-body uk-card-hover uk-padding-remove">
				<div className="uk-card-media-top" >
					<p className="event-number uk-margin-remove uk-text-center">#{props.index}</p>
					<p className="event-detail uk-margin-remove-top">{props.date}</p>
				</div>
				<hr className="uk-margin-remove-bottom"/>
				<div className="event-body uk-card-media-bottom uk-text-center uk-padding-remove"
					 uk-toggle={`target: #toggle-animation-${props.index}; animation: uk-animation-fade; mode: hover`}>
					<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove uk-padding-remove"
							onMouseOver={() => setText("Informace")}>
						<span className="racing-button-icon" uk-icon="icon: link; ratio: 2"></span>
					</button>
					<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove uk-padding-remove"
							onMouseOver={() => setText("Registrace")}>
						<span className="racing-button-icon" uk-icon="icon: sign-in; ratio: 2"></span>
					</button>
					<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove uk-padding-remove"
							onMouseOver={() => setText("Výsledky")}>
						<span className="racing-button-icon" uk-icon="icon: list; ratio: 2"></span>
					</button>
				</div>
				<hr className="uk-margin-remove-top uk-margin-remove-bottom"/>
				<div className="uk-flex uk-flex-middle uk-flex-center" style={{'height': '50px'}}>
					<p id={`toggle-animation-${props.index}`} className="event-detail uk-margin-remove uk-transition-fade uk-transition-opaque" hidden>{text}</p>
				</div>
			</div>
		</React.Fragment>
	)
}
import { h, Component } from 'preact';

export default class ImageInput extends Component {
	shouldComponentUpdate({ model }) {
		return model !== this.props.model;
	}
	
	componentDidMount() {
	}

	setImage(url) {
		this.setState({showImage: url})
	}

	changeFile(event) {
		console.log(event)
	}

	// remove = () => {
	// 	let { onRemove, todo } = this.props;
	// 	onRemove(todo);
	// };

	render({ model, title, name }) {
		return (
			<div className="file-inputer" title={title}>
				{this.state.showImage ? 
					(
						<div>
							<label for={name} className="photo">
								<img className="driver-photo" src={this.state.showImage} alt={title}/>
							</label>
							<div className="plus"></div>
						</div>
					) :
					(
						<label for={name} className="empty">
							<svg version="1.2" preserveAspectRatio="none" 
							viewBox="0 0 24 24" className="ng-element" 
							data-id="6e4b1370ae3596dd0341e0c97e71b698" 
							style="opacity: 1; fill: rgb(0, 0, 0); width: 32px; height: 32px;">
								<g>
									<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="3.2" style="fill: rgb(0, 0, 0);">
									</circle>
										<path 
										xmlns="http://www.w3.org/2000/svg" 
										d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" 
										style="fill: rgb(0, 0, 0);">
									</path>
								</g>
							</svg>
						</label>
					)
				}
				<input type="file" onChange={(evt) => this.changeFile(evt)} id={name} name={name} accept="image/*"/>
			</div>
		);
	}
}

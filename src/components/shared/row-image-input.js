import { h, Component } from 'preact';
import img from '../../assets/paper.png';

export default class RowImageInput extends Component {
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

    render({ model, title, name }) {
        return (
            <div className="row-file-inputer" title={title}>
                <input type="file" id={name} name={name} className="hidden"  accept="image/*"/>
                <label className="upload-l" for={name}>
                    <img className="paper" src={img} alt="paper"/>
                </label>
                {this.state.showImage ? 
                    (
                        <img src={this.state.showImage} alt="preview" className="upl-priview photo-lic-1"/>
                    ) :
                    (
                        <div className="uploader no-validate place-lic-1 mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" id="file-license" name="file-license" disabled/>
                            <label className="mdl-textfield__label" for="file-license">{title}</label>
                        </div>
                    )
                }                
            </div>
        );
    }
}

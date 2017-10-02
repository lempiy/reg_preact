import { h, Component } from 'preact';
import TextInput from './shared/text-input'
import ImageInput from './shared/image-input'
import DatePicker from './shared/date-picker'

export default class RegForm extends Component {
	render() {
		return (
			<form onsubmit="return false" className="regist-driver">
                <h1 className="driver-reg-title">Driver Registration</h1>
                <div id="app" className="reg-container">
                    <div className="content-left">
                        <div className="form-element">
                            <fieldset>
                                <ul>
                                    <li className="flex-wrapper name">
                                        <div class="flex-cell">
                                            <TextInput title="First Name" input='' name="first_name"/>
                                        </div>
                                        <div class="flex-cell">
                                            <TextInput title="Last Name" input='' name="last_name"/>
                                        </div>
                                    </li>
                                    <li class="flex-wrapper contact">
                                        <div className="flex-cell">
                                            <TextInput 
                                                title="Email" 
                                                input='' 
                                                error='Email is not valid'
                                                pattern='^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
                                                name="email"/>
                                            <TextInput 
                                                title="Phone" 
                                                input='' 
                                                error='Phone number is not valid'
                                                pattern='^[0-9]{10}$'
                                                name="phone"/>
                                        </div>
                                        <div class="flex-cell">
                                            <ImageInput
                                                model="model"
                                                title="Avatar"
                                                name="avatar"
                                            />
                                        </div>
                                    </li>
                                    <li class="flex-wrapper license">
                                        <div class="flex-cell">
                                            <DatePicker
                                                input=''
                                                title='Date Birth'
                                                name='birth_date'
                                                error='Driver is younger then 18!'/>
                                        </div>
                                    </li>
                                </ul>
                            </fieldset>
                        </div>
                    </div>
                    <div className="content-center">

                    </div>
                    <div className="content-right">

                    </div>
                </div>
            </form>
		);
	}
}

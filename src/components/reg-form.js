import { h, Component } from 'preact';
import TextInput from './shared/text-input'
import ImageInput from './shared/image-input'
import RowImageInput from './shared/row-image-input'
import DatePicker from './shared/date-picker'
import SelectFieled from './shared/select-field'
import Homer from './shared/homer'

export default class RegForm extends Component {
	componentWillMount() {
		this.props.states = ["Victoria"]
	}
	render({states}) {
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
							<fieldset>
								<ul>
									<li class="flex-wrapper homer">
										<div class="flex-cell">
											<Homer/>
										</div>
									</li>
									<li class="flex-wrapper post">
										<div class="flex-cell">
											<TextInput title="Street" input='' name="street"/>
										</div>
										<div class="flex-cell">
											<TextInput title="Number" input='' name="number"/>
										</div>
									</li>
									<li class="flex-wrapper post">
										<div class="flex-cell">
											<TextInput title="City" input='' name="city"/>
										</div>
										<div class="flex-cell selecter">
											<SelectFieled title="State" name='state' list={states}/>
										</div>
									</li>
									<li class="flex-wrapper license-exp">
										<div class="flex-cell grower">
											<TextInput 
												title="License Number" 
												input='' 
												error='Input is not a number!'
												pattern="-?[0-9]*(\.[0-9]+)?"
												name="license_num"/>
										</div>
										<div class="flex-cell">
												<DatePicker
													input=''
													title='License Expiry'
													name='license_exp'
													error='License already expire!'/>
										</div>
									</li>
									<li class="flex-wrapper license flex-start-d">
										<div class="flex-cell upl">
											<RowImageInput 
												model="model"
												name="upload-l-1"
												title="Please attach driving license"/>
										</div>
									</li>
									<li class="flex-wrapper license flex-start-d">
										<div class="flex-cell upl">
											<RowImageInput 
												model="model"
												name="upload-l-2"
												title="Please attach car/bike license"/>
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

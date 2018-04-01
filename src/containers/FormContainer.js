import React, {Component} from 'react';
import SingleInput from '../components/SingleInput';
import Select from '../components/Select';
import DisForm from '../components/details';
import SingleInputEmail from '../components/email';
import SingleInputPassword from '../components/password';
import SingleInputPhoneNumber from '../components/phoneNumber';


class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ownerName: 'kshitij',
			Email:'',
			password:'',
			phoneNumber:'',			
			ageOptions: [],
			ownerAgeRangeSelection: '',			
			isSubmitted: false

		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleFullNameChange = this.handleFullNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleAgeRangeSelect = this.handleAgeRangeSelect.bind(this);
		this.handleAgeRangeSelect = this.handleAgeRangeSelect.bind(this);		
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}
	componentDidMount() {
		fetch('./fake_db.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					ownerName: data.ownerName,
					petSelections: data.petSelections,
					selectedPets: data.selectedPets,
					ageOptions: data.ageOptions,
					ownerAgeRangeSelection: data.ownerAgeRangeSelection,
					
				});
			});
	}
	
  handleLogoutClick() {
    this.setState({isSubmitted: false});
  }

	handlePassword(e){
		this.setState({ password: e.target.value }, () => console.log('name:', this.state.password));
	} 
	handlePhoneNumber(e){
		this.setState({ phoneNumber: e.target.value }, () => console.log('name:', this.state.phoneNumber));
	} 
    handleEmailChange(e){
    	this.setState({ Email: e.target.value }, () => console.log('name:', this.state.Email));
    }
	handleFullNameChange(e) {
		this.setState({ ownerName: e.target.value }, () => console.log('name:', this.state.ownerName));
	}
	
	handleAgeRangeSelect(e) {
		this.setState({ ownerAgeRangeSelection: e.target.value }, () => console.log('age range', this.state.ownerAgeRangeSelection));
	}
	
	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			ownerName: '',
			Email:'',
			password:'',
			phoneNumber:'',
			ageOptions:"",
			ownerAgeRangeSelection: '',
			
		});
	}
	handleFormSubmit(e) {
		e.preventDefault();

		const formPayload = {
			ownerName: this.state.ownerName,
			password:this.state.password,
			phoneNumber:this.state.phoneNumber,
			Email:this.state.Email,
			ageOptions:this.state.ageOptions,			
			ownerAgeRangeSelection: this.state.ownerAgeRangeSelection
			
		};

		console.log('Send this in a POST request:', formPayload);
        this.setState({isSubmitted: true});



		
	}
	render() {


		 const isSubmitted = this.state.isSubmitted;
    
		    let button = null;
		    if (isSubmitted) {
		      button = <LogoutButton onClick={this.handleLogoutClick} />;
		    } else {
		      button = <LoginButton onClick={this.handleFormSubmit} />;
		    }


		if(!isSubmitted){
		return (
			<div>
			<form className="container" onSubmit={this.handleFormSubmit}>
				<h5>React Js Form</h5>
				<SingleInput
					inputType={'text'}
					title={'Full name'}
					name={'name'}
					controlFunc={this.handleFullNameChange}
					content={this.state.ownerName}
					placeholder={'Type first and last name here'} />
				<SingleInputEmail
					inputType={'text'}
					title={'valid email'}
					name={'name'}
					controlFunc={this.handleEmailChange}
					content={this.state.Email}
					placeholder={'Type valid Email Address'} />
				<SingleInputPassword 
					inputType={'text'}
					title={'valid password'}
					name={'name'}
					controlFunc={this.handlePassword }
					content={this.state.password}
					placeholder={'Type Password'} />
				<SingleInputPhoneNumber 
					inputType={'text'}
					title={'valid phoneNumber'}
					name={'name'}
					controlFunc={this.handlePhoneNumber }
					content={this.state.phoneNumber}
					placeholder={'Type Valid Phone Number'} />
				
				<Select
				    title={'Country Name'}
					name={'ageRange'}
					placeholder={'Choose your age range'}
					controlFunc={this.handleAgeRangeSelect}
					options={this.state.ageOptions}
					selectedOption={this.state.ownerAgeRangeSelection} />
				
				<input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit"
					/>
				<button
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear form</button>
			</form>
			</div>
		);}
		return (<div>
			        <DisForm
					ownerName={ this.state.ownerName}
					Email={ this.state.Email}
					password={ this.state.password}
					phoneNumber={ this.state.phoneNumber}
					ownerAgeRangeSelection={ this.state.ownerAgeRangeSelection}
					
					/>
					<button
					className="btn btn-link float-left"
					onClick={this.handleLogoutClick}>{button}</button>
					
					</div>);
	}
}


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login 
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Go Back to Form
    </button>
  );
}
export default FormContainer;


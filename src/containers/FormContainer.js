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
			ownerName: '',
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
   
  }

	handlePassword(e){
		
	} 
	handlePhoneNumber(e){
	} 
    handleEmailChange(e){
    }
	handleFullNameChange(e) {
	}
	
	handleAgeRangeSelect(e) {
	}
	
	handleClearForm(e) {
		
	}
	handleFormSubmit(e) {
	


		
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

				
			</div>
		);}
		return (<div>
			        
					
					</div>);
	}
}



export default FormContainer;


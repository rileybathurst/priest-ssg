import React from 'react'
import Layout from '../components/layout'
import HeaderContact from "../components/headercontact"
import Seo from "../components/seo"

// Handling Multiple Inputs https://reactjs.org/docs/forms.html#handling-multiple-inputs
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    // were not using defaults with how it shows the label before a value has been entered
    this.state = {
      // customer: 'Priest Sheetmetal',
      // email: 'info@priestsheetmetal.co.nz',
    };

    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value; // this has to have some extra if its a checkbox or other non text
    const name = target.name;
    this.setState({
      [name]: value
    });

    if (this.state.customer !== '') {
      // console.log('things');

      // theres a forEach way I have done this before but closest seems like a nice solution
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
      // var nearby = test_input.closest('div'); // this doesnt like working on a querySelectorAll
      // console.log(nearby);

      

      var test_input = document.querySelector('.test-input');
      test_input.classList.add("field--not-empty");



/*       nearby.classList.add("field--not-empty");
    } else { // theres a problem with this if something is entered then removed the classlist doesnt update first charachter is rentered 
      console.log('elsed');
      // console.log('check = ' + this.state.customer);
      test_input.classList.remove("field--not-empty");
      */
    } 

    // in the wierdest way it doesnt update when the value is removed

// || double pipe for or
/*     if (this.state.customer === '') {
      console.log('nothings');
      console.log('check = ' + this.state.customer);
      test_input.classList.remove("field--not-empty");
    } */
  }

  handleSubmit(event) {

    // nothing gets submitted it just opens a new window
    window.open('mailto:' + this.state.email + '?subject=Priest Sheetmetal Quote Enquiry&body=Priest Sheetmetal quote enquiry%0D%0Abreak ' + this.state.customer);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <div className="order-form-section test-input">
          <label> {/* react notes show wrapping the label but im using a grid to overlay what I want */}
            Name:
            </label>
            <input
              name="customer"
              type="text"
              value={this.state.customer}
              onChange={this.handleInputChange}
            />

        </div>

        <div className="order-form-section test-input">
          <label>
            Number of guests:
            </label>
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange} />

        </div>

{/* 
        <div className="order-form-section">
          <label for="metal">Metal type:
            <select name="metal" id="metal-select">
              <option value="">--Please choose an option--</option>
              <option value="Brass">Brass</option>
              <option value="Steel">Steel</option>
            </select>
          </label>
        </div>
        
        <div className="order-form-section">
          <label for="thickness">Thickness:</label>
          <input type="range" id="thickness" name="thickness" min="10" max="100" />
        </div>

        <div className="order-form-section">
          <label for="metal">Finish:
            <select name="finish" id="finish-select">
              <option value="">--Please choose an option--</option>
              <option value="polished">Polished</option>
              <option value="brushed">Brushed</option>
            </select>
          </label>
        </div> */}

        <div className="order-form-submit">
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}



const ContactPage = () => (
  <Layout>
    <Seo title="Order - Priest Sheet Metal &amp; Plate Christchurch" />
    <HeaderContact />
    <main className="page-width">

      <h1>Online Order Form</h1>

      <p>Fill in this form to get inline to order.</p>

      <Reservation />

    </main>

  </Layout>
)

export default ContactPage

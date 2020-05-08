import React from 'react'
import Layout from '../components/layout'
import HeaderContact from "../components/headercontact"
import Seo from "../components/seo"

/* // im pretty sure this is jquery which surley we can skip
$(".field__input").on("input", function () {

  // this seems kinda interesting to be able to find all
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  var $field = $(this).closest(".field");

  // if value?
  if (this.value) {

    // just adding the field--not-empty seems pretty chill
    $field.addClass("field--not-empty");
  } else {
    $field.removeClass("field--not-empty");
  }
}); */

// start rewriting as a test

function Input() {
  var test_input = document.querySelector('.test-input');

  /* if (test_input !== null) {
    test_input.classList.add("field--not-empty");
  } */

  // innerhtml to make things?
  // wait I have stateful react I can probably use that???

  return <input type="text" name="name" id="name" required className="test-input" />;
}


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    window.open('mailto:test@example.com?subject=subject&body=body');




    event.preventDefault();



  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
        <input type="submit" value="Submit" />
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

      <form action="" method="get" class="order-form">


        {/* <Input /> */}

        <NameForm />

       {/*  <div class="order-form-section">
          <label for="name">Enter your name: </label>
          <input type="text" name="name" id="name" required className="test-input" />
        </div> */}

       {/*  <div class="order-form-section">
          <label for="email">Enter your email: </label>
          <input type="email" name="email" id="email" required />
        </div> */}

        <div class="order-form-section">
          <label for="metal">Metal type:</label>
          <select name="metal" id="metal-select">
            <option value="">--Please choose an option--</option>
            <option value="Brass">Brass</option>
            <option value="Steel">Steel</option>
          </select>
        </div>
        
        <div class="order-form-section">
          <label for="thickness">Thickness:</label>
          <input type="range" id="thickness" name="thickness" min="10" max="100" />
        </div>

        <div class="order-form-section">
          <label for="metal">Finish:</label>
          <select name="finish" id="finish-select">
            <option value="">--Please choose an option--</option>
            <option value="polished">Polished</option>
            <option value="brushed">Brushed</option>
          </select>
        </div>

        <div class="order-form-section">
          <input type="submit" value="Order" />
        </div>
      </form>

    </main>

  </Layout>
)

export default ContactPage

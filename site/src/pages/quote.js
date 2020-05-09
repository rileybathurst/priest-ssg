import React from "react"
import Layout from "../components/layout"

// Handling Multiple Inputs https://reactjs.org/docs/forms.html#handling-multiple-inputs
class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: 'test@m.c',
        hasData: true // getting closer to doing something good
      };

      // this.handleInputChange = this.handleInputChange.bind(this);

      // these are just base create the events pieces
      this.handleValueEmpty = this.handleValueEmpty.bind(this);
      this.handleValueFull = this.handleValueFull.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    }

/*     handleInputChange(event) {
      const target = event.target;
      const value = target.value; // this has to have some extra if its a checkbox or other non text
      const name = target.name;
      this.setState({
        [name]: value
      });
    } */
  
    handleValueEmpty(event) {
      const target = event.target;
      const value = target.value; // this has to have some extra if its a checkbox or other non text
      const name = target.name;
      this.setState({
        [name]: value,
        hasData: false
      });
    }

    handleValueFull(event) {
      const target = event.target;
      const value = target.value; // this has to have some extra if its a checkbox or other non text
      const name = target.name;
      this.setState({
        [name]: value,
        hasData: true
      });
    }

    handleSubmit(event) {
      // nothing gets submitted it just opens a new window
      window.open('mailto:' + this.state.email + '?subject=Priest Sheetmetal Quote Enquiry&body=Priest Sheetmetal quote enquiry%0D%0Abreak ' + this.state.customer);
      event.preventDefault();
    }
  
    render() {
        // before the return
        // https://reactjs.org/docs/conditional-rendering.html
        const hasData = this.state.hasData;
        let input;

        if (hasData) {
            input = <input name="email" type="email" value={this.state.email} onChange={this.handleValueEmpty} className="field--not-empty" />;
        } else {
            input = <input name="email" type="email" value={this.state.email} onChange={this.handleValueFull} />;
        }

      return (
        <form onSubmit={this.handleSubmit}>
  
          <div className="order-form-section test-input">
            <label>
              Name:
              </label>
              {input}
          </div>

          <div className="order-form-submit">
            <input type="submit" value="Submit" />
          </div>
        </form>
      );
    }
  }

const NotFoundPage = () => (
  <Layout>
    <main className="page-width">
      <h1>Quote</h1>

        {/* <Greeting isLoggedIn={false} /> */}

        <Reservation />
    </main>
  </Layout>
)

export default NotFoundPage

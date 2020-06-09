import React, { Component } from 'react';
import emailjs from 'emailjs-com';


class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
    Productname: '',
    Productissue:'',
    }
  };

  this.handleChange =this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
 
    const templateId = 'template_JY6FUGep';

    
    emailjs.sendForm(
    'pantrilist_reports_gmail_com',
    'template_JY6FUGep',
    '.contact_form_class',
    'user_giyl0C5yXh1U53UAd9BAN')
      .then()
      .catch();
      this.setState ({
        Productname: "",
        Productissue: "",
      });
      

    this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: 'pantrilist.reports@email.js'})
    }
  
    sendFeedback (templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
     // .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))//
    }

  handleOptionChange = changeEvent => {
    this.setState({
      Productissue: changeEvent.target.value
    });
  };
  
  

  render(){
    return (
      <form id="report-form" className = "contact_form_class" onSubmit={this.handleSubmit.bind(this)} method="POST">
       
        <input placeholder='Product Name' 
          value={this.state.Productname} 
          onChange={e=> this.setState({Productname: e.target.value})}/>

        <br />
        
      
        
        <br />

        <div className="radio">
          <label>
          <input type="radio" name="issue" value="option1" checked={this.state.Productissue === "option1"}
          onChange={this.handleOptionChange}/>
                    I don't think this product is right for me or other customers with similar dietary conditions.
          </label>
        </div>

        <div className="radio">
          <label>
          <input type="radio" name="issue" value="option2" checked={this.state.Productissue === "option2"} 
          onChange={this.handleOptionChange}/>
          I ate this product and got sick.
          </label>
        </div>

        <div className="radio">
          <label>
          <input type="radio" name="issue" value="option3" checked={this.state.Productissue === "option3"} 
          onChange={this.handleOptionChange}/>
          This product information isn't up to date (new ingredients, supplier, origin etc)
          </label>
        </div>

        <br />
        <label>Other Reasons..</label>

        <br />
        <button type="submit" className="btn btn-primary">Submit</button>
      
      </form>
    )
  }
}

export default Report;
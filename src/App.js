import React, { Component } from 'react';
import './App.css';
import Form from './form';
import { getPhoneNumberFiles, generatePhoneNumbers, getFileContent } from './util';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sizeOfPhoneNumersToGenerate: null,
      disabledButton: true,
      loading: false,
      generatedNumbers: [],
      existingPhoneNumberFiles: [],
      isInputValid: true,
    }
  }

  componentDidMount() {
    getPhoneNumberFiles()
      .then(({ data: { files } }) => {
        this.setState({ existingPhoneNumberFiles: files })
      })
      .catch(error => console.log(error));
  }

  /**
   * Handles form change event and updates the state
   *
   * @memberof App
   */
  handleChange = (event) => {
    const value = event.target.value;
    const { isInputValid } = this.state;
    const isInteger = /([0-9])+/.test(value);
    const disabledButton = value.length === 0 || !isInputValid;
    this.setState({ 
      sizeOfPhoneNumersToGenerate : parseInt(event.target.value, 10),
      disabledButton,
      isInputValid: isInteger
    })
  };

  /**
   * Handles button click for form submission
   *
   * @memberof App
   */
  onSubmit = (event) => {
    event.preventDefault();
    const { sizeOfPhoneNumersToGenerate, existingPhoneNumberFiles } = this.state;

    generatePhoneNumbers({ sizeOfPhoneNumersToGenerate })
  
      .then(({ data: { generatedPhoneNumbers, fileName } }) => {
        const files = existingPhoneNumberFiles;
        files.push(fileName); 
        this.setState({ generatedNumbers: generatedPhoneNumbers, existingPhoneNumberFiles: files })
      })
      .catch(error => {});
  }

  /**
   *  Gets the content of a generated file
   *
   * @memberof App
   */
  getFileContent = (event) => {
    event.preventDefault();
    
    const selectedFile = event.target.dataset.file;

    getFileContent(selectedFile)
    .then(({ data: { phoneNumbers } }) => {
      this.setState({ generatedNumbers: phoneNumbers })
    })
    .catch(error => {});
  }


  render() {
    const { 
      sizeOfPhoneNumersToGenerate,
      disabledButton,
      generatedNumbers,
      existingPhoneNumberFiles,
      isInputValid
     } = this.state;
    return (
      <div className="app">
        <header className="app-header">
          <p>Random Phone Number Generator</p>
        </header>
         <div className="wrapper">
          <Form 
            label="Enter the total number of phone numbers to generate."
            buttonText="Generate"
            inputLength="3" 
            inputType="text"
            inPutRequired={true}
            disabledButton={disabledButton}
            name="sizeOfPhoneNumersToGenerate"
            value={sizeOfPhoneNumersToGenerate}
            handleChange={this.handleChange}
            handleSubmit={this.onSubmit}
            isInputValid={isInputValid}
            />
            <div className="generated-numbers-container">
              <div>
                <h6>Generated Numbers</h6>
                <div className="numbers">
                  {
                    generatedNumbers.length > 0 
                    ?
                    generatedNumbers.map(number => {
                      return(
                        <p className="number" key={number}>{number}</p>
                      )
                    })
                    :
                    <p className="no-numbers">No numbers here yet!</p>
                }
                </div>
              </div>


              <div>
                <h6>Phone number files</h6>
                <div className="files">
                  {
                    existingPhoneNumberFiles.length > 0 
                    ?
                    existingPhoneNumberFiles.map((file, index) => {
                      return(
                        <p
                          className="file"
                          key={index}
                          onClick={this.getFileContent}
                          data-file={file}>{file}
                        </p>
                      )
                    })
                    :
                    <p className="no-numbers">No phone number files!</p>
                }
                </div>
              </div>
            </div>
         </div>
    </div>
    );
  }
}

export default App;
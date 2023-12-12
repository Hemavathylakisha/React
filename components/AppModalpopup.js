import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Modal from "./Modal";


class ModalPOPup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      modalScreen: 0,
      name: "",
      modalInputName: ""
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    this.setState({ name: this.state.modalInputName, modalScreen: 1 });
  };

  modalOpen = () => {
    this.setState({ modal: true });
  };

  modalClose = () => {
    this.setState({
      modalInputName: "",
      modal: false,
      modalScreen: 0
    });
  };

  render() {
    const { name, modal, modalScreen } = this.state;
    return (
      <div className="App">
        <h1>Hello!! {name}</h1>
        <button onClick={this.modalOpen}>Open Modal</button>
        <Modal show={modal} handleClose={(e) => this.modalClose(e)}>
          {modalScreen === 0 && (
            <>
              <h2>Hello Modal</h2>
              <div className="form-group">
                <label>Enter Name:</label>
                <input
                  type="text"
                  value={this.state.modalInputName}
                  name="modalInputName"
                  onChange={(e) => this.handleChange(e)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <button onClick={this.handleSubmit} type="button">
                  Save
                </button>
              </div>
            </>
          )}
          {modalScreen === 1 && (
            <>
              <h2>Modal 2 - Confirmation</h2>
            </>
          )}
        </Modal>
      </div>
    );
  }
}
export default ModalPOPup;

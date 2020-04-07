import React, { Component } from 'react'
import { Alert, Modal, Button, Input, message } from "antd";
import axios from 'axios';

import './PopupBtnEventcomp.css'

class PopupBtnEventcomp extends Component {
  state = {
    visible: false,
    mobile: '',
    eventCode: this.props.eventCode,
    eventProg: this.props.eventProg,
    message: '',
    error: false,
    type: this.props.type
  };
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
      error: false,
    });
  };

  handleChange = e => {
    this.setState({ mobile: e.target.value, error: false });
  };

  
  handleOk = e => {
    const { mobile, eventCode, eventProg, type } = this.state;
    if(type === 'booking'){
      axios.post('/api/v1/checkUser', { mobile, eventCode })
      .then(({ data }) => {
        if (data.status === 301) {
          this.props.push(`/register/${eventProg}/${eventCode}/${mobile}`);
        } else if (data.status === 400) {
          this.setState({
            error: true,
            message: data.msg,
            mobile: '',
          })
        } else {
          this.setState({
            visible: false,
            mobile: '',
          });
          message.success('Registration Successfully Completed', 10);
        }
      })
      .catch()
    }else if(type === 'cancel'){
      axios.post('/api/v1/cancelUser', { mobile, eventCode })
      .then(({ data }) => {
        if (data.status === 400) {
          this.setState({
            error: true,
            message: data.msg,
            mobile: '',
          })
        } else {
          this.setState({
            visible: false,
            mobile: '',
          });
          message.success('You registeration have been canceld', 10);
        }
      })
      .catch()

    }

  };

  render() {
    const { visible, mobile, message, error } = this.state
    return (
      <div className='popup-modal'>
        <Button type="primary" onClick={this.showModal} shape="round" autoFocus>
          {this.props.purpose}
        </Button>
        <Modal
          title={this.props.title}
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[]}
        >
          <Input
            placeholder="Enter Your Mobile Number"
            value={mobile}
            onChange={this.handleChange}
            style={{ width: '380px' }}
          />

          <Button
            style={{ display: 'inline-block' }}
            key="submit"
            type="primary"
            onClick={this.handleOk}>
            Submit
        </Button>
          {
            error ?
              <Alert
                style={{ width: '380px' }}
                message={message}
                type="error"
                showIcon />
              : null
          }
        </Modal>

      </div>
    );
  }
}

export default PopupBtnEventcomp;

import React, { useState } from 'react';
import {
  Card, CardBody,
  CardTitle, Button,
  Form, FormGroup, Label, Input
} from 'reactstrap';

import requestOTP from '../api/request-otp';
import authenticate from '../api/authenticate';

const Login = (props) => {

  const [formData, setFormData] = useState({
    phone: '',
    otp: ''
  });

  const [currentButtonText, setCurrentButtonText] = useState('Get OTP');

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const getOTP = async (event) => {
    console.log('Get otp');
    await requestOTP(formData.phone)
    .then((res) => {
      console.log('res', res);
      return res;
    })
    .catch((err) => {
      console.log('err', err);
    })
  }

  const loginUser = async (event) => {
    console.log('Login user');
    await authenticate(formData)
    .then((res) => {
      console.log('res', res);
      return res;
    })
    .then(() => {
      if(prompt('Logged in successfully')) {
        window.history.push('/items');
      }
    })
    .catch((err) => {
      console.log('err', err);
      alert('Error login with this OTP');
    });
  }

  const timer = (event) => {

    let time = 5;
    let timerID = setInterval(() => {
      if(time >= 0) {
        document.getElementById("timer").innerHTML = `Resend OTP in ${time--} s`;
      } else {
        document.getElementById("timer").innerHTML = '';
        setButtonDisabled(false);
        clearInterval(timerID);
      }
    }, 1000);
  }

  return (
    <Card className="p-4">
      <CardBody className="p-3" style={{ borderRadius: '7px' }}>
        <CardTitle>Login To myBillBook</CardTitle>
        <Form>
          <FormGroup className="mt-4">
            <Label className="text-secondary">Enter Mobile Number</Label>
            <div className="d-flex">
              <span className="p-1 text-secondary" style={{ backgroundColor: '#e9ecef', textColor: '#423D3C', display: 'grid', placeItems: 'center' }}>+91</span>
              <Input type="text" id="phone" name="phone" placeholder="6204738645" required
                value={formData.phone}
                onChange={(event) => {
                  const value = event.target.value;

                  if(value.length === 0) {
                    setFormData({
                      phone: value,
                      otp: ''
                    });
                    return;
                  } else if(value.length <= 10 && value[value.length-1] >= '0' && value[value.length-1] <= '9') {
                    if(value.length === 10) {
                      setButtonDisabled(false);
                    } else {
                      setButtonDisabled(true);
                    }
                    setFormData({
                      phone: value,
                      otp: ''
                    });
                  }
                }}
              />
            </div>
          </FormGroup>

          <FormGroup className="mt-3">
            <Label className="text-secondary">Enter OTP</Label>
            <Input type="text" name="OTP" id="OTP" maxLength="6" placeholder="One Time Password" required
              value={formData.otp}
              onChange={(event) => {
              const value = event.target.value;

              if(value.length === 0) {
                setFormData({
                  phone: formData.phone,
                  otp: ''
                });
                return;
              } else if(value.length <= 6 && value[value.length-1] >= '0' && value[value.length-1] <= '9') {
                if(value.length === 6) {
                  setCurrentButtonText('Login');
                }
                setFormData({
                  phone: formData.phone,
                  otp: value
                });
              }
            }}
          />
          </FormGroup>

          <div className="d-flex" id="timer"></div>

          <Button className="w-100 mt-4" color="secondary"
            id="login-button"
            disabled={buttonDisabled}
            onClick={(event) => {
              if(currentButtonText === 'Get OTP') {
                setButtonDisabled(true);
                timer();
                getOTP(event);
              } else {
                loginUser();
              }
            }}
          >{currentButtonText}</Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Login;
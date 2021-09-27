const authenticate = (formData) => {

  const { phone, otp } = formData;

  const URI = `https:niobooks.in/api/authenticate`;

  const data = {
    mobile_number: phone,
    otp_code: otp
  }

  return fetch(URI, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'access-control-allow-origin' : '*',
      'client': 'web'
    },
    body: JSON.stringify(data)
  })
    .then((res) => {
      console.log('res', res);
      return res;
    })
    .catch((err) => {
      console.log('err', err);
      return err;
    });
}

export default authenticate;
const requestOTP = async (phone) => {

  const URI = `https:niobooks.in/api/request_otp`;

  const data = {
    mobile_number: phone
  }

  console.log('data', data);

  return await fetch(URI, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
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

export default requestOTP;
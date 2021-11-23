const algorithm = "aes-192-cbc";

const encrypt = (text) => {
  //generate encryption key using the secret.
  crypto.scrypt(process.env.SECRET, 'salt', 24, (err, key) => {
    if (err) throw err;

    //create an initialization vector
    crypto.randomFill(new Uint8Array(16), (err, iv) => {
      if (err) throw err;

      const cipher = crypto.createCipheriv(algorithm, key, iv);

      let encrypted = '';
      cipher.setEncoding('hex');

      cipher.on('data', (chunk) => encrypted += chunk);
      cipher.on('end', () => console.log(encrypted))
      cipher.on('error', (err) => console.log(err))

      cipher.write(text);
      cipher.end();
    });
  });
}

encrypt('hello World');
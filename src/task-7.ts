function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(123);
    }, 1000);
  });
}

getMessage().then((result) => console.log(result));

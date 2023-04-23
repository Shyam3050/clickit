export const stripeCheckOut = () => {
  console.log("stripestart")
    fetch(
      "https://stripebackend.netlify.app/.netlify/functions/api/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          { name: "shyam", unit_amount: "10000", quantity: "2" },
        ]),
      }
    )
      // if successful request then redirect
      .then((res) => {
        console.log(res);
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then((res) => {
        window.location = res.url;
      })
      .catch((e) => {
        console.log(e.error);
      });
  };
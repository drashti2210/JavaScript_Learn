// async function hello() {
//   return greeting = await Promise.resolve("Hello");
// };

// hello().then(alert);

fetch('p1.jpg')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    console.log("Loaded successfully");
    
  }
}
)
.then(() => {
  console.log("Success");
})
.catch(e => {
  console.log(`There has been a problem with your fetch operation:  ${e.message}`);
});

 

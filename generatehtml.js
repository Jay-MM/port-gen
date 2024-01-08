const generatehtml = data => {

  console.log(data);

  return` 
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <title>Portfolio Generator</title>
</head>

<body class = "container">
  <header>
    <div class = "container d-flex justify-content-between align-items-start pb-5 pt-4">
    <figure>
      <img src="./assets/dev.pfp.png" class= "img-fluid"  alt="profile picture">
      <figcaption>your location</figcaption>
    </figure>
      <h1 class="lh-lg">YOUR NAME</h1>
    </div>
  </header>
  <main>
    <div class="container-fluid my-5 py-5 my-5">
      <h2>Who am i?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur sint quidem dicta amet quis quia voluptates pariatur sunt quas porro animi reiciendis inventore, atque in voluptatum earum asperiores tempora!</p>
    </div>
  </main>
  <footer>
    <div class = "container d-flex justify-content-between py-5 position-absolute bottom-0 fs-3">
      <a href="mailto:marquez.jay444@gmail.com?subject=Salutations!&body=Hi, I just wanted to tell you that you are awesome!">
        <i class="bi bi-envelope-at-fill"></i>
      </a>
      <a href="https://github.com">
        <i class="bi bi-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/marquez-jesus/">
        <i class="bi bi-linkedin"></i>
      </a>
      </div>     
  </footer>
</body>
</html>
  `
}

module.exports = generatehtml
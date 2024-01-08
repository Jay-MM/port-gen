const generatehtml = data => {

  console.log(data);

  const { name, 
    img,
    location, 
    bio, 
    email, 
    linkedin, 
    github 
  } = data

  return` 
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <title>Portfolio Generator</title>
</head>

<body class = "container">
  <header>
    <div class = "container d-flex justify-content-between align-items-start pb-5 pt-4 shadow-lg">
    <figure>
      <img src="./assets/${img}" class= "img-fluid"  alt="profile picture">
      <figcaption>${location}</figcaption>
    </figure>
      <h1 class="lh-lg">${name}</h1>
    </div>
  </header>
  <main>
    <div class="container-fluid my-5 pt-5 pb-3 my-5 border border-black border border-3 shadow-lg">
      <h2>Who am i?</h2>
      <p>${bio}</p>
    </div>
  </main>
  <footer>
    <div class = "container d-flex justify-content-between py-4 fs-3">
      <a href="mailto:${email}?subject=Salutations!&body=Hi, I just wanted to tell you that you are awesome!">
        <i class="bi bi-envelope-at-fill"></i>
      </a>
      <a href="https://github.com/${github}" target="_blank">
        <i class="bi bi-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/${linkedin}" target="_blank">
        <i class="bi bi-linkedin"></i>
      </a>
      </div>     
  </footer>
</body>
</html>
  `
}

export default generatehtml
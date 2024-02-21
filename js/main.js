const container = document.getElementById('container')

fetch("https://ghibliapi.vercel.app/films")
	.then((response) => {
		return response.json();
	})
	.then((response) => {
    response.forEach(element => {
      const image = document.createElement('img')    
      image.src = element.image

      const originalTitle = document.createElement('h1')
      originalTitle.innerText = element.original_title

      container.appendChild(originalTitle)
      container.appendChild(image)
    });
  })
	.catch((error) => console.log(error.message));

import request from 'superagent'

request.get('https://api.github.com/users/hankmitsch')
  .auth('42323424b9fcf42a97d501f50a80b63b939771a6')
  .then(response => {
    displayInfo(response.body)
  })

function displayInfo (input) {
  document.getElementById('name').innerText = input.name
  document.getElementById('bio').innerText = input.bio
  document.getElementById('listOne').innerText = input.name
  document.getElementById('listTwo').innerText = input.html_url
  document.getElementById('listThree').innerText = 'placehold for email'
  document.getElementById('picture').innerHTML = "<img src='https://avatars2.githubusercontent.com/u/41832300?v=4'>"
}

const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'sample.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  const facilitiesList = request.response;
  populateHeader(facilitiesList);
  showHeroes(facilitiesList);
}

function populateHeader(obj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = obj['title'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = '町名: ' + obj['cities'] +  obj['address'];
  header.appendChild(myPara);
}

function showHeroes(obj) {
  const facility = obj['facilities'];

  for (let i = 0; i < facility.length; i++) {
    const myArticle = document.createElement('article');
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'imageWrapper';
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');
    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'linkButton';

    imageWrapper.innerHTML = '<img src="' + facility[i].image + '" alt="' + facility[i].alt + '">';
    myPara1.textContent = 'カテゴリ:' + facility[i].category;
    myPara2.textContent = 'タグ:' + facility[i].tag;
    myPara3.textContent = '概要:';
    buttonWrapper.innerHTML = '<a href="' + facility[i].url + '">' + '詳しく見る' + '</a>'

    const overview = facility[i].overview;
    for (let j = 0; j < overview.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = overview[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(imageWrapper);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
    myArticle.appendChild(buttonWrapper);

    section.appendChild(myArticle);
  }
}

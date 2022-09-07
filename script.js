const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.navbar-desk');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-lin').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

/*-------window popup part--------------*/

const p = document.querySelector('.modal-mobile');
const b = document.querySelector('.project');
const c = document.querySelector('.see-proj');
const Y = document.querySelector('.xx');
const section = document.querySelector('section');

function appe() {
  p.style.display = 'block';
  section.style.filter = 'blur(10px)';
}
b.addEventListener('click', appe);
c.addEventListener('click', appe);

function disappeY() {
  p.style.display = 'none';
  section.style.filter = 'blur(0px)';
}

Y.addEventListener('click', disappeY);

function disappeP(t) {
  if (t.target.className === 'modal-mobile') {
    p.style.display = 'none';
    section.style.filter = 'blur(0px)';
  }
}

p.addEventListener('click', disappeP);

const pros = [
  {
    titleTwo: 'Multi Post Stories',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    imageTwo: 'Images/shootportfolio.png',
    descriptionTwo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type  and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkLive: 'https://abreham1222.github.io/My-portfolio/',
    linkSor: 'https://github.com/abreham1222/My-portfolio.git',
  }];

  const projd = [ { 
    titleOne: 'Keeping track of hundreds  of components website',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    imageOne: 'Images/snapshoot.png',
    descriptionOne: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    linklive: 'https://abreham1222.github.io/My-portfolio/',
    linkSource: 'https://github.com/abreham1222/My-portfolio.git',
  }];

const SeeProjectB = document.querySelectorAll('.project,.see-proj');
SeeProjectB.forEach((item, i) => {
  item.addEventListener('click', () => {
    const windowPop = document.querySelector('.modal-mobile');
    windowPop.style.display = 'block';
    const projectDetail = pros[i];
    const heading = document.querySelector('.modal-mob');
    heading.textContent = projectDetail.titleTwo;
    const paragraph = document.querySelector('.modal-lorems');
    paragraph.textContent = projectDetail.descriptionTwo;
    const picture = document.querySelector('.img-mob');
    picture.src = projectDetail.imageTwo;
    const languag = document.querySelectorAll('.modal-liste');
    languag.forEach((li, s) => {
      li.textContent = projectDetail.languages[s];
    });
    const liv = windowPop.querySelector('.see-liv');
    liv.href = projectDetail.linkLive;
    const sourc = windowPop.querySelector('.see-sour');
    sourc.href = projectDetail.linkSor;
  });
});

const SeeProjectButton = document.querySelectorAll('.see-proj,.projdesk');
SeeProjectButton.forEach((item, i) => {
  item.addEventListener('click', () => {
    const windowPops = document.querySelector('.modal-desk');
    windowPops.style.display = 'block';
    const projectDetail = projd[i];
    const heading = document.querySelector('.modal-des');
    heading.textContent = projectDetail.titleOne;
    const paragraph = document.querySelector('.modal-lorems');
    paragraph.textContent = projectDetail.descriptionOne;
    const picture = document.querySelector('.img-mob');
    picture.src = projectDetail.imageOne;
    const languag = document.querySelectorAll('.modal-liste');
    languag.forEach((li, s) => {
      li.textContent = projectDetail.languages[s];
    });
    const live = windowPops.querySelector('.see-live')[0];
    live.href = projectDetail.linklive;
    const source = windowPops.querySelector('.see-source')[1];
    source.href = projectDetail.linkSource;
  });
});

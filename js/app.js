    
// Global Variables
const addSection = document.querySelector('.button-style');


var sectionVar = 1; // * intial value for adding sections * \\

function addToNav() {
    const createEle = document.createElement('a');
   
    const createLi = document.createElement('li');
    const theUl = document.querySelector('#navbar__list');
    createLi.appendChild(createEle);
    theUl.appendChild(createLi);
    createEle.textContent = "Section " + sectionVar;
    createEle.style.cssText = "cursor:pointer";
    createEle.setAttribute('href' , '#section' + sectionVar);
    const createSection = document.createElement('section');
    const heading = document.createElement('h2');

    const textFormal = document.createElement('div');
    heading.textContent =   "section " + sectionVar;

    textFormal.setAttribute('class' , 'landing__container');
    textFormal.innerHTML = ` <h2>Section ${sectionVar}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>`;

    createSection.appendChild(textFormal);  // * creating section within the text * \\
    document.querySelector('main').appendChild(createSection);  // * putting this section after the previous sections * \\
     // * make attributes for this section similar to the previous * \\
    createSection.setAttribute('id' , 'section' + sectionVar);  
    createSection.setAttribute('data-nav' , 'Section ' + sectionVar);
    
    createEle.addEventListener('click',function(e){
        createSection.scrollIntoView({behavior:'smooth'});
        e.preventDefault();
    });

    sectionVar++;
    
    
}

while(sectionVar < 5){
    addToNav();
};

    // * evntes for creaing a new section * \\

addSection.addEventListener('click', function(){
    
    addToNav();
       
});


    // * make an active-class by scrolling to your specific section * \\
window.addEventListener('scroll' , function(){
        // * make an active-class in the tag element section and the tag element li * \\
        let sections = document.querySelectorAll('section');
        let navlist = document.querySelectorAll('li');  
        for(let i = 0; i < sections.length; i++){
            let top = sections[i].getBoundingClientRect().top;
            // * make two conditions one for the odd sections and the other for the even ones * \\
            if(i % 2 == 0)
            {
            if(top >= -300 && top <= 300){
                sections[i].classList.add("your-active-class-1");
                navlist[i].classList.add("your-active-class-1");
            }
            else{
                sections[i].classList.remove("your-active-class-1");
                navlist[i].classList.remove("your-active-class-1");
            }
            }
            else
            {
            if(top >= -300 && top <= 300){
                sections[i].classList.add("your-active-class-2");
                navlist[i].classList.add("your-active-class-2");
                }
            else{
                sections[i].classList.remove("your-active-class-2");
                navlist[i].classList.remove("your-active-class-2");
                } 
            }
        }


});
let topButton = document.querySelector('.button-top');

topButton.addEventListener('click' , function(){
    window.scroll({ top: 0, behavior: 'smooth' });
});





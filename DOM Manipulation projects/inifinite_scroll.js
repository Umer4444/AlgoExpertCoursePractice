const API_BASE_URL = 'https://api.frontendexpert.io/api/fe/testimonials';

let hasNext = false;
let id = '';
let canFetch = true;

const testDiv = document.getElementById("testimonial-container");

const addToDom = res => {
    if (res && res.testimonials) {
        const fragment = document.createDocumentFragment();
        res.testimonials.forEach((item, index) => {
            const p = document.createElement("p");
            p.textContent = item.message;
            p.classList.add("testimonial");
            fragment.appendChild(p);
            if (index === res.testimonials.length - 1) {
                id = item.id;
            }
        });
        testDiv.appendChild(fragment);
        hasNext = res.hasNext;
        canFetch = true;
    }
};

const getTestimonialsAndAppend = async () => {
    canFetch = false;
    const URL = id ? `${API_BASE_URL}?limit=5&after=${id}` : `${API_BASE_URL}?limit=5`;
    const res = await fetch(URL);
    const testimonials = await res.json();
    addToDom(testimonials);
};



function scrollListener() {
    if (canFetch && hasNext) {
        const spaceLeftToScroll = this.scrollHeight - this.scrollTop - this.clientHeight;
        if (spaceLeftToScroll > 0) {
            return;
        }
        getTestimonialsAndAppend();
    }
}

testDiv.addEventListener("scroll", scrollListener);
getTestimonialsAndAppend();
// Write your code here.

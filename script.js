class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTabs(e);
                this.toggleContent(e);
            });
        });
    }
    toggleTabs(e) {
        // remove current active classes
        this.tabs.forEach(tab => tab.classList.remove('active'));
        // add new active class to clicked tab
        e.target.classList.add('active');
    }
    toggleContent(e) {
        // remove current active classes from content
        this.container.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
        });
        // add new active class to content
        const selector = e.target.parentElement.getAttribute('data-target');
        const tabsContent = this.container.querySelector(selector);
        tabsContent.classList.add('active');
    }
}

// create tabs
const tabs = new Tabs(document.querySelector('aside.sidebar'))
tabs.init();

// const triggers = document.querySelectorAll('.trigger');
// triggers.forEach(trigger => {
//     console.log(trigger.firstElementChild);
// })

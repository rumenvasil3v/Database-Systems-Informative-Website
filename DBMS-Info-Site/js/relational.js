const sqlLinksSidebar = document.querySelectorAll('.db-sidebar ul li a');

sqlLinksSidebar.forEach(link => {
    link.addEventListener('click', function() {
        link.classList.add('active');
        sqlLinksSidebar.forEach(current => {
            const rightNowLink = link.textContent;
            const rightNowCurrentLink = current.textContent;

            if (rightNowCurrentLink !== rightNowLink) {
                current.classList.remove('active');
            }
        })

        const currentDBMS = link.textContent;
        // console.log(currentDBMS);
        const allSections = document.querySelectorAll('.db-section');
        allSections.forEach(section => {
            const sectionDBMS = section.children[0].children[1].textContent;
            
            if (currentDBMS === sectionDBMS) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        })        
    });
});
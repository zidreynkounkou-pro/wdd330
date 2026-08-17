const mainHeader = `/headerFooter/header.html`;
const mainFooter = `/headerFooter/footer.html`;

// Fetch the header and footer.
export async function headerFooter() {
    const [headerResponse, footerResponse] = await Promise.all([fetch(mainHeader), fetch(mainFooter)]);
    const mainHeaderHtml = await headerResponse.text();
    const mainFooterHtml = await footerResponse.text();
    document.querySelector('.main-header').innerHTML = mainHeaderHtml;
    document.querySelector('.main-footer').innerHTML = mainFooterHtml;

    // Hamburger button
    const HamburgerBtn = document.querySelector('.humberger-button');
    const headerHamburger = document.querySelector('.humberger-header');
    HamburgerBtn.addEventListener('click', function () {
        HamburgerBtn.classList.toggle('open');
        if (headerHamburger.style.display === 'flex') {
            headerHamburger.style.display = 'none'
        }
        else {
            headerHamburger.style.display = 'flex';
            headerHamburger.style.flexDirection = 'column';
        }

    });


    // Remove hamburger header
    const isDektop = window.matchMedia("(min-width: 769px)");

    isDektop.addEventListener('change', function () {
            
        if (isDektop.matches) {
            headerHamburger.style.display = 'none';
            headerHamburger.classList.remove('open');
            window.location.reload();
        }
    });
                

    // Get the current year from the system and add it to the footer.
    document.getElementById('year').textContent = `${new Date().getFullYear()} `;
};
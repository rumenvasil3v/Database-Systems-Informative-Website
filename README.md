# Database-Systems-Informative-Website

A static, five-page site introducing database systems: what relational and NoSQL databases are, and a short profile of each of the popular ones. The text is written in Bulgarian. It uses plain HTML5, CSS3 and JavaScript, with no framework and no build step. Open `DBMS-Info-Site/index.html` in a browser and it works.

## Pages

- **index.html** is the landing page, with featured systems (MySQL, MongoDB, Oracle, Redis) and links onward.
- **relational.html** covers MySQL, MariaDB, Oracle, PostgreSQL, MSSQL and SQLite. A sidebar swaps between them without leaving the page.
- **nosql.html** explains the families (document, key-value, wide-column, graph, search engines) and then goes through MongoDB, Redis, Cassandra, Elasticsearch, Firebase and DynamoDB.
- **about.html** is about me, my skills, and why I made the site.
- **contact.html** has contact details and a message form.

Styles are split per page in `styles/`, behaviour in `js/`, and the logos are in `images/`. Icons come from Font Awesome and the fonts (Poppins, Montserrat) from Google Fonts, both over the network, so the page looks plainer offline.

## Loose ends I know about

- `contact.html` loads `js/contact.js`, which was never added. The form has no handler, so pressing Send doesn't do anything.
- The LinkedIn and other social links are still `#` placeholders.
- In `main.js`, the scroll-to-top button sets its class with `-` instead of `=` (`button.className - 'scroll-top'`), so it never gets that class. The handler meant to close the mobile menu after a link is clicked treats a list of links as a single element, which throws an error, so the menu stays open.
- The relational and NoSQL sidebar scripts are near-copies of each other and could share one function.

MIT licensed.

# Treehouse Fullstack JavaScript - Project 10: Build a Library Manager

## Working with databases — storing, retrieving, updating and deleting information — is an important software developer talent. Create a web application for searching, adding and updating items in a lending library, using JavaScript, Node.js, Express, and an Sqlite Database.

### Installation
    - clone git repository
    - run `npm install`
    - if needed manually install sqlite3 with: `npm install sqlite3`
    - run: `npm run reinit:db:seed` to create the DB tables and seed the sample data to it
    
---

- !!! TODO !!!
    - [x]   Create NEW Forms - LABEL click sets focus to the input field
    - [x]   Maximize async / await usage
    - [x]   Create util modules: errorFormatter, dateFormatter
    - [x]   Move return book to loans route
    - [x]   Check all Page titles
    
    - [x]   Checked Loans
    - [x]   Overdue Loans
    - [x]   Overdue Books
    - [x]   Checked Books
    - [x]   ! Combine routes with router.route
    
## TODO & Open Issues:

### Open Issues:

- [ ] Return Book: with empty value/string get's saved to the DB?
- [ ] Create New Book: first_published is optional - but returns an error?
- [ ] Create New Loan: loaned_on & return_by are required - don't return an error

---

### TODO:

- [ ] Optimize searchBuilder module - convert to a query builder which builds the whole query based on type and search input

# Treehouse Fullstack JavaScript - Project 10: Build a Library Manager

## Working with databases — storing, retrieving, updating and deleting information — is an important software developer talent. Create a web application for searching, adding and updating items in a lending library, using JavaScript, Node.js, Express, and an Sqlite Database.

### Installation

    - clone git repository
    - run: ` npm install `
    - if needed manually install sqlite3 with: ` npm install sqlite3 `
    - running the DB initialize scripts:
        - (UNIX/LINUX) run: ` npm run unix:init:db ` to create the DB tables and seed the sample data to it on an UNIX type system
        - (WINDOWS) run: ` npm run win:init:db ` to create the DB tables and seed the sample data to it on a WINDOWS machine
    
---
    
## TODO & Open Issues:

### Open Issues:

- [x] Return Book: with empty value/string get's saved to the DB?
- [x] Create New Book: first_published is optional - but returns an error?
- [x] Create New Loan: loaned_on & return_by are required - don't return an error

---

### TODO:

- [x] Write comments :)
- [x] Create an Error Template if an Error Page error occurs
- [ ] Optimize searchBuilder module - convert to a query builder which builds the whole query based on type and search input
- [ ] Maximize async / await useage


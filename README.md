# Treehouse Fullstack JavaScript - Project 10: Build a Library Manager

## Working with databases — storing, retrieving, updating and deleting information — is an important software developer talent. Create a web application for searching, adding and updating items in a lending library, using JavaScript, Node.js, Express, and an Sqlite Database.

### Installation

    - clone git repository
    - run: ` npm install `
    - if needed manually install sqlite3 with: ` npm install sqlite3 `
    - run: ` npm run init:db ` to create the DB tables and seed the sample data to it
    
---
    
## TODO & Open Issues:

### Open Issues:

- [ ] Return Book: with empty value/string get's saved to the DB?
- [ ] Create New Book: first_published is optional - but returns an error?
- [ ] Create New Loan: loaned_on & return_by are required - don't return an error

---

### TODO:

- [ ] Write comments :)
- [ ] Optimize searchBuilder module - convert to a query builder which builds the whole query based on type and search input

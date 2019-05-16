TypeScript Cypress Add Custom Assertion Method "textTrimmed" Demo
=======================================================

Cypress doesn't provide a way to define custom assertion methods, but since it's using chai,
we can just define chai assertion methods.

In this demo, I defined `textTrimmed`, and can use it like:

```
cy.get('h1').should('have.textTrimmed', 'Hello')
```

```
npm install
```

then:

```
npm run test:open

npm run test:run
```

Documents
----------
- https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/extending-cypress__chai-assertions

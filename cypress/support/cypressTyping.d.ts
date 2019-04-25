// FIXME doesn't work
// https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/extending-cypress__chai-assertions

declare global {
  namespace Cypress {
    interface Chainer<Subject> {
      (chainer: 'have.textTrimmed'): Chainable<Subject>
    }
  }
}

export {}

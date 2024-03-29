import type { Article, Role, User } from '@prisma/client'

declare global {
  namespace Cypress {
    interface Chainable {
      aliases<T>(keys: string[]): Chainable<T>
      dataCy(value: string): Chainable<JQuery<HTMLElement>>
      loginAs(role: Role): Chainable<unknown>
      loginApiAs(role: Role): Chainable<string>
      logout(): Chainable<unknown>
      containArticle(value: {
        id: number
        title: string
        excerpt: string
      }[]): Chainable<void>

      task(event: 'db:reset'): Chainable<null>
      task(event: 'db:articles:bulk-insert', args: Article[]): Chainable<null>
      task(event: 'db:users:bulk-insert', args: User[]): Chainable<null>
      task(event: 'db:users:upsert', args: User): Chainable<null>
      task(event: 'db:users:all'): Chainable<User[]>
      task<T>(event: 'xlsx-to-json', args: string): Chainable<T>
    }
  }
}

export {}

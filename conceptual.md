### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?

RESTful routing is a set of standards used in many different languages to create efficient, reusable routes. It aims to map HTTP methods (GET,POST,PATCH,DELETE) and CRUD actions (Create, Read, Update, Destroy) together in a conventional pattern. This makes it easier for other developers to understand and navigate an application and results in clean, consisyent URL paths for users. 

- What is a resource?

A resource can be a text file, media file, a specific row in a database table, a collection of related data, and almost anything that can be delivered via an API. 

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?

This will expose the API information like passwords and other sensitive inforamation.

- What does idempotent mean? Which HTTP verbs are idempotent?

Impodence is an operation that produces the same results no matter how many times it is performed. DELETE and PUT are impodent.

- What is the difference between PUT and PATCH?

PUT completely replaces and overwrites all information, while PATCH simply updates specific information.

- What is one way encryption?

One way encryption makes it easy to compute on every single input but difficult, if not impossible, to reverse engineer that computation. Hashing a password is an example of a one way encryption.

- What is the purpose of a `salt` when hashing a password?

Salting a password hash ensures that the same password in not stored identically in the database. The salting process adds random data to the input of the hash function to guarantee a unique output. 

- What is the purpose of the Bcrypt module?

Bcrypt slows down the hashing process to protect encrypted data from malicious automated attacks.

- What is the difference between authorization and authentication?

Authentication means confirmation of your identity, and Authorization means allowing access to the system.

Today.
Create a git repo (use our one with husky and docker) (need to add docker here)

- pull latest branch

- Make a folder called .github/ workflows/
- inside that make a file called anything: example: learn-github-actions.yml
- im not sure but I think we need to create a feature branch here?

**SUPER SIMPLE GITHUB ACTION: hello world**

name: Hello World

(optional)on: [push] //this is optional and means the action acts on the push.

on:
pull request:
branches:
-main

jobs:
say-hello:
runs-on: ubuntu-latest //hopefully this works for me

     steps:
     - name: Checkout code
     uses: actions/checkout@v2 //not sure how this one works tbh maybe needs to be v3? not sure if this applies to our version

     - name: Say Hello World
     run: echo "Hello World"

Do a git push from our terminal
Go to github and make a pull request to main branch from feature branch

General Presentation.

- create github tasks for each github flow?
- make presentation slides
- create a github actions page to show the steps flow (possibly in figjam)

- rulesets
- render stage
- test

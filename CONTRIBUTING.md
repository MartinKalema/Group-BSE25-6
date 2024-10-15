# Contributing Guide

Thank you for considering contributing to our project! We welcome contributions from the community. This guide will help you get started with the contribution process.

## Table of Contents

1. [Setting Up the Project](#setting-up-the-project)
2. [Creating a New Branch](#creating-a-new-branch)
3. [Making and Committing Your Changes](#making-and-committing-your-changes)
4. [Submitting a Pull Request](#submitting-a-pull-request)
5. [Code of Conduct](#code-of-conduct)

## Setting Up the Project

```bash
git clone https://github.com/<your-username>/Group-BSE25-6
```

NB: You have to fork the main repository.

## Creating a New Branch

Create a new branch to work on your changes. The branch name should describe the change you want to make and start with an appropriate prefix. Use the following prefixes:

- `feat/`: for new features
- `fix/`: for bug fixes
- `chore/`: for routine tasks, maintenance, or tooling changes
- `test/`: for adding or modifying tests
- `refactor/`: for code refactoring

Example

```bash
git checkout -b feat/new-awesome-feature
```

## Making and Committing Your Changes

Once you have made your changes, commit them with a clear and concise message. Use the following format for your commit messages:

```
[optional scope]: <commit message>
```

Common Types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (whitespace, formatting, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries

Example Commit

```bash
git commit -m "feat: add user authentication"
```

## Submitting a Pull Request

Push your changes to your forked repository:

```bash
git push origin your-branch-name
```

Navigate to the original repository where you want to propose the changes.

Click on the "Pull Requests" tab.

Click on the "New Pull Request" button.

Select your branch and provide a description of your changes.

Submit the pull request.

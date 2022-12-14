# Contributing to react-component-library-ts

Hello, thank you for your interest in helping!

## Submit a new bug report

Please create a [new issue](https://github.com/tanishq-singh-2301/react-component-library-ts/issues/new) containing the steps to reproduce the problem.

If you're having installation problems, please include the output of running `npm install --verbose react-component-library-ts`.

New bugs are assigned a `triage` label whilst under investigation.

## Submit a new feature request

If a [similar request](https://github.com/tanishq-singh-2301/react-component-library-ts/labels/enhancement) exists,
it's probably fastest to add a comment to it about your requirement.

## Submit a Pull Request to fix a bug

Thank you! To prevent the problem occurring again, please add unit tests that would have failed.

Please select the `main` branch as the destination for your Pull Request so your fix can be included in the next minor release.

Please squash your changes into a single commit using a command like `git rebase -i upstream/main`.

## Submit a Pull Request with a new feature

Please add JavaScript [unit tests](https://github.com/tanishq-singh-2301/react-component-library-ts/tree/main/test) to cover your new feature.

You deserve to add your details to the [list of contributors](https://github.com/tanishq-singh-2301/react-component-library-ts/blob/main/package.json#L6).

Any change that modifies the existing public API should be added to the relevant work-in-progress branch for inclusion in the next major release.

Please squash your changes into a single commit using a command like `git rebase -i upstream/<wip-branch>`.

### Add a new public method

The API tries to be as fluent as possible.
Feel free to create a [new issue](https://github.com/tanishq-singh-2301/react-component-library-ts/issues/new) to gather feedback on a potential API change.

### Remove an existing public method

A method to be removed should be deprecated in the next major version then removed in the following major version.

By way of example, the `something()` method present in v1.0.0 was deprecated in v1.0.1 and removed in v1.0.2.

## Run the tests

### Functional tests and static code analysis

```sh
npm run test
```

## Finally

Please feel free to ask any questions via a
[new issue](https://github.com/tanishq-singh-2301/react-component-library-ts/issues/new).

If you're unable to post details publicly, please
[e-mail](https://github.com/tanishq-singh-2301/react-component-library-ts/blob/main/package.json#L5)
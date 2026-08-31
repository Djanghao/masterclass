# Bug / typo in Typescript tests

**Author:** user7220j
**Votes:** 3
**Link:** [https://leetcode.com/problems/employee-importance/solutions/975920/](https://leetcode.com/problems/employee-importance/solutions/975920/)

---

I've written a solution in Typescript, but when I want to run the code or submit, I get the following error 

```
Line 79: Char 19: error TS2552: Cannot find name 'GetImportance'. Did you mean 'getImportance'?
```

I'm pretty sure this means the test definitions uses `GetImportance` instead of the actual `getImportance` which is already prefilled in the solution (and also follows correct Javascript capitalziation).

You can of course fix this by renaming your function to `GetImportance`.
# Typescript | 3 lines

**Author:** OsidAbu-Alrub
**Votes:** 3
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/2446410/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/2446410/)

---

```
function finalValueAfterOperations(operations: string[]): number {
  let answer = 0;
  for(const operation of operations)
    answer = operation[1] === "+" ? answer + 1 : answer - 1;
  return answer;
};
```
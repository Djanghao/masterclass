# Human-readable, try all combinations of "assumed good" and validate

**Author:** baytelman
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/5060820/](https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/5060820/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maximumGood(statements: number[][]): number {
  let knownMax = 0;
  const n = statements.length;
  const maxCombinations = 2 ** n;

  const validate = (assumedGood: boolean[]) => {
    for (let i = 0; i < n; i++) {
      if (assumedGood[i]) {
        for (let j = 0; j < n; j++) {
          if (statements[i][j] === 0 && assumedGood[j]) {
            return false;
          }
          if (statements[i][j] === 1 && !assumedGood[j]) {
            return false;
          }
        }
      }
    }
    return true;
  };

  for (let i = 0; i < maxCombinations; i++) {
    // Let's start with all good assumptions, so we can start with the highest chance of being correct
    const assumedGood: boolean[] = new Array(n)
      .fill(1)
      .map((_, j) => ((i >> j) & 1) === 0);
    // console.info({ assumedGood });
    const countGood = assumedGood.filter((a) => !!a);
    // console.info({ countGood: countGood.length });
    if (countGood.length <= knownMax) {
      continue;
    }
    if (validate(assumedGood)) {
      // console.info('is valid');
      knownMax = countGood.length;
      // } else {
      //     console.info('is invalid');
    }
  }

  return knownMax;
}
```
# TS Solution

**Author:** ahmedhhamdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/6132762/](https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/6132762/)

---

We first check if the income is there bigger than zero and then we get the correct uppers for all the brackets and if there is bracket that is results in negitve upper we filter it and then reduce the result 

Also if there is an upper bigger than the income we replace it with the income value

# Complexity
- Time complexity: 4ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 52.17mb
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function calculateTax(brackets: number[][], income: number): number {
  if (income == 0) return 0
  
  return brackets.map((bracket, i, arr) => {
    if (i > 0) {
      let currentUpper = bracket[0]
      let previousUpper = arr[i - 1][0]
      
      if (currentUpper > income) {
        currentUpper = income
      }
      
      return [currentUpper - previousUpper, bracket[1]]
    } else {
      return bracket[0] > income ? [income, bracket[1]] : bracket
    }
  }).filter(bracket => bracket[0] > 0).reduce((sum, bracket) => sum + (bracket[0] * (bracket[1] / 100)),0)
}
```
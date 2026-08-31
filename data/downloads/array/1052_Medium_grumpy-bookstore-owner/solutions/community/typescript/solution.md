# Easy to understand -sliding window pattern

**Author:** haque_jibon
**Votes:** 0
**Link:** [https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5444696/](https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5444696/)

---

# Intuition
- first sum the total satisfied customers at grumpy[i]==0
- second iteration maintain a constant window minutes and try to maximize the satisfied customer to add not satisfied customer inside current widow.

# Approach
- Staisfied customer:
```
 let totalCustomer = 0;

  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) totalCustomer += customers[i];
  }
```
- try to maximize this number:
```
  maxTotal = Math.max(maxTotal, totalCustomer + winGrumSum);
```

# Complexity
- Time complexity: $$0(2n)$$

- Space complexity: $$0(1)$$

# Code
```
function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number
): number {
  let totalCustomer = 0;

  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) totalCustomer += customers[i];
  }

  let maxTotal = totalCustomer;
  let start = 0,
    winGrumSum = 0;

  for (let end = 0; end < customers.length; end++) {
    if (grumpy[end] == 1) winGrumSum += customers[end];

    if (end >= minutes - 1) {
      maxTotal = Math.max(maxTotal, totalCustomer + winGrumSum);

      if (grumpy[start] == 1) winGrumSum -= customers[start];
      start++;
    }
  }

  return maxTotal;
}
```
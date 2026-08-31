# Greedy solution by choosing the largest value every time until k = 0

**Author:** jaimeloeuf
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/4995879/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/4995879/)

---

### Approach
Solve with greedy approach by only taking as much as is needed for each of the values starting from largest to smallest, 1, 0, -1.

### Complexity
TC is O(1) constant time.

### Code
```typescript
function kItemsWithMaximumSum(
  numOnes: number,
  numZeros: number,
  numNegOnes: number,
  k: number
): number {
  let sum = 0;

  if (k > numOnes) {
    sum += numOnes;
    k -= numOnes;
  } else {
    return k;
  }

  if (k > numZeros) {
    k -= numZeros;
  } else {
    return sum;
  }

  return sum - k;
}
```
# TS/JS solution

**Author:** eliot36
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/2641298/](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/2641298/)

---

```
function minimumOperations(nums: number[]): number {
  if (nums.length === 1) {
    return 0;
  }

  const fullLength: number = nums.length;
  const even: Record<number, number> = {};
  const odd: Record<number, number> = {};

  nums.forEach((num, i) => {
    const obj = i % 2 === 0 ? even : odd;
    
    obj[num] = (obj?.[num] || 0) + 1;
  });

  const oddList = Object.entries(odd).sort((a, b) => b[1] - a[1]);
  const evenList = Object.entries(even).sort((a, b) => b[1] - a[1]);
  
  const [oddMaxNumber, oddMaxCount] = oddList[0];
  const [evenMaxNumber, evenMaxCount] = evenList[0];
  
  if (oddMaxNumber !== evenMaxNumber) {
      return fullLength - oddMaxCount - evenMaxCount;
  }

  const oddSecondMaxCount = oddList?.[1]?.[1] || 0;
  const evenSecondMaxCount = evenList?.[1]?.[1] || 0;

  return Math.min(
    fullLength - oddMaxCount - evenSecondMaxCount,
    fullLength - evenMaxCount - oddSecondMaxCount
  );
};
```

```
Runtime: 438 ms, faster than 100.00% of TypeScript online submissions for Minimum Operations to Make the Array Alternating.
Memory Usage: 82.3 MB, less than 100.00% of TypeScript online submissions for Minimum Operations to Make the Array Alternating.
```
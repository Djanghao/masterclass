# simple javascript solution Time O(n^2) & Space O(n)

**Author:** carlosgreen
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/1849656/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/1849656/)

---

```javascript
function findKDistantIndices (nums, key, k) {
  const result = new Set() 
    
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === key && Math.abs(i - j) <= k) {
          result.add(i)
      }
    }
  }
  return Array.from(result)
};
```
# Simple TypeScript solution

**Author:** samiramzi2000
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/4057582/](https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/4057582/)

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
function findPairs(nums: number[], k: number): number {
  let seen: {[key: string]:number} = {}
  let result = 0
  for(let num of nums){
    seen[`${num}`] = (seen[`${num}`] || 0) + 1;
  }
  for(let i in seen){
    if(seen[`${Number(i)+k}`]){
      result += (k !== 0 || seen[i] > 1) ? 1 : 0;
    }
  }


return result;

};
```
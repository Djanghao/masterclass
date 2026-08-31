# [JS] Simple JavaScript solution

**Author:** anatoliisf
**Votes:** 22
**Link:** [https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/508788/](https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/508788/)

---

```
var decompressRLElist = function(nums) {
  const result = [];
  
  for (let i = 1; i < nums.length; i += 2) {
    result.push(...new Array(nums[i - 1]).fill(nums[i]));
  }
  
  return result;
};
```
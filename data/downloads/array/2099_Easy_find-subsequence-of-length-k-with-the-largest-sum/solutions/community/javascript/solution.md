# Javascript one liner 88 ms

**Author:** fatalme
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/1662796/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/1662796/)

---

```
var maxSubsequence = function(nums, k) {
    return nums.map((v,i)=>[v,i]).sort((a,b)=>a[0]-b[0]).slice(-k).sort((a,b)=>a[1]-b[1]).map(x=>x[0]);
};
```
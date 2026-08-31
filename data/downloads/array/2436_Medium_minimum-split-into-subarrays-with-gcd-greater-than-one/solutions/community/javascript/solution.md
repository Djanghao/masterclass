# [Javascript] Greedy O(n)

**Author:** umopepisdn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/2694889/](https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/2694889/)

---

```
function gcd(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
}

var minimumSplits = function(nums) {
    let res = 1;
    let sofar = nums[0]; // keep a running gcd so far
    for (let i=1; i<nums.length; i++) {
        sofar = gcd(nums[i], sofar);
        if (sofar===1) {
            res++;
            sofar = nums[i];
        }
    }
    return res;
};
```
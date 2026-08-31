# A few short JavaScript solutions

**Author:** loctn
**Votes:** 32
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/96728/](https://leetcode.com/problems/max-consecutive-ones/solutions/96728/)

---

The standard traversal:
```
var findMaxConsecutiveOnes = function(nums) {
    let max = 0, curr = 0;
    for (let k of nums) {
        max = Math.max(max, curr += k);
        if (!k) curr = 0;
    }
    return max;
};
```
Some one-liners:
```
var findMaxConsecutiveOnes = function(nums) {
    return nums.join('').split('0').reduce((max, ones) => Math.max(max, ones.length), 0);
};
```
```
var findMaxConsecutiveOnes = function(nums) {
    return Math.max(...nums.join('').split('0').map(ones => ones.length));
};
```
```
var findMaxConsecutiveOnes = function(nums) {
    return Math.max(...(nums.join('').match(/1+/g) || ['']).map(ones => ones.length));
};
```
Finally a O(n\xb2) solution if you're looking for TLE:
```
var findMaxConsecutiveOnes = function(nums) {
    let str = nums.join(''), max = nums.length + 1;
    while (!~str.indexOf('1'.repeat(--max)) && max);
    return max;
};
```
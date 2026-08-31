# JavaScript | TypeScript solution

**Author:** js_pro
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-after-operations/solutions/2862470/](https://leetcode.com/problems/maximum-xor-after-operations/solutions/2862470/)

---

```
const maximumXOR = function(nums) {
    return nums.reduce((a, b) => a |= b, 0);
};
```

```
function maximumXOR(nums: number[]): number {
  return nums.reduce((a, b) => a |= b, 0);
};
```
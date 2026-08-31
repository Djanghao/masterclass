# Typescript DP BigInt

**Author:** jxc454
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-the-maximum-score/solutions/1588429/](https://leetcode.com/problems/get-the-maximum-score/solutions/1588429/)

---

One trick is to notice that if you process values in descending order, 2 equal values (one from each list) will always be "pointed at" at the same time (because if one "pointed at" value is greater than the other, that means we've already passed that value in the other list).

So if the 2 current "pointed at" values aren't equal, then there is no match between the lists.

```
function maxSum(nums1: number[], nums2: number[]): number {
    const MOD = BigInt(10 ** 9 + 7)
    const dp = new Map()
    let ptr1 = nums1.length - 1
    let ptr2 = nums2.length - 1
    const nums1Big = nums1.map(n => BigInt(n))
    const nums2Big = nums2.map(n => BigInt(n))
    
    while (ptr1 >= 0 || ptr2 >= 0) {
        const val1 = nums1Big[ptr1] || -Infinity
        const val2 = nums2Big[ptr2] || -Infinity
        
        if (val1 === val2) {
            const cand1 = val1 + (dp.get(nums2Big[ptr2 + 1]) || 0n)
            const cand2 = val2 + (dp.get(nums1Big[ptr1 + 1]) || 0n)
            if (cand1 >= cand2) {
                dp.set(val1, cand1)
            } else {
                dp.set(val1, cand2)
            }
            ptr1--
            ptr2--
        } else {
            if (val2 > val1) {
                dp.set(val2, (val2 + (dp.get(nums2Big[ptr2 + 1]) || 0n)))
                ptr2--
            } else {
                dp.set(val1, (val1 + (dp.get(nums1Big[ptr1 + 1]) || 0n)))
                ptr1--
            }
        }
    }
    
    return Math.max(Number(dp.get(nums1Big[0]) % MOD), Number(dp.get(nums2Big[0]) % MOD))
};
```
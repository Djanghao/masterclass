# [JS] O(N^3) - bruteforce to delete 2 nums

**Author:** jialihan
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5082285/](https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5082285/)

---

#### Intuition
BruteForce to try to delete any 2 numbers.

#### Code
```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    nums2.sort((a,b)=>a-b);
    nums1.sort((a,b)=>a-b);
    if(n===1) {
        return nums2[0] - nums1[m-1];
    }
    console.log(nums1, nums2);
    for(let i = 0; i<m; i++){
        for(let j = i+1; j<m; j++) {
            // delete i & j
            const first1 = i === 0 ? (j === 1 ? 2 : 1) : 0;
            const diff = nums2[0] - nums1[first1];
            // check
            let flag = true;
            let q = 0;
            for(let p = 0; p<m; p++) {
                if(p===j || p===i){
                    continue;
                }
                if(nums2[q] !== nums1[p]+diff) {
                    flag = false;
                    break;
                }
                q++;
            }
            if(flag) {
                return diff;
            }
        }
    }
};
```
# JS | Binary Search

**Author:** NaNLyn
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/5137299/](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/5137299/)

---

# Code
```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function (nums1, nums2, k) {
    let nums1Neg = findMaxIndexLessThanNum(nums1, 0);
    let nums1NonPos = findMaxIndexLessThanNum(nums1, 1);
    let nums1Length = nums1.length;
    let nums2Length = nums2.length;

    var totalNums = function (mid) {
        let count = nums1Neg * nums2.length;

        let i = 0;
        while (i < nums1Neg) {
            count -= findMaxIndexLessThanNum(nums2, Math.ceil(mid / nums1[i++]));
        }
        
        count += (mid < 0) ? 0 : (nums1NonPos - nums1Neg) * nums2.length;

        i = nums1NonPos;
        while (i >= nums1NonPos && i < nums1Length) {
            count += findMaxIndexLessThanNum(nums2, Math.floor(mid / nums1[i++]) + 1);
        }
        return count;
    }

    let min = -1e10;
    let max = 1e10;
    while (min < max) {
        let mid = min + Math.floor((max - min) / 2);
        if (totalNums(mid) >= k) {
            max = mid;
        } else {
            min = mid + 1;
        }
    }

    return min;
};


var findMaxIndexLessThanNum = function (arr, num) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
```
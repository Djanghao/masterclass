# Binary Search | Time: O(Nlog(R)log(M)) | Space: O(1)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/4257169/](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/4257169/)

---

# Complexity
- Time complexity: $O(N\\log({R})\\log({M}))$
    - $N$: nums1.length
    - $M$: nums2.length
    - $R$: The range size of $nums1[i] * nums2[j]$
        - $-10^5 <= nums1[i], nums2[j] <= 10^5$
        - $-10^{10} <= nums1[i] * nums2[j] <= 10^{10}$
        - $R = 10^{10} - (-10^{10}) = 2(10)^{10} = 2e10$
        - $\\log_2{R} = \\log_2(2e10) = 34.219 \\approx 35$
- Space complexity: $O(1)$

# Code
```Typescript
function kthSmallestProduct(nums1: number[], nums2: number[], k: number): number {
    let min = -1e10;
    let max = 1e10;

    const negs = binarySearch(nums1, 0);
    const zeroes = binarySearch(nums1, 1, negs) - negs;
    while (min < max) {
        const mid = min + Math.floor((max - min)/2);
        if (k > check(nums1, nums2, negs, zeroes, mid)) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }

    return min;
};

function binarySearch(arr: number[], target: number, min = 0, max = arr.length): number {
    while (min < max) {
        const mid = min + Math.floor((max - min)/2);
        if (target > arr[mid]) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }
    return min;
}

function check(nums1: number[], nums2: number[], negs: number, zeroes: number, x: number): number {
    const N = nums1.length;
    const M = nums2.length;
    
    // Process negatives
    let i = 0;
    let count = M * negs;
    while (i < negs) {
        count -= binarySearch(nums2, Math.ceil(x / nums1[i++]));
    }

    // Process zeroes
    count += (x >= 0) ? M * zeroes : 0;
    i += zeroes;

    // Process positives
    while (i < N) {
        count += binarySearch(nums2, Math.floor(x / nums1[i++]) + 1);
    }

    return count;
}
```
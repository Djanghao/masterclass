# 💥Memory beats 100.00%, Runtime beats 50.00% [EXPLAINED]

**Author:** r9n
**Votes:** 12
**Link:** [https://leetcode.com/problems/create-maximum-number/solutions/5696312/](https://leetcode.com/problems/create-maximum-number/solutions/5696312/)

---

# Intuition
The intuition ensures that each subsequence is maximized independently and then combined optimally to form the largest number.

# Approach
Helper Function for Maximum Number from Single Array: Define a function to get the maximum number of length length from a single array while preserving the order.

Merge Function: Define a function to merge two arrays to form the maximum number by selecting the greatest number from the two at each step.

Main Function: Iterate over all possible splits of k between the two arrays, use the helper function to get the maximum subsequence from each array for each split, and then merge them to get the maximum result.

# Complexity
- Time complexity:
O(m+n)

- Space complexity:
O(k), due to storing intermediate results.

# Code
```typescript []
function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
    const getMaxSubsequence = (nums: number[], length: number): number[] => {
        const stack: number[] = [];
        let drop = nums.length - length; // Use 'let' here to allow reassignment
        for (const num of nums) {
            while (drop && stack.length && stack[stack.length - 1] < num) {
                stack.pop();
                drop--;
            }
            stack.push(num);
        }
        return stack.slice(0, length);
    };

    const merge = (nums1: number[], nums2: number[]): number[] => {
        const result: number[] = [];
        while (nums1.length || nums2.length) {
            if (compare(nums1, nums2) > 0) {
                result.push(nums1.shift()!);
            } else {
                result.push(nums2.shift()!);
            }
        }
        return result;
    };

    const compare = (a: number[], b: number[]): number => {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] !== b[i]) return a[i] - b[i];
        }
        return a.length - b.length;
    };

    let maxResult: number[] = [];
    for (let i = Math.max(0, k - nums2.length); i <= Math.min(k, nums1.length); i++) {
        const subseq1 = getMaxSubsequence(nums1, i);
        const subseq2 = getMaxSubsequence(nums2, k - i);
        const candidate = merge(subseq1, subseq2);
        if (compare(candidate, maxResult) > 0) maxResult = candidate;
    }

    return maxResult;
}

```
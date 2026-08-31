# Easy Typescript Solution with Full Explanation

**Author:** chetannada
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5675761/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5675761/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2)$$ where n is the length of the input arrays nums1 and nums2. This is because we have nested loops that iterate through each element of both arrays.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$ because we are not using any extra space that grows with the input size.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function numberOfPairs(nums1: number[], nums2: number[], k: number): number {

    // initialize count for finiding number of good pairs I
    let count: number = 0;

    // iterate through the every element of array nums1
    for (let i = 0; i < nums1.length; i++) {

        // iterate through the every element of array nums2
        for (let j = 0; j < nums2.length; j++) {

            // if nums1[i] is divisable by (multiple of nums2[j]) then increment count
            if (nums1[i] % (nums2[j] * k) === 0) {
                count++;
            }
        }
    }

    // return count 
    return count;
};
```
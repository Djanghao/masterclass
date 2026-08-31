# +97%, very simple solution

**Author:** yxasika
**Votes:** 17
**Link:** [https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3273901/](https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3273901/)

---

# Intuition
By the unique-constraint it is helpful to think about using Sets.

# Approach
Creating two Sets by the given input, we can filter the first entries by its non-occurence in the second Set. By using the `delete`-function of the Set we get the information, whether the number is inside of the Set as well as deleting the item in the second Set. Since we cleaned the second Set in the first `filter`-Step we can parse this directly as the second answer Array.

# Complexity
- Time complexity:
Looking at the actual filtering (Set-parsind not put into account), we only have to iterate through the first array once. Therefore the Time-complexity arguable could be $$O(n)$$.


# Code
```
function findDifference(nums1: number[], nums2: number[]): number[][] {
    // Creating two Sets for both Array of numbers.
    const [ansSet1, ansSet2] = [new Set(nums1), new Set(nums2)];
    
    return [
        // Filtering the first Set by occurences in the second Set via delete
        // we get a filtered Set for the second answer-item.
        [...ansSet1].filter(n => !ansSet2.delete(n)),
        [...ansSet2]
    ];
};
```
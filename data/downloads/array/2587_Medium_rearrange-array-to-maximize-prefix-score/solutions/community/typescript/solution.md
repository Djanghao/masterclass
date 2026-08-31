# 100% Time complexity, 100% Space complexity

**Author:** nghiadq
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/5960280/](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/5960280/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. Sorting the Array:
    - The input array nums is sorted in descending order to maximize the sum of numbers. This ensures that the largest numbers are considered first, which gives the highest possible sum at each step.
2. Summing Until Non-Positive:
    - After sorting, the algorithm starts from the largest number and continues adding the next largest numbers from the sorted array.
    - It stops as soon as the cumulative sum becomes non-positive (i.e., less than or equal to 0).
3. Return the Count:
    - The function returns the number of elements that were added to the sum before the sum became non-positive. This is effectively the "index - 1" as calculated in the loop.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1. The sorting operation takes O(nlogn)
2. Loop takes O(n)

=> Thus, the total time complexity is O(nlogn)
- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```typescript []
function maxScore(nums: number[]): number {
    nums.sort((a, b) => b - a)
    let index = 1
    let num = nums[0]
    while (num > 0) {
        num += nums[index]
        index++
    }
    return index -1
};

```
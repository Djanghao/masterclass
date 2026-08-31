# Two Pointers/Sliding Window - Typescript

**Author:** HarlanTheEngineer
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4934097/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4934097/)

---

# Intuition
Sort array first to find the longest sequence whose `largest - smallest` is less than the array length, which means for all the unique numbers in that sequence, we dont need to change them, thus total number of numbers (array length) minus the number of the ones we dont change is the result.



# Complexity
- Time complexity:
 O(nlogn) - sorting the array would be the dominate time complexity

- Space complexity:
 O(n) where n is the length of the nums array, we are keeping a set in order to track the current sequence **Unique** numbers.

# Code
```
function minOperations(nums: number[]): number {
    nums.sort((a, b) => a - b)
    let uniqueSet: Set<number> = new Set([nums[0]])
    let maxUniqueSeq: number = 1
    let left: number = 0
    let right: number = 1

    while (right < nums.length) {
        if ((nums[right] - nums[left]) < nums.length) {
            uniqueSet.add(nums[right])
            maxUniqueSeq = Math.max(maxUniqueSeq, uniqueSet.size)
            right++
        } else {
            uniqueSet.delete(nums[left])
            left++
        }
    }

    return nums.length - maxUniqueSeq
};

```
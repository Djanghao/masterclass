# ✅✅ JavaScript | TypeScript using binary search on targeted section 🔥🔥

**Author:** glasseyes
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/3615504/](https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/3615504/)

---

# Intuition
We could simply look for the first occurence of target in the first half of the array in order, but since the problem statement referes to a sorted array, we can leverage binary search to find where the first occurence of the target element is.

# Approach
First we can eliminate any cases where the halfway point of the array doesn't have the target number, since it would be impossible to be a majority number according to the definition.

Then we measure the halfway point of the array and perform a regular binary search to find the fist occurrence of the number. 

If we cannot find the target element in the first half, we simply return false. Otherwise we look for the first occurrence's index + half the size of the array. If that value is the same as the target, it is a majority element, regardless if there are more of them further down or not. Otherwise target is not a majority element.

# Complexity
- Time complexity:
$$O(logN)$$ for the binary search in half of the array.

- Space complexity:
$$O(1)$$ we only keep track of the first index of the element.

# Code
```
function isMajorityElement(nums: number[], target: number): boolean {
    const N = nums.length;
    let left = 0, right = Math.floor(N/2);
    if (nums[right] !== target) return false;

    while (left <= right) {
        const mid = Math.floor((left + right)/2);
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    if (nums[left] !== target) return false;
    return nums[left + Math.floor(N/2)] === target;
};
```
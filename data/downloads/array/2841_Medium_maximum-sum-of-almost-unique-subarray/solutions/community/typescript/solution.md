# Fixed Sliding window with O(n) time/space complexity

**Author:** gauravsoni
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/3994116/](https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/3994116/)

---

# Intuition
If you have some experience with sliding window problem, you can easily guess that this problem falls comes under fixed sliding window technique.

# Approach
Use `left` and `right` pointer to define the window of size k. While maintaing window, keep trach of `sum`. Adjust the sum when you slide the window. When you reached the size of window, calculate the `maxSum`.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
function maxSum(nums: number[], m: number, k: number): number {
    let left = 0;
    let right = 0;
    let sum = 0;
    let map = new Map();
    let maxSum = 0;
    while(right < nums.length) {
        // keep track of occurance of each element
        if(map.get(nums[right])) {
            map.set(nums[right], map.get(nums[right]) + 1);
        } else {
            map.set(nums[right], 1);
        }
        sum += nums[right];
        //  check if subarray is the size of k
        if(right - left  + 1 == k) {
            const min = [...map.values()].filter(v => v >= 1);
            if(min.length >= m) {
                // Calculate maxSum
                maxSum = Math.max(maxSum, sum);
            }
        }
        // Slide the window
        if(right - left  + 1 >= k) {
            sum -= nums[left];
            map.set(nums[left], map.get(nums[left]) - 1);
            left++;
        }
        right++;
    }
    return maxSum;
};
```
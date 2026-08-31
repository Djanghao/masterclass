# [Java]O(N) Monotonically increasing stack

**Author:** Jenjoy
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/3960441/](https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/3960441/)

---

# Intuition
For a number we are only interested in the first bigger number going toward `left` and `right`. Answer for this number is difference between these two indices.

# Approach
Loop twice - once from left to right to calcualte answer only for left subarray and then from right to left to adjust the final answer considering right subaray.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    public int[] maximumLengthOfRanges(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];

        Stack<Integer> indices = new Stack<>();

        // Go from left to right and find answer for left part
        indices.push(-1);
        for(int i=0;i<nums.length;i++) {
            // We don't need number on the left less that i'th
            while(indices.peek() != -1 && nums[indices.peek()] < nums[i]) indices.pop();

            result[i] = i - indices.peek();
            indices.push(i);
        }

        // Go from right to left and adjust final answer
        indices.clear();
        indices.push(n);
        for(int i=n-1;i>=0;i--) {
            // We don't need number on the right less that i'th
            while(indices.peek() != n && nums[indices.peek()] < nums[i]) indices.pop();
            
            result[i] += indices.peek() - i - 1;
            indices.push(i);
        }
        return result;
    }
}
```
# C# Solution for Reduction Operation to Make the Array Elements Equal Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4306813/](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4306813/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This approach effectively counts the operations required by tracking the number of times the operations need to be incremented when encountering new, distinct elements after sorting the array. It utilizes sorting to bring identical elements together, enabling efficient calculation of the necessary operations.

# Approach
<!-- Describe your approach to solving the problem. -->
\u2022	The solution sorts the array to bring identical elements together.
\u2022	It maintains an increment variable to keep track of how many times operations need to be incremented when encountering a new, distinct number.
\u2022	It iterates through the sorted array, checking for changes from the previous element. Each time a new, distinct number is found, it increments the increment variable and accumulates the operations required.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Sorting the array takes O(n log n) time complexity (where n is the length of the input array).
\u2022	The iteration through the sorted array takes O(n) time to count the number of distinct elements and calculate the operations required.
\u2022	Thus, the overall time complexity is dominated by the sorting operation, which is O(n log n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n) due to the space occupied by the input array nums.

# Code
```
public class Solution {
    public int ReductionOperations(int[] nums) {
        Array.Sort(nums);
        int operations = 0, increment = 0;

        for (int i = 1; i < nums.Length; i++) {
            if (nums[i] != nums[i - 1]) {
                increment++;
            }
            operations += increment;
        }

        return operations;
    }
}
```
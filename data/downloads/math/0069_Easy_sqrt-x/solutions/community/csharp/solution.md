# C# using Binary Search with Explanation

**Author:** vFlawless
**Votes:** 14
**Link:** [https://leetcode.com/problems/sqrtx/solutions/3493096/](https://leetcode.com/problems/sqrtx/solutions/3493096/)

---

# Intuition
To find the square root of a non-negative integer x, we can use a binary search approach to narrow down the range of possible square root values.

# Approach
1. Handle the special case where x is 0 and return 0 since the square root of 0 is 0.
2. Initialize the left pointer to 1 and the right pointer to x.
3. While the left pointer is less than or equal to the right pointer:
     - Calculate the middle pointer using the formula `mid = left + (right - left) / 2`.
     - Calculate the square of the middle value and compare it with x:
         - If the square is equal to x, return the middle value as the square root.
         - If the square is less than x, update the left pointer to `mid + 1` since the square root must be greater than or equal to mid.
         - If the square is greater than x, update the right pointer to `mid - 1` since the square root must be less than mid.
4. If no exact square root is found, return the value of the right pointer as the floor value of the square root of x.

# Complexity
- Time complexity: O(log(x))
   - The binary search approach reduces the search space by half in each iteration, resulting in logarithmic time complexity.
- Space complexity: O(1)
   - The algorithm uses a constant amount of extra space to store the pointers and variables, regardless of the input size.


# Code
```
public class Solution {
    public int MySqrt(int x) {
        if (x == 0)
            return 0;

        int left = 1;
        int right = x;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int sqrt = x / mid;

            if (sqrt == mid)
                return mid;
            else if (sqrt < mid)
                right = mid - 1;
            else
                left = mid + 1;
        }

        return right;
    }
}

```
# Using Binary Search to Check for Perfect Squares

**Author:** Rare_Zawad
**Votes:** 17
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/3209660/](https://leetcode.com/problems/valid-perfect-square/solutions/3209660/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To check whether a number is a perfect square, we need to find the square root of the number. One way to do this is to use binary search. We can start by setting the left boundary to 1 and the right boundary to num. Then, we can repeatedly compute the middle point between the left and right boundaries and check whether its square is equal to num. If the middle point squared is greater than num, we can update the right boundary to be the middle point minus 1. Otherwise, we can update the left boundary to be the middle point plus 1. We repeat this process until we find the square root of num or we exhaust all possible values of the left and right boundaries.

# Complexity
- Time complexity: $$O(log n)$$, where $$ n$$ is the value of the input integer num. This is because we are using binary search to find the square root of num, and binary search has a time complexity of $$O(log n)$$.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$, since we are not using any extra data structures.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        left, right = 1, num
        while left <= right:
            mid = (left + right) // 2
            if mid * mid == num:
                return True
            elif mid * mid < num:
                left = mid + 1
            else:
                right = mid - 1
        return False
```
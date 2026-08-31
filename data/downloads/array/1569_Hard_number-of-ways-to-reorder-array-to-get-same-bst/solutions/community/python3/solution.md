# Python 🐍 Easy & Fast Solution

**Author:** Souvik_Banerjee-2020
**Votes:** 63
**Link:** [https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3643494/](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3643494/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Here are my initial thoughts on how to solve this problem:

- The base case of the recursive function f is when the length of the input list nums is less than or equal to 2, in which case there is only one way to arrange the numbers. This is returned as 1.

- The recursive case involves splitting the list nums into two sublists: left and right. The left sublist contains numbers smaller than the first element of nums, while the right sublist contains numbers greater than the first element.

- The number of ways to arrange the numbers in nums is calculated as the product of three factors:

- The number of ways to choose the positions for the right sublist among the total number of positions (i.e., combinations of the lengths of left and right).
- The number of ways to arrange the numbers in the left sublist.
- The number of ways to arrange the numbers in the right sublist.

- The recursive calls to f are made on the left and right sublists to compute the number of ways to arrange their respective numbers.

- Finally, the result is obtained by subtracting 1 from the total number of ways and taking the modulus with (10**9 + 7).



# Approach
<!-- Describe your approach to solving the problem. -->

The numOfWays function calculates the number of ways to arrange the given list of numbers by recursively calling the helper function f.

The recursive function f performs the following steps:

- It checks for the base case: if the length of the input list nums is less than or equal to 2, indicating that there is only one way to arrange the numbers, it returns 1.

- For the recursive case, the function splits the input list nums into two sublists: left and right. The left sublist contains all the numbers smaller than the first element of nums, while the right sublist contains all the numbers greater than the first element.

- The number of ways to arrange the numbers in nums is calculated as follows:

- Determine the number of positions available for the right sublist by combining the lengths of the left and right sublists using the comb function from the math module.

- Multiply the above value by the number of ways to arrange the numbers in the left sublist (by making a recursive call to f).

- Multiply the result by the number of ways to arrange the numbers in the right sublist (also by making a recursive call to f).

- The final result is obtained by subtracting 1 from the total number of ways calculated and taking the modulus with (10**9 + 7).

## To improve the code:

Import the comb function from the math module.
Use proper formatting and indentation to enhance code readability.
Testing the code with different inputs and comparing the results against expected outcomes would be crucial to ensure the correctness of the implementation.


# Complexity
- Time complexity:$$O(2^n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
from math import comb
from typing import List

class Solution:
    def numOfWays(self, nums: List[int]) -> int:
        def f(nums):
            if len(nums) <= 2:
                return 1
            left = [v for v in nums if v < nums[0]]
            right = [v for v in nums if v > nums[0]]
            return comb(len(left) + len(right), len(right)) * f(left) * f(right)
        
        return (f(nums) - 1) % (10**9 + 7)

```

![e2515d84-99cf-4499-80fb-fe458e1bbae2_1678932606.8004954.png](./images/0.png)

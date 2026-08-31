# c#, Linq

**Author:** bytchenko
**Votes:** 3
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3142103/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3142103/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can split each number into digits and enumerate

# Approach
<!-- Describe your approach to solving the problem. -->
Linq query

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n * log(item))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
public class Solution {
    public int[] SeparateDigits(int[] nums) {
        static IEnumerable<int> Digits(int value) {
            for (; value > 0; value /= 10)
                yield return value % 10;
        }    

        return nums
            .SelectMany(item => Digits(item).Reverse())
            .ToArray();
    }
}
```
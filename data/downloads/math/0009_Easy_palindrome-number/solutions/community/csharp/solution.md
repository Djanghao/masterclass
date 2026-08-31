# [C#] || without converting to string || simple solution (92%)

**Author:** uzairakram0
**Votes:** 53
**Link:** [https://leetcode.com/problems/palindrome-number/solutions/3188691/](https://leetcode.com/problems/palindrome-number/solutions/3188691/)

---

# Intuition
construct reverse integer and check if it is the same as the original

# Approach
create a copy c and use it to construct the reverse integer using modulo arithmetics

# Complexity
- Time complexity:
$$O(n)$$
where n is the number of digits

- Space complexity:
$$O(1)$$

# Code
```
public class Solution {
    public bool IsPalindrome(int x) {
        int r = 0, c = x;
        while (c > 0)
        {
            r = r * 10 + c % 10;
            c /= 10;
        }
        return r == x; 
    }
}
```
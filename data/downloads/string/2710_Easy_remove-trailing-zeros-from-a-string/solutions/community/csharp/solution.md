# C#: simple solution

**Author:** Igor0
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/3570362/](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/3570362/)

---

# Intuition
Just find the 1st non-zero char from the right side.

# Approach
Just find the 1st non-zero char from the right side:
```
while (num[index] == '0')
{
    index--;
}
```

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
public class Solution {
    public string RemoveTrailingZeros(string num) {
        var index = num.Length - 1;
        while (num[index] == '0')
        {
            index--;
        }
        return num.Substring(0, index + 1);
    }
}
```
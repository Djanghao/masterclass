# c#, direct check

**Author:** bytchenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/confusing-number/solutions/2976910/](https://leetcode.com/problems/confusing-number/solutions/2976910/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can easily simulate the process and check if given number is confusing one.

# Approach
<!-- Describe your approach to solving the problem. -->
To rotate number we should change each digit within number into corresponding one (`6 -> 9` etc.) and then reverse the entire number.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(length(n))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(length(n))$$

# Code
```
public class Solution {
    static Dictionary<char, char> corresponding = new() {
        { '0', '0'},
        { '1', '1'},
        { '6', '9'},
        { '8', '8'},
        { '9', '6'},
    };

    public bool ConfusingNumber(int n) {
        StringBuilder sb = new();

        foreach (char c in n.ToString()) 
            if (corresponding.TryGetValue(c, out var value))
                sb.Append(value);
            else
                return false;
         
        return n != long.Parse(string.Concat(sb.ToString().Reverse()));
    }
}
```
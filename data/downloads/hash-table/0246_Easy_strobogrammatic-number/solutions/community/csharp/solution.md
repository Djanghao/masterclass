# Readable C# with dictionary

**Author:** user0742w
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/5497980/](https://leetcode.com/problems/strobogrammatic-number/solutions/5497980/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public bool IsStrobogrammatic(string num) {
        Dictionary<char, char> stroboPairs = new Dictionary<char, char>(){{'0', '0'}, {'1', '1'}, {'6', '9'}, {'8', '8'}, {'9', '6'}};
        var digits = num.ToCharArray();
        if (digits.Any(d => !stroboPairs.ContainsKey(d))) {
            return false;
        }
        var rotatedNumber = new String(digits.Select(d => stroboPairs[d]).Reverse().ToArray());
        return rotatedNumber.Equals(num);
    }
}
```
# Beats 55%, Hash Table, O(n)

**Author:** Igor0
**Votes:** 1
**Link:** [https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5146197/](https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5146197/)

---

# Intuition
At first create the dictionary of indices.

# Approach
At first create the dictionary of indices for the string `s`:
```
var dic = CreateDicOfChars(s);
```
Then go through the second string `t` and calculate the result:
```
for (int i = 0; i < t.Length; i++)
{
    rs += Math.Abs(dic[t[i]] - i);
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
    public int FindPermutationDifference(string s, string t) {
        var dic = CreateDicOfChars(s);
        var rs = 0;
        for (int i = 0; i < t.Length; i++)
        {
            rs += Math.Abs(dic[t[i]] - i);
        }
        return rs;
    }
    private Dictionary<char, int> CreateDicOfChars(string s)
    {
        var rs = new Dictionary<char, int>();
        for (int i = 0; i < s.Length; i++)
        {
            rs.Add(s[i], i);
        }
        return rs;
    }
}
```
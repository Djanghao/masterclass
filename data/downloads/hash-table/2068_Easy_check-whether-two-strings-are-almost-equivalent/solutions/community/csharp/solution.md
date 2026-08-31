# Beats over 95% O(n)

**Author:** eskility
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/4317028/](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/4317028/)

---

# Intuition
Use char to count

# Approach
Use one array that counts every occourence of a character. The character a for example has a int value of 65 and z is 90. Then we loop through each character in each word and increment for word1 and decrement for word2. Lastly we loop through the array and check if any of the characters has an occourence of over 3.

For example if a occours two times in word1 and one time in word2, charCounter[65] will end up being 1(2-1).

# Complexity
- Time complexity:
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
using System.ComponentModel;

public class Solution
{
    public bool CheckAlmostEquivalent(string word1, string word2)
    {
        var charCounter = new int[200];
        foreach (char c in word1)
            charCounter[c]++;
        foreach (char c in word2)
            charCounter[c]--;

        for (int i = 0; i <= charCounter.Length - 1; i++)
        {
            if (Math.Abs(charCounter[i]) > 3)
                return false;
        }
        return true;
    }
}
```
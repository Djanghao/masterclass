# C# solution with explanation | Beats 100% of C# solutions

**Author:** Muhammad-Diyor
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/3867613/](https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/3867613/)

---

# Approach
I just created a hashset of chars in the given string. Then checked every letter in English alphabet if it exists in the hashset using the letter's ASCII code.

# Runtime
Beats 100% of solutions with C#

![image.png](./images/0.png)
# Code
```
public class Solution {
    public bool CheckIfPangram(string sentence) {
        var hashSet = new HashSet<char>(sentence);
        for (int i = 97; i <= 122; i++)
        {
            if(!hashSet.Contains((char)i))
                return false;
        }

        return true;
    }
}
```
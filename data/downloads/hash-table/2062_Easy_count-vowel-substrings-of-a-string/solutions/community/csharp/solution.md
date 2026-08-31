# Best solution C#

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/5694295/](https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/5694295/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int CountVowelSubstrings(string word) {
        int n = word.Length, ans = 0;
        for(int i = 0; i < n; i++)
        {
            string e = "";
            int j = i;
            while(j < n && "aeiou".Contains(word[j]))
            {
                e += word[j];
                Console.WriteLine(e);
                if(isValid(e)) {ans++;}
                j++;
                Console.WriteLine(ans);
            }
        }
        return ans;
    }
    bool isValid(string c)
    {
        if(c.Contains('a') && c.Contains('e') && c.Contains('i') &&
        c.Contains('o') && c.Contains('u')) 
        {
            return true;}
        return false;
    }
}
```
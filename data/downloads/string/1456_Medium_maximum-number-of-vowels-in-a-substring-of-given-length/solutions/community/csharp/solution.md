# Simple C # solution (Easy to Read)

**Author:** chaaraan
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3487004/](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3487004/)

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
```
public class Solution {
    public int MaxVowels(string s, int k) {
       int result = 0;
       int count =0;
       for(int i = 0; i < k; i++)
       {
            if(isVowel(s[i]))
                count++;
       }
       result = count;
       for(int j = k; j < s.Length; j++)
       {
            if(isVowel(s[j-k]))
                count--;
            if(isVowel(s[j]))
                count++;
            result = Math.Max(result, count);
       }
       return result;
    }
     public bool isVowel(char c)
    {
        return (c=='a') || (c=='e') || (c=='i') || (c=='o') || (c=='u');
    }
}
```
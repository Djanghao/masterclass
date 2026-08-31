# Simple java solution

**Author:** Siddhant_1602
**Votes:** 16
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5052481/](https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5052481/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int numberOfSpecialChars(String word) {
        int a[]=new int[26];
        int b[]=new int[26];
        for(char c: word.toCharArray())
        {
            if(c>='a' && c<='z')
            {
                a[c-'a']++;
            }
            else
            {
                b[c-'A']++;
            }
        }
        int count=0;
        for(int i=0;i<26;i++)
        {
            if(a[i]!=0 && b[i]!=0)
            {
                count++;
            }
        }
        return count;
    }
}
```
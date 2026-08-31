# C# Beats 100%

**Author:** codeme0720
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/2651246/](https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/2651246/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n) ; n is word length
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public bool EqualFrequency(string word)
    {
        int[] c = new int[26];
        foreach(var x in word)
            c[x-'a']++;
        
        for(int i=0;i<26;i++)
        {
            if(c[i]>0)
            {
                c[i]--;
                if(IsAllEqual(c))
                    return true;
                c[i]++;
            }
        }

        return false;
    }

    public bool IsAllEqual(int[] c)
    {
        int i=0;
        while(c[i] == 0)
            i++;
        
        int last = c[i];
        for(i=1;i<26;i++)
            if(c[i] != 0 && c[i] != last)
                return false;
        
        return true;
    }
}
```
# Easy solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5852248/](https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5852248/)

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
    public int NumberOfSpecialChars(string word) {
       Dictionary<int,int> a=new Dictionary<int,int>();
       int count=0;
       for(int i=0;i<word.Length;i++)
       {
            if(!a.ContainsKey(word[i]))
            {
                a.Add(word[i],i);
            }
            if(word[i]>=97)
            {
                a[word[i]]=i;
            }
       }
       foreach(var i in a)
       {
            if(a.ContainsKey(i.Key+32))
            {
                int v=a[i.Key+32];
                if(v<i.Value)
                {
                    count++;
                }
            }
       }
       return count;
    }
}
```
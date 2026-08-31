# c#

**Author:** Julian_Meng_Chang
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/5498768/](https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/5498768/)

---

# Intuition
1. Count the number of difference between s and t
2. Select the difference with max value(loop -1) , if count of difference is same , select max difference(remaining times)
3. The times needed is  (loop-1) *26 +  remaining times

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
    public bool CanConvertString(string s, string t, int k) {
        if(s.Length != t.Length) return false;
        int[] D = new int[26];
        for(int i=0;i<s.Length;i++)
        {
            if(t[i]==s[i]) continue;
            int diff =  t[i]>s[i]? (t[i]-s[i]) : (26+t[i]-s[i]);
            
            D[diff]++;
        }
        int m = 0, d=0;
        for(int i=1;i<26;i++)
        {
           if(D[i]>=m)
           {
             m = D[i];
             d = i;
           }
        }
        m = (m-1)*26+d;       
        return k>=m;

    }
}
```
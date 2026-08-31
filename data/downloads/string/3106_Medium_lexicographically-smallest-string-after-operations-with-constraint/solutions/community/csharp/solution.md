# easy

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4987311/](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4987311/)

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
    public string GetSmallestString(string s, int k) {
       char [] a= s.ToArray();
       for (int i=0; i< a.Length; i++){
        if (k==0|| a[i]=='a')continue;
        int x=Math.Min(a[i]-'a', 'z'-a[i]+1);
        if (x<=k){a[i]='a'; k-=x;}
        else{ a[i]=(char)(a[i]-k); break;}
       } 
       string ans="";
       for (int i=0; i< s.Length; i++){
        ans+=a[i];
       }
       return ans;
    }
}
```
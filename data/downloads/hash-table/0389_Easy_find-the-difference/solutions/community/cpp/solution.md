# C++ 100% faster using Ascii values

**Author:** guptashubham1798
**Votes:** 44
**Link:** [https://leetcode.com/problems/find-the-difference/solutions/1751240/](https://leetcode.com/problems/find-the-difference/solutions/1751240/)

---

The logic used is the char which is different can be found using the difference in ascii value of the two strings.
```

class Solution {
public:
char findTheDifference(string s, string t) {
        int ans=0;
        for(int i=0;i<s.size();i++)
        {
            ans-=s[i];
            ans+=t[i];
        }
        ans+=t[s.size()];  
        return ans;
    }
};
```
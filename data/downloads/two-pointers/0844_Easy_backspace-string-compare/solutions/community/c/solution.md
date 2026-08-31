# C++ Simple And Easy Explanation :-  100% Memory And 100% speed 0ms /O(1) space & O(N) Time

**Author:** monga_anmol123
**Votes:** 222
**Link:** [https://leetcode.com/problems/backspace-string-compare/solutions/570511/](https://leetcode.com/problems/backspace-string-compare/solutions/570511/)

---

Implementation using two pointer- 1st to traverse the string and second to store the character at given position
* Suppose 2 pointer i & k
* Start traversing the by first pointer(i) if it is # then decrease the 2nd pointer(k )(k>=0)  .And if it is not # then increase the pointer(k) and store the element at k th position.
```S[k]=S[i] ```
* Same will be done to 2nd string And suppose its 2nd pointer is p
* If k and p are not equal means the string have differnt length. If same, then compare every element.
```
class Solution {
public:
    bool backspaceCompare(string s, string t) {
        int k=0,p=0;
        for(int i=0;i<s.size();i++)
        {
            if(s[i]=='#')
            {
                k--;
                 k=max(0,k);
            }
            
           else
           {
               s[k]=s[i];
               k++;
           }
        }
        for(int i=0;i<t.size();i++)
        {
            if(t[i]=='#')
            {
                p--;
                 p=max(0,p);
            }
            
           else
           {
               t[p]=t[i];
               p++;
           }
        }
        if(k!=p)
            return false;
        else
        {
            for(int i=0;i<k;i++)
            {
                if(s[i]!=t[i])
                    return false;
            }
            return true;
        }
        
    }
};
```
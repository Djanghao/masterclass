# C++||Easy-Understanding||100%

**Author:** srijanbharadwaj7777
**Votes:** 14
**Link:** [https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/1232248/](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/1232248/)

---

```
class Solution {
public:
    bool checkZeroOnes(string s) {
        int count1=0;
        int count2=0;
       int max1=0;int max2=0;
        for(int i=0;i<s.size();i++)
        {
            if(s[i]=='1')
            {
                count1++;
                if(s[i+1]!=s[i])
                {
                    max1=max(count1,max1);
                    count1=0;
                }
            }
            
            if(s[i]=='0')
            {
                count2++;
                if(s[i+1]!=s[i])
                {
                    max2=max(count2,max2);
                    count2=0;
                }
            }
        }
        
        if(max1>max2)
            return true;
        return false;
        
        
    }
};
```
	Pls Upvote if you like the solution
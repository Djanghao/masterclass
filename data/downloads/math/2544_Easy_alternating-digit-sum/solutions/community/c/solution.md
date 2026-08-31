# ✅C++ || ✅Using Vector || ✅Comments Added || ✅Simple & Easy || ✅Alternative Sum

**Author:** mayanksamadhiya12345
**Votes:** 14
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/3083849/](https://leetcode.com/problems/alternating-digit-sum/solutions/3083849/)

---

**Please Upvote If It Helps**

**Time Complexity : O(N)**
**Soace  Complexity : O(N)**

```
class Solution {
public:
    int alternateDigitSum(int n) 
    {
        if(n==0) return 0;
        
        // storing the number in reverse order
        vector<int> tmp;
        while(n)
        {
            tmp.push_back(n%10);
            n/=10;
        }
        
        // reverse the number for getting the actual number
        reverse(tmp.begin(),tmp.end());
        
        int ans=0;
        bool plus=true;
        
        // do plus , minus alternatively and then return ans
        for(auto &it : tmp)
        {
            if(plus)
            {
                ans+=it;
                plus=false;
            }
            else
            {
                ans-=it;
                plus=true;
            }
        }
        return ans;
    }
};
```
# ✔ C++ | Brute Force | Clean and Concise

**Author:** jk20
**Votes:** 12
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/1996388/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/1996388/)

---

```
class Solution {
public:

    string removeDigit(string number, char digit) {
     
        int n=number.size();
        int i;
        vector<string>ans;
        
        for(i=0;i<n;i++)
        {
            if(number[i]==digit)
            {
                string res=number.substr(0,i);
                res+=number.substr(i+1,n-i-1);
                
               //cout<<res<<endl;
                ans.push_back(res);
            }
        }
        sort(ans.begin(),ans.end());
        return ans[ans.size()-1];
    }
};
```
**Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding : )**

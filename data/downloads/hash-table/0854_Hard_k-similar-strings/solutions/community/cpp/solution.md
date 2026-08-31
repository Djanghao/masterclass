# c++ solution using backtracking

**Author:** dilipsuthar60
**Votes:** 4
**Link:** [https://leetcode.com/problems/k-similar-strings/solutions/1572284/](https://leetcode.com/problems/k-similar-strings/solutions/1572284/)

---

```
class Solution {
public:
    int ans=INT_MAX;
    void find(string&s1,string&s2,int i,int j,int step)
    {
        if(i==s1.size())
        {
            ans=min(ans,step);
        }
        else if(s1[i]==s2[j])
        {
            return find(s1,s2,i+1,j+1,step);
        }
        else
        {
            for(int k=i+1;k<s1.size();k++)
            {
                if(s1[k]==s2[j])
                {
                    swap(s1[k],s1[i]);
                    find(s1,s2,i+1,j+1,step+1);
                    swap(s1[k],s1[i]);
                }
            }
        }
    }
    int kSimilarity(string s1, string s2) 
    {
        ans=INT_MAX;
        find(s1,s2,0,0,0);
        return ans;
    }
};
```
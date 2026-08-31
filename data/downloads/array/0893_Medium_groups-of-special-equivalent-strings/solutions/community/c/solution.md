# C++||Set||Easy to Understand

**Author:** return_7
**Votes:** 6
**Link:** [https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/2431332/](https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/2431332/)

---

```
class Solution {
public:
    int numSpecialEquivGroups(vector<string>& words)
    {    
        set<pair<string,string>> s;
        for(auto &w:words)
        {
            string p,q;
            for(int i=0;i<w.size();i++)
            {
                if(i%2==0)
                {
                    p+=w[i];
                }
                else
                {
                    q+=w[i];
                }
            }
            sort(p.begin(),p.end());
            sort(q.begin(),q.end());
            s.insert({p,q});
        }
        return s.size();
    }
};
//if you like the solution plz upvote.
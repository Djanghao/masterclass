# [c++] Using Includes Function

**Author:** suman_buie
**Votes:** 19
**Link:** [https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/636514/](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/636514/)

---

```
class Solution {
public:
    vector<int> peopleIndexes(vector<vector<string>>& com) {
        int n = com.size();
        vector<int>ans;
        for(auto &cm:com)sort(begin(cm),end(cm));
        for(int i=0;i<n;i++){
            bool f=false;
            for(int j=0;j<n&&!f;j++){
                if(i!=j)
                    f = includes(begin(com[j]),end(com[j]),begin(com[i]),end(com[i]));
            }
            if(!f)ans.push_back(i);
        }
        return ans;
    }
};
```
Please Upvote If You Like 
Thank You
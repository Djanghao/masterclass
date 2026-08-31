# C++ Beginner Friendly + Highly Readable Code

**Author:** SM3210
**Votes:** 85
**Link:** [https://leetcode.com/problems/count-items-matching-a-rule/solutions/1134102/](https://leetcode.com/problems/count-items-matching-a-rule/solutions/1134102/)

---

```
class Solution {
public:
    int countMatches(vector<vector<string>>& items, string ruleKey, string ruleValue) {
        int i;
        if(ruleKey=="type")i=0;
        if(ruleKey=="color")i=1;
        if(ruleKey=="name")i=2;
        
        int ans=0;
        for(int j=0;j<items.size();j++){
            if(items[j][i]==ruleValue)ans++;
        }
        
        return ans;
    }
};
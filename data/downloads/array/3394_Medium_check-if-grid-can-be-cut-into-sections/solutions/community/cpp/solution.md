# c++ solution sweep line

**Author:** dilipsuthar60
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/solutions/6171365/](https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/solutions/6171365/)

---

```
class Solution {
public:
    bool find(vector<pair<int,int>>&nums){
        map<int,int>mp;
        for(auto &it:nums){
            mp[it.first]++;
            mp[it.second-1]--;
        }
        int count=0;
        int sum=0;
        for(auto &[key,value]:mp){
            sum+=value;
            if(sum==0){
                count++;
            }
        }
        return count>=3;
    }
    bool checkValidCuts(int n, vector<vector<int>>& rectangles) {
        vector<pair<int,int>>first,second;
        for(auto &rect:rectangles){
            first.push_back({rect[0],rect[2]});
            second.push_back({rect[1],rect[3]});
        }
        return find(first) ||find(second);
    }
};

```
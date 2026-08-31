# C++ || Map and Greedy || Easy to Undestand

**Author:** NehaGupta_09
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-values-from-labels/solutions/2781420/](https://leetcode.com/problems/largest-values-from-labels/solutions/2781420/)

---

```
class Solution {
public:
    int largestValsFromLabels(vector<int>& arr1, vector<int>& arr2, int size, int limit) {
        vector<pair<int,int>>v;
        unordered_map<int,int>mp;
        for(int i=0;i<arr1.size();i++)
        {
            v.push_back({arr1[i],arr2[i]});
            mp[arr2[i]]=limit;
        }
        sort(v.begin(),v.end(),greater<pair<int,int>>());
        int sum=0;
        for(int i=0;i<v.size();i++)
        {
            if(size>0)
            {
                if(mp[v[i].second]>0)
                {
                    sum=sum+v[i].first;
                    mp[v[i].second]--;
                    size--;
                }
            }
        }
        return sum;
    }
};
```
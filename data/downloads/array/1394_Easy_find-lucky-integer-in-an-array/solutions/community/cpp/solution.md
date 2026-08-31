# [C++] Simple Clean Code [T: 95.52%]

**Author:** harshit0311
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/684020/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/684020/)

---

***Please upvote if you found the post helpful***
```
class Solution {
public:
    int findLucky(vector<int>& arr) {
        vector<int> hg;
        unordered_map<int,int> freq;
        for(int i=0;i<arr.size();i++){
            freq[arr[i]]++;
        }
        for(auto num:freq){
            if(num.first==num.second)hg.push_back(num.first);
        }
        if(hg.size()>0)return *max_element(hg.begin(),hg.end());
        return -1;
    }
};
```
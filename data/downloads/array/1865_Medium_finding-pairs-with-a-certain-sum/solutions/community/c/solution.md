# ✔ C++ explained solution using map, hashmap || fatser than 99.5%

**Author:** aynburnt
**Votes:** 34
**Link:** [https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/1222759/](https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/1222759/)

---

1. we will use ordered map to store nums1 as it stores keys in sorted order so we will use this condion while iterating in first array and break loop when curr val > tot;
2. for second array we use unordered map because it gives faster serach.
```
 vector<int> b;
    map<int,int> first;
    unordered_map<int,int>second;
    FindSumPairs(vector<int>& nums1, vector<int>& nums2) {
        b = nums2;
        for(int x : nums2)second[x]++;
        for(int x : nums1)first[x]++;
    }
    
    void add(int index, int val) {
        second[b[index]]--;
        b[index]+=val;
        second[b[index]]++;
    }
    
    int count(int tot) {
        int ans = 0;
        for(auto it = first.begin(); it != first.end() && it->first<tot ; it++)
        if(second.count(tot-it->first)) ans += it->second * second[tot-it->first];
        return ans;
    }
```
# if u find it helpful plz upvote
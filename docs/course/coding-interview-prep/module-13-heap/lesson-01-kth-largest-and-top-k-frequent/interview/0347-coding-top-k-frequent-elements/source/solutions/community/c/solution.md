# C++ Two Short Solutions, O(nlogn) - Map+Queue / O(n) - Bucket Sort

**Author:** YehudisK
**Votes:** 63
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/1336643/](https://leetcode.com/problems/top-k-frequent-elements/solutions/1336643/)

---

**Map + Priority Queue - O(nlogn)**
```
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> freq;
        for (auto num : nums) freq[num]++;
        
        priority_queue<pair<int, int>> pq;
        for (auto [a, b] : freq) pq.push({b, a});
        
        vector<int> res;
        while (k) {
            res.push_back(pq.top().second);
            pq.pop();
            k--;
        }
        
        return res;
    }
};
```
****
**Bucket Sort - O(n)**
```
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> freq;
        for (auto num : nums) freq[num]++;
        
        vector<vector<int>> buckets(nums.size()+1);
        for (auto [a, b] : freq)
            buckets[b].push_back(a);
        
        vector<int> res;
        for (int i = nums.size(); k; i--) {
            for (auto a : buckets[i]) {
                res.push_back(a);
                k--;
            }
        }
        
        return res;
    }
};
```
**Like it? please upvote!**
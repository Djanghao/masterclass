# MFU Cache

**Author:** votrubac
**Votes:** 8
**Link:** [https://leetcode.com/problems/most-frequent-ids/solutions/4916748/](https://leetcode.com/problems/most-frequent-ids/solutions/4916748/)

---


Classic problem where you track ID in two data structures:
- Tree set with sorted frequencies
- Hash map to link ID to its current frequency

**C++ Using Multiset**
```cpp
vector<long long> mostFrequentIDs(vector<int>& nums, vector<int>& freq) {
    multiset<long long> s;
    unordered_map<int, decltype(s)::iterator> m;
    vector<long long> res(nums.size());
    for (int i = 0; i < nums.size(); ++i) {
        long long fi = freq[i];
        if (auto it = m.find(nums[i]); it != end(m)) {
            fi += *(it->second);
            s.erase(it->second);
        }
        m[nums[i]] = s.insert(fi);
        res[i] = *rbegin(s);
    }
    return res;
}
```
**C++ Using Set**
```cpp
vector<long long> mostFrequentIDs(vector<int>& nums, vector<int>& freq) {
    set<pair<long long, int>> s;
    unordered_map<int, decltype(s)::iterator> m;
    vector<long long> res(nums.size());
    for (int i = 0; i < nums.size(); ++i) {
        long long fi = freq[i];
        if (auto it = m.find(nums[i]); it != end(m)) {
            fi += it->second->first;
            s.erase(it->second);
        }
        m[nums[i]] = s.insert({fi, nums[i]}).first;
        res[i] = rbegin(s)->first;
    }
    return res;
}
```
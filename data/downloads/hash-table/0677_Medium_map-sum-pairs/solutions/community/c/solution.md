# C++ Simple and Clean Intuitive Solution,  4 Lines of Code, 0ms Faster than 100%

**Author:** YehudisK
**Votes:** 7
**Link:** [https://leetcode.com/problems/map-sum-pairs/solutions/1372374/](https://leetcode.com/problems/map-sum-pairs/solutions/1372374/)

---

```
class MapSum {
public:
    /** Initialize your data structure here. */
    MapSum() {}
    
    void insert(string key, int val) {
        m[key] = val;
    }
    
    int sum(string prefix) {
        int s = 0;
        for (auto [key, value] : m) if (key.find(prefix) == 0) s += value;
        return s;
    }
    
private:
    unordered_map<string, int> m;
};
```
**Like it? please upvote!**
# Easy to understand c++ map based solution.

**Author:** dawninghu
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-log-storage-system/solutions/6052871/](https://leetcode.com/problems/design-log-storage-system/solutions/6052871/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class LogSystem {
    string min = "2000:01:01:00:00:00";
    string max = "2017:12:31:23:59:59";
    map<string, vector<int>> log_ids;
    unordered_map<string, int> idx;
public:
    LogSystem() {//Year:Month:Day:Hour:Minute:Second, for example, 2017:01:01:23:59:59
        idx["Year"]   = 5;
        idx["Month"]  = 8;
        idx["Day"]    = 11;
        idx["Hour"]   = 14;
        idx["Minute"] = 17;
        idx["Second"] = 19;
    }
    
    void put(int id, string timestamp) {
        //Year:Month:Day:Hour:Minute:Second, for example, 2017:01:01:23:59:59
        if(log_ids.find(timestamp)==log_ids.end())
            log_ids[timestamp].push_back(id);
    }
    
    vector<int> retrieve(string start, string end, string granularity) {
        int i = idx[granularity];
        if(granularity!="Second") {
            start = start.substr(0, i) + min.substr(i);
            end =  end.substr(0, i) + max.substr(i);
        }
        vector<int> res;

        auto left  = log_ids.lower_bound(start); //Returns an iterator pointing to the first element in the range [first,last) which does not compare less than val.
        auto right = log_ids.upper_bound(end);
        for(auto i = left; i != right; i=next(i)) {
            for(auto id:i->second)
                res.push_back(id);
        }
        return res;
    }
};

/**
 * Your LogSystem object will be instantiated and called as such:
 * LogSystem* obj = new LogSystem();
 * obj->put(id,timestamp);
 * vector<int> param_2 = obj->retrieve(start,end,granularity);
 */
```
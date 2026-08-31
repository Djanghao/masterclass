# Beat 100% , no need to scan logs

**Author:** gingerale
**Votes:** 5
**Link:** [https://leetcode.com/problems/design-log-storage-system/solutions/345760/](https://leetcode.com/problems/design-log-storage-system/solutions/345760/)

---

use a suffix after granuaity to get query bound.

```
    void put(int id, string timestamp) {
        mp[timestamp].push_back(id);
    }
    
    vector<int> retrieve(string s, string e, string gra) {
        string suffix = "0000:12:31:23:59:59";
        s = s.substr(0, len[gra]);
        e = e.substr(0, len[gra]) + suffix.substr(len[gra]);
        auto start = mp.lower_bound(s);
        auto end = mp.upper_bound(e);
        vector<int> res;
        for(auto it = start ; it !=  end; ++it)
            copy(it->second.begin(), it->second.end(), back_inserter(res));
        return res;
    }
    
private:
    map<string, vector<int>> mp;
    unordered_map<string, int> len {{"Year", 4}, {"Month", 7}, {"Day", 10}, {"Hour", 13}, {"Minute", 16}, {"Second", 19}};
```
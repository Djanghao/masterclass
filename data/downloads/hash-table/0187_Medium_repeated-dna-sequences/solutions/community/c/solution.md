# C++ simple and short solution using hashmap

**Author:** YehudisK
**Votes:** 97
**Link:** [https://leetcode.com/problems/repeated-dna-sequences/solutions/898924/](https://leetcode.com/problems/repeated-dna-sequences/solutions/898924/)

---

```
class Solution {
public:
    vector<string> findRepeatedDnaSequences(string s) {
        unordered_map<string, int> counter;
        vector<string> res;
        
        if (s.size() < 10) return res;
        
        for (int i=0; i<s.size()-9; i++)
            counter[s.substr(i, 10)]++;
        
        for (auto a:counter)
            if (a.second > 1)
                res.push_back(a.first);
        
        return res;
    }
};
```
**Like it? please upvote...**
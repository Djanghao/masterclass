# Simple c++ solution with union find

**Author:** swapnil8365
**Votes:** 8
**Link:** [https://leetcode.com/problems/sentence-similarity-ii/solutions/450328/](https://leetcode.com/problems/sentence-similarity-ii/solutions/450328/)

---

```
class Solution {
public:
    string find(map<string, string> &m, string s) {
        if (m.find(s)==m.end()) {
            m[s] = s;
        }
        while(m[s]!=s) {
            s=m[s];
        }
        return m[s];
    }
    void uni(map<string, string> &m, string s1, string s2) {
        if (find(m,s1) != find(m,s2)) {
            m[find(m, s1)] = find(m,s2);            
        }
    }
    bool areSentencesSimilarTwo(vector<string>& words1, vector<string>& words2, vector<vector<string>>& pairs) {
        
        if (words1.size()!= words2.size()) {
            return false;
        }
        map<string, string> m;
        for (int i = 0; i < pairs.size(); i++) {
            uni(m, pairs[i][0], pairs[i][1]);
        }
        for(int i = 0; i < words1.size(); i++) {
            
            if (find(m, words1[i]) != find(m, words2[i]))
                return false;
        }
        return true;
    }
};
```
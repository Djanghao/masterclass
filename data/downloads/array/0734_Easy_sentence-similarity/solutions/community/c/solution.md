# [C++] Easy Set Solution

**Author:** davidchai
**Votes:** 6
**Link:** [https://leetcode.com/problems/sentence-similarity/solutions/1237480/](https://leetcode.com/problems/sentence-similarity/solutions/1237480/)

---

Idea:
Many people used hashmap to solve the problem, we can actually use the unordered_set to solve it in the following way.

Code:
```
class Solution {
public:
    bool areSentencesSimilar(vector<string>& sentence1, vector<string>& sentence2, vector<vector<string>>& similarPairs) {
        if (sentence1.size() != sentence2.size()) return false;
        
        int n = sentence1.size();
        unordered_set<string> s;
        for (vector<string>& p : similarPairs) {
            s.insert(p[0] + "," +p[1]);
        }
        
        for (int i=0;i<n;++i) {
            if (sentence1[i] == sentence2[i]
			 || s.find(sentence1[i]+","+sentence2[i]) != s.end()
			 || s.find(sentence2[i]+","+sentence1[i]) != s.end()) continue;
            return false;
        }
        return true;
    }
};
```
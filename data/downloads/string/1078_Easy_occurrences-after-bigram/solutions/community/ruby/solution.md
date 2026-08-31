# Simple Explained Solution

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/occurrences-after-bigram/solutions/3179481/](https://leetcode.com/problems/occurrences-after-bigram/solutions/3179481/)

---


```
class Solution {
public:
    vector<string> findOcurrences(string text, string first, string second) {
        vector<string> ans;
        istringstream ss(text);
        string prev2, prev, word;
        while (ss >> word) {
            if (prev2 == first && prev == second) ans.push_back(word);
            prev2 = prev;
            prev = word;
        }
        return ans;
    }
};
```
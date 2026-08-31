# Short C++

**Author:** zefengsong
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/113158/](https://leetcode.com/problems/find-anagram-mappings/solutions/113158/)

---

```
class Solution {
public:
    vector<int> anagramMappings(vector<int>& A, vector<int>& B) {
        vector<int>res;
        unordered_map<int, int>m;
        for(int i = 0; i < B.size(); i++) m[B[i]] = i;
        for(int x: A) res.push_back(m[x]);
        return res;
    }
};
```
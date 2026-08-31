# C++ [modern] Clean solution with iterative string.find( ), beats ~96%

**Author:** ianpan870102
**Votes:** 2
**Link:** [https://leetcode.com/problems/index-pairs-of-a-string/solutions/2835417/](https://leetcode.com/problems/index-pairs-of-a-string/solutions/2835417/)

---

# Code
```
class Solution {
 public:
  auto indexPairs(string &text, vector<string> &words) -> vector<vector<int>> {
    vector<vector<int>> ans;

    for (const auto &word : words) {
      int word_length = word.length();

      for (int pos = text.find(word); pos != std::string::npos; pos = text.find(word, pos + 1)) {
        ans.push_back({pos, word_length + pos - 1});
      }
    }

    sort(ans.begin(), ans.end());

    return ans;
  }
};

```
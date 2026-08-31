# C++ [No TRIE, A HashMap soln.]

**Author:** gob1nd
**Votes:** 122
**Link:** [https://leetcode.com/problems/prefix-and-suffix-search/solutions/1185249/](https://leetcode.com/problems/prefix-and-suffix-search/solutions/1185249/)

---

```
class WordFilter {
   private:
    unordered_map<string, int> hashMap;

   public:
    WordFilter(vector<string>& words) {
        int n = words.size();
        for (int i = 0; i < n; i++) {
            string word = words[i];
            int wordSize = word.size();
            for (int j = 1; j <= wordSize; j++) {
                string p = word.substr(0, j);
                for (int k = 0; k < wordSize; k++) {
                    string s = word.substr(k, wordSize);
                    hashMap[p + "|" + s] = i + 1;
                }
            }
        }
    }

    int f(string prefix, string suffix) {
        string s = prefix + "|" + suffix;
        return hashMap[s] - 1;
    }
};
```
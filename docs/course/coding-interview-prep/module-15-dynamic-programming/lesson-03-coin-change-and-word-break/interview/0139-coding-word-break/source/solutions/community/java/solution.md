# Solution

**Author:** deleted_user
**Votes:** 462
**Link:** [https://leetcode.com/problems/word-break/solutions/3171265/](https://leetcode.com/problems/word-break/solutions/3171265/)

---

```C++ []
class Solution {
 public:
  bool wordBreak(string s, vector<string>& wordDict) {
    const int n = s.length();
    const int maxLength = getMaxLength(wordDict);
    const unordered_set<string> wordSet{begin(wordDict), end(wordDict)};
    vector<int> dp(n + 1);
    dp[0] = true;

    for (int i = 1; i <= n; ++i)
      for (int j = i - 1; j >= 0; --j) {
        if (i - j > maxLength)
          break;
        if (dp[j] && wordSet.count(s.substr(j, i - j))) {
          dp[i] = true;
          break;
        }
      }

    return dp[n];
  }

 private:
  int getMaxLength(const vector<string>& wordDict) {
    return max_element(begin(wordDict), end(wordDict),
                       [](const auto& a, const auto& b) {
                         return a.length() < b.length();
                       })
        ->length();
  }
};
```

```Python3 []
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        
        def construct(current,wordDict, memo={}):
            if current in memo:
                return memo[current]

            if not current:
                return True

            for word in wordDict:
                if current.startswith(word):
                    new_current = current[len(word):]
                    if construct(new_current,wordDict,memo):
                        memo[current] = True
                        return True

            memo[current] = False
            return False

        return construct(s,wordDict)
```

```Java []
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        return recWay1(s, wordDict);
    }

    boolean recWay2(String s, List<String> wordDict) {
        Boolean[] memo = new Boolean[s.length() + 1];
        return wordBreak2(s, new HashSet<>(wordDict), 0, memo);
    }

    boolean wordBreak2(String s, Set<String> wordDict, int k, Boolean[] memo) {
        int n = s.length();
        if (k == n) return true;

        if (memo[k] != null) return memo[k];

        for (int i=k + 1; i<=n; i++) {
            String word = s.substring(k, i);
            if (wordDict.contains(word) && wordBreak2(s, wordDict, i, memo)) {
                return memo[k] = true;
            }
        }

        return memo[k] = false;
    }

    boolean recWay1(String s, List<String> wordDict) {
        Boolean[] memo = new Boolean[s.length() + 1];
        return wordBreak(s, wordDict, 0, memo);
    }
    
    boolean wordBreak(String s, List<String> wordDict, int k, Boolean[] memo) {
        if (k == s.length()) {
            return true;
        }
        
        if (memo[k] != null) {
            return memo[k];
        }
        
        for (int i=0; i<wordDict.size(); i++) {
            String word = wordDict.get(i);
            if (s.startsWith(word, k)) {
                if(wordBreak(s, wordDict, k + word.length(), memo)) return memo[k] = true;
            }
        }
                   
        return memo[k] = false;
    }
}
```

# Share my C++ backtracking solution

**Author:** lightmark
**Votes:** 14
**Link:** [https://leetcode.com/problems/word-pattern-ii/solutions/73666/](https://leetcode.com/problems/word-pattern-ii/solutions/73666/)

---

    class Solution {
    public:
        unordered_map<char, string> pDict;
        unordered_map<string, char> sDict;
        bool wordPatternMatch(string pattern, string str) {
            return match(pattern, 0, str, 0);
        }
        
        bool match(string &pattern, int i, string &str, int j) {
            int m = pattern.size();
            int n = str.size();
            if (i == m || j == n) {
                if (i == m && j == n)
                    return true;
                return false;
            }
            bool ins = false;
            for (int k = j; k < n; k++) {
                string s = str.substr(j, k - j + 1);
                if (pDict.find(pattern[i]) != pDict.end()) {
                    if (pDict[pattern[i]] != s)
                        continue;
                } else if (sDict.find(s) != sDict.end()) {
                    if (sDict[s] != pattern[i])
                        continue;
                } else {
                    pDict[pattern[i]] = s;
                    sDict[s] = pattern[i];
                    ins = true;
                }
                if (match(pattern, i + 1, str, k + 1))
                    return true;
                if (ins) {
                    pDict.erase(pattern[i]);
                    sDict.erase(s);
                }
            }
            return false;
        }
    };

C++ backtracking. ins indicates whether current round has inserted new mapping pair.
edited with two maps to ensure on-to-one mapping.
.
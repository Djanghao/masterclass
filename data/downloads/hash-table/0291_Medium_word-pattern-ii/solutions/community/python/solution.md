# Python backtracking 48ms

**Author:** zhuyinghua1203
**Votes:** 62
**Link:** [https://leetcode.com/problems/word-pattern-ii/solutions/73669/](https://leetcode.com/problems/word-pattern-ii/solutions/73669/)

---

Use dictionary to store patterns, and backtrack when mismatch happens.

    def wordPatternMatch(self, pattern, str):
        return self.dfs(pattern, str, {})

    def dfs(self, pattern, str, dict):
        if len(pattern) == 0 and len(str) > 0:
            return False
        if len(pattern) == len(str) == 0:
            return True
        for end in range(1, len(str)-len(pattern)+2): # +2 because it is the "end of an end"
            if pattern[0] not in dict and str[:end] not in dict.values():
                dict[pattern[0]] = str[:end]
                if self.dfs(pattern[1:], str[end:], dict):
                    return True
                del dict[pattern[0]]
            elif pattern[0] in dict and dict[pattern[0]] == str[:end]:
                if self.dfs(pattern[1:], str[end:], dict):
                    return True
        return False
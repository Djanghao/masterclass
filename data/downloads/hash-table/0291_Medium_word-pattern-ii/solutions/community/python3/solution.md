# Python3 simple solution with extensive comments

**Author:** mxmb
**Votes:** 22
**Link:** [https://leetcode.com/problems/word-pattern-ii/solutions/1428355/](https://leetcode.com/problems/word-pattern-ii/solutions/1428355/)

---

There are some other heuristics we could use to limit the search space, but this is a decent solution that isn't terribly complex.

```python
def wordPatternMatch(self, pattern: str, s: str) -> bool:
        def backtrack(cur: str, pattern: str, mappings: dict):
            # if the pattern is empty, we've exhausted our search
            if not pattern:
                # if the string is also empty, we've found a bijective mapping
                return not cur
            # if the pattern is already mapped, we must use the provided mapping
            if pattern[0] in mappings:
                # if this isn't a valid mapping, return false
                if cur[:len(mappings[pattern[0]])] != mappings[pattern[0]]:
                    return False
                # otherwise continue backtracking
                return backtrack(cur[len(mappings[pattern[0]]):], pattern[1:], mappings)
            # try each subset of the remaining string as a mapping
            for i in range(len(cur)):
                # if the current substring maps to another value, it isn't valid
                if cur[:i+1] in mappings.values():
                    continue
                # map the pattern to the substring
                mappings[pattern[0]] = cur[:i+1]
                # backtrack
                if backtrack(cur[i+1:], pattern[1:], mappings):
                    return True
                # delete the invalid mapping
                del mappings[pattern[0]]
            # none of the substrings were valid, so there is no valid mapping
            return False
        return backtrack(s, pattern, {})
```
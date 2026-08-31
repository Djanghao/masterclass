# Python 3 | Stack | Explanation

**Author:** idontknoooo
**Votes:** 29
**Link:** [https://leetcode.com/problems/longest-absolute-file-path/solutions/812407/](https://leetcode.com/problems/longest-absolute-file-path/solutions/812407/)

---

### Intuition
- Directories has a hierarchy type of relation, so we can use stack to simulate the process.
### Explanations
- For each dir or file, we store 3 things in stack
	- current total length (including parent and '/'), depth (how many '\	' to reach this subdir)
- If `stack` is empty, we add new tuple
- If deepest dir or file in stack (`stack[-1]`) is at the same or deeper depth of current `path`
	- pop stack until `stack[-1]` (or empty stack) is shallower than depth of `path`
- Add tuple and cumulate the total length
- If `name` has `.` then it's a file path and we can compare it with `ans` to get the longest.
### Implementation
```
class Solution:
    def lengthLongestPath(self, s: str) -> int:
        paths, stack, ans = s.split('\
'), [], 0
        for path in paths:
            p = path.split('\	')
            depth, name = len(p) - 1, p[-1]
            l = len(name)
            while stack and stack[-1][1] >= depth: stack.pop()
            if not stack: stack.append((l, depth))
            else: stack.append((l+stack[-1][0], depth))
            if '.' in name: ans = max(ans, stack[-1][0] + stack[-1][1])   
        return ans
```
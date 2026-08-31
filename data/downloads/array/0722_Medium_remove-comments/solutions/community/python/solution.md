# Easy to understand using Python

**Author:** fguo10
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-comments/solutions/2446606/](https://leetcode.com/problems/remove-comments/solutions/2446606/)

---

```
class Solution:
    def removeComments(self, source: List[str]) -> List[str]:
        ans, inComment = [], False
        new_str = ""
        for c in source:
            if not inComment: new_str = ""
            i, n = 0, len(c)
            # inComment, we find */
            while i < n:
                if inComment:
                    if c[i:i + 2] == '*/' and i + 1 < n:
                        i += 2
                        inComment = False
                        continue
                    i += 1
                # not in Comment, we find /* // and common character
                else:
                    if c[i:i + 2] == '/*' and i + 1 < n:
                        i += 2
                        inComment = True
                        continue
                    if c[i:i + 2] == '//' and i + 1 < n:
                        break
                    new_str += c[i]
                    i += 1
            if new_str and not inComment:
                ans.append(new_str)
                    

        return ans
```
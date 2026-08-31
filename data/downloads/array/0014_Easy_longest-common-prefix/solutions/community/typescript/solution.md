# Typescript solution.

**Author:** upikoth
**Votes:** 34
**Link:** [https://leetcode.com/problems/longest-common-prefix/solutions/1923947/](https://leetcode.com/problems/longest-common-prefix/solutions/1923947/)

---

```typescript
function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }

    if (prefix === '') {
      return prefix;
    }
  }
  
  return prefix;
};
```
Please upvote if you found the solution useful.
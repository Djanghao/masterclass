# Modern JavaScript / TypeScript Stack O(N)

**Author:** jingdamai
**Votes:** 4
**Link:** [https://leetcode.com/problems/simplify-path/solutions/1050751/](https://leetcode.com/problems/simplify-path/solutions/1050751/)

---

```
const simplifyPath = (path: string): string => {
    const stack = [];
    
    for (const entity of path.split('/')) {
        if (!entity || entity == '.') {
            continue;
        }
        if (entity == '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(entity);
        }
    }
    return `/${stack.join("/")}`;
};
```
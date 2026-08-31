# TypeScript | Some and Backtracking

**Author:** Matt_HackerMan
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-pattern-ii/solutions/5202160/](https://leetcode.com/problems/word-pattern-ii/solutions/5202160/)

---

```typescript
function wordPatternMatch(p: string, s: string): boolean {
    return (function recurse(p: string, s: string, m: { [key: string]: string }, u: Set<string>): boolean {
        if (p.length === 0) return s.length === 0;
        let next = p[0];
        let curr = "";
        return [...s].some((x, i) => {
            curr += x;
            if (m[next] && m[next] === curr) {
                if (recurse(p.substring(1), s.substring(i + 1), m, u)) return true;
            } else if (m[next] === undefined && !u.has(curr)) {
                m[next] = curr;
                u.add(curr);
                if (recurse(p.substring(1), s.substring(i + 1), m, u)) return true;
                delete m[next];
                u.delete(curr);
            }
        });
    })(p, s, {}, new Set<string>());
}


```
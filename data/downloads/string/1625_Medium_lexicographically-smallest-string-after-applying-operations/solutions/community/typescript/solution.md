# TypeScript Brute Force DFS

**Author:** Plasticc
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/3964656/](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/3964656/)

---

# Code
```
function findLexSmallestString(s: string, a: number, b: number): string {
    let best = s;

    function add(s: number[]): number[] {
        const res = s.slice();
        for (let i = 1; i < s.length; i += 2) res[i] = (res[i] + a) % 10;
        return res;
    }

    function rotate(s: number[]): number[] {
        const res = s.slice();
        res.splice(0, 0, ...res.splice(res.length - b, b));
        return res;
    }

    const seen = new Set();
    function dfs(s: number[]) {
        const sn = s.join('');
        if (seen.has(sn)) return;
        seen.add(sn);
        if (sn < best) best = sn;
        dfs(add(s));
        dfs(rotate(s));
    }

    dfs(s.split('').map(s => parseInt(s, 10)));
    return best;
};
```
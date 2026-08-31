# traversal 2 times, 1st round find a celebrity, 2nd, verify it is celebrity. O(n)

**Author:** goodgoodwish
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-celebrity/solutions/1227212/](https://leetcode.com/problems/find-the-celebrity/solutions/1227212/)

---

traversal 2 times, 1st round find a celebrity, 2nd, verify it is celebrity.

O(3n), for follow up.

```
var solution = function(knows: any) {

    return function(n: number): number {
        let cl = 0;
        for (let i=1;i<n;i++) {
            if (knows(cl, i)) {
                cl = i
            }
        }
        for (let i=0;i<n;i++) {
            if (i===cl) continue;
            if (knows(cl, i)) return -1;
            if (! knows(i, cl)) return -1;
        }
        return cl;
    };
};
```
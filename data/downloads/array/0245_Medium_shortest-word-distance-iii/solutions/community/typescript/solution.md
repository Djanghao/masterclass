# TypeScript | One-Pass Reduce Function

**Author:** Matt_HackerMan
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance-iii/solutions/5089501/](https://leetcode.com/problems/shortest-word-distance-iii/solutions/5089501/)

---

```typescript
const shortestWordDistance = (d: string[], w1: string, w2: string): number => {
    let iw1 = -1, iw2 = -1, check = w1 === w2;
    return d.reduce((dist: number, x: string, i: number) => {
        switch(x) {
            case w1:
                if (check && iw1 >= 0) dist = Math.min(dist, i - iw1);
                iw1 = i;
                break;
            case w2:
                if (check && iw2 >= 0) dist = Math.min(dist, i - iw2);
                iw2 = i;
        }
        if (iw2 >= 0 && iw1 >= 0) dist = Math.min(dist, Math.abs(iw2 - iw1));
        return dist;
    }, Infinity);
};
```
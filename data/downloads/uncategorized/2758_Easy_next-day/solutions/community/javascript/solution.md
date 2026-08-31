# easy peasy

**Author:** sergeycw
**Votes:** 4
**Link:** [https://leetcode.com/problems/next-day/solutions/3703647/](https://leetcode.com/problems/next-day/solutions/3703647/)

---

```
Date.prototype.nextDay = function() {
    const next = this.getTime() + 86400000;
    return new Date(next).toISOString().split("T")[0];
}
```
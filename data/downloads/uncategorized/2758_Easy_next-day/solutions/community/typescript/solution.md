# Typescript solution - Beats 100%

**Author:** RedMonkez
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-day/solutions/4338785/](https://leetcode.com/problems/next-day/solutions/4338785/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
declare global {
    interface Date {
        nextDay(): string;
    }
}

Date.prototype.nextDay = function(): string {
	this.setDate(this.getDate() + 1);
    return this.toISOString().slice(0, 10);
}

/**
 * const date = new Date("2014-06-20");
 * date.nextDay(); // "2014-06-21"
 */
```
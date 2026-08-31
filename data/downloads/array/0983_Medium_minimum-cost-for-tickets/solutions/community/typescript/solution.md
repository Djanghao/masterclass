# Typescript Solution | Basic intutition

**Author:** alessandro-p
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-for-tickets/solutions/3350897/](https://leetcode.com/problems/minimum-cost-for-tickets/solutions/3350897/)

---

# Intuition
Every day you can either travel or not travel. 
- In case you are not travelling, then you can check the next day
- In case you are travelling, you can either purchase:
  - A 1 day ticket - purchase and check next day
  - A 7 days ticket - purchase and check 7 days from now
  - A 30 days ticket - purchase and check 30 days from now


# Code
```
function mincostTickets(days: number[], costs: number[]): number {
    const daySet = new Set(days);

    const dp = (d: number): number => {
        if (d > 365) {
            return 0;
        }

        if (typeof cache[d] !== 'undefined') {
            return cache[d];
        }

        return cache[d] = !daySet.has(d) ? 
            dp(d + 1) : // d is not among travelling days, skipping
            Math.min(
                costs[0] + dp(d + 1),
                costs[1] + dp(d + 7),
                costs[2] + dp(d + 30),
            ); 
    }
    
    const cache: number[] = new Array(days.length);

    // Starts from day 1
    return dp(1);
};

```
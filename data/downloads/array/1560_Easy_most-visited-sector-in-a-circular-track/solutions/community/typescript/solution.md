# easypeasy-1560. Most Visited Sector in a Circular Track- typescript solution

**Author:** Chandvanibharat
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/5309436/](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/5309436/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function mostVisited(n: number, rounds: number[]): number[] {
    const visitCount = new Array(n + 1).fill(0);

    for (let i = 1; i < rounds.length; i++) {
        let start = rounds[i - 1];
        let end = rounds[i];
        while (start !== end) {
            visitCount[start]++;
            start = (start % n) + 1;
        }
    }
    visitCount[rounds[rounds.length - 1]]++;

    const maxVisits = Math.max(...visitCount);
    const result = [];
    for (let i = 1; i < visitCount.length; i++) {
        if (visitCount[i] === maxVisits) {
            result.push(i);
        }
    }

    return result;
}

```
# Sample TypeScript solution

**Author:** witaall
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/4957841/](https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/4957841/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We should calculate the number of ladders need to be added.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Start with 0 as the current rung.
2. Iterate through the array of input rungs.
3. Check if the input rung can be reached. if if can, set the current rung to be the input rung and processd to the next input rung.
4. If the input rung cannot be reached , calculate the number of ladders needed to be added. Then, set the current rung to either the input rung or the rung that is reached by adding the necessary ladders.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code
```
function addRungs(rungs: number[], dist: number): number {
    let currRung: number = 0
    let ladderCount = 0
    
    rungs.forEach(rung => {
        const nextRung = currRung + dist

        if (nextRung >= rung) {
            currRung = rung
            return
        }

        const lackLadder = Math.floor((rung - currRung - 1) / dist)
        ladderCount += lackLadder
        currRung = (currRung + (dist * lackLadder)) > rung 
            ? (currRung + (dist * lackLadder))
            : rung
    })

    return ladderCount
};

```
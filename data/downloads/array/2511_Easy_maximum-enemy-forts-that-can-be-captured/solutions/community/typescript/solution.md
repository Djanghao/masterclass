# O(n) runtime O(1) space - Simpler than the others I saw for TS

**Author:** JonSchwarz23
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/4248525/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/4248525/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function captureForts(forts: number[]): number {
    let max = 0;
    let currentDistance = 0;
    let startingElement = -2;

    for(let i = 0; i < forts.length; i++) {
        if(forts[i] === 0) {
            currentDistance++;
            continue;
        }
        if((forts[i] === -1 && startingElement === 1) || (forts[i] === 1 && startingElement === -1)) {
            max = Math.max(max, currentDistance);
        }

        currentDistance = 0;
        startingElement = forts[i];
    }
    return max;
};
```
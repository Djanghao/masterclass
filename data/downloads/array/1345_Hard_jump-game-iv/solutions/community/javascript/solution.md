# ✅ [JavaScript] Beats 100% 🚀Runtime 167 ms

**Author:** akunopaka
**Votes:** 8
**Link:** [https://leetcode.com/problems/jump-game-iv/solutions/3258509/](https://leetcode.com/problems/jump-game-iv/solutions/3258509/)

---

# Intuition
My thought was to use a Breadth First Search (BFS) algorithm to solve this problem. This type of algorithm searches for a solution by exploring neighboring nodes before moving on to the next layer of nodes (step). The goal of this algorithm is to find the shortest path from the starting node to the destination node.

# Approach
I used a Map to store the index of each element in the array, and then used a Set to keep track of the indexes that have already been checked. I performed a BFS traversal of the array, starting from the last element, and going towards the beginning. I used the Map to check if the current element had any jumps associated with it and add those indexes to the Set of next indexes to be checked. I also added the adjacent indexes to the Set of next indexes to be checked. Finally, I incremented the step count each time I traversed the array.

# Code
```
/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
    const targetIndex = arr.length - 1;
    if (targetIndex < 1) return 0;

    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) map.set(arr[i], []);
        map.get(arr[i]).push(i);
    }

    let checkedIndexes = new Set();
    let stepCount = 0;
    let currentStepIndexes = new Set();
    currentStepIndexes.add(targetIndex);
    // from right to left. end to start. arr.length - 1 to 0
    while (currentStepIndexes.size > 0) {
        let nextStepIndexes = new Set();
        for (const currentStepIndex of currentStepIndexes.values()) {
            checkedIndexes.add(currentStepIndex);

            if (currentStepIndex == 0) return stepCount;
            // -1
            if (currentStepIndex > 0 && !checkedIndexes.has(currentStepIndex - 1)) {
                if ((currentStepIndex - 1) == 0) return ++stepCount;
                nextStepIndexes.add(currentStepIndex - 1);
            }
            // jumps
            const jumps = map.get(arr[currentStepIndex]);
            if (jumps) {
                map.delete(arr[currentStepIndex]);
                let limit = 0;
                for (const jumpIndex of jumps) {
                    if (jumpIndex !== currentStepIndex && !checkedIndexes.has(jumpIndex)) {
                        limit++;
                        if (limit > 5) break;
                        if (jumpIndex == 0) return ++stepCount;
                        nextStepIndexes.add(jumpIndex);
                    }
                }
            }
            // +1
            if (currentStepIndex < targetIndex && !checkedIndexes.has(currentStepIndex + 1)) {
                nextStepIndexes.add(currentStepIndex + 1);
            }
        }
        currentStepIndexes = nextStepIndexes;
        stepCount++;
    }
    return stepCount;
}
```

**If my work was useful for you, please upvote!**

\uD83D\uDC4D\uD83D\uDC4D\uD83D\uDC4D
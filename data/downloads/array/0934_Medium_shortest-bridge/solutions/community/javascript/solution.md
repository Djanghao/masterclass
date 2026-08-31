# JavaScript Easy Solution

**Author:** swolecoder
**Votes:** 8
**Link:** [https://leetcode.com/problems/shortest-bridge/solutions/765184/](https://leetcode.com/problems/shortest-bridge/solutions/765184/)

---

Credit: https://www.youtube.com/watch?v=B64JXbZsTOE

```
/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function (A) {
    let aIsland = [];
    let bIsland = [];

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {

            if (A[i][j] == 1) {


                if (!aIsland.length) {
                    dfs(A, i, j, aIsland)
                } else if (!bIsland.length) {
                    dfs(A, i, j, bIsland)
                }
            }
        }
    }


    let diff = aIsland.length > bIsland.length ? calculateDistance(bIsland, aIsland) : calculateDistance(aIsland, bIsland);
    return diff


    function dfs(A, i, j, result) {

        if (i < 0 || j < 0 || i >= A.length || j >= A.length || A[i][j] != 1) return;

        //mark as visited
        A[i][j] = 0;
        result.push([i, j])

        dfs(A, i - 1, j, result);
        dfs(A, i + 1, j, result);
        dfs(A, i, j - 1, result);
        dfs(A, i, j + 1, result);
    }



    function calculateDistance(aDistances, bDistance) {
        let min = Infinity;

        for (let i = 0; i < aDistances.length; i++) {
            for (let j = 0; j < bDistance.length; j++) {

                //find distance and  -1 beacuse beacuse it includes on of the points
                let calculateDiff = Math.abs(aDistances[i][0] - bDistance[j][0]) + Math.abs(aDistances[i][1] - bDistance[j][1]) - 1
                min = Math.min(calculateDiff, min)
            }
        }

        return min
    }
};

```
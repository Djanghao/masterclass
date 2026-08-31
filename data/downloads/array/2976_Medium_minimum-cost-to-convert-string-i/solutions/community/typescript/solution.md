# 🔥100% Run Time Solution with Java & JavaScript & TypeScript🔥.

**Author:** Ala-dine
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5542944/](https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5542944/)

---

# \u2705Intuition
### Transform Characters with Minimum Cost :
##### Convert each character in the `source` string to the corresponding character in the `target` string using the minimum cost possible, where each transformation between characters has a specified cost. Use a shortest-path algorithm to find the cheapest way to perform all necessary transformations.
# \u2705Approach
1. #### Initialize Distance Matrix: Create a matrix to represent the cost of transforming each letter to every other letter, starting with infinite costs except for zero cost from a letter to itself.
2. #### Populate Transformation Costs: Update the matrix with the given direct transformation costs.
3. #### Apply Floyd-Warshall Algorithm: Compute the shortest paths between all pairs of letters to find the minimum transformation costs.
4. #### Calculate Total Cost: Sum the minimum costs for transforming each character in the `source` string to the corresponding character in the `target` string. Return `-1` if any transformation is impossible
# \u2705Complexity
### \uD83D\uDD25Time complexity:
- ##### Initialization and Floyd-Warshall: $O(1)$ 
- ##### Total Cost Calculation: $O(n)$
### \uD83D\uDD25Space complexity:
- ##### Distance Matrix: $O(1)$ (constant space for 26x26 matrix)
- ##### Additional Space: $O(1)$ (constant space for other variables)
![Screenshot 2024-07-27 100525.png](./images/0.png)
# \u2705Code
``` java []
class Solution {
    public long minimumCost(String source, String target, char[] original, char[] changed, int[] cost) {
                int ALPHABET_SIZE = 26;
        int INF = Integer.MAX_VALUE / 2;

        int[][] dist = new int[ALPHABET_SIZE][ALPHABET_SIZE];
        for (int i = 0; i < ALPHABET_SIZE; i++) {
            for (int j = 0; j < ALPHABET_SIZE; j++) {
                dist[i][j] = INF;
            }
            dist[i][i] = 0;
        }

        for (int i = 0; i < original.length; i++) {
            int from = original[i] - 'a';
            int to = changed[i] - 'a';
            dist[from][to] = Math.min(dist[from][to], cost[i]);
        }

        for (int k = 0; k < ALPHABET_SIZE; k++) {
            for (int i = 0; i < ALPHABET_SIZE; i++) {
                for (int j = 0; j < ALPHABET_SIZE; j++) {
                    if (dist[i][k] < INF && dist[k][j] < INF) {
                        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                    }
                }
            }
        }

        long totalCost = 0;
        for (int i = 0; i < source.length(); i++) {
            int srcChar = source.charAt(i) - 'a';
            int tgtChar = target.charAt(i) - 'a';

            if (dist[srcChar][tgtChar] == INF) {
                return -1;
            }

            totalCost += dist[srcChar][tgtChar];
        }

        return totalCost;
    }
}
```
``` typescript []
function minimumCost(source: string, target: string, original: string[], changed: string[], cost: number[]): number {
      const ALPHABET_SIZE = 26;
    const INF = Infinity;

    const dist: number[][] = Array.from({ length: ALPHABET_SIZE }, () => Array(ALPHABET_SIZE).fill(INF));

    for (let i = 0; i < ALPHABET_SIZE; i++) {
        dist[i][i] = 0;
    }

    for (let i = 0; i < original.length; i++) {
        const from = original[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const to = changed[i].charCodeAt(0) - 'a'.charCodeAt(0);
        dist[from][to] = Math.min(dist[from][to], cost[i]);
    }

    for (let k = 0; k < ALPHABET_SIZE; k++) {
        for (let i = 0; i < ALPHABET_SIZE; i++) {
            for (let j = 0; j < ALPHABET_SIZE; j++) {
                if (dist[i][k] < INF && dist[k][j] < INF) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }

    let totalCost = 0;
    for (let i = 0; i < source.length; i++) {
        const srcChar = source[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const tgtChar = target[i].charCodeAt(0) - 'a'.charCodeAt(0);

        if (dist[srcChar][tgtChar] === INF) {
            return -1;
        }

        totalCost += dist[srcChar][tgtChar];
    }

    return totalCost;
};
```
``` javascript []
var minimumCost = function(source, target, original, changed, cost) {
    const ALPHABET_SIZE = 26;
    const INF = Infinity;

    // Step 1: Initialize distance matrix
    const dist = Array.from({ length: ALPHABET_SIZE }, () => Array(ALPHABET_SIZE).fill(INF));

    // Each character can be transformed into itself with zero cost
    for (let i = 0; i < ALPHABET_SIZE; i++) {
        dist[i][i] = 0;
    }

    // Step 2: Populate initial edges with given transformations
    for (let i = 0; i < original.length; i++) {
        const from = original[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const to = changed[i].charCodeAt(0) - 'a'.charCodeAt(0);
        dist[from][to] = Math.min(dist[from][to], cost[i]);
    }

    // Step 3: Run Floyd-Warshall algorithm to find all-pairs shortest paths
    for (let k = 0; k < ALPHABET_SIZE; k++) {
        for (let i = 0; i < ALPHABET_SIZE; i++) {
            for (let j = 0; j < ALPHABET_SIZE; j++) {
                if (dist[i][k] < INF && dist[k][j] < INF) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }

    // Step 4: Calculate the total cost to transform source into target
    let totalCost = 0;
    for (let i = 0; i < source.length; i++) {
        const srcChar = source[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const tgtChar = target[i].charCodeAt(0) - 'a'.charCodeAt(0);

        if (dist[srcChar][tgtChar] === INF) {
            return -1; // Transformation from srcChar to tgtChar is impossible
        }

        totalCost += dist[srcChar][tgtChar];
    }

    return totalCost;
};
```
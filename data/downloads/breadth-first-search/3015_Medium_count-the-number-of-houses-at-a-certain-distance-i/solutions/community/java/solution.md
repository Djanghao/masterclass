# [Java] ✅ ⬆️ Easy | Optimized ✅ | O(n^2)  | Floyd Warshal Standard |  Step By Step |. Clean | Simple

**Author:** sandeepk97
**Votes:** 34
**Link:** [https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4600661/](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4600661/)

---

**Complexity**
**Floyd Warshal**
Time complexity: O(n^3)
Space complexity: O(n^2)
```
class Solution {
    public int[] countOfPairs(int n, int x, int y) {
         // Initialization of Distance Matrix (dist):
         int[][] dist = new int[n + 1][n + 1];

        for (int i = 1; i <= n; i++) {
            Arrays.fill(dist[i], Integer.MAX_VALUE);
            dist[i][i] = 0; // The distance from a house to itself is zero.
            if (i < n) 
                dist[i][i + 1] = 1;  //there's a street connecting house i to house i + 1 with distance 1.
            if (i > 1) 
                dist[i][i-1] = 1; // there's a street connecting house i - 1 to house i with distance 1.
    
        }
        dist[x][y] = dist[y][x] = 1; // An additional street connects the house numbered x with the house numbered y.
        
        for (int k = 1; k <= n; k++) { // Floyd-Warshall algorithm to calculate all-pairs shortest paths
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n; j++) {
                    if (dist[i][k] != Integer.MAX_VALUE && dist[k][j] != Integer.MAX_VALUE) {
                        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                    }
                }
            }
        }
        
        // Counts the number of pairs of houses for each distance and stores it in a map (countMap).
        Map<Integer, Integer> countMap = new HashMap<>();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (dist[i][j] != Integer.MAX_VALUE && i!=j) {
                    countMap.put(dist[i][j], countMap.getOrDefault(dist[i][j], 0) + 1);
                }
            }
        }
        
        // Convert the map to the result array
        // result array where result[k - 1] stores the total number of pairs with minimum distance k.
        int[] result = new int[n];
        for (int k = 1; k <= n; k++) {
            result[k - 1] = countMap.getOrDefault(k, 0);
        }

        return result;
    }
}
```

**Optimized Solution:**
Time complexity: O(n^2)
Space complexity: O(1)
```
class Solution {
    public int[] countOfPairs(int n, int x, int y) {
        // Initialize an array to store the result (result):
        int[] result = new int[n];

        // Iterate over all pairs of houses:
        for (int i = 1; i <= n; i++) {
            for (int j = i + 1; j <= n; j++) {
                // Calculate the minimum distance using a different approaches
                int val = Math.min(
                    Math.abs(i - j),  // Direct distance between houses i and j, i->j 
                    Math.min(
                        Math.abs(i - x) + 1 + Math.abs(y - j),  // Distance through x and y,  i->x->y->j 
                        Math.abs(i - y) + 1 + Math.abs(x - j)  // Distance through y and x, i->y->x->j 
                    )
                );
                // Update the result array based on the minimum distance 
                result[val - 1] += 2; // from i to j and j to i
            }
        }
        return result;
    }
}
```
**Please Upvote**

# AC Java solution without extra space

**Author:** jeantimex
**Votes:** 195
**Link:** [https://leetcode.com/problems/paint-house-ii/solutions/69492/](https://leetcode.com/problems/paint-house-ii/solutions/69492/)

---

The idea is similar to the problem Paint House I, for each house and each color, the minimum cost of painting the house with that color should be the minimum cost of painting previous houses, and make sure the previous house doesn't paint with the same color.

We can use min1 and min2 to track the indices of the 1st and 2nd smallest cost till previous house, if the current color's index is same as min1, then we have to go with min2, otherwise we can safely go with min1.

The code below modifies the value of costs[][] so we don't need extra space.

    public int minCostII(int[][] costs) {
        if (costs == null || costs.length == 0) return 0;
            
        int n = costs.length, k = costs[0].length;
        // min1 is the index of the 1st-smallest cost till previous house
        // min2 is the index of the 2nd-smallest cost till previous house
        int min1 = -1, min2 = -1;
        
        for (int i = 0; i < n; i++) {
            int last1 = min1, last2 = min2;
            min1 = -1; min2 = -1;
            
            for (int j = 0; j < k; j++) {
                if (j != last1) {
                    // current color j is different to last min1
                    costs[i][j] += last1 < 0 ? 0 : costs[i - 1][last1];
                } else {
                    costs[i][j] += last2 < 0 ? 0 : costs[i - 1][last2];
                }
                
                // find the indices of 1st and 2nd smallest cost of painting current house i
                if (min1 < 0 || costs[i][j] < costs[i][min1]) {
                    min2 = min1; min1 = j;
                } else if (min2 < 0 || costs[i][j] < costs[i][min2]) {
                    min2 = j;
                }
            }
        }
        
        return costs[n - 1][min1];
    }
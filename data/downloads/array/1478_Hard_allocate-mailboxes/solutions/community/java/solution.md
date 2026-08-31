# Java | Heavily Commented | Proof on why median work

**Author:** khaufnak
**Votes:** 84
**Link:** [https://leetcode.com/problems/allocate-mailboxes/solutions/685321/](https://leetcode.com/problems/allocate-mailboxes/solutions/685321/)

---

Core idea: Best way to place 1 mailbox for a set of houses is to place at the house that sits in the middle.

Why?

>Let's assume there are r houses to right and l houses to the left of the place where we place mailbox. Now, If you don't place the mailbox in the middle house but to the left of the middle(i.e. r > l). Moving one place to right will reduce distances by r and increase distance by l which will be an improvement since r > l. Hence, it's best we keep moving towards middle house.

For example: [6, 8, 9, 11, 15] and you have 1 mailbox. 

Now if you place mailbox at 6: Cost = (8-6) + (9-6) + (11-6) + (15-6)                                 ====> 19
Now if you place mailbox at 7: Cost = (7-6) + (8-7) + (9-7) + (11-7) + (15-7)                    ====> 16
Now if you place mailbox at 8: Cost = (8-6)  + (9-8) + (11-8) + (15-8)                                ====> 13
Now if you place mailbox at 9: Cost = (9-6)  + (9-8) + (11-9) + (15-9)                                ====> 12   <---------- Middle house has lowest
Now if you place mailbox at 10: Cost = (10-6)  + (10-8) + (10-9) + (11-10) + (15-10)    ====> 13
Now if you place mailbox at 11: Cost = (11-6)  + (11-8) + (11-9) + (15-11)                      ====> 14
Now if you place mailbox at 15: Cost = (15-6)  + (15-8) + (15-9) + (15-11)                      ====> 26

9 has the lowest cost.

Now, we can recursively solve this:

At step 1: Try to place 1st mailbox in (1, 2, 3, 4 .. n) houses. After placing at the ith point, move to step 2
At step 2: Try to place 2nd mailbox in (i+1, i+2, ... n) houses.

At step k: Try to place kth mailbox remaining houses.

Possible common mistake: We will need to sort the houses since they are not given sorted in input.


```
class Solution {
    int MAX = 10000000;

    public int minDistance(int[] houses, int k) {
        int n = houses.length;
        Arrays.sort(houses);
        int[][] dp = new int[n][k];
        for (int i = 0; i < n; ++i) Arrays.fill(dp[i], -1);
        return solve(houses, k, 0, 0, dp);
    }

    public int solve(int[] houses, int k, int pos, int curK, int[][] dp) {
        if (pos == houses.length) {
            if (curK == k) {
                return 0;
            }
            return MAX;
        }
        if (curK == k) return MAX;
        if (dp[pos][curK] != -1) return dp[pos][curK];

        int answer = MAX;
        for (int i = pos; i < houses.length; ++i) {
            // Best way to place a mailbox between [i, pos] houses is to place at the median house
            int median = houses[(i + pos) / 2];

            // Step 1: Calculate cost when we place at median house
            int cost = 0;
            for (int j = pos; j <= i; ++j) {
                cost += Math.abs(median - houses[j]);
            }

            // Step 2: Recursively, calculate cost of placing rest of the mailboxes at i+1 pos
            answer = Math.min(answer, solve(houses, k, i + 1, curK + 1, dp) + cost);
        }

        dp[pos][curK] = answer;
        return answer;
    }
}
```


Complexity: There are n * k DP states with each performing n * n operations. ```O(k * n^3)``` 

Note, we can pre-compute cost for all range of houses beforehand and therefore, reducing the complexity:

```
class Solution {
    int MAX = 10000000;

    public int minDistance(int[] houses, int k) {
        int n = houses.length;
        Arrays.sort(houses);
        int[][] dp = new int[n][k];
        int[][] cost = new int[n][n];
		
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                int median = houses[(i + j) / 2];
                int sum = 0;
                for (int l = i; l <= j; ++l) {
                    sum += Math.abs(median - houses[l]);
                }
                cost[i][j] = sum;
            }
        }
        for (int i = 0; i < n; ++i) Arrays.fill(dp[i], -1);
        return solve(houses, k, 0, 0, dp, cost);
    }

    public int solve(int[] houses, int k, int pos, int curK, int[][] dp, int[][] cost) {
        if (pos == houses.length) {
            if (curK == k) {
                return 0;
            }
            return MAX;
        }
        if (curK == k) return MAX;
        if (dp[pos][curK] != -1) return dp[pos][curK];

        int answer = MAX;
        for (int i = pos; i < houses.length; ++i) {
            answer = Math.min(answer, solve(houses, k, i + 1, curK + 1, dp, cost) + cost[pos][i]);
        }

        dp[pos][curK] = answer;
        return answer;
    }
}
```

Complexity: There are n * k DP states with each performing n operations. ```O(n^3 + k * n^2)```
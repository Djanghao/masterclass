# [Java] O(n^3), O(n^2 log n) and O(n^2) with explanation

**Author:** shk10
**Votes:** 159
**Link:** [https://leetcode.com/problems/stone-game-v/solutions/911676/](https://leetcode.com/problems/stone-game-v/solutions/911676/)

---

**O(n^3)**

**Basic approach**
dp[i][j]: max score you can obtain from stones[i..j]
sum[i][j]: sum of stoneValues[i..j]
Try all possible k i.e. k goes from i to j-1:
we have 2 choices for score: **sum[i][k] + dp[i][k]** and **sum[k+1][j] + dp[k+1][j]**
but we can only pick the side where sum is smaller or either of them when both sides are equal.
Take the maximum score from all of these choices and we have computed dp[i][j].
In all my codes, I am building the dp table bottom-up i.e. dp[0][1], dp[1][2] gets calculated before dp[0][2].

```
class Solution {
    public int stoneGameV(int[] stoneValue) {
        int n = stoneValue.length;
        int[] pre = new int[n+1];
        for(int i = 1; i <= n; i++) {
            pre[i] = pre[i-1] + stoneValue[i-1];
        }
        int[][] dp = new int[n][n];
        for(int l = 1; l < n; l++) {
            for(int i = 0; i < n-l; i++) {
                int j = i+l, res = 0;
                for(int k = i; k < j; k++) {
                    int left = pre[k+1] - pre[i], right = pre[j+1] - pre[k+1];
                    if(left < right) {
                        res = Math.max(res, left + dp[i][k]);
                    } else if(left > right) {
                        res = Math.max(res, right + dp[k+1][j]);
                    } else {
                        res = Math.max(res, left + dp[i][k]);
                        res = Math.max(res, right + dp[k+1][j]);
                    }
                }
                dp[i][j] = res;
            }
        }
        return dp[0][n-1];
    }
}
```

**O(n^2 log n)**

**Optimization**
As k goes from i to j in stones[i..j], sum of left part sum[i][k] increases continuously and it remains a valid subarray for our consideration for calculating dp[i][j] until the point when it becomes greater than right half. From that point onwards, all the right ones are valid subarrays for consideration. We can find this critical k (= **k'**) using binary search. Forget about boundary cases and equal halves etc for now, just try to understand the general idea.

dp[i][j] = max( max(sum[i][k] + dp[i][k]) for k: i to **k'**, max(sum[k][j] + dp[k][j]) for k: **k'**+1 to j )
(refer to the code for exact condition for all cases)

If we have to calculate first and second terms in above by iterating from k: i to **k'** or k: **k'**+1 to j, then it'd take O(n) time and we are back to first solution. What we can instead do is maintain 2 more arrays defined as:
left[i][j] = max( sum[i][k] + dp[i][k] for k: i to j )
right[i][j] = max( sum[k][j] + dp[k][j] for k: i to j )

and use them to redefine dp[i][j] = max( left[i][**k'**], right[**k'**+1][j] )

Note that left and right arrays can also be calculated along with dp table so they don't increase our worst case time complexity.

left[i][j] = max( left[i][j-1],  sum[i][j] + dp[i][j] )
right[i][j] = max( right[i+1][j],  sum[i][j] + dp[i][j] )

With these ideas in mind and taking care of boundary cases like **k'** == i or **k'** == j and equal halves etc, we have our solution ready.

```
class Solution {
    // returns first index where sum of left half >= sum of right half
    private int search(int[] pre, int l, int r) {
        int sum = pre[r+1] - pre[l], L = l;
        while(l < r) {
            int m = l + ((r - l) >> 1);
            if(((pre[m+1] - pre[L]) << 1) >= sum) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        return l;
    }
    public int stoneGameV(int[] stoneValue) {
        int n = stoneValue.length;
        int[] pre = new int[n+1];
        for(int i = 1; i <= n; i++) {
            pre[i] = pre[i-1] + stoneValue[i-1];
        }
        int[][] dp = new int[n][n], left = new int[n][n], right = new int[n][n];
        for(int i = 0; i < n; i++) {
            left[i][i] = right[i][i] = stoneValue[i];
        }
        for(int l = 1; l < n; l++) {
            for(int i = 0; i < n-l; i++) {
                int j = i+l, k = search(pre, i, j);
                int sum = pre[j+1] - pre[i], leftHalf = pre[k+1] - pre[i];
                if((leftHalf << 1) == sum) {    // equal parts
                    dp[i][j] = Math.max(left[i][k], right[k+1][j]);
                } else {    // left half > right half
                    dp[i][j] = Math.max(k == i ? 0 : left[i][k-1], k == j ? 0 : right[k+1][j]);
                }
                left[i][j] = Math.max(left[i][j-1], sum + dp[i][j]);
                right[i][j] = Math.max(right[i+1][j], sum + dp[i][j]);
            }
        }
        return dp[0][n-1];
    }
}
```

**O(n^2)**

**Optimization**
We can optimize the previous solution even further by getting rid of the binary search step needed to find the critical k (= **k'**) of stones[i..j].
Binary search is great when we need the answer for arbitrary i and j but why not calculate dp[i][j] in such an order where we could leverage the **k'** information from previous i and j.

Suppose we know the **k'** for stones[i..j], what do we know about **k'** for stones[i..j+1]? It is either the same or it got shifted a few places to the right.
And so if we calculate dp values in the order: dp[i][i], dp[i][i+1], dp[i][i+2], ..., dp[i][j], we can essentially keep track of **k'** as we go within that same linear time bound.

Using this idea, we implement the final solution. Couple of pointers about my code:
* mid: represents **k'** or first index such that left half >= right half
* with i < j, max[i][j] represents left[i][j] of previous solution i.e. max(dp[i][i], dp[i][i+1], dp[i][i+2] .. dp[i][j]) and max[j][i] represents right[i][j] of previous solution i.e. max(dp[i][j], dp[i+1][j], dp[i+2][j] .. dp[j][j]). We could have used two different arrays left and right just like previous solution but this trick saves space.
* I am traversing in the order: dp[j][j], dp[j-1,j], dp[j-2, j], .., dp[i][j] instead of the above mentioned order but the idea remains same.

```
class Solution {
    public int stoneGameV(int[] stoneValue) {
        int n = stoneValue.length;
        int[][] dp = new int[n][n], max = new int[n][n];
        for(int i = 0; i < n; i++) {
            max[i][i] = stoneValue[i];
        }
        for(int j = 1; j < n; j++) {
            int mid = j, sum = stoneValue[j], rightHalf = 0;
            for(int i = j-1; i >= 0; i--) {
                sum += stoneValue[i];
                while((rightHalf + stoneValue[mid]) * 2 <= sum) {
                    rightHalf += stoneValue[mid--];
                }
                dp[i][j] = rightHalf * 2 == sum ? max[i][mid] : (mid == i ? 0 : max[i][mid - 1]);
                dp[i][j] = Math.max(dp[i][j], mid == j ? 0 : max[j][mid + 1]);
                max[i][j] = Math.max(max[i][j - 1], dp[i][j] + sum);
                max[j][i] = Math.max(max[j][i + 1], dp[i][j] + sum);
            }
        }
        return dp[0][n-1];
    }
}
```
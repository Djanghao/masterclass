# 🚀️🔥️ Kotlin O(n) solution brute force to memoized DFS and tabulation

**Author:** Klemo1997
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-cost-for-tickets/solutions/3353097/](https://leetcode.com/problems/minimum-cost-for-tickets/solutions/3353097/)

---

# Approach
Approach is to do a brute force, which is quite hard, but intuition is like this:

At given position i, we can do three things:
- buy a 1 day ticket
- buy a 7 day ticket
- buy a 30 day ticket

The trick is to jump to first next index where our ticket is expired. We can compute that by a loop, or a binary search (since our day array is sorted).

# Complexity
- Time complexity:
Approximately $$O(n)$$ (+ a little overhead caused by next function calls)

- Space complexity:
$$O(n)$$ at most allocated in call stack

# Code - brute force dfs
```java []
class Solution {
    private int[] days;
    private int[] costs;
    private final int DAY_1 = 0;
    private final int DAY_7 = 1;
    private final int DAY_30 = 2;

    public int mincostTickets(int[] days, int[] costs) {
        this.days = days;
        this.costs = costs;
        return dfs(0);
    }

    private int dfs(int i) {
        if (i == days.length) return 0;
        return Math.min(
            Math.min(
                costs[DAY_1] + dfs(next(i, 1)), // buy 1 day ticket
                costs[DAY_7] + dfs(next(i, 7)) // buy 7 day ticket
            ),
            costs[DAY_30] + dfs(next(i, 30)) // buy 30 day ticket
        );
    }

    private int next(int i, int ticket) {
        int low = i+1;
        int high = days.length;
        while (low < high) {
            int mid = (low + high) / 2;
            if (days[mid] < days[i] + ticket) {
                low = mid+1;
            } else {
                high = mid;
            }
        }
        return low;
    }
}
```
```kotlin []
class Solution {
    private lateinit var days: IntArray
    private lateinit var costs: IntArray
    private val DAY_1 = 0
    private val DAY_7 = 1
    private val DAY_30 = 2

    fun mincostTickets(days: IntArray, costs: IntArray): Int {
        this.days = days
        this.costs = costs
        return dfs(0)
    }

    private fun dfs(i: Int): Int {
        if (i == days.size) return 0
        return minOf(
            costs[DAY_1] + dfs(next(i, 1)), // buy 1 day ticket
            costs[DAY_7] + dfs(next(i, 7)), // buy 7 day ticket
            costs[DAY_30] + dfs(next(i, 30)) // buy 30 day ticket
        )
    }

    private fun next(i: Int, ticket: Int): Int {
        var low = i+1
        var high = days.size
        while (low < high) {
            val mid = (low + high) / 2
            if (days[mid] < days[i] + ticket) {
                low = mid + 1
            } else {
                high = mid
            }
        }

        return low
    }
}
```

This gives us a brute force algorithm, where we get optimal solution at index i. This means solution to a subproblem we can memoize.

# Code - memoized dfs

```
class Solution {
    private int[] days;
    private int[] costs;
    private int[] memo;
    private final int DAY_1 = 0;
    private final int DAY_7 = 1;
    private final int DAY_30 = 2;

    public int mincostTickets(int[] days, int[] costs) {
        this.days = days;
        this.costs = costs;
        memo = new int[days.length];
        Arrays.fill(memo, -1);
        return dfs(0);
    }

    private int dfs(int i) {
        if (i == days.length) return 0;
        if (memo[i] != -1) return memo[i];
        memo[i] = Math.min(
            Math.min(
                costs[DAY_1] + dfs(next(i, 1)), // buy 1 day ticket
                costs[DAY_7] + dfs(next(i, 7)) // buy 7 day ticket
            ),
            costs[DAY_30] + dfs(next(i, 30)) // buy 30 day ticket
        );
        return memo[i];
    }

    private int next(int i, int ticket) {
        int low = i+1;
        int high = days.length;
        while (low < high) {
            int mid = (low + high) / 2;
            if (days[mid] < days[i] + ticket) {
                low = mid+1;
            } else {
                high = mid;
            }
        }
        return low;
    }
}
```
From this approach we can come up with DP algo with single foreach where we iterate from end to beginning, just like in the dfs. Answer at i would be minimum of:

1. day1Cost + memo[i+1]
2. day7Cost + memo at first expired index
3. day30Cost + memo at first expired index
 
The answer is then at first index of memo.

# Code - DP tabulation
```
class Solution {
    private val DAY_1 = 0
    private val DAY_7 = 1
    private val DAY_30 = 2

    fun mincostTickets(days: IntArray, costs: IntArray): Int {
        val memo = IntArray(days.size+1) { -1 }
        memo[memo.lastIndex] = 0
        for (i in days.size-1 downTo 0) {
            memo[i] = minOf(
                costs[DAY_1] + memo[i+1],
                costs[DAY_7] + memo[next(days, i, 7)],
                costs[DAY_30] + memo[next(days, i, 30)]
            )
        }

        return memo[0]
    }

    private fun next(days: IntArray, i: Int, ticket: Int): Int {
        var low = i+1
        var high = days.size
        while (low < high) {
            val mid = (low + high) / 2
            if (days[mid] < days[i] + ticket) {
                low = mid + 1
            } else {
                high = mid
            }
        }
        return low
    }
}
```

---


\uD83D\uDC4D\uFE0F\uD83D\uDC4D\uFE0F If you like this solution or find it helpful, please upvote this post. \uD83D\uDC4D\uFE0F\uD83D\uDC4D\uFE0F
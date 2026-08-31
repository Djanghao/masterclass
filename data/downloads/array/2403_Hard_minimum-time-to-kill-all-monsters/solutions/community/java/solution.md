# [Java] DP with explanation

**Author:** alreadytaken
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/2548479/](https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/2548479/)

---

## Prerequisite 

Assume a binary number `killed` where each bit denotes monster.
- bit = `0` means the monster is alive, and 
- bit = `1` means the monster is dead.
> Example :
```killed = 10000``` means there are 4 monsters and are alive. (exclude the most significant bit)
```killed = 10011``` means there are 4 monsters and 2 are dead.

This binary number `killed` will be used as **history** in our solution.

Now all we need to do is ***explore all possible orders of killing a monster.*** The order requiring minimum no. of days will be the answer.

<hr />
<br />

## Kill a monster

Before killing a monster, we need to check if it's alive or not. A monster is alive if it's corresponding bit is 0.
> ``` killed&(1<<i) == 0 ``` : check if monster at index `i` is alive

Now, to kill as monster, we simply need to set corresponding bit to 1 i.e., 
> ```killed = killed|(1<<i)``` : kill the monster at index `i`

<br />

*No. of days required to killed a monster `i`* = `ceiling(power[i] / gain)`. This can also be written as `(power[i] + gain - 1) / gain`.



<hr />
<br />

## DP solution with memoization
Using our above understanding, the following solution can be used to explore all order of killing the monsters:

```
class Solution {

    int n;
    int[] power;
    Long[][] dp;

    public long minimumTime(int[] p) {
        power = p;
        n = power.length;
        dp = new Long[n + 1][1 << (n + 1)];
        return killOrSpare(1 << n, 1);
    }

    private long killOrSpare(int killed, int gain) {
        if (gain == n + 1) return 0;
        if (dp[gain][killed] != null) return dp[gain][killed];

        long days = Long.MAX_VALUE;
        for (int i = 0; i < n; i++) {
            if ((killed & (1 << i)) == 0) {
                int dayReqToKill = (power[i] + gain - 1) / gain;
                long daysToKillAll = dayReqToKill + killOrSpare(killed | (1 << i), gain + 1);
                days = Math.min(days, daysToKillAll);
            }
        }
        return dp[gain][killed] = days;
    }
}
```

## Followup - beats 100

Since `killed` already contains full history, and no. of set bits in killed is gain, **gain is a redundant state**. You can calculate gain everytime by calling ```Integer.bitCount(killed)```, but it will take O(32) time.

The final solution can be improved to following which beats 100% of Java solution while writing this post.

```
class Solution {

    int n;
    int[] power;
    Long[] dp;

    public long minimumTime(int[] p) {
        power = p;
        n = power.length;
        dp = new Long[1 << (n + 1)];
        return killOrSpare(1 << n, 1);
    }

    private long killOrSpare(int killed, int gain) {
        if (gain == n + 1) return 0;
        if (dp[killed] != null) return dp[killed];

        long days = Long.MAX_VALUE;
        for (int i = 0; i < n; i++) {
            if ((killed & (1 << i)) == 0) {
                int dayReqToKill = (power[i] + gain - 1) / gain;
                long daysToKillAll = dayReqToKill + killOrSpare(killed | (1 << i), gain + 1);
                days = Math.min(days, daysToKillAll);
            }
        }
        return dp[killed] = days;
    }
}
```
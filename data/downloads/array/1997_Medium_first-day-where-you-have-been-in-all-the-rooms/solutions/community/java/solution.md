# Java solution with DP

**Author:** PvP
**Votes:** 3
**Link:** [https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/1681979/](https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/1681979/)

---

1.dp[i]  means the number of days that you need to first get into the ith room.
2.First, you spend dp[i-1] day to get into i-1 room. Next you will be in nextVisit[i-1] room. The only way to get to ith room is to be in i-1 room again so you will visit i-1 room twice. Then you can go to ith room. 
3.The days that we need to get to i-1 room again is dp[i-1] - dp[nextVisit[i-1]]. 
4.If you visit a room for an odd times, you will go to a room with lower number next. If you go to a room with a higher number. That means, all the rooms with lower numbers you have already visited for even times.
```
class Solution {
    public int firstDayBeenInAllRooms(int[] nextVisit) {
        int[] dp = new int[nextVisit.length];
        int M = 1000000007;
        for (int i = 1; i < dp.length; i++) {
            int steps = 2 * dp[i-1] - dp[nextVisit[i-1]] + 2;
            dp[i] = steps < 0 ? (steps + M) % M : steps % M;

        }
        return dp[dp.length-1];
    }
}
```
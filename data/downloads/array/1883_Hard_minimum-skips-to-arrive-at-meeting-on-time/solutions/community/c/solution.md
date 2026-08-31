# 2D DP

**Author:** votrubac
**Votes:** 40
**Link:** [https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/1242066/](https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/1242066/)

---

I misread the length constraint being 100,000 instead of 1,000, and wasted a lot of time trying to find a better-than-quadratic solution. With 1,000 being a constraint, 2D DP should do.
 
The idea is to compute the minimum travel time if we are allowed to do 0 skips. Then, do it for 1 skip. And so on. When the travel time is less or equal to the target, we return the current number of skips. With memoisation, the previous computations (for smaller number of allowed skips) are reused. 
 
It could be tricky to realize that we should process roads in reverse. This is because the time to travel `i - 1` roads affect the time to travel the `i`-th road. I think it's possible to do the opposite, but we will have to pass forward the remainder (and memoise for it).

> I was able to model it by choosing to take 0, 1, 2, and so on skips in a row. After `k` skips, we can aggregate the travel time for `k + 1`  roads. We then round it up, and future computations are independent. My solution got accepted - after a few optimizations - with 800 ms runtime (vs. < 50 ms for the reverse solution below).
 
Instead of dealing with fractions, we can operate in kilometers. E.g. the farthest distance we can travel is `speed * hours`. And, when we travel a road, we add some kilometers so that the distance is divisible by `speed`. This is an equivalent of waiting till the next integer hour.

> Note that we can subtract the last road from the distance (`speed * hours - dist.back()`).

Finally, for each stop `i` and allowed number of `skips` we have two options:
- Do not skip the wait. The result is the best time for `i - 1, skips` plus the road distance `dist[i]`.
	- We then round this result up to the next number divisible by `speed`. This is how we add the wait.
- Skip the wait. The result is the best time for `i - 1, skips - 1` plus the current distance.
	- We do not add the wait.

The result for `i, skips` is the smallest time from these two options.

**C++**
```cpp
int dp[1000][1000] = {};
int dfs(vector<int>& dist, int i, int skips, int speed) {
    if (skips < 0 || i < 0)
        return skips < 0 ? 1e9 : 0;
    if (!dp[i][skips])
        dp[i][skips] = min(dist[i] + dfs(dist, i - 1, skips - 1, speed), 
            (dfs(dist, i - 1, skips, speed) + dist[i] + speed - 1) / speed * speed);
    return dp[i][skips];
}
int minSkips(vector<int>& dist, int speed, int hours) {
    if ((long)hours * speed > 1e9)
        return 0;
    if (accumulate(begin(dist), end(dist), 0) > hours * speed)
        return -1;
    for (int skips = 0; skips < dist.size(); ++skips)
        if (dfs(dist, dist.size() - 2, skips, speed) <= hours * speed - dist.back())
            return skips;
    return -1;
}
```
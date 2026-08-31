# Two Python solutions

**Author:** StefanPochmann
**Votes:** 87
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/84769/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/84769/)

---

To find out how much money I need to win the range lo..hi (the game starts with the range 1..n), I try each possible x in the range (except hi, which is pointless because hi-1 costs less and provides more information), calculate how much I need when using that x, and take the minimum of those amounts.

Bottom-up dynamic programming:

    def getMoneyAmount(self, n):
        need = [[0] * (n+1) for _ in range(n+1)]
        for lo in range(n, 0, -1):
            for hi in range(lo+1, n+1):
                need[lo][hi] = min(x + max(need[lo][x-1], need[x+1][hi])
                                   for x in range(lo, hi))
        return need[1][n]

Top-down with memoization, subclassing `dict` for convenience. Simpler than bottom-up because I don't need to specify ranges/loops for `lo` and `hi` and don't need to think about their orders and how big my DP matrix needs to be. On the other hand, it's slower.

    def getMoneyAmount(self, n):
        class Need(dict):
            def __missing__(self, (lo, hi)):
                if lo >= hi:
                    return 0
                ret = self[lo, hi] = min(x + max(self[lo, x-1], self[x+1, hi])
                                         for x in range(lo, hi))
                return ret
        return Need()[1, n]

Got the motivation to use tuples as indexes from @agave. I had used that myself sometimes in the past, but thought it would be very slow. Turns out it's not that slow. I should do some timings to get a better feeling for it...
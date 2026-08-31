# Static DP, C++ 12 ms, Python 172 ms, Ruby 384 ms

**Author:** StefanPochmann
**Votes:** 187
**Link:** [https://leetcode.com/problems/perfect-squares/solutions/71512/](https://leetcode.com/problems/perfect-squares/solutions/71512/)

---

There are so **many** "large" test cases that it's worthwhile to keep data between test cases rather than recomputing from scratch all the time. At least in the slower languages. My `dp` tells the numbers of squares needed for the first integers, and when asked about a new `n`, I extend `dp` just as much as necessary.

---

**C++** ... 28 ms

    int numSquares(int n) {
        static vector<int> dp {0};
        while (dp.size() <= n) {
            int m = dp.size(), squares = INT_MAX;
            for (int i=1; i*i<=m; ++i)
                squares = min(squares, dp[m-i*i] + 1);
            dp.push_back(squares);
        }
        return dp[n];
    }

**C++** ... 12 ms

Switching the loops makes it less nice but faster:

    int numSquares(int n) {
        static vector<int> dp {0};
        int m = dp.size();
        dp.resize(max(m, n+1), INT_MAX);
        for (int i=1, i2; (i2 = i*i)<=n; ++i)
            for (int j=max(m, i2); j<=n; ++j)
                if (dp[j] > dp[j-i2] + 1)
                    dp[j] = dp[j-i2] + 1;
        return dp[n];
    }

---

**Python** ... 172 ms

    class Solution(object):
        _dp = [0]
        def numSquares(self, n):
            dp = self._dp
            while len(dp) <= n:
                dp += min(dp[-i*i] for i in range(1, int(len(dp)**0.5+1))) + 1,
            return dp[n]

---

**Ruby** ... 384 ms

    $dp = [0]
    def num_squares(n)
      $dp << (1..$dp.size**0.5).map { |i| $dp[-i*i] }.min + 1 until $dp[n]
      $dp[n]
    end

There's probably a cleaner way than using a global variable, but I'm new to Ruby and don't know one.
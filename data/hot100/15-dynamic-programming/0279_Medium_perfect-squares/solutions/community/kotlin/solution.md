# 🎨 The ART of dynamic programming

**Author:** claytonjwong
**Votes:** 4
**Link:** [https://leetcode.com/problems/perfect-squares/solutions/708644/](https://leetcode.com/problems/perfect-squares/solutions/708644/)

---

**Synopsis:**

[\uD83C\uDFA8 The **ART** of dynamic programming](https://leetcode.com/discuss/general-discussion/712010/the-art-of-dynamic-programming-an-intuitive-approach-from-apprentice-to-master/)

1. **A**ll possibilities considered via top-down brute-force search
2. **R**emember previous subproblems' optimal solutions using a memo
3. **T**urn the top-down memoized solution upside-down for a bottom-up iterative solution

---

**Javascript Solutions:**

1. **A**ll possibilities considered via top-down brute-force search
```
let numSquares = n => {
    let go = (i = n) => {
        if (!i)
            return 0;
        let best = 123456789;
        for (let k = 1; k <= Math.floor(Math.sqrt(i)); ++k)
            if (0 <= i - k * k)
                best = Math.min(best, 1 + go(i - k * k));
        return best;
    };
    return go();
};
```

2. **R**emember previous subproblems' optimal solutions using a memo
```
let numSquares = (n, m = new Map()) => {
    let go = (i = n) => {
        if (!i)
            return 0;
        if (m.has(i))
            return m.get(i)
        let best = 123456789;
        for (let k = 1; k <= Math.floor(Math.sqrt(i)); ++k)
            if (0 <= i - k * k)
                best = Math.min(best, 1 + go(i - k * k));
        return m.set(i, best)
                .get(i);
    };
    return go();
};
```

3. **T**urn the top-down memoized solution upside-down for a bottom-up iterative solution
```
let numSquares = n => {
    let dp = Array(n + 1).fill(123456789);
    dp[0] = 0;
    for (let i = 1; i <= n; ++i)
        for (let k = 1; k <= Math.floor(Math.sqrt(i)); ++k)
            if (0 <= i - k * k)
                dp[i] = Math.min(dp[i], 1 + dp[i - k * k]);
    return dp[n];
};
```

**Python3 Solutions:**

1. **A**ll possibilities considered via top-down brute-force search
```
class Solution:
    def numSquares(self, n: int, INF = int(1e9 + 7)) -> int:
        def go(i = n):
            if i == 0:
                return i
            best = INF
            for k in range(1, floor(sqrt(i)) + 1):
                if 0 <= i - k * k:
                    best = min(best, 1 + go(i - k * k))
            return best
        return go()
```

2. **R**emember previous subproblems' optimal solutions using a memo
```
class Solution:
    def numSquares(self, n: int, INF = int(1e9 + 7)) -> int:
        @cache
        def go(i = n):
            if i == 0:
                return i
            best = INF
            for k in range(1, floor(sqrt(i)) + 1):
                if 0 <= i - k * k:
                    best = min(best, 1 + go(i - k * k))
            return best
        return go()
```

3. **T**urn the top-down memoized solution upside-down for a bottom-up iterative solution
```
class Solution:
    def numSquares(self, n: int, INF = int(1e9 + 7)) -> int:
        dp = [INF] * (n + 1)
        dp[0] = 0
        dp[1] = 1
        for i in range(2, n + 1):
            for k in range(1, floor(sqrt(i)) + 1):
                if 0 <= i - k * k:
                    dp[i] = min(dp[i], 1 + dp[i - k * k])
        return dp[n]
```

---

**C++ Solutions:**

1. **A**ll possibilities considered via top-down brute-force search
```
class Solution {
public:
    using fun = function<int(int)>;
    int numSquares(int n) {
        fun go = [&](auto i) {
            if (!i)
                return 0;
            auto best = 123456789;
            for (auto k{ 1 }; k <= sqrt(i); ++k)
                if (0 <= i - k * k)
                    best = min(best, 1 + go(i - k * k));
            return best;
        };
        return go(n);
    }
};
```

2. **R**emember previous subproblems' optimal solutions using a memo
```
class Solution {
public:
    using fun = function<int(int)>;
    using Memo = unordered_map<int, int>;
    int numSquares(int n, Memo m = {}) {
        fun go = [&](auto i) {
            if (!i)
                return 0;
            if (m[i])
                return m[i];
            auto best = 123456789;
            for (auto k{ 1 }; k <= sqrt(i); ++k)
                if (0 <= i - k * k)
                    best = min(best, 1 + go(i - k * k));
            return m[i] = best;
        };
        return go(n);
    }
};
```

3. **T**urn the top-down memoized solution upside-down for a bottom-up iterative solution
```
class Solution {
public:
    using VI = vector<int>;
    int numSquares(int n) {
        VI dp(n + 1, 123456789);
        dp[0] = 0;
        for (auto i{ 1 }; i <= n; ++i)
            for (auto k{ 1 }; k <= floor(sqrt(i)); ++k)
                if (0 <= i - k * k)
                    dp[i] = min(dp[i], 1 + dp[i - k * k]);
        return dp[n];
    }
};
```

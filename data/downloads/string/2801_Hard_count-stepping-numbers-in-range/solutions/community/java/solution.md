# ✅💯 [JAVA/CPP/PYTHON] Digits DP | self explanatory code | clean code 🆙⬆️⬆️⬆️

**Author:** ManojKumarPatnaik
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3836469/](https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3836469/)

---

# upvote pls \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99\uD83C\uDD99\u2B06\uFE0F\u2B06\uFE0F\u2B06\uFE0F

# Code
```java []
    private static final int mod = 1000000007;
    private long[][][][] dp;
    public int countSteppingNumbers(final String low, final String high) {
        resetArray();
        long result = solve(high, 0, -1, 1, 1);
        resetArray();
        result -= solve(low, 0, -1, 1, 1);
        result = (result + mod) % mod;
        int lowIsValid = getLowIsValid(low);
        result = (result + mod + lowIsValid) % mod;
        return (int) result;
    }
    private int getLowIsValid(final String low) {
        int lowIsValid = 1;
        for (int i = 1; i < low.length(); i++)
            if (Math.abs(low.charAt(i) - low.charAt(i - 1)) != 1) {
                lowIsValid = 0;
                break;
            }
        return lowIsValid;
    }
    private long solve(final String numString, int currentIndex, int previousDigit, int bound, int isZero) {
        if (numString.length() == currentIndex) return 1 - isZero;
        if (dp[currentIndex][previousDigit + 1][isZero][bound] != -1)
            return dp[currentIndex][previousDigit + 1][isZero][bound];
        long limit = numString.charAt(currentIndex) - '0';
        if (bound == 0) limit = 9;
        long ans = 0;
        for (int currentDigit = 0; currentDigit <= limit; currentDigit++) {
            int nextBound = (bound == 1 && currentDigit == limit) ? 1 : 0;
            int nextZero = (isZero == 1 && currentDigit == 0) ? 1 : 0;
            if (isZero == 1 || Math.abs(currentDigit - previousDigit) == 1)
                ans += (solve(numString, currentIndex + 1, currentDigit, nextBound, nextZero)) % mod;
        }
        return dp[currentIndex][previousDigit + 1][isZero][bound] = ans;
    }
    private void resetArray() {
        dp = new long[101][11][2][2];
        for (var i : dp) for (var j : i) for (var k : j) Arrays.fill(k, -1);
    }
```

```Cpp []
const int mod = 1000000007;
long long dp[101][11][2][2];
 int getLowIsValid(string low) {
    int lowIsValid = 1;
    for (int i = 1; i < low.length(); i++) {
        if (abs(low[i] - low[i-1]) != 1) {
            lowIsValid = 0;
            break;
        }
    }
    return lowIsValid;
}
 long long solve(const string& numString, int currentIndex, int previousDigit, int bound, int isZero) {
    if (numString.length() == currentIndex) return 1 - isZero;
    if (dp[currentIndex][previousDigit+1][isZero][bound] != -1) return dp[currentIndex][previousDigit+1][isZero][bound];
    long long limit = numString[currentIndex] - '0';
    if (bound == 0) limit = 9;
    long long ans = 0;
    for (int i = 0; i <= limit; i++) {
        int nextBound = (bound == 1 && i == limit) ? 1 : 0;
        int nextZero = (isZero == 1 && i == 0) ? 1 : 0;
        if (isZero == 1 || abs(i - previousDigit) == 1) {
            ans += (solve(numString, currentIndex+1, i, nextBound, nextZero)) % mod;
        }
    }
    return dp[currentIndex][previousDigit+1][isZero][bound] = ans;
}
 void resetArray() {
    memset(dp, -1, sizeof(dp));
}
 int countSteppingNumbers(string low, string high) {
    resetArray();
    long long result = solve(high, 0, -1, 1, 1);
    resetArray();
    result -= solve(low, 0, -1, 1, 1);
    result = (result + mod) % mod;
    int lowIsValid = getLowIsValid(low);
    result = (result + mod + lowIsValid) % mod;
    return (int)result;
}
```

```python3 []
mod = 1000000007
dp = [[[[0 for _ in range(2)] for _ in range(2)] for _ in range(11)] for _ in range(101)]
 def getLowIsValid(low):
    lowIsValid = 1
    for i in range(1, len(low)):
        if abs(int(low[i]) - int(low[i-1])) != 1:
            lowIsValid = 0
            break
    return lowIsValid
 def solve(numString, currentIndex, previousDigit, bound, isZero):
    if currentIndex == len(numString):
        return 1 - isZero
    if dp[currentIndex][previousDigit+1][isZero][bound] != -1:
        return dp[currentIndex][previousDigit+1][isZero][bound]
    limit = int(numString[currentIndex])
    if bound == 0:
        limit = 9
    ans = 0
    for i in range(limit+1):
        nextBound = 1 if (bound == 1 and i == limit) else 0
        nextZero = 1 if (isZero == 1 and i == 0) else 0
        if isZero == 1 or abs(i - previousDigit) == 1:
            ans += solve(numString, currentIndex+1, i, nextBound, nextZero)
    dp[currentIndex][previousDigit+1][isZero][bound] = ans % mod
    return dp[currentIndex][previousDigit+1][isZero][bound]
 def resetArray():
    for i in range(101):
        for j in range(11):
            for k in range(2):
                for l in range(2):
                    dp[i][j][k][l] = -1
 def countSteppingNumbers(low, high):
    resetArray()
    result = solve(high, 0, -1, 1, 1)
    resetArray()
    result -= solve(low, 0, -1, 1, 1)
    result = (result + mod) % mod
    lowIsValid = getLowIsValid(low)
    result = (result + mod + lowIsValid) % mod
    return int(result)
```




# Complexity
- Time complexity:o(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:o(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
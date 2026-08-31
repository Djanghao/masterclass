# [Java/C++/Python] Burning Points

**Author:** lee215
**Votes:** 68
**Link:** [https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-ii/solutions/4601078/](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-ii/solutions/4601078/)

---

# **Intuition**
For each start point `i` where `1 < i < n`,
it will spread in 2 directions.
Then there will be 2 points at the same time, with same distance to `i`

The idea is to count the spreading points.
You can imagine the graph is a connnected rope,
and we burn at the point of `i`,
we count how many points are burning.
<br>

# **Explanation**
`A[t]` means at `time = t`,
the diff change of burning point is `A[t]`.

Initially, it starts to burn on the left and on the right:
When it reach 1, deadend then stop.
When it reach n, deadend then stop.
When reach `x`, it split one more from `x` to `y`
When reach `y`, it split one more from `y` to `x`
When go from `x` to `y` then go to the middle, it will stop in middle.
When go from `y` to `x` then go to the middle, it will stop in middle.

In the end,
we aacumulate the prefix sum,
then we have the result to return.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public long[] countOfPairs(int n, int x, int y) {
        if (x > y) {
            int t = x; x = y; y = t;
        }
        long[] A = new long[n];
        for (int i = 1; i <= n; ++i) {
            A[0] += 2;                                             // go left and right
            A[Math.min(i - 1, Math.abs(i - y) + x)]--;             // reach 1 then stop
            A[Math.min(n - i, Math.abs(i - x) + 1 + n - y)]--;     // reach n then stop
            A[Math.min(Math.abs(i - x), Math.abs(y - i) + 1)]++;   // reach x then split
            A[Math.min(Math.abs(i - x) + 1, Math.abs(y - i))]++;   // reach y then split
            int r = Math.max(x - i, 0) + Math.max(i - y, 0);
            A[r + (y - x + 0) / 2]--;                              // i -> x -> y <- x
            A[r + (y - x + 1) / 2]--;                              // i -> y -> x <- y
        }
        for (int i = 1; i < n; ++i)
            A[i] += A[i - 1];
        return A;
    }
```

**C++**
```cpp
    vector<long long> countOfPairs(int n, int x, int y) {
        if (x > y) swap(x, y);
        vector<long long> A(n);
        for (int i = 1; i <= n; ++i) {
            A[0] += 2;                               // go left and right
            A[min(i - 1, abs(i - y) + x)]--;         // reach 1 then stop
            A[min(n - i, abs(i - x) + 1 + n - y)]--; // reach n then stop
            A[min(abs(i - x), abs(y - i) + 1)]++;    // reach x then split
            A[min(abs(i - x) + 1, abs(y - i))]++;    // reach y then split
            int r = max(x - i, 0) + max(i - y, 0);
            A[r + (y - x + 0) / 2]--;                // i -> x -> y <- x
            A[r + (y - x + 1) / 2]--;                // i -> y -> x <- y
        }
        for (int i = 1; i < n; ++i)
            A[i] += A[i - 1];
        return A;
    }
```

**Python**
```py
    def countOfPairs(self, n: int, x: int, y: int) -> List[int]:
        x, y = min(x, y), max(x, y)
        A = [0] * n
        for i in range(1, n + 1):
            A[0] += 2 									# go left and right
            A[min(i - 1, abs(i - y) + x)] -= 1 			# reach 1 then stop
            A[min(n - i, abs(i - x) + 1 + n - y)] -= 1 	# reach n then stop
            A[min(abs(i - x), abs(y - i) + 1)] += 1 	# reach x then split
            A[min(abs(i - x) + 1, abs(y - i))] += 1 	# reach y then split
            r = max(x - i, 0) + max(i - y, 0)
            A[r + (y - x + 0) // 2] -= 1 				# i -> x -> y <- x
            A[r + (y - x + 1) // 2] -= 1 				# i -> y -> x <- y
        return list(accumulate(A))
```

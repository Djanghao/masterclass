# [Java/C++/Python] One Pass, Count Zero Score

**Author:** lee215
**Votes:** 41
**Link:** [https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4109955/](https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4109955/)

---

# **Intuition**
Because `(x & y) <= x` and `(x & y) <= y`,
so the `score(array) <= score(subarray)`.

If the score of `A` is `x`,
then the score of each subarray of `A` bigger or equal to `x`.

If `x > 0`,
`2x > x`,
so we won't split `A`,
return 1.

If `x == 0`,
so we may split `A`,
into multiple subarray with score `0`.

So the real problem is,
split `A` into as many subarray as possbile,
with socre `0`
<br>

# **Explanation**
Calculate the prefix score of `A`,
if score is `0`,
we can split out the prefix as a subarray with socre `0`,
then continue the above process.
<br>

# Tips 1: -1
We initialize the prefix score with `-1`,
whose all bits are `1`,
maximum integer also works.
<br>

# Tips 2: no zero score
In case that score of `A` is positive,
there is no `0` score array,
still at least one array of `A`,
so we return `max(1, res)`.
<br>

# Tips 3: Greedy
I have greedily split the subarray with score `0`.
Usually people like a prove all all greedy ideas,
I leave for you to have a try.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int maxSubarrays(int[] A) {
        int v = -1, res = 0;
        for (int a: A) {
            v &= a;
            if (v == 0) {
                v = -1;
                res += 1;
            }
        }
        return Math.max(1, res);
    }
```

**C++**
```cpp
    int maxSubarrays(vector<int>& A) {
        int v = -1, res = 0;
        for (int a: A)
            if ((v &= a) == 0)
                v--, res++;
        return max(1, res);
    }
```

**Python**
```py
    def maxSubarrays(self, A: List[int]) -> int:
        v = -1
        res = 0
        for a in A:
            v &= a
            if v == 0:
                v = -1
                res += 1
        return max(1, res)
```

# [Python] Robber Houses in Cycle

**Author:** lee215
**Votes:** 102
**Link:** [https://leetcode.com/problems/pizza-with-3n-slices/solutions/546474/](https://leetcode.com/problems/pizza-with-3n-slices/solutions/546474/)

---

# Preword
Someone happened to ask me this problem ealier.
My first intuition is [213. House Robber II](https://leetcode.com/problems/house-robber-ii/description/)
Almost the same.
<br>

# Intuition
The interruption of this question is:
Select `n` elements from an an array of sizes `3*n`.
None of the selected `n` elements could be neighbor to each others.
And because its in cycle,
`A[0]` and `A[n-1]` cannot be chosen together.
After understanding this, the question become easier.
<br>

# Explanation
Each round, we will decide if we take the last slice in `A[i]~A[j]`.
If we take it, we will take the rest `k-1` slices in `A[i]~A[j-2]`
If we don't take it, we will take the rest `k` slices in `A[i]~A[j-1]`
<br>

# FAQ
Why do we check `j - i + 1 < k * 2 - 1`,
instead of something like `(k-1) < j - i +1 <= 3 * k`

@caohuicn help explain this part:
Because j - i + 1 is not the number of all the slices that are left.
You might have chosen not to take a slice in a previous step,
then there would be leftovers outside of [i, j].
Now if you take i or j (the start or end slice),
one of the slices your friends take will be outside of [i, j],
so the length of [i, j] is reduced by 2, not 3.
Therefore the minimum number is 2 * k - 1
(the last step only requires one slice).
<br>

# **Complexity**
Time `O(n^2)`, 
Space `O(n^2)`
`n^2` states of `(i,j,k)`, where `i = 0,1`.
<br>

**Java**
```java
    public final int maxSizeSlices(final int[] slices) {
        final Map<String, Integer> dp = new HashMap<>();
        return maxSizeSlices(slices, 0, slices.length - 1, slices.length / 3, 1, dp);
    }

    private final int maxSizeSlices(final int[] slices, final int start, final int end,
                                    final int n, final int cycle, final Map<String, Integer> dp) {
        final String serialized = start + "$" + end + "$" + n + "$" + cycle;
        if (dp.containsKey(serialized)) {
            return dp.get(serialized);
        }
        if (n == 1) {
            int max = Integer.MIN_VALUE;
            for (int i = start; i <= end; i++) {
                max = Math.max(max, slices[i]);
            }
            dp.put(serialized, max);
            return dp.get(serialized);
        }
        if (end - start + 1 < n * 2 - 1) {
            dp.put(serialized, Integer.MIN_VALUE);
            return dp.get(serialized);
        }
        final int res = Math.max(maxSizeSlices(slices, start + cycle, end - 2, n - 1, 0, dp) + slices[end],
                                maxSizeSlices(slices, start, end - 1, n, 0, dp));
        dp.put(serialized, res);
        return dp.get(serialized);
    }
```
**Python:**
```py
    def maxSizeSlices(self, A):
        @cache
        def dp(i, j, k, cycle=0):
            if k == 0: return 0
            if j - i + 1 < k * 2 - 1: return -inf
            return max(dp(i + cycle, j - 2, k - 1) + A[j], dp(i, j - 1, k))
        return dp(0, len(A) - 1, len(A) // 3, 1)
```

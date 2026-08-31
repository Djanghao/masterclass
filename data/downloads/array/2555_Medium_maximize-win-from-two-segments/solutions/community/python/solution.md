# [Java/C++/Python] DP + Sliding Segment O(n)

**Author:** lee215
**Votes:** 182
**Link:** [https://leetcode.com/problems/maximize-win-from-two-segments/solutions/3141449/](https://leetcode.com/problems/maximize-win-from-two-segments/solutions/3141449/)

---

# **Intuition**
Maximize Win From **One** Segments,
can be solved by sliding window.

Now we can slide the second segment,
and get calculate the result from `dp`.
<br>

# **Explanation**
Maintain a sliding segment(sliding window),
where `A[i] - A[j] <= k`.

`dp[k]` means the the  maximum number
we can cover if you choose the **one** segments optimally
in the first `k` elements.

When we slide a segment from left to right,
the number of elements that we cover is `i - j + 1`
and in the first `j` elements,
we can cover at most `dp[j]` elements,
so we can cover `i - j + 1 + dp[j]` in total.
Update the result `res` and finally return it.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int maximizeWin(int[] A, int k) {
        int res = 0, n = A.length, j = 0, dp[] = new int[n + 1];
        for (int i = 0; i < n; ++i) {
            while (A[j] < A[i] - k)
                ++j;
            dp[i + 1] = Math.max(dp[i], i - j + 1);
            res = Math.max(res, i - j + 1 + dp[j]);
        }
        return res;
    }
```

**C++**
```cpp
    int maximizeWin(vector<int>& A, int k) {
        int res = 0, n = A.size(), j = 0;
        vector<int> dp(n + 1, 0);
        for (int i = 0; i < n; ++i) {
            while (A[j] < A[i] - k)
                ++j;
            dp[i + 1] = max(dp[i], i - j + 1);
            res = max(res, i - j + 1 + dp[j]);
        }
        return res;
    }
```

**Python**
```py
    def maximizeWin(self, A, k):
        dp = [0] * (len(A) + 1)
        res = j = 0
        for i, a in enumerate(A):
            while A[j] < A[i] - k: j += 1
            dp[i + 1] = max(dp[i], i - j + 1)
            res = max(res, i - j + 1 + dp[j])
        return res
```
<br>

# **Follow up**
What if we want to solve `Maximize Win From K Segments`
We can solve it by this approach as well.
Simply increase one linear `dp[i]` to `dp[k][i]`,
`dp[k][i]` means the maixmum we can in the first `i` elements with `k` segments.
<br>

# More Similar Sliding Window Problems
Here are some similar sliding window problems.
Also find more explanations and discussion.
Good luck and have fun.

- 2555. [Maximize Win From Two Segments](https://leetcode.com/problems/maximize-win-from-two-segments/discuss/3141449/JavaC%2B%2BPython-DP-%2B-Sliding-Segment-O(n))
- 2537. [Count the Number of Good Subarrays](https://leetcode.com/problems/count-the-number-of-good-subarrays/discuss/3052559/C%2B%2BPython-Sliding-Window)
- 2401. [Longest Nice Subarray](https://leetcode.com/problems/longest-nice-subarray/discuss/2527496/Python-Sliding-Window)
- 2398. [Maximum Number of Robots Within Budget](https://leetcode.com/problems/maximum-number-of-robots-within-budget/discuss/2524838/Python-Sliding-Window-O(n))
- 1838. [Frequency of the Most Frequent Element](https://leetcode.com/problems/frequency-of-the-most-frequent-element/discuss/1175090/JavaC%2B%2BPython-Sliding-Window)
- 1493. [Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/discuss/708112/JavaC%2B%2BPython-Sliding-Window-at-most-one-0)
- 1425. [Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/discuss/597751/JavaC++Python-O(N)-Decreasing-Deque)
- 1358. [Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/discuss/516977/JavaC++Python-Easy-and-Concise)
- 1248. [Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/discuss/419378/JavaC%2B%2BPython-Sliding-Window-atMost(K)-atMost(K-1))
- 1234. [Replace the Substring for Balanced String](https://leetcode.com/problems/replace-the-substring-for-balanced-string/discuss/408978/javacpython-sliding-window/)
- 1004. [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/discuss/247564/JavaC%2B%2BPython-Sliding-Window)
-  930. [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/discuss/186683/)
-  992. [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/discuss/523136/JavaC%2B%2BPython-Sliding-Window)
-  904. [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/discuss/170740/Sliding-Window-for-K-Elements)
-  862. [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/discuss/143726/C%2B%2BJavaPython-O(N)-Using-Deque)
-  209. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/discuss/433123/JavaC++Python-Sliding-Window)
<br>
# [Java/C++/Python] Greedy + Sliding Window

**Author:** lee215
**Votes:** 126
**Link:** [https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/3739101/](https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/3739101/)

---

# **Intuition**
For the first `A[i] > 0`,
we need to select the array `A[i],A[i+1]..A[i+k-1]`
and decrease all these elements by `A[i]`.
<br>

# **Explanation**
The subarray deleted starting at `A[i]`,
will affect the `A[i+1], A[i+2], ...A[i+k-1]`.

So we can use `cur` to record the sum of previous `k - 1` elements,
where `cur = A[i - 1] + A[i - 2] + A[i - k + 1]`.

So there is a sense of sliding window here,
with window size of `k`.

Now to solve this problem,
we iterate `A[i]`,
and compare `A[i]` with `cur`.


If `cur > A[i]`,
it means A[i] will be over-decreased to negative,
return `false`.
For example,
`A = [2,1]` and `k = 2` will return `false`.

If `cur <= A[i]`,
`A[i]` will be decresed `cur` times,
so `A[i] -= cur`,
then still need to decrese `A[i]` times,
so `cur += A[i]`.

We continue doing this for all `A[i]`,
and finally we check if `cur == 0`.
For example,
`A = [0,0,1]` and `k = 2` will return `false`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`, needs `O(k)` if not change the input `A`
<br>

**Java**
```java
    public boolean checkArray(int[] A, int k) {
        int cur = 0, n = A.length;
        for (int i = 0; i < n; ++i) {
            if (cur > A[i])
                return false;
            A[i] -= cur;
            cur += A[i];
            if (i >= k - 1)
                cur -= A[i - k + 1];
        }
        return cur == 0;
    }
```

**C++**
```cpp
    bool checkArray(vector<int>& A, int k) {
        int cur = 0, n = A.size();
        for (int i = 0; i < n; ++i) {
            if (cur > A[i])
                return false;
            A[i] -= cur;
            cur += A[i];
            if (i >= k - 1)
                cur -= A[i - k + 1];
        }
        return cur == 0;
    }
```

**Python**
```py
    def checkArray(self, A: List[int], k: int) -> bool:
        cur = 0
        for i, a in enumerate(A):
            if cur > a:
                return False
            A[i], cur = a - cur, a
            if i >= k - 1:
                cur -= A[i - k + 1]
        return cur == 0
```
<br>


# More Similar Sliding Window Problems
Here are some similar sliding window problems.
Also find more explanations and discussion.
Good luck and have fun.

- 2730. [Find the Longest Semi-Repetitive Substring](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/discuss/3629621/JavaC%2B%2BPython-Sliding-Window)
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

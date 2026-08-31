# [Java/C++/Python] Sliding Window

**Author:** lee215
**Votes:** 92
**Link:** [https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/2138951/](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/2138951/)

---

# **Intuition**
Subarrays + Less Than K = Slide Window
<br>

# **Explanation**
Maintain a sliding window from `A[i]` to `A[j]`, with score less than `k`.
`cur` counts the current sum of element between the windows.

Iterate `j` from `0` to `A.length - 1`,
each round we firstly add `A[j]` to the window,
update `cur += A[j]`.

The current sum is `cur` and length is `j - i + 1`,
If the score `cur * (j - i + 1) >= k`,
the window is too big,
we remove `A[i]` and update `i++`.
We continue doing this until the score is less than `k`.

Then we find the smallest `i` where subarray `A[i]` to `A[j]`  has score less than `k`.
For any subarray ending at A[j] with shorter length, they have score less than `k`.
There are `j - i + 1` subarrays in total, so we update result `res += j - i  + 1`
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public long countSubarrays(int[] A, long k) {
        long res = 0, cur = 0;
        for (int j = 0, i = 0; j < A.length; ++j) {
            cur += A[j];
            while (cur * (j - i + 1) >= k)
                cur -= A[i++];
            res += j - i + 1;
        }
        return res;
    }
```

**C++**
```cpp
    long long countSubarrays(vector<int>& A, long long k) {
        long long res = 0, cur = 0;
        for (int j = 0, i = 0; j < A.size(); ++j) {
            cur += A[j];
            while (cur * (j - i + 1) >= k)
                cur -= A[i++];
            res += j - i + 1;
        }
        return res;
    }
```

**Python**
```py
    def countSubarrays(self, A, k):
        res = cur = i = 0
        for j in range(len(A)):
            cur += A[j]
            while cur * (j - i + 1) >= k:
                cur -= A[i]
                i += 1
            res += j - i + 1
        return res
```
<br>

# More Similar Sliding Window Problems
Here are some similar sliding window problems.
Also find more explanations and discussion.
Good luck and have fun.

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

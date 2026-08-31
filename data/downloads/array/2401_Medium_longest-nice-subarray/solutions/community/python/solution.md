# [Java/C++/Python] Sliding Window 🔥

**Author:** lee215
**Votes:** 106
**Link:** [https://leetcode.com/problems/longest-nice-subarray/solutions/2527496/](https://leetcode.com/problems/longest-nice-subarray/solutions/2527496/)

---

# **Explanation**
Sliding window, `AND` is the AND result in the window.
Let's slide a subarray window and keep it nice.

If it's nice to add a new element `a` to the window,
`AND & a` should be 0,
and then we update `AND |= A[j]`

Otherwice we move the head out of the window by doing `AND ^= A[i]`
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int longestNiceSubarray(int[] A) {
        int AND = 0, i = 0, res = 0, n = A.length;
        for (int j = 0; j < n; ++j) {
            while ((AND & A[j]) > 0)
                AND ^= A[i++];
            AND |= A[j];
            res = Math.max(res, j - i + 1);
        }
        return res;
    }
```

**C++**
```cpp
    int longestNiceSubarray(vector<int>& A) {
        int AND = 0, i = 0, res = 0, n = A.size();
        for (int j = 0; j < n; ++j) {
            while ((AND & A[j]) > 0)
                AND ^= A[i++];
            AND |= A[j];
            res = max(res, j - i + 1);
        }
        return res;
    }
```

**Python**
```py
    def longestNiceSubarray(self, A):
        res = AND = i = 0
        for j in range(len(A)):
            while AND & A[j]:
                AND ^= A[i]
                i += 1
            AND |= A[j]
            res = max(res, j - i + 1)
        return res
```
<br>

# More Similar Sliding Window Problems
Here are some similar sliding window problems.
Also find more explanations and discussion.
Good luck and have fun.

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

# [Java/C++/Python] Sliding Window

**Author:** lee215
**Votes:** 157
**Link:** [https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/3771308/](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/3771308/)

---

# **Intuition**
The beauty of the array is the length of the longest **subsequence**.
So we don't care about the order of elements,
so we can sort the input `A` first.
<br>

# **Explanation**
Sort the input `A` first.
Based on the definition of beauty of an array,
we want to find a window that `max - min <= k * 2`,
which can cover as many elements as possible.

So we can apply the sliding window to solve this problem.
If the window valids `max - min <= k * 2`, we increase the size of window.
If it doesn't valid, we simply slide the window.

The window is increased for valid subarray,
and the window never decreses.

Finally we return the size of window,
which is the length of biggest window valids.
<br>

# **Complexity**
Time `O(sort)`
Space `O(sort)`
<br>

**Java**
```java
    public int maximumBeauty(int[] A, int k) {
        Arrays.sort(A);
        int i = 0, j, n = A.length;
        for (j = 0; j < n; ++j)
            if (A[j] - A[i] > k * 2)
                i++;
        return j - i;
    }
```

**C++**
```cpp
    int maximumBeauty(vector<int>& A, int k) {
        sort(A.begin(), A.end());
        int i = 0, j, n = A.size();
        for (j = 0; j < n; ++j)
            if (A[j] - A[i] > k * 2)
                i++;
        return j - i;
    }
```

**Python**
```py
    def maximumBeauty(self, A: List[int], k: int) -> int:
        A.sort()
        i = 0
        for j in range(len(A)):
            if A[j] - A[i] > k * 2:
                i += 1
        return j - i + 1
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

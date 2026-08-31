# [Java/C++/Python] Sliding Window

**Author:** lee215
**Votes:** 150
**Link:** [https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4384405/](https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4384405/)

---

# **Explanation**
Assume the `a = max(A)`
Use a sliding window to keep a maximum subarray `A[i]` to `A[j]`
with atmost `k - 1` times of `a`.

For all subarrays,
starting before `A[i]` and ending at `A[j]`,
will have at least `k` times of `a`.
So we update `res += i`.

Finally we return result `res`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public long countSubarrays(int[] A, int k) {
        int a = Arrays.stream(A).max().getAsInt();
        int n = A.length, cur = 0, i = 0;
        long res = 0;
        for (int j = 0; j < n; ++j) {
            cur += A[j] == a ? 1 : 0;
            while (cur >= k)
                cur -= A[i++] == a ? 1 : 0;
            res += i;
        }
        return res;
    }
```

**C++**
```cpp
    long long countSubarrays(vector<int>& A, int k) {
        int a = *max_element(A.begin(), A.end()), n = A.size(), cur = 0, i = 0;
        long long res = 0;
        for (int j = 0; j < n; ++j) {
            cur += A[j] == a;
            while (cur >= k)
                cur -= A[i++] == a;
            res += i;
        }
        return res;
    }
```

**Python**
```py
    def countSubarrays(self, A: List[int], k: int) -> int:
        ma = max(A)
        res = cur = i = 0
        for j in range(len(A)):
            cur += A[j] == ma
            while cur >= k:
                cur -= A[i] == ma
                i += 1
            res += i
        return res
```
<br>

# More Similar Sliding Window Problems
Here are some similar sliding window problems.
Also find more explanations and discussion.
Good luck and have fun.

- 2958. [Length of Longest Subarray With at Most K Frequency](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4382698/java-c-python-sliding-window/)
- 2831. [Find the Longest Equal Subarray](https://leetcode.com/problems/find-the-longest-equal-subarray/discuss/3934172/JavaC%2B%2BPython-One-Pass-Sliding-Window-O(n))
- 2799. [Count Complete Subarrays in an Array](https://leetcode.com/problems/count-complete-subarrays-in-an-array/discuss/3836137/JavaC%2B%2BPython-Sliding-Window-O(n))
- 2779. [Maximum Beauty of an Array After Applying Operation](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/discuss/3771308/JavaC%2B%2BPython-Sliding-Window)
- 2730. [Find the Longest Semi-Repetitive Substring](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/discuss/3629621/JavaC%2B%2BPython-Sliding-Window)
- 2555. [Maximize Win From Two Segments](https://leetcode.com/problems/maximize-win-from-two-segments/discuss/3141449/JavaC%2B%2BPython-DP-%2B-Sliding-Segment-O(n))
- 2537. [Count the Number of Good Subarrays](https://leetcode.com/problems/count-the-number-of-good-subarrays/discuss/3052559/C%2B%2BPython-Sliding-Window)
- 2401. [Longest Nice Subarray](https://leetcode.com/problems/longest-nice-subarray/discuss/2527496/Python-Sliding-Window)
- 2398. [Maximum Number of Robots Within Budget](https://leetcode.com/problems/maximum-number-of-robots-within-budget/discuss/2524838/Python-Sliding-Window-O(n))
- 2024. [Maximize the Confusion of an Exam](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/discuss/1499049/JavaC%2B%2BPython-Sliding-Window-strict-O(n))
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
-  424. [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/discuss/278271/JavaC%2B%2BPython-Sliding-Window-just-O(n))
-  209. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/discuss/433123/JavaC++Python-Sliding-Window)
<br>

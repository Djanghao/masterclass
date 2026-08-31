# [Java/C++/Python] Sliding Window

**Author:** lee215
**Votes:** 53
**Link:** [https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4382698/](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4382698/)

---

# **Explanation**
Use a hashmap `count` to count the frequency of elements.
If an element has frequency bigger than `k`,
reduce the left side of window until it's not.
Then update the size of longest good subarray.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int maxSubarrayLength(int[] A, int k) {
        Map<Integer, Integer> count = new HashMap<>();
        int res = 0, i = 0, n = A.length;
        for (int j = 0; j < n; ++j) {
            count.put(A[j], count.getOrDefault(A[j], 0) + 1);
            while (count.get(A[j]) > k)
                count.put(A[i], count.get(A[i++]) - 1);
            res = Math.max(res, j - i + 1);
        }
        return res;
    }
```

**C++**
```cpp
    int maxSubarrayLength(vector<int>& A, int k) {
        unordered_map<int, int> count;
        int res = 0, i = 0, n = A.size();
        for (int j = 0; j < n; ++j) {   
            count[A[j]]++;
            while (count[A[j]] > k)
                count[A[i++]]--;
            res = max(res, j - i + 1);
        }
        return res;
    }
```

**Python**
```py
    def maxSubarrayLength(self, A: List[int], k: int) -> int:
        count = Counter()
        res = i = 0
        for j in range(len(A)):
            count[A[j]] += 1
            while count[A[j]] > k:
                count[A[i]] -= 1
                i += 1
            res = max(res, j - i + 1)
        return res
```

# More Similar Sliding Window Problems
Here are some similar sliding window problems.
Also find more explanations and discussion.
Good luck and have fun.

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


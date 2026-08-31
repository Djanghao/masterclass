# [Java/C++/Python] Sliding Window, O(n)

**Author:** lee215
**Votes:** 89
**Link:** [https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/3836137/](https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/3836137/)

---

# **Intuition**
Count Subarrays => Let's slide the window
<br>

# **Explanation**
Input array `A` has `k` different values.

For each subarray ending at index `j`,
we count the frequency of values in `A[i], A[i+1]...A[j]`
Then we slide the pointer `i`,
to find the minimum index `i`,
that the subarray don't have `k` different values.
which means the subarray starting at `0,1,..,i-1`,
have `k` different values.

That is `i` subarray in total,
so we update `res += i`.

Finally we return result `res`.
<br>

# **Complexity**
Time `O(n)`, since two pointer slide at most `n` times.
Space `O(n)`, for hashmap counter.
<br>

**Java**
```java
    public int countCompleteSubarrays(int[] A) {
        Set<Integer> s = new HashSet<>();
        for (int a : A)
            s.add(a);
        int n = A.length, k = s.size(), res = 0, i = 0;
        Map<Integer, Integer> count = new HashMap<>();

        for (int j = 0; j < n; ++j) {
            if (count.getOrDefault(A[j], 0) == 0)
                k--;
            count.put(A[j], count.getOrDefault(A[j], 0) + 1);
            while (k == 0) {
                count.put(A[i], count.get(A[i]) - 1);
                if (count.get(A[i]) == 0)
                    k++;
                i++;
            }
            res += i;
        }
        return res;
    }
```

**C++**
```cpp
    int countCompleteSubarrays(vector<int>& A) {
        int n = A.size(), k = unordered_set<int>(A.begin(), A.end()).size(), res = 0, i = 0;
        unordered_map<int, int> count;
        for (int j = 0; j < n; ++j) {
            k -= count[A[j]]++ == 0;
            while (k == 0)
                k += --count[A[i++]] == 0;
            res += i;
        }
        return res;
    }
```

**Python**
```py
    def countCompleteSubarrays(self, A: List[int]) -> int:
        n, k = len(A), len(set(A))
        res = i = 0
        count = Counter()
        for j in range(n):
            count[A[j]] += 1
            while len(count) == k:
                count[A[i]] -= 1
                if count[A[i]] == 0:
                    del count[A[i]]
                i += 1
            res += i
        return res
```
<br>

# More Similar Sliding Window Problems
Here are some similar sliding window problems.
Also find more explanations and discussion.
Good luck and have fun.

- 2799. [Count Complete Subarrays in an Array](https://leetcode.com/problems/count-complete-subarrays-in-an-array/discuss/3836137/JavaC%2B%2BPython-Sliding-Window-O(n))
- 2779. [Maximum Beauty of an Array After Applying Operation](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/discuss/3771308/JavaC%2B%2BPython-Sliding-Window)
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

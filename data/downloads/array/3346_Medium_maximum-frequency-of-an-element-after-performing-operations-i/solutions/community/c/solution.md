# [Java/C++/Python] Two cases

**Author:** lee215
**Votes:** 35
**Link:** [https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/solutions/6027282/](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/solutions/6027282/)

---

# **Intuition**
- Sorting: Aorting allows efficient processing of ranges.
- Sliding window: Helps find suitable ranges of numbers.
- HashMap frequency counting: Keeps track of element occurrences.
<br>


# **Explanation**
Case 1: Focusing on Existing Elements
This case tries to maximize the frequency of a number
that's already present in the array.
Range: `[a - k, a + k]`

Case 2: Creating a New Target Value
This case explores the possibility of making several numbers equal to a value
that might not initially exist in the array.
Range: `[a, a + k + k]`
<br>

# **Complexity**
Time `O(sort)`
Space `O(sort)`
<br>

```Java [Java]
    public int maxFrequency(int[] A, int k, int numOperations) {
        Arrays.sort(A);

        // Case 1
        Map<Integer, Integer> count = new HashMap<>();
        int res = 0, i = 0, j = 0, n = A.length;
        for (int a : A) {
            while (j < n && A[j] <= a + k) {
                count.put(A[j], count.getOrDefault(A[j], 0) + 1);
                j++;
            }
            while (i < n && A[i] < a - k) {
                count.put(A[i], count.get(A[i]) - 1);
                i++;
            }
            int cur = Math.min(j - i, count.getOrDefault(a, 0) + numOperations);
            res = Math.max(res, cur);
        }

        // Case 2
        for (i = 0, j = 0; j < n; j++) {
            while (A[i] + k + k < A[j]) {
                i++;
            }
            res = Math.max(res, Math.min(j - i + 1, numOperations));
        }
        return res;
    }
```

```C++ [C++]
    int maxFrequency(vector<int>& A, int k, int numOperations) {
        sort(A.begin(), A.end());

        // Case 1
        unordered_map<int, int> count;
        int res = 0, i = 0, j = 0, n = A.size();
        for (int a : A) {
            while (j < n && A[j] <= a + k) {
                count[A[j]]++;
                j++;
            }
            while (i < n && A[i] < a - k) {
                count[A[i]]--;
                i++;
            }
            int cur = min(j - i, count[a] + numOperations);
            res = max(res, cur);
        }

        // Case 2

        for (int i = 0, j = 0; j < n; j++) {
            while (A[i] + k + k < A[j]) {
                i++;
            }
            res = max(res, min(j - i + 1, numOperations));
        }
        return res;
    }
```

```py [Python3]
    def maxFrequency(self, A: List[int], k: int, numOperations: int) -> int:
        A.sort()
        n = len(A)

        # case 1
        count = Counter()
        res = i = j = 0
        for a in A:
            while j < n and A[j] <= a + k:
                count[A[j]] += 1
                j += 1
            while i < n and A[i] < a - k:
                count[A[i]] -= 1
                i += 1
            cur = min(j - i, count[a] + numOperations)
            res = max(res, cur)

        # case 2
        i = 0
        for j in range(n):
            while A[i] + k + k < A[j]:
                i += 1
            res = max(res, min(j - i + 1, numOperations))
        return res
```

# More Similar Sliding Window Problems
Here are some similar sliding window problems.
Also find more explanations and discussion.
Good luck and have fun.

- 3347. [Maximum Frequency of an Element After Performing Operations II](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/discuss/6027259/JavaC%2B%2BPython-Two-cases)
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

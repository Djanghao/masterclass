# [Java/C++/Python] One Pass Sliding Window, O(n)

**Author:** lee215
**Votes:** 232
**Link:** [https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/3934172/](https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/3934172/)

---

# **Intuition**
Similar to the question and solutions for
- [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/discuss/278271/JavaC%2B%2BPython-Sliding-Window-just-O(n)),
- [2024. Maximize the Confusion of an Exam](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/discuss/1499049/JavaC%2B%2BPython-Sliding-Window-strict-O(n))

Both my solutions are `O(n)`.
99% of other solutions of these two problems is `O(kn)`
where `k = 26` or `k = 2`, is the number of different elements.
<br>

# **Explanation**
Assume there is a subarray from `A[i]` to `A[j]`,
`j - i + 1` the size of subarray,
If we want to delete some elements in the subarray to make it equal subarray,
we will keep the elements with the maximum frequency.

We can use a hashmap `count` to count the frequency of each elements,
and we need to delete `j - i + 1 - maxf` elements,
where `maxf` means the max frequency of elements in the subarray.

So now we will slide a window from left to right.
And our task is to find out the max frequency.

Each time a new element `A[j]` coming from right,
and we increment `++count[A[j]]` and update ` maxf = max(maxf, count[A[j]])`.
If `j - i + 1 - maxf > k`,
it means the current too many elements to delete,
so we slide to the next index.

Note that the size of window won't decrease, 
and `maxf` is actually the max frequency in history (not the current subarray), 
you can find this trick in many of my sliding window solutions,
if you keep reading and voting them :)

Finally return `maxf` we found.
<br>

# **Q&A**
Question: What if after moving left pointer, the current most element frequency decreases?
Answer: Nothing happen:
`maxf` don't change, sliding window size don't change.
until we have bigger maxf.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int longestEqualSubarray(List<Integer> A, int k) {
        int maxf = 0, i = 0, n = A.size();
        Map<Integer, Integer> count = new HashMap<>();
        for (int j = 0; j < n; j++) {
            count.put(A.get(j), count.getOrDefault(A.get(j), 0) + 1);
            maxf = Math.max(maxf, count.get(A.get(j)));
            if (j - i + 1 - maxf > k) {
                count.put(A.get(i), count.get(A.get(i)) - 1);
                i++;
            }
        }
        return maxf;
    }
```

**C++**
```cpp
    int longestEqualSubarray(vector<int>& A, int k) {
        int maxf = 0, i = 0, n = A.size();
        unordered_map<int, int> count;
        for (int j = 0; j < n; j++) {
            maxf = max(maxf, ++count[A[j]]);
            if (j - i + 1 - maxf > k)
                --count[A[i++]];
        }
        return maxf;
    }
```

**Python**
```py
    def longestEqualSubarray(self, A: List[int], k: int) -> int:
        maxf = i = 0
        count = Counter()
        for j in range(len(A)):
            count[A[j]] += 1
            maxf = max(maxf, count[A[j]])
            if j - i + 1 - maxf > k:
                count[A[i]] -= 1
                i += 1
        return maxf2
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

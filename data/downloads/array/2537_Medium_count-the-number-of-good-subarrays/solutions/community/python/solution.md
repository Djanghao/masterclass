# [Java/C++/Python] Sliding Window

**Author:** lee215
**Votes:** 147
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3052559/](https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3052559/)

---

# **Intuition**
First thing we need to think about,
is how we calculate the the pair (i,j) in an array.
<br>

# **Explanation**
We can apply the method of sliding window.
Use a hashmap `count` to count the frequency of each `A[i]`.

When add a new number `A[j]` at the right of the window,
we already have `count[A[j]]`  elements with value `A[j]` in the window,
so we will have  `count[A[j]]` more pairs.

If we have pairs more than `k`,
we can reduce the size of window,
until there are `pairs < k` in the sliding window.
Then `A[i]...A[j]` is not a good subarray,
for other index `i2 < i`,
`A[i2]...A[j]` is a good subarray.
so we can update `res += i` for `i2 = 0,1,2,...i-1`.

Finally we return the result `res`.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
Java equivalent from @AaveshK
```java
    public long countGood(int[] A, int k) {
        long res = 0L;
        Map<Integer, Integer> count = new HashMap<>();
        for(int i = 0, j = 0; j < A.length; ++j){
            k -= count.getOrDefault(A[j],0);
            count.put(A[j],count.getOrDefault(A[j],0)+1);
            // Or
            /*
            count.putIfAbsent(A[j],0);
            k -= count.get(A[j]);
            count.put(A[j],count.get(A[j])+1);
            */
            while(k <= 0){
                count.put(A[i],count.get(A[i])-1);
                k += count.get(A[i++]);
            }
            res += i;
        }
        return res;
    }
```
**C++**
```cpp
    long long countGood(vector<int>& A, int k) {
        long long res = 0;
        unordered_map<int, int> count;
        for (int i = 0, j = 0; j < A.size(); ++j) {
            k -= count[A[j]]++;
            while (k <= 0)
                k += --count[A[i++]];
            res += i;
        }
        return res;
    }
```

**Python**
```py
    def countGood(self, A: List[int], k: int) -> int:
        res = cur = i = 0
        count = Counter()
        for j in range(len(A)):
            k -= count[A[j]]
            count[A[j]] += 1
            while k <= 0:
                count[A[i]] -= 1
                k += count[A[i]]
                i += 1
            res += i
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

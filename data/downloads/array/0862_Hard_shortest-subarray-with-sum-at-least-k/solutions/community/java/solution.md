# [C++/Java/Python] O(N) Using Deque

**Author:** lee215
**Votes:** 1071
**Link:** [https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/solutions/143726/](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/solutions/143726/)

---

# **Prepare**
From @Sarmon:
"What makes this problem hard is that we have negative values.
If you haven't already done the problem with positive integers only,
I highly recommend solving it first"

209. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/discuss/433123)
<br>

# **Explanation**
Calculate prefix sum `B` of list `A`.
`B[j] - B[i]` represents the sum of subarray `A[i] ~ A[j-1]`
Deque `d` will keep indexes of increasing `B[i]`.
For every B[i], we will compare `B[i] - B[d[0]]` with `K`.
<br>

# **Complexity**:
Every index will be pushed exactly once.
Every index will be popped at most once.

Time `O(N)`
Space `O(N)`
<br>

# **How to think of such solutions?**
Basic idea, for array starting at every `A[i]`, find the shortest one with sum at leat `K`.
In my solution, for `B[i]`, find the smallest `j` that `B[j] - B[i] >= K`.
Keep this in mind for understanding two while loops.
<br>

# **What is the purpose of first while loop?**
For the current prefix sum `B[i]`, it covers all subarray ending at `A[i-1]`.
We want know if there is a subarray, which starts from an index, ends at `A[i-1]` and has at least sum `K`.
So we start to compare `B[i]` with the smallest prefix sum in our deque, which is `B[D[0]]`, hoping that `[i] - B[d[0]] >= K`.
So if `B[i] - B[d[0]] >= K`, we can update our result `res = min(res, i - d.popleft())`.
The `while` loop helps compare one by one, until this condition isn't valid anymore.
<br>

# **Why we pop left in the first while loop?**
This the most tricky part that improve my solution to get only `O(N)`.
D[0] exists in our deque, it means that before `B[i]`, we didn't find a subarray whose sum at least `K`.
B[i] is the first prefix sum that valid this condition.
In other words, `A[D[0]] ~ A[i-1]` is the shortest subarray starting at A[D[0]] with sum at least `K`.
We have already find it for `A[D[0]]` and it can't be shorter, so we can drop it from our deque.
<br>

# **What is the purpose of second while loop?**
To keep `B[D[i]]` increasing in the deque.
<br>

# **Why keep the deque increase?**
If `B[i] <= B[d.back()]` and moreover we already know that `i > d.back()`, it means that compared with `d.back()`,
`B[i]` can help us make the subarray length shorter and sum bigger. So no need to keep `d.back()` in our deque.
<br>

**Java:**
```java
    public int shortestSubarray(int[] A, int K) {
        int N = A.length, res = N + 1;
        long[] B = new long[N + 1];
        for (int i = 0; i < N; i++) B[i + 1] = B[i] + A[i];
        Deque<Integer> d = new ArrayDeque<>();
        for (int i = 0; i < N + 1; i++) {
            while (d.size() > 0 && B[i] - B[d.getFirst()] >=  K)
                res = Math.min(res, i - d.pollFirst());
            while (d.size() > 0 && B[i] <= B[d.getLast()])
                d.pollLast();
            d.addLast(i);
        }
        return res <= N ? res : -1;
    }
```

**C++:**
```cpp
    int shortestSubarray(vector<int> A, int K) {
        int N = A.size(), res = N + 1;
        deque<long> d;
        for (int i = 0; i < N; i++) {
            if (i > 0)
                A[i] += A[i - 1];
            if (A[i] >= K)
                res = min(res, i + 1);
            while (d.size() > 0 && A[i] - A[d.front()] >= K)
                res = min(res, i - d.front()), d.pop_front();
            while (d.size() > 0 && A[i] <= A[d.back()])
                d.pop_back();
            d.push_back(i);
        }
        return res <= N ? res : -1;
    }
```

**Python**
```python
    def shortestSubarray(self, A, K):
        d = collections.deque([[0, 0]])
        res, cur = float('inf'), 0
        for i, a in enumerate(A):
            cur += a
            while d and cur - d[0][1] >= K:
                res = min(res, i + 1 - d.popleft()[0])
            while d and cur <= d[-1][1]:
                d.pop()
            d.append([i + 1, cur])
        return res if res < float('inf') else -1
```
<br>

# More Similar Sliding Window Problems
Here are some similar sliding window problems.
Also find more explanations.
Good luck and have fun.

Sliding window:
- 1248. [Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/discuss/419378/JavaC%2B%2BPython-Sliding-Window-atMost(K)-atMost(K-1))
- 1234. [Replace the Substring for Balanced String](https://leetcode.com/problems/replace-the-substring-for-balanced-string/discuss/408978/javacpython-sliding-window/367697)
- 1004. [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/discuss/247564/javacpython-sliding-window/379427?page=3)
-  930. [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/discuss/186683/)
-  992. [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/discuss/234482/JavaC%2B%2BPython-Sliding-Window-atMost(K)-atMost(K-1))
-  904. [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/discuss/170740/Sliding-Window-for-K-Elements)
-  862. [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/discuss/143726/C%2B%2BJavaPython-O(N)-Using-Deque)
-  209. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/discuss/433123)
<br>

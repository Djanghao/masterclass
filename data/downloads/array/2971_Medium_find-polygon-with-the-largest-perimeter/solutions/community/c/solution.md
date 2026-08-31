# [Java/C++/Python] O(n) Solution

**Author:** lee215
**Votes:** 53
**Link:** [https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4469784/](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4469784/)

---

I noticed the some post is misleading in complexity,
so I add this post to help my fans.
Please upvpte me if you find it helpful.
<br>

# **Intuition**
To make a polygon, `the perimeter > 2 * the longest side`.
So for each `A[i]` as the longest size,
we want to accumulate the sum of all shorter sides.
<br>

# **Explanation**
Sort the input `A`,
accumulate the prefix sum,
and check if `cur` perimeter is bigger than two longest side.

Time `O(sort)`
Space `O(sort)`
<br>

**Java**
```java
    public long largestPerimeter(int[] A) {
        Arrays.sort(A);
        long res = -1, cur = 0;
        for (int i = 0; i < A.length; ++i)
            if ((cur += A[i]) > A[i] * 2)
                res = cur;
        return res;
    }
```

**C++**
```cpp
    long long largestPerimeter(vector<int>& A) {
        sort(A.begin(), A.end());
        long long res = -1, cur = 0;
        for (int i = 0; i < A.size(); ++i)
            if ((cur += A[i]) > A[i] * 2)
                res = cur;
        return res;
    }
```

**Python**
```py
    def largestPerimeter(self, A: List[int]) -> int:
        A.sort()
        cur = sum(A)
        while A and cur <= A[-1] * 2:
            cur -= A.pop()
        return sum(A) if len(A) > 2 else -1
```
<br>

# Solution 2: Priority Queue

Instead of sorting all elements,
we can build a max priority queue in `O(n)`.
Becuase `A[i] <= 1e9`, we will pop the biggest element at most 30 times.

Time `O(n + 30logn)`
Space `O(n)`

**C++**
```cpp
    long long largestPerimeter(vector<int>& A) {
        long long cur = accumulate(A.begin(), A.end(), 0L);
        priority_queue<int> maxHeap(A.begin(), A.end());
        while (!maxHeap.empty() && cur <= maxHeap.top() * 2) {
            cur -= maxHeap.top();
            maxHeap.pop();
        }
        return cur > 0 && maxHeap.size() >= 2 ? cur : -1;
    }
```

**Python**
```py
    def largestPerimeter(self, A: List[int]) -> int:
        cur = sum(A)
        heapq._heapify_max(A)
        while A and cur <= A[0] * 2:
            cur -= heapq._heappop_max(A)
        return cur if len(A) > 2 else -1
```




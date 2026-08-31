# [Java/C++/Python] Sort

**Author:** lee215
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3650441/](https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3650441/)

---

# **Explanation**
Sort the input `A`
The result must be the minimum difference of 2 adjacent elements.

We put `A[0] ... A[i - 1]` in array `nums1`
We put `A[i] ... A[n - 1]` in array `nums2`

so `|max(nums1) - min(nums2)| = A[i] - A[i - 1]`,
only need to find out `min(A[i] - A[i - 1])`
<br>

# **Complexity**
Time `O(sort)`
Space `O(sort)`
<br>

**Java**
```java
    public int findValueOfPartition(int[] A) {
        Arrays.sort(A);
        int res = A[1] - A[0], n = A.length;
        for (int i = 2; i < n; i++)
            res = Math.min(res, A[i] - A[i - 1]);
        return res;
    }
```

**C++**
```cpp
    int findValueOfPartition(vector<int>& A) {
        sort(A.begin(), A.end());
        int res = A[1] - A[0], n = A.size();
        for (int i = 2; i < n; i++)
            res = min(res, A[i] - A[i - 1]);
        return res;
    }
```

**Python**
```py
    def findValueOfPartition(self, A: List[int]) -> int:
        A.sort()
        return min(A[i] - A[i - 1] for i in range(1, len(A)))
```

# [Java/C++/Python] 3 O(1) solutions, 3 lines, Mid of 3

**Author:** lee215
**Votes:** 32
**Link:** [https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/3623982/](https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/3623982/)

---

# **Explanation**
Return the mid of the first 3 elements.
Please upvote for your favorite one.
<br>

# **Complexity**
Time `O(1)`
Space `O(1)`
<br>

**Java**
```java
    public int findNonMinOrMax(int[] A) {
        if (A.length < 3)
            return -1;
        int mx = Math.max(A[0], Math.max(A[1], A[2])), mn = Math.min(A[0], Math.min(A[1], A[2]));
        for (int i = 0; i < 3; ++i)
            if (mn < A[i] && A[i] < mx)
                return A[i];
        return -1;
    }
```

**C++**
```cpp
    int findNonMinOrMax(vector<int>& A) {
        if (A.size() < 3)
            return -1;
        int mx = max(A[0], max(A[1], A[2])), mn = min(A[0], min(A[1], A[2]));
        for (int i = 0; i < 3; ++i)
            if (mn < A[i] && A[i] < mx)
                return A[i];
        return -1;
    }
```
<br>

# **Solution 2: Minus max and min**

**Java**
```java
    public int findNonMinOrMax(int[] A) {
        if (A.length < 3) return -1;
        int mx = Math.max(A[0], Math.max(A[1], A[2])), mn = Math.min(A[0], Math.min(A[1], A[2]));
        return A[0] + A[1] + A[2] - mn - mx;
    }
```

**C++**
```cpp
    int findNonMinOrMax(vector<int>& A) {
        if (A.size() < 3) return -1;
        int mx = max(A[0], max(A[1], A[2])), mn = min(A[0], min(A[1], A[2]));
        return A[0] + A[1] + A[2] - mn - mx;
    }
```

**Python**
```py
    def findNonMinOrMax(self, A):
        return -1 if len(A) < 3 else sum(A[:3]) - min(A[:3]) - max(A[:3])
```
<br>

# **Solution 3: Sort First 3 elements**

**Java**
Input changed
```java
    public int findNonMinOrMax(int[] A) {
        if (A.length < 3) return -1;
        Arrays.sort(A, 0, 3);
        return A[1];
    }
```

**C++**
Input changed
```cpp
    int findNonMinOrMax(vector<int>& A) {
        if (A.size() < 3) return -1;
        sort(A.begin(), A.begin() + 3);
        return A[1];
    }
```

**Python**
```py
    def findNonMinOrMax(self, A):
        return -1 if len(A) < 3 else sorted(A[:3])[1] 
```

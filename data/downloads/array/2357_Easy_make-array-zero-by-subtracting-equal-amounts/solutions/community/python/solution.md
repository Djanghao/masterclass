# [Java/C++/Python]  Number of Different Positives

**Author:** lee215
**Votes:** 237
**Link:** [https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/2357691/](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/2357691/)

---

# **Observation**
1. Same elements, are always same
-> Deduplicate

2. Different elements, are always different until 0
-> Counts unique elements
<br>

# **Explanation**
Return the number of different positive elements.

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int minimumOperations(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int a: nums)
            if (a > 0)
                set.add(a);
        return set.size();
    }
```

**C++**
```cpp
    int minimumOperations(vector<int>& A) {
        unordered_set<int> s(A.begin(), A.end());
        return s.size() - s.count(0);
    }
```

**Python**
```py
    def minimumOperations(self, A):
        return len(set(A) - {0})
```

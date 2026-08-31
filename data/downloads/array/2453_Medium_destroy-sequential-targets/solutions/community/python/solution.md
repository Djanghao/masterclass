# [Java/C++/Python] Count A[i] % space

**Author:** lee215
**Votes:** 46
**Link:** [https://leetcode.com/problems/destroy-sequential-targets/solutions/2756795/](https://leetcode.com/problems/destroy-sequential-targets/solutions/2756795/)

---

# **Intuition**
The elements with same remainder module by `space`,
can be destroied together.
<br>

# **Explanation**
1. Count the frequency of `A[i] % space`.
2. The maximum frequency `maxc` is the the maximum number of targets we can destroy.
3. Find the minimum element A[i] that `A[i] % space = maxc`.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int destroyTargets(int[] A, int space) {
        int res = (int)1e9;
        HashMap<Integer, Integer> count = new HashMap<>();
        for (int a : A)
            count.put(a % space, count.getOrDefault(a % space, 0) + 1);
        int maxc = Collections.max(count.values());
        for (int a : A)
            if (count.get(a % space) == maxc)
                res = Math.min(res, a);
        return res;
    }
```
**C++**
```cpp
    int destroyTargets(vector<int>& A, int space) {
        int res = 1e9, maxc = 0;
        unordered_map<int, int> count;
        for (int a : A)
            maxc = max(maxc, ++count[a % space]);
        for (int a : A)
            if (count[a % space] == maxc)
                res = min(res, a);
        return res;
    }
```

**Python**
```py
    def destroyTargets(self, A: List[int], space: int) -> int:
        count = Counter(a % space for a in A)
        maxc = max(count.values())
        return min(a for a in A if count[a % space] == maxc)
```

# [Java/C++/Python] Easy and Concise

**Author:** lee215
**Votes:** 24
**Link:** [https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4384489/](https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4384489/)

---

# **Explanation**
Assume `k` is the number of tested devices.

One pass every `a` in `A`,
Increment the count of tested devices if `a > k`.

Finally return `k`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int countTestedDevices(int[] A) {
        int k = 0;
        for (int a : A)
            k += a > k ?  1 : 0;
        return k;
    }
```

**C++**
```cpp
    int countTestedDevices(vector<int>& A) {
        int k = 0;
        for (int a : A)
            k += a > k;
        return k;
    }
```

**Python**
```py
    def countTestedDevices(self, A: List[int]) -> int:
        k = 0
        for a in A:
            k += a > k
        return k
```

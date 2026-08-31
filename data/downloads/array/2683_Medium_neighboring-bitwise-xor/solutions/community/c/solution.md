# [Java/C++/Python] Sum is Even

**Author:** lee215
**Votes:** 76
**Link:** [https://leetcode.com/problems/neighboring-bitwise-xor/solutions/3522095/](https://leetcode.com/problems/neighboring-bitwise-xor/solutions/3522095/)

---

# **Explanation**
orginal: `A[0], A[1], .... A[n-1]`
derived: `A[0]^A[1], A[1]^A[2] .... A[n-1]^A[0]`

`xor(derived) = (A[0]^A[1])^(A[1]^A[2])^ .... ^(A[n-1]^A[0]) = 0`

The necessary and suffisant condition for `derived` to have an `original` is
`xor(derived) == 0`

Whend `original` and `derived` is binary sequence,
this equals to `sum(derived) % 2 == 0`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>


**Java**
```java
    public boolean doesValidArrayExist(int[] A) {
        return Arrays.stream(A).sum() % 2 == 0;
    }
```

**C++**
```cpp
    bool doesValidArrayExist(vector<int>& A) {
        return accumulate(A.begin(), A.end(), 0) % 2 == 0;
    }
```

**Python**
```py
    def doesValidArrayExist(self, A: List[int]) -> bool:
        return sum(A) % 2 == 0
```

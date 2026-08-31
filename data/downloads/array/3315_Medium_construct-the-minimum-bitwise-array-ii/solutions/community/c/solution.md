# [Java/C++/Python] Low Bit, O(n)

**Author:** lee215
**Votes:** 15
**Link:** [https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/solutions/5904140/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/solutions/5904140/)

---

# **Intuition**
`ans[i] OR (ans[i] + 1) == nums[i]`
`ans[i]` and `ans[i] + 1` are one odd and one even.
`nums[i]` is an odd.
<br>

# **Explanation**
`..0111 || (..0111 + 1)  = ..1111`
The effect is that change the rightmost 0 to 1.

For each `a` in array `A`,
find the rightmost 0,
and set the next bit from 1 to 0.

`a + 1` will filp the 1-suffix to 0-suffix,
and flip the rightmost 0 to 1.
`a & -a` is a trick to get the rightmost 1.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)` for result
<br>

**Java**
```java
    public int[] minBitwiseArray(List<Integer> A) {
        int n = A.size(), res[] = new int[n];
        for (int i = 0; i < n; i++) {
            int a = A.get(i);
            if (A.get(i) % 2 == 0) {
                res[i] = -1;
            } else {
                res[i] = a - ((a + 1) & (-a - 1)) / 2;
            }
        }
        return res;
    }
```

**C++**
```cpp
    vector<int> minBitwiseArray(vector<int>& A) {
        vector<int> res;
        for (int a : A) {
            if (a % 2 == 0) {
                res.push_back(-1);
            } else {
                res.push_back(a - ((a + 1) & (-a - 1)) / 2);
            }
        }
        return res;
    }
```

**Python**
```py
    def minBitwiseArray(self, A: List[int]) -> List[int]:
        res = []
        for a in A:
            if a % 2 == 0:
                res.append(-1)
            else:
                res.append(a - ((a + 1) & (-a - 1)) // 2)
        return res
```

# [Java/C++/Python] 1-Line Solution, OR of All Elements

**Author:** lee215
**Votes:** 95
**Link:** [https://leetcode.com/problems/maximum-xor-after-operations/solutions/2195929/](https://leetcode.com/problems/maximum-xor-after-operations/solutions/2195929/)

---

# **Explanation**
The maximum possible result is `res = A[0] || A[1] || A[2] ... ` and it's realisiable.

# **Prove**
Now we approve it's realisiable.
Assume result is `best = XOR(A[i])` and `best < res` above.
There is at least one bit difference between `best` and `res`, assume it's `x = 1 << k`.

We can find at least a `A[i]` that `A[i] & x = x`.

we apply `x` on `A[i]`, `A[i]` is updated to `A[i] & (A[i] ^ x) = A[i] ^ x`.
We had `best = XOR(A[i])` as said above,
now we have `best2 = XOR(A[i]) ^ x`,
so we get a better `best2 > best`, where we prove by contradiction.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int maximumXOR(int[] nums) {
        int res = 0;
        for (int a: nums)
            res |= a;
        return res;
    }
```
**C++**
```cpp
    int maximumXOR(vector<int>& nums) {
        int res = 0;
        for (int a : nums)
            res |= a;
        return res;
    }
```
**C++**
```cpp
    int maximumXOR(vector<int>& nums) {
        return reduce(nums.begin(), nums.end(), 0, bit_or());
    }
```
**Python**
```py
    def maximumXOR(self, nums):
        return reduce(ior, nums)
```

# [Java/C++/Python] Bit Solution

**Author:** lee215
**Votes:** 76
**Link:** [https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solutions/2039903/](https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solutions/2039903/)

---


# **Explanation**
If the bitwise AND of candidates is positive,
there is at least one bit that all candidates is 1.

So we can enumerate each bit of 32 bits,
the number of candidates that have this bit.
If `a & bit > 0`, it means candidate `a` has this bit.

We sum up the total number `cur` of current candidates that have this bit,
then update out final result `res`.
<br>

# **Complexity**
Time `O(nlog10000000)`
Space `O(1)`
<br>

**Java**
```java
    public int largestCombination(int[] A) {
        int res = 0, cur = 0;
        for (int i = 1; i <= 10000000; i <<= 1) {
            cur = 0;
            for (int a : A)
                if ((a & i) > 0)
                    cur++;
            res = Math.max(res, cur);
        }
        return res;
    }
```
**Java**
```java
    public int largestCombination(int[] A) {
        int res = 0, cur = 0;
        for (int i = 0; i < 30; ++i) {
            cur = 0;
            for (int a : A)
                cur += a >> i & 1;
            res = Math.max(res, cur);
        }
        return res;
    }
```
**C++**
```cpp
    int largestCombination(vector<int>& A) {
        int res = 0, cur = 0;
        for (int i = 1; i <= 10000000; i <<= 1) {
            cur = 0;
            for (int& a : A)
                if (a & i)
                    cur++;
            res = max(res, cur);
        }
        return res;        
    }
```
**C++**
```cpp
    int largestCombination(vector<int>& A) {
        int res = 0, cur = 0;
        for (int i = 0; i < 30; ++i, cur = 0)
            for (int a: A)
                res = max(res, cur += a >> i & 1);
        return res;    
    }
```
**Python**
```py
    def largestCombination(self, A):
        return max(sum(1 << i & a > 0 for a in A) for i in range(30))
```

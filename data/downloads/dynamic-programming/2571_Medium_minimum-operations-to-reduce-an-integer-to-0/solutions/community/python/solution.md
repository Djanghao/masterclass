# [Java/C++/Python] 1-line Solution

**Author:** lee215
**Votes:** 113
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3203994/](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3203994/)

---

# **Intuition**
Take a look at the binary of `n`:

If there is an alone `1`, like ..00001,
it takes at leat one operation to remove.
and we can remove it in one operation.
So we do `res++` and `n >>= 2`,
remove two last bits.


If there are multiple `1`s, like ..0000111,
we can't remove them in one single operation,
so it takes at least two operation to remove,
For example of `..0000111`
we can add `1` and then remove `1000`.
So we do `n++` and remove the last bit `0`.
<br>

# **Explanation**
By this stratagy in intuition,
we only need to take care of the the continuous `1` in binary of `n`.
If it's single `1`, `res += 1`
If it's multiple `1`s, `res += 2`
<br>

# **Complexity**
Time `O(logn)`
Space `O(1)`
<br>

**Java**
```java
    public int minOperations(int n) {
        int res = 0;
        while (n > 0) {
            if ((n & 3) == 3) {
                n++;
                res++;
            } else {
                res += n & 1;
                n >>= 1;
            }
        }
        return res;
    }
```

**C++**
```cpp
    int minOperations(int n) {
        int res = 0;
        while (n > 0) {
            if ((n & 3) == 3) {
                n++;
                res++;
            } else {
                res += n & 1;
                n >>= 1;
            }
        }
        return res;
    }
```

**Python**
```py
    def minOperations(self, n: int) -> int:
        res = 0
        while n > 0:
            if n % 2 == 0:
                n >>= 1
            elif (n & 2) > 0:
                n += 1
                res += 1
            else:
                res += 1
                n >>= 2
        return res
```
<br>

# **Solution 2: One Line**

Reference: https://oeis.org/A007302

Here is a trick to transform multiplt 1s:

**For case of single 1: 01**
n           = 01,
n * 2       = 10,
n * 3       = 11,
n ^ (n * 3) = 10,

**For case multiple 1s: ..0011...1**
n           = 0011111,
n * 2       = 0111110,
n * 3       = 1011101,
n ^ (n * 3) = 1000010,

All `0011..1` turns into two `1`s.


**For case multiple 1s with some single 0 in the middle**
n           = 0011101011,
n * 2       = 0111010110,
n * 3       = 1011000001,
n ^ (n * 3) = 1000101010,

Still turns into two 1s on both side,
and the single 0s in the middle will turn into 1s.


So to conclude,
We just need to count bits of `n ^ (n * 3)`.

**Java**
```java
    public int minOperations(int n) {
        return Integer.bitCount(n ^ (n * 3));
    }
```
**C++**
```cpp
    int minOperations(int n) {
        return __builtin_popcount(n ^ (n * 3));
    }
```
**Python**
```py
    def minOperations(self, n: int) -> int:
        return (n ^ (n * 3)).bit_count()
```

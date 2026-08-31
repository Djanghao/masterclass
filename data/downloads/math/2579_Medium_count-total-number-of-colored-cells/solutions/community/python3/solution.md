# [Java/Python 3] Sum of square of n and n - 1.

**Author:** rock
**Votes:** 11
**Link:** [https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/3256164/](https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/3256164/)

---

By obersance, there are `2` arithmetic sequences if we divide the cells right below the horizontal middle cells, and they are:

1, 3, 5,..., 2 * i - 1, ..., 2 * n - 1 =  n * n.
1, 3, 5,..., 2 * i - 1, ..., 2 * n - 3 = (n -  1) * (n - 1).

```java
    public long coloredCells(int n) {
        return (long)n * n + (long)(n - 1) * (n - 1);
    }
```

```python
    def coloredCells(self, n: int) -> int:
        return n ** 2 + (n - 1) ** 2
```

**Analysis:**

Time & space: `O(1)`.

----

Another Easy way of doing this problem -- credit to **@Himanshu3889**

Observe we are increasing stairs on all four sides Left-up , Left-down , Right-up Right-down this means previous stairs contributes 4* prevStairs to the next n and in each directions a new stair is coming
`O(n)` dp

```python
def coloredCells(self, n: int) -> int:
    res = 1   # for n == 1
    for stairs in range(1,n):  # prev stairs
        res += stairs*4
    return res
```
`O(1)` using maths

Now use the maths see sequence
`1 + 1* 4 + 2* 4 + 3* 4....(n-1) * 4`
`1 + 4 * (1+2+3+4 ..n-1) = 1 + 4* (sum of n-1 natural numbers)`

```python
def coloredCells(self, n: int) -> int:
    return 1 + 4*n*(n-1)//2
```
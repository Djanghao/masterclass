# [Java/Python 3]  From O(n ^ (1 / 3)) to O(log(n)), easy codes w/ brief explanation & analysis.

**Author:** rock
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/1375448/](https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/1375448/)

---

**Method 1:**

Divide into 3 parts: axis, corner and other:

Use `i`, `corner` and `other` to denote the number of apples on each half axis, each corner and other parts, respectively.

Obviously, for any given `i`,  each half axis has `i` apples; each of the 4 corners has `2 * i` apples, and the rest part (quadrant) has two times of `(i + 1) + (i + 2) + (i + 3) + ... + (2 * i - 1)` apples, which sums to `((i + 1) + (2 * i - 1)) * ((2 * i - 1) - (i + 1) + 1) / 2 * 2 = 3 * i * (i - 1)`.

See the below for reference.

----
i,  i + 1, i + 2, ..., 2 * i
.............................
.............................
..........................i + 2
..........................i + 1
.............................i
```java
    public long minimumPerimeter(long neededApples) {
        long perimeter = 0;
        for (long i = 1, apples = 0; apples < neededApples; ++i) {
            long corner = 2 * i, other = 3 * i * (i - 1);
            apples += 4 * (i + corner + other);
            perimeter = 8 * i;
        }
        return perimeter;
    }
```
```python
    def minimumPerimeter(self, neededApples: int) -> int:
        apples = i = 0
        while apples < neededApples:
            i += 1
            corner, other = 2 * i, 3 * i * (i - 1)
            apples += 4 * (corner + i + other)
        return 8 * i
```

Since `4 * (i + corner + other) = 4 * (i + 2 * i + 3 * i * (i - 1)) = 4 * (3 * i * i) = 12 * i * i`, the above codes can be simplified as follows: 
```java
    public long minimumPerimeter(long neededApples) {
        long i = 0;
        while (neededApples > 0) {
            neededApples -= 12 * ++i * i;
        }
        return 8 * i;
    }
```
```python
    def minimumPerimeter(self, neededApples: int) -> int:
        i = 0
        while neededApples > 0:
            i += 1
            neededApples -= 12 * i * i
        return 8 * i
```


**Analysis:**

Time: `O(n ^ (1 / 3))`, space: `O(1)`, where `n = neededApples`.

----

**Method 2: Binary Search**


The codes in method 1 actually accumulate `12` times of `i ^ 2`. There is a formula: `sum(1 ^ 2 + 2 ^ 2 + ... + i ^ 2) = i * (i + 1) * (2 * i + 1) / 6`, the `12` times of which is 

```
2 * i * (i + 1) * (2 * i + 1)
``` 
Since the input is in range `1 - 10 ^ 15`, we can observe that `10 ^ 15 >= 2 * i * (i + 1) * (2 * i + 1) > i ^ 3`. Obviously
```
i ^ 3 < 10 ^ 15
```
we have
```
i < 10 ^ 5
```
Therefore, the range of `i` is `1 ~ 10 ^ 5`, and we can use binary search to dicide the `i`.

```java
    public long minimumPerimeter(long neededApples) {
        long lo = 1, hi = 100_000;
        while (lo < hi) {
            long mid = lo + hi >> 1;
            if (2 * mid * (mid + 1) * (2 * mid + 1) < neededApples) {
                lo = mid + 1;
            }else {
                hi = mid;
            }
        }
        return 8 * hi;
    }
```
```python

```
**Analysis:**

Time complexity : `O(log(n ^ (1 / 3))) = O((1 / 3) * log(n)) = O(log(n))`, Therefore

Time: `O(log(n)), space: `O(1)`, where `n = neededApples`.


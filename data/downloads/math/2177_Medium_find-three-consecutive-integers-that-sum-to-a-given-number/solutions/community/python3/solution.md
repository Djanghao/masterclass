# [Java/Python 3] Divisible by 3.

**Author:** rock
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/1783625/](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/1783625/)

---

```java
    public long[] sumOfThree(long num) {
        if (num % 3 != 0) {
            return new long[0];
        }
        num /= 3;
        return new long[]{num - 1, num, num + 1};
    }
```
```python
    def sumOfThree(self, num: int) -> List[int]:
        if num % 3 == 0:
            num //= 3
            return [num - 1, num, num + 1]
        return []
```
**Analysis:**

Time & space: `O(1)`.
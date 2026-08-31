# [Java/C++/Python] Enumerate from 1 to 10

**Author:** lee215
**Votes:** 39
**Link:** [https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/2168323/](https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/2168323/)

---


# **Explanation**
if `num == 0`, then empty set valid, return 0.

Then we enumerate the size of set from 1 to 10 and check the conditions:

1. The units digit of each integer is k.
2. The sum of the integers is num.

These two condistion equals to
1. `size * k <= num`
2. `size * k % 10 == num % 10`

Return the minimum valid size.
<br>

# **Complexity**
Time `O(1)`
Space `O(1)`
<br>

**Java**
```java
    public int minimumNumbers(int num, int k) {
        if (num == 0) return 0;
        for (int i = 1; i * k <= num && i <= 10; ++i)
            if (k * i % 10 == num % 10)
                return i;
        return -1;
    }
```

**C++**
```cpp
    int minimumNumbers(int num, int k) {
        if (num == 0) return 0;
        for (int i = 1; i * k <= num && i <= 10; ++i)
            if (k * i % 10 == num % 10)
                return i;
        return -1;
    }
```

**Python**
```py
    def minimumNumbers(self, num, k):
        if num == 0: return 0
        for i in range(1, 11):
            if k * i % 10 == num % 10 and i * k <= num:
                return i
        return -1
```

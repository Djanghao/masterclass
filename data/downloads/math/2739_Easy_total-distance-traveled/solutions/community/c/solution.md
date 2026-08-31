# [Java/C++/Python] Math, O(1)

**Author:** lee215
**Votes:** 63
**Link:** [https://leetcode.com/problems/total-distance-traveled/solutions/3650469/](https://leetcode.com/problems/total-distance-traveled/solutions/3650469/)

---

# **Explanation**
Assume we can transfer `x` liters from `additionalTank` to `mainTank`.
So we can have two inequalities:

`x <= additionalTank`
`mainTank + x > 5x`

The first is easy,
since we have at most `additionalTank` liters in additional tank.

The second needs an explanation,
we can use `mainTank + x` in total,
and we need used up`5x` for transfer.
Can't use `>=`,
because need to use `5` liters first,
for example we have `4` liters in main tank,
we can't transfer `1` liter from the additional tank.


so we have
`x <= additionalTank`
`4x < mainTank`

`x <= additionalTank`
`x <= (mainTank - 1) / 4`, where `/` is integer division

So we can used up `mainTank + x` liters,
and go `(mainTank + x) * 10` km.
<br>

# **Complexity**
Time `O(1)`
Space `O(1)`
<br>

**Java**
```java
    public int distanceTraveled(int a, int b) {
        return (a + min((a - 1) / 4, b)) * 10;
    }
```

**C++**
```cpp
    int distanceTraveled(int a, int b) {
        return (a + min((a - 1) / 4, b)) * 10;
    }
```

**Python**
```py
    def distanceTraveled(self, a: int, b: int) -> int:
        return (a + min((a - 1) // 4, b)) * 10
```

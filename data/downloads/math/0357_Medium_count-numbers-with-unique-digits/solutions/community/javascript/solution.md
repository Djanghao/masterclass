# Solution By Dare2Solve | Detailed Explanation | Clean Code

**Author:** Dare2Solve
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/5757140/](https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/5757140/)

---

```Explanation []
authorslog.com/blog/JeIPdNauHj
```
# Code

```cpp []
class Solution {
public:
    int countNumbersWithUniqueDigits(int n) {
        if (n == 0) return 1;
        if (n == 1) return 10;
        int k = 9;
        for (int i = 0; i < n - 1; i++) {
            k *= (9 - i);
        }
        return k + countNumbersWithUniqueDigits(n - 1);
    }
};
```

```python []
class Solution:
    def countNumbersWithUniqueDigits(self, n: int) -> int:
        if n == 0:
            return 1
        if n == 1:
            return 10
        k = 9
        for i in range(n - 1):
            k *= (9 - i)
        return k + self.countNumbersWithUniqueDigits(n - 1)
```

```java []
class Solution {
    public int countNumbersWithUniqueDigits(int n) {
        if (n == 0) return 1;
        if (n == 1) return 10;
        int k = 9;
        for (int i = 0; i < n - 1; i++) {
            k *= (9 - i);
        }
        return k + countNumbersWithUniqueDigits(n - 1);
    }
}
```

```javascript []
/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigits = function (n) {
    if (n == 0) return 1;
    if (n == 1) return 10;
    let k = 9;
    for (let i = 0; i < n - 1; i++) {
        k *= (9 - i);
    }
    return k + countNumbersWithUniqueDigits(n - 1);
};
```
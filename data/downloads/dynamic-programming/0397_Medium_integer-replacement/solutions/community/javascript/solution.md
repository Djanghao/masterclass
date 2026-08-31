# Solution By Dare2Solve | Detailed Explanation | Clean Code

**Author:** Dare2Solve
**Votes:** 4
**Link:** [https://leetcode.com/problems/integer-replacement/solutions/5782357/](https://leetcode.com/problems/integer-replacement/solutions/5782357/)

---

```Explanation []
authorslog.com/blog/FUY14d6Rds
```
# Code

```cpp []
class Solution {
public:
    int integerReplacement(int n) {
        int count = 0;
        long num = n; // Use long to avoid overflow issues with large integers

        while (num != 1) {
            if ((num & 1) == 0) {
                num >>= 1;
            } else {
                if (num == 3 || ((num >> 1) & 1) == 0) {
                    num--;
                } else {
                    num++;
                }
            }
            count++;
        }
        return count;
    }
};
```

```python []
class Solution:
    def integerReplacement(self, n: int) -> int:
        count = 0
        while n != 1:
            if n & 1 == 0:
                n >>= 1
            elif n == 3 or (n >> 1) & 1 == 0:
                n -= 1
            else:
                n += 1
            count += 1
        return count
```

```java []
class Solution {
    public int integerReplacement(int n) {
        int count = 0;
        long num = n; // Use long to avoid overflow issues with large integers

        while (num != 1) {
            if ((num & 1) == 0) {
                num >>= 1;
            } else {
                if (num == 3 || ((num >> 1) & 1) == 0) {
                    num--;
                } else {
                    num++;
                }
            }
            count++;
        }
        return count;
    }
}
```

```javascript []
var integerReplacement = function (n) {
    let count = 0;

    while (n !== 1) {
        if (n < 0) n = -n;
        if ((n & 1) === 0) {
            n = n >> 1;

        } else {
            
            if (n === 3 || ((n >> 1) & 1) === 0) {
                n--;
            } else {
                n++;
            }
        }
        count++;
    }
    return count;
};
```
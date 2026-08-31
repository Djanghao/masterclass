# [Java/Python 3] O(digits) w/ brief explanation and analysis.

**Author:** rock
**Votes:** 25
**Link:** [https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/608627/](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/608627/)

---

Convert to char array/list then process.

The following explains the algorithm of the code: -- credit to **@leetcodeCR97 and @martin20**.

If your first character `x` is 
1. neither `1` nor `9` then you will be replacing `a` with `9 `and `b` with `1 `if it matched the first character of the given number. 
2. `1` then you already have `b` starting with `1` which is least and you will have one more chance to decrease `b` to `0` which should be in MSB(Left most side). 
3. `9` then you will have one more chance to change `a` to `9` which should be in MSB(Left most side). 

```java
    public int maxDiff(int num) {
        char[] a = Integer.toString(num).toCharArray(), b = a.clone();
        char x = a[0], y = 0;
        for (int i = 0; i < a.length; ++i) {
            if (a[i] == x) {
                a[i] = '9';
                b[i] = '1';
            }else if (x == '1' && a[i] > '0' || x == '9' && a[i] < '9') {
                if (y == 0) {
                    y = a[i];
                } 
                if (y == a[i]) {
                    if (x == '1')
                        b[i] = '0';
                    else
                        a[i] = '9';
                }
            }
        }
        return Integer.parseInt(String.valueOf(a)) - Integer.parseInt(String.valueOf(b));
    }
```
```python
    def maxDiff(self, num: int) -> int:
        a, b = ([d for d in str(num)] for _ in range(2))
        x, y = a[0], ' ' 
        for i, ch in enumerate(a):
            if ch == x:
                a[i] = '9'
                b[i] = '1'
            else:
                if x == '1' and ch != '0' or x == '9' != ch:
                    if y == ' ':
                        y = ch
                    if y == ch:
                        if x == '1':
                            b[i] = '0'
                        else:
                            a[i] = '9'
        return int(''.join(a)) - int(''.join(b))
```

**Analysis:**

Time & space: `O(n)`, where `n` is the number of the digits in `num`
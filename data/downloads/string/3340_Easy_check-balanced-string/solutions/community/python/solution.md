# [Java/C++/Python] Calculate the Diff

**Author:** lee215
**Votes:** 13
**Link:** [https://leetcode.com/problems/check-balanced-string/solutions/6000376/](https://leetcode.com/problems/check-balanced-string/solutions/6000376/)

---

Time `O(n)`
Space `O(1)`

```Java [Java]
    public boolean isBalanced(String num) {
        int diff = 0, sign = 1, n = num.length();
        for (int i = 0; i < n; ++i) {
            diff += sign * (num.charAt(i) - '0');
            sign = -sign;
        }
        return diff == 0;
    }
```

```C++ [C++]
    bool isBalanced(string num) {
        int diff = 0, sign = 1;
        for (char i: num) {
            diff += sign * (i - '0');
            sign = -sign;
        }
        return diff == 0;
    }
```

```py [Python3]
	# O(n) space
    def isBalanced(self, num: str) -> bool:
        A = list(map(int, num))
        return sum(A[::2]) == sum(A[1::2])
```

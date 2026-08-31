# Ruby solution almost without built-in methods :)

**Author:** tataruty
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-to-array-form-of-integer/solutions/2768266/](https://leetcode.com/problems/add-to-array-form-of-integer/solutions/2768266/)

---

Finally i'm bored with one-liners :) 

```
def add_to_array_form(num, k)
    inter = []
    i = num.size - 1
    buf = 0
    while k > 0 || i >= 0
        i < 0 ? nn = 0 : nn = num[i]
        m = k % 10
        k = k / 10
        n = nn + m + buf
        buf = n / 10
        i -= 1
        inter << n % 10
    end
    inter << buf if buf > 0
    inter.reverse
end
```
![image](./images/0.png)

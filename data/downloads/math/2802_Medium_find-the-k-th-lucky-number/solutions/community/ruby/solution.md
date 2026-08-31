# Ruby, Bitwise Shift

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-th-lucky-number/solutions/5228024/](https://leetcode.com/problems/find-the-k-th-lucky-number/solutions/5228024/)

---

# Code
```
def kth_lucky_number(k)
  k += 1

  result = []

  while k > 1
    if (k & 1).zero?
      result.prepend(4)
    else
      result.prepend(7)
    end

    k >>= 1
  end

  result.join
end

```
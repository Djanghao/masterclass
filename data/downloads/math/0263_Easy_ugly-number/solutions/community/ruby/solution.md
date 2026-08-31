# Ruby

**Author:** lexuantrung1612
**Votes:** 1
**Link:** [https://leetcode.com/problems/ugly-number/solutions/2825816/](https://leetcode.com/problems/ugly-number/solutions/2825816/)

---

```
def is_ugly(n)
  return false if n <= 0
  
  [2,3,5].each do |num|
    n = n / num while n % num == 0
  end

  n == 1
end
```
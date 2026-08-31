# Ruby - Stack

**Author:** GuptaPrachur10
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/2014543/](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/2014543/)

---

```
def replace_non_coprimes(nums)
    res = []
    nums.each do |ele|
        loop do
            gcd = (res.last || 1).gcd(ele)
            break if gcd == 1
            ele *= res.pop/gcd
        end
        res<<ele
    end
    res
end
```
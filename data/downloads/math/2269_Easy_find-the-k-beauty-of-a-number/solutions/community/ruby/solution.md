# Ruby 1-Line Solution

**Author:** vladhilko
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/5199094/](https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/5199094/)

---

# Code
```
# @param {Integer} num
# @param {Integer} k
# @return {Integer}
def divisor_substrings(num, k)
  num.to_s.chars.each_cons(k).count { _1.join.to_i != 0 && num % _1.join.to_i == 0 }
end
```
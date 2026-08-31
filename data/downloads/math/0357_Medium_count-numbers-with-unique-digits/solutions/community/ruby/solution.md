# ruby 1-liner

**Author:** _-k-
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/5190442/](https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/5190442/)

---

```
def count_numbers_with_unique_digits(n) =

   n.times.sum{|x| 9*(10-x..9).reduce(1,:*) } + 1
```
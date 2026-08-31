# Ruby One Line Simple Solution

**Author:** bikashnit09
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/2500831/](https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/2500831/)

---

```
def count_even(num)
    (2..num).select{|i| i.digits.sum.even?}.size
end
```
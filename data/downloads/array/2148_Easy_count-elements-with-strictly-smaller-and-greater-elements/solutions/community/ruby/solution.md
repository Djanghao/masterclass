# Ruby one liner 41ms

**Author:** alanparmenter
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/3950405/](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/3950405/)

---

```
def count_elements(nums)
  nums.count{|n| n > nums.min && n < nums.max}
end
```
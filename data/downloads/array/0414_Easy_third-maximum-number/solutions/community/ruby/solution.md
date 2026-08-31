# Greedy search

**Author:** lewis789
**Votes:** 1
**Link:** [https://leetcode.com/problems/third-maximum-number/solutions/4200627/](https://leetcode.com/problems/third-maximum-number/solutions/4200627/)

---

# Intuition
Do a greedy search three times, disregarding the previous greatest value.

# Code
```
def third_max(nums)
    neg_inf = -Float::INFINITY
    list = []    
    
    greatest = neg_inf
    nums.each { |n| greatest = n if n > greatest }
    list << greatest

    second_greatest = neg_inf
    nums.each { |n| second_greatest = n if n > second_greatest && n < greatest }
    list << second_greatest

    third_greatest = neg_inf
    nums.each { |n| third_greatest = n if n > third_greatest && n < second_greatest }
    list << third_greatest
    
    if list.include?(neg_inf)
      list.first
    else
      list[2]
    end
end
```
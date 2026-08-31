# 🍀🦋🍀 Ruby from junior: delete odds -> sort -> tally -> delete not max -> return first

**Author:** tataruty
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-frequent-even-element/solutions/3161852/](https://leetcode.com/problems/most-frequent-even-element/solutions/3161852/)

---



# Code
```
# @param {Integer[]} nums
# @return {Integer}
def most_frequent_even(nums)
    ha = nums.delete_if { | item | item.odd? }.sort.tally
    return -1 if ha.size == 0

    ma = ha.values.max
    h = ha.delete_if { |k,v| v != ma}
    h.keys[0]
end
```
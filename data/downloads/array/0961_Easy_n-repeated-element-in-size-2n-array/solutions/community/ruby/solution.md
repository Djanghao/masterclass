# 🍀🦋🍀 Ruby from junior: 2 solutions with 'tally' and with 'manual' hash

**Author:** tataruty
**Votes:** 1
**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/3161750/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/3161750/)

---



# Code
```
# @param {Integer[]} nums
# @return {Integer}
def repeated_n_times(nums)
    # one liner
    # nums.tally.each { |k,v| return k if v > 1 }

    # normal solution that can be much faster
    ha = {}
    nums.each { |n| ha[n].nil? ? ha[n] = 1 : (return n) }
end
```
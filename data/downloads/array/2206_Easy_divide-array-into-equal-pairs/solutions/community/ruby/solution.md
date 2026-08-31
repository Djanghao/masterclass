# Frequency Hash, O(n):O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/4933091/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/4933091/)

---


# Code
```
# @param {Integer[]} nums
# @return {Boolean}
def divide_array(nums)
    freq_hash = Hash.new(0)
    nums.each do |num|
        freq_hash[num] += 1
    end

    freq_hash.each do |key, freq| 
        if freq.odd?
            return false
        end
    end

    return true
end
```
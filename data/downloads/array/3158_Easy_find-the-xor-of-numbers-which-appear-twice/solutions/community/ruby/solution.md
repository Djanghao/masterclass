# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5289383/](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5289383/)

---


# Code
```
# @param {Integer[]} nums
# @return {Integer}
def duplicate_numbers_xor(nums)
    freq_hash = Hash.new(0)
    nums.each do |num|
        freq_hash[num] += 1
    end

    answer = 0
    freq_hash.each do |key, value|
        if value > 1
            answer ^= key
        end
    end

    answer
end
```
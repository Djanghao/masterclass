# My ruby solution

**Author:** jtn007
**Votes:** 6
**Link:** [https://leetcode.com/problems/contains-duplicate/solutions/61155/](https://leetcode.com/problems/contains-duplicate/solutions/61155/)

---

regular solution

    def contains_duplicate(nums)
        hash = {}
        nums.each do |x|
            return true if hash[x] == x
            hash[x] = x;
        end
        false
    end

one line with Ruby array function(lose meaning, not recommended)

    def contains_duplicate(nums)
        nums.size != nums.uniq.size
    end
# solved

**Author:** user0367ub
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/4903792/](https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/4903792/)

---


# Code
```
# @param {String} s
# @param {String} target
# @return {Integer}
def rearrange_characters(s, target)
    target_array = target.split("").group_by{|n| n}
    s_array = s.split("").group_by{|n| n}

    min_copies = Float::INFINITY
    target_array.each do |i, v|
        return 0 if s_array[i] == nil

        n = (s_array[i].size / v.size).to_i
        return n if n == 0

        min_copies = n if n < min_copies
    end

    min_copies
end
```
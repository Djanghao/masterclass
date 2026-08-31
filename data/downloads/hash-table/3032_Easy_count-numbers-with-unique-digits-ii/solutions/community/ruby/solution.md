# Simple Ruby Solution

**Author:** tomrendle
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5942557/](https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5942557/)

---


# Code
```ruby []
# @param {Integer} a
# @param {Integer} b
# @return {Integer}
def number_count(a, b)
    arr = (a..b).to_a
    count = arr.size
    arr.each do |n|
        subarr = n.to_s.chars.to_a
        uniques = subarr.uniq!
        if uniques != nil
            count -= 1
        end
    end
    return count
end
```
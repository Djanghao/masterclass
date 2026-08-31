# Simple Solution. O(n), O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/4879486/](https://leetcode.com/problems/count-largest-group/solutions/4879486/)

---


# Code
```
# @param {Integer} n
# @return {Integer}
def count_largest_group(n)
    hash = Hash.new(0)
    i = 1
    max_freq = 0
    while i < n + 1
        key = i.digits.sum
        hash[key] += 1
       
        if hash[key] > max_freq
            max_freq = hash[key]
        end
        i += 1
    end

    ans = 0
    hash.each do |k,v|
        if v == max_freq
            ans += 1
        end
    end

    ans
end
```
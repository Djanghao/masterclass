# Sort + Hash. O(n), O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/increasing-decreasing-string/solutions/5012106/](https://leetcode.com/problems/increasing-decreasing-string/solutions/5012106/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {String} s
# @return {String}
def sort_string(s)
    chars = s.chars
    chars.sort!
    hash = chars.tally
    res = ""
    while hash.size > 0
        hash.each do |key, val|
            res += key
            hash[key] -= 1
            if hash[key] == 0
                hash.delete key
            end
        end

        hash.keys.reverse.each do |key|
            res += key
            hash[key] -= 1
            if hash[key] == 0
                hash.delete key
            end
        end
    end

    res
end
```
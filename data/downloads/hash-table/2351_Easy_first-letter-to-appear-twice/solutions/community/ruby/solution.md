# Frequency Hash

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-letter-to-appear-twice/solutions/4972902/](https://leetcode.com/problems/first-letter-to-appear-twice/solutions/4972902/)

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
# @return {Character}
def repeated_character(s)
    freq_hash = Hash.new(0)
    s.each_char do |char|
        freq_hash[char] += 1
        if freq_hash[char] == 2
            return char
        end
    end
    
end
```
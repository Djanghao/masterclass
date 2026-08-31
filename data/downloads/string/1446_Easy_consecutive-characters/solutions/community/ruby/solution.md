# Simple Solution, O(n), O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/consecutive-characters/solutions/5270270/](https://leetcode.com/problems/consecutive-characters/solutions/5270270/)

---


# Code
```
# @param {String} s
# @return {Integer}
def max_power(s)
    
    max = 0
    current = 0
    prev = ""
    s.each_char do |char|
        if char == prev
            current += 1
        else
            max = [max, current].max
            current = 1
        end
        prev = char
    end

    
    [max, current].max
end
```
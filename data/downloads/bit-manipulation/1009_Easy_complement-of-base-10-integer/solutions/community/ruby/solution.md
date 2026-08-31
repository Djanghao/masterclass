# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/complement-of-base-10-integer/solutions/4964761/](https://leetcode.com/problems/complement-of-base-10-integer/solutions/4964761/)

---


# Code
```
# @param {Integer} n
# @return {Integer}
def bitwise_complement(n)
    new_n = ""
    n.to_s(2).each_char do |char|
        if char == "1"
            new_n += "0"
        else
            new_n += "1"
        end
    end
    
    new_n.to_i(2)
end
```
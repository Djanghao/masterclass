# Simple Solution, O(n), O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-asterisks/solutions/5120739/](https://leetcode.com/problems/count-asterisks/solutions/5120739/)

---


# Code
```
# @param {String} s
# @return {Integer}
def count_asterisks(s)
    bar = 0
    answer = 0
    s.each_char do |char|
        if char == "|"
            bar += 1
            if bar == 2
                bar = 0
            end
        elsif char == "*" and bar == 0
            answer += 1
        end
    end
    
    answer 
end
```
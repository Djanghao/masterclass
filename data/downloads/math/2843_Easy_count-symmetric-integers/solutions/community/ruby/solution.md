# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-symmetric-integers/solutions/5021773/](https://leetcode.com/problems/count-symmetric-integers/solutions/5021773/)

---


# Code
```
# @param {Integer} low
# @param {Integer} high
# @return {Integer}
def count_symmetric_integers(low, high)
    answer = 0
    while low <= high
        s = low.to_s
        if s.size.even?
            n = s.size/2
            first = 0
            s[0..n-1].each_char{|dig| first += dig.to_i}
            last = 0
            s[n..-1].each_char{|dig| last += dig.to_i}
            if first == last
                answer += 1
            end
        end
        low += 1
    end
    answer
end
```
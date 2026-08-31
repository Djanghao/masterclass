# Ruby 100 % 59 ms

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-distances-between-same-letters/solutions/4432296/](https://leetcode.com/problems/check-distances-between-same-letters/solutions/4432296/)

---

# Code
```
def check_distances(s, distance)
    26.times{|i|
        d = distance[i]
        letter = (97+i).chr
        if s.include?(letter)
            index1 = s.index(letter)
            index2 = s.rindex(letter)
            if index1!=index2
                return false if d!=(index2-index1-1)
            end
        end
    } 
    true
end
```
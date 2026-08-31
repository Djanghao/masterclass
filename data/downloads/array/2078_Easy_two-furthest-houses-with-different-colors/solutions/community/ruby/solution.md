# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/5312715/](https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/5312715/)

---


# Code
```
# @param {Integer[]} colors
# @return {Integer}
def max_distance(colors)
    max = 0
    i = 0
    while i < colors.size
        j = colors.size - 1
        while j > i
            if colors[i] != colors[j]
                max = [j-i, max].max
                break
            end
            j -= 1
        end
        i += 1
    end
    
    max
end
```
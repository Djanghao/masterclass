# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/4967215/](https://leetcode.com/problems/smallest-even-multiple/solutions/4967215/)

---


# Code
```
# @param {Integer} n
# @return {Integer}
def smallest_even_multiple(n)
    ans = 999999
    z = n
    while true
        if z.even? and z%n == 0
            return z
        end
        z += 1
    end
end
```
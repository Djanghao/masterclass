# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/5309226/](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/5309226/)

---


# Code
```
# @param {Integer} n
# @return {Integer}
def number_of_cuts(n)
    if n == 1
        return 0
    end
    
    if n.even?
        n/2
    else
        n
    end
    
end
```
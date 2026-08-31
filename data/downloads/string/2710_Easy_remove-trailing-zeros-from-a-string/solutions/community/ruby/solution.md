# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/5154240/](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/5154240/)

---


# Code
```
# @param {String} num
# @return {String}
def remove_trailing_zeros(num)
    i = num.size - 1
    while num[i] == "0"
        i -= 1
    end

    num[0..i]
    
end
```
# Simple Solution.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/harshad-number/solutions/4968914/](https://leetcode.com/problems/harshad-number/solutions/4968914/)

---


# Code
```
# @param {Integer} x
# @return {Integer}
def sum_of_the_digits_of_harshad_number(x)
    sum = x.digits.sum 
    if x % sum == 0
        return sum
    else
        return -1
    end
end
```
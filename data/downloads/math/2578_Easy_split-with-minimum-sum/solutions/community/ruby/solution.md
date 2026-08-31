# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-with-minimum-sum/solutions/5062807/](https://leetcode.com/problems/split-with-minimum-sum/solutions/5062807/)

---


# Code
```
# @param {Integer} num
# @return {Integer}
def split_num(num)
    numbers = num.digits.sort
    num1 = ""
    num2 = ""
    while numbers.size > 0
        num1 += numbers.shift.to_s
        num2 += numbers.shift.to_s
    end
    
    num1.to_i + num2.to_i
end
```
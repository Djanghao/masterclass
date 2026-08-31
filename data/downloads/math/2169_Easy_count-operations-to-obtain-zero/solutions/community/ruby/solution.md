# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/4933120/](https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/4933120/)

---


# Code
```
# @param {Integer} num1
# @param {Integer} num2
# @return {Integer}
def count_operations(num1, num2)
    answer = 0
    while (num1 != 0) and (num2 != 0)
        if num1 >= num2
            num1 -= num2
        else
            num2 -= num1
        end

        answer += 1
    end 

    answer
end




```
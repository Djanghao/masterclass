# Simple Math in Loop O(n) O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/4395888/](https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/4395888/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[][]} brackets
# @param {Integer} income
# @return {Float}
def calculate_tax(brackets, income)

    answer = 0
    prev_taxable = 0
    brackets.each do |upper, percent|
        if income == 0 
            break
        end

        upper -= prev_taxable
        taxable = [income, upper].min
        income -= taxable
        answer += taxable * percent/100.to_f
        prev_taxable += taxable
    end

    answer
    
end
```
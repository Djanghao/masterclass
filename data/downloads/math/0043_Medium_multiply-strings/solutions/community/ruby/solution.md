# Use the ASCII value

**Author:** mattbalboa
**Votes:** 1
**Link:** [https://leetcode.com/problems/multiply-strings/solutions/4689296/](https://leetcode.com/problems/multiply-strings/solutions/4689296/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use the ASCII value relative to "0" to determine the integer value
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} num1
# @param {String} num2
# @return {String}
def multiply(num1, num2)
   a = convert_to_int(num1)
   b = convert_to_int(num2)
   c = a*b
   c.to_s
end

def convert_to_int(num)
    decimal_place = 1
    reverse_num = num.reverse
    int_value = 0

    for i in (num.length).times do
        int_value += (reverse_num[i].ord - "0".ord) * decimal_place
        decimal_place *= 10
    end
    int_value
end
```
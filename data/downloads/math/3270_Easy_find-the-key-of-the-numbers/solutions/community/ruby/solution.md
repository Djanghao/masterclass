# Fun Ruby Solution Leverage Modulus operations and .min of enumerables

**Author:** 2018hsridhar
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5887515/](https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5887515/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {Integer} num1
# @param {Integer} num2
# @param {Integer} num3
# @return {Integer}
'''
Smallest digit across each number
'''
def generate_key(num1, num2, num3)
    numberKey = 0
    minNum = []
    (0...4).each() do 
        rem1 = num1 % 10
        rem2 = num2 % 10
        rem3 = num3 % 10
        minOfRems = [rem1,rem2,rem3].min
        minNum.append(minOfRems)
        num1 = (num1 / 10).to_i
        num2 = (num2 / 10).to_i
        num3 = (num3 / 10).to_i
    end
    minNum.reverse!()
    keyString = minNum.join("")
    numberKey = keyString.to_i
    return numberKey
end
```
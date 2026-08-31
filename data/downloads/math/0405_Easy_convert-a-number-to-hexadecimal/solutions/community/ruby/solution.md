# Ruby one-liner

**Author:** tirnavanalessandra
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/3412967/](https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/3412967/)

---

# Intuition

Convert signed integer to two's complement and then to hexadecimal

# Approach

With `((1 << bit_length) + num)` we achieve the negation of the num represented in bits because substraction (from -42) is equivalent to performing a bitwise NOT operation and thus converting the decimal to two's complement

Example:
```
1 << 8 = 100000000
100000000 + (-42) = 11101010
```

Afterwards the two's complement can be converted to hexadecimal by calling the `.to_s(16)` method

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(1)$$ 

# Code
```
# @param {Integer} num
# @return {String}
def to_hex(num)
    (num + (1 << 32 if num.negative?).to_i).to_s(16)
end
```
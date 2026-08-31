# Ruby Solution by the digits method.

**Author:** tanktabox
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-bits/solutions/3500878/](https://leetcode.com/problems/reverse-bits/solutions/3500878/)

---


# Code
```
# @param {Integer} n, a positive integer
# @return {Integer}
def reverse_bits(n)
    # Convert to binary array.
    # The first digit is the beginning of the array.
    bits = n.digits(2)

    # Set length to 32 bits
    while bits.length < 32 do
        bits << 0
    end

    # Concatenate arrays and convert to binary numbers
    bits.join.to_i(2)
end
```
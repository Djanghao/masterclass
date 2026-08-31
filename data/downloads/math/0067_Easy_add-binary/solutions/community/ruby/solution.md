# Ruby understandable solution

**Author:** user5329u
**Votes:** 2
**Link:** [https://leetcode.com/problems/add-binary/solutions/2915709/](https://leetcode.com/problems/add-binary/solutions/2915709/)

---

# Complexity
- Time complexity:
$$O(max(a,b))$$

- Space complexity:
$$O(1)$$

# Code
```
# @param {String} a
# @param {String} b
# @return {String}
def add_binary(a, b)
    return add_binary(b, a) if b.size > a.size 

    carry = '0'
    1.upto(a.size) do |i|
        sum = a[-i] + (b[-i] || '0') + carry

        case sum
        when '100', '010', '001'
            a[-i] = '1'
            carry = '0'
        when '110', '011', '101'
            a[-i] = '0'
            carry = '1'
        when '111'
            a[-i] = '1'
            carry = '1'
        end
    end

    carry == '1' ? '1' + a : a
end
```
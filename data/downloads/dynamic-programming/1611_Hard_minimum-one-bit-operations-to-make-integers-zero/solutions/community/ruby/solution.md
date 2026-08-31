# Ruby solution using XOR

**Author:** ksodha93
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4151983/](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4151983/)

---

# Approach
Use XOR

true ^ false   => true
false ^ true   => true
true ^ true    => false
false ^ false  => false

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(logn)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
# @param {Integer} n
# @return {Integer}
def minimum_one_bit_operations(n)
    result = 0
    temp = n
    while temp != 0
        result ^= temp
        temp = temp / 2
    end
    result
end
```
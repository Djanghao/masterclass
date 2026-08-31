# Ruby solution with comments

**Author:** ksodha93
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/4155668/](https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/4155668/)

---

# Approach
Thanks to [Vishal's solution](https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/1749583/java-simple-solution-o-n-with-detailed-explanation/) and original [reference](https://www.codingninjas.com/studio/library/number-of-unique-good-subsequences).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) -> n = length of binary string

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
# @param {String} binary
# @return {Integer}
def number_of_unique_good_subsequences(binary)
    ends_with_one = 0
    ends_with_zero = 0
    has_zero = 0 # to factor in single subsequence '0'
    mod = 10**9 + 7

    binary.each_char do |char|
        if char == '1'
            # + 1 indicates we are considering it as a subsequnce for future characters. For example, fututre appends will be like, 10, 11, 101, 1101(where the first one is the constant one (+1) and remaining characters we are adding which are valid)
            ends_with_one = (ends_with_one + ends_with_zero + 1) % mod
        else
            # no + 1 because we don't want to consider 0 as a separate subsequence. For example, any future appends to the substring will be 00, 01, 001, etc. (where the first zero is constant and remaining characters will be added but won't be valid based on given condition. Hence, no + 1)
            ends_with_zero = (ends_with_one + ends_with_zero) % mod
            has_zero = 1
        end
    end

    (ends_with_one + ends_with_zero + has_zero) % mod
end
```
# Ruby || 100% fastest 1-liner

**Author:** alecn2002
**Votes:** 5
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3127160/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3127160/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```ruby
def gcd_of_strings(str1, str2)
    (str1 + str2 == str2 + str1) ? str1[0...str1.size.gcd(str2.size)] : ''
end

```
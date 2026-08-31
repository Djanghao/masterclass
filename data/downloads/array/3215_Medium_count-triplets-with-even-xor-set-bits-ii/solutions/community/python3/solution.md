# Python solution - track even and odd set bit counts for each input array

**Author:** adamrbeier
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-ii/solutions/5455640/](https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-ii/solutions/5455640/)

---

Bitwise XOR works like even/odd for regular integer multiplication:
\\- XOR of two numbers with even set bits -> result will have even set bits
\\- XOR of two numbers with odd set bits -> result will have even set bits
\\- XOR of one number with even set bits and one with odd set bits -> result will have odd set bits

Based on this, all that we need to know for a number is whether it has an even or odd number of set bits in its binary representation.  We don't need to permute every combination of individual elements, just the combinations of groups, with group being even/odd set bit count for each input array.  Based on the above for the set bits of the result for XOR inputs, adding in the fact that we want the result to have **even** set bits, and extending to 3 inputs, the following are the combinations that we want:
\\- elements of a, b, and c with even set bits
\\- elements of a, b with odd set bits, elements of c with even set bits
\\- elements of a, c with odd set bits, elements of b with even set bits
\\- elements of b, c with odd set bits, elements of a with even set bits

That's how the solution should operate, now let's tackle it...

# Approach
Python 3.10 introduces the `bit_count()` function that can be used on integers.  Take that and perform modular division by 2 to determine whether the bit count is even or odd.  This solution uses list comprehension to determine even/odd of the bit count for each element in each input list, then uses `Counter()` to get the even/odd counts per input array.  With those in hand, for our counter dict c (this solution cretes one per input, so they're called `c_a`, `c_b`, `c_c`), c[0] will return the count of elements with even bit count, and c[1] will return the count of elements with odd bit count.  Calculate the 4 combinations provided in the intro, and sum those, which will be the count of triplets from three input arrays, with even XOR set bits.

# Code
```
class Solution:
    def tripletCount(self, a: List[int], b: List[int], c: List[int]) -> int:
        c_a = Counter([(x.bit_count() % 2) for x in a])
        c_b = Counter([(x.bit_count() % 2) for x in b])
        c_c = Counter([(x.bit_count() % 2) for x in c])

        ans = 0
        ans += (c_a[0] * c_b[0] * c_c[0])
        ans += (c_a[1] * c_b[1] * c_c[0])
        ans += (c_a[1] * c_b[0] * c_c[1])
        ans += (c_a[0] * c_b[1] * c_c[1])

        return ans
```
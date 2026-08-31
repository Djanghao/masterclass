# Ruby || O(1)/O(1) || Simplest 1-liner, pure math

**Author:** alecn2002
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-complement/solutions/5673400/](https://leetcode.com/problems/number-complement/solutions/5673400/)

---


# Code
```ruby []
def find_complement(num) = num ^ ((1 << num.bit_length) - 1)
```
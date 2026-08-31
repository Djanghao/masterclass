# One-Liner + No Extra Space

**Author:** votrubac
**Votes:** 14
**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5788383/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5788383/)

---

## One-Liner
(by [Stefan Pochmann](https://leetcode.com/u/StefanPochmann/))

**Python**
```python
class Solution:
    getSneakyNumbers = lambda self, n : multimode(n)
```

## No Extra Space
How do we solve this problem when we have just one extra number `a`?

We XOR of all numbers (`a ^ b ^ c ^ a`) and XOR `[0..n)` numbers (`a  ^ b ^ c`).
- XOR of these two values is `a`.

If we have two extra numbers `a` and `b`, we XOR all numbers (`a ^ b ^ c ^ a ^ b`), and xor `[0..n)` numbers (`a ^ b ^ c`).
- XOR of these two values is `a ^ b`. 

To disambiguate, we pick a bit (any bit) that different between `a` and `b` (`diff_bit`).

Now, we split all numbers into two groups using this bit:
- `a ^ b ^ a` XOR `a ^ b`
	- XOR of these two values is `a`.
- `b ^ c ^ b` XOR `b ^ c`
	- XOR of these two values is `b`.

```python
class Solution:
    def getSneakyNumbers(self, nums: List[int]) -> List[int]:
        xor_n2 = reduce(xor, nums)
        xor_n = reduce(xor, range(len(nums) - 2))
        
        xor_ab = xor_n2 ^ xor_n
        diff_bit = xor_ab & -xor_ab
        
        xor_n2_bit = reduce(xor, (n for n in nums if n & diff_bit))
        xor_n2_no_bit = reduce(xor, (n for n in nums if not n & diff_bit))
        
        xor_n_bit = reduce(xor, (n for n in range(len(nums) - 2) if n & diff_bit))
        xor_n_no_bit = reduce(xor, (n for n in range(len(nums) - 2) if not n & diff_bit))
        
        return [xor_n2_bit ^ xor_n_bit, xor_n2_no_bit ^ xor_n_no_bit]
```
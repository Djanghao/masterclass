# Python bitwise OR, over all elements and each cumulative sum, and explanation

**Author:** vgmoose
**Votes:** 2
**Link:** [https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5086317/](https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5086317/)

---

Firstly, you definitely want to `|=` all elements, because bitwise OR will never turn a 1 into a 0, so any bits we see will always be marked as 1. The end result that we want to return is the number with all 1 bits for any possible sums.

To get the rest of the subsequences, take the fact that bitwise addition is also always the same as a bitwise OR, if you ignore the carryover: https://stackoverflow.com/questions/7334832/are-addition-and-bitwise-or-the-same-in-this-case

eg. `2+1` is `0b10 + 0b01 == 0b11`, which is the same as `2|1`.

So to find the remaining 1 bits that exist, we only care about finding the carryover decimal places that can happen after adding two elements together. For instance `2+3` (`0b010` and `0b011`) will roll over to `0b101`. Because addition is communative, we can keep `|`-ing more bits from the cumulative sum (or running total) as we go through the elements in any order, increasing our sum each time.

The below code goes through every element, and keeps track of the end result of the OR-ing (all `bits` we've seen), which we'll return at the end. It also stores the cumulative sum in `sums`, which is added to at every step, and then bitwise-or's both the current value and the current cumulative sum value.

```
class Solution:
    def subsequenceSumOr(self, nums: List[int]) -> int:
        sums = 0
        bits = 0
        for x in nums:
            sums += x
            bits |= x
            bits |= sums
        return bits
```
	
There should be no arrangement of the numbers that would make the ordering matter, because any carryover bits will necessarily be visited at least once. I don't have a proof for this though, it's an observation that held true when using sample test cases.

# Kotlin solution with explanation

**Author:** awawa
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/1783829/](https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/1783829/)

---

There are simple observations we should do to solve the challenge. 

First of all, if `finalSum` is not divisible by `2`, solution does not exists. That's because we can't sum up even numbers to get odd number.

Second thing is we start summing up from smallest even number and move forward increasing sequence. This way we will have the maximum number of integers.

Third, we should collect integers until their sum `currSum` reaches `finalSum` or some number that is greater than `finalSum`. If we reached `finalSum`, tnen we already have a solution.

If we reached some number that is greater than `finalSum`, than we should remove just a single number from our sequence to obtain `finalSum`, and this number is `currSum - finalSum`. The number `currSum - finalSum` is certainly in the collected sequence, because of two reasons:

1. `currSum - finalSum` is even number (both `currSum` and `finalSum` are even)
2. Our sequence contains the smallest positive even integer - `2`, and if we remove the biggest integer from our collection, we obtain `currSum < finalSum`.

Consider the example `32`. We collect numbers:

`2` ->  `2`
`2`, `4` -> `2 + 4 = 6 < 32`
`2`, `4`, `6` -> `2 + 4 + 6 = 12 < 32`
`2`, `4`, `6`, `8` -> `2 + 4 + 6 + 8 = 20 < 32`
`2`, `4`, `6`, `8`, `10` -> `2 + 4 + 6 + 8 + 10 = 30 > 32`
`2`, `4`, `6`, `8`, `10`, `12` -> `2 + 4 + 6 + 8 + 10 + 12 = 42 > 32`

We reached number `42` which is greater than `32`. To obtain `32` we need to remove `42 - 32 = 10` from our collection, obtaining the resulting sequence: `2`, `4`, `6`, `8`, `12` -> `2 + 4 + 6 + 8 + 12 = 32`.

The code is pretty straightforward:

```
class Solution {
    fun maximumEvenSplit(finalSum: Long): List<Long> {
		// If finalSum is not even, solution does not exist (first observation)
        if (finalSum % 2L != 0L) return emptyList()
        
		// Collect numbers into linked list so adding and removing elements take O(1)
        val result = LinkedList<Long>()
        var currSum = 0L
        var currNumber = 0L
        while (currSum < finalSum) {
            currNumber += 2L
            result.addFirst(currNumber)
            currSum += currNumber
        }
        
		// Either return the resulting sequence, or remove currSum - finalSum from it
        if (currSum == finalSum) return result
        
        val diff = currSum - finalSum
        result.remove(diff)
        return result
    }
}
```
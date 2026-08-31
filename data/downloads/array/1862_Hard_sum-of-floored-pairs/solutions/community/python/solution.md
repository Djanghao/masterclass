# Python - Five lines, O( n log n)

**Author:** Ceay
**Votes:** 38
**Link:** [https://leetcode.com/problems/sum-of-floored-pairs/solutions/1210057/](https://leetcode.com/problems/sum-of-floored-pairs/solutions/1210057/)

---

For every dividend in the list *nums*, we need to calculate the sum of all quotients for all the divisors from the same list *nums*. To do so, we calculate the sum of quotients for each possible number until the maximum number of the list and store it in *quots*. Then, we will sum up all sums of the quotients for all the dividends in the list. It probably sounds quite confusing - the script can help. 

Take any divisor, say 3. Then the quotient for this divisor increases by 1 at dividends 3, 6, 9, etc. Thus, we can first calculate the increases of quotients for all the divisors. Once we calculate the increases for all the quotiensts (which are the numbers of the list), we can accumulate these increases into *quots* to get the sum of all the quotients for the divisors from the list.

For a faster solution, we utilize counter of *nums*. 

**Complexity is O(*n* log *n*)**, where *n* is the largest number. The loop is over all the numbers that are smaller or equal than n, with n/i operations of the inner loop. Thus, we have sum(*n*/*i*) operations where *i* is up to *n*. This sum is O(*n*  log *n*), because 1 + 1/2 + 1/3 +... + 1/n is logarithic - [see harmonic series](https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)).

```
class Solution:
    def sumOfFlooredPairs(self, nums: List[int]) -> int:
        
        incs, counter=[0]*(max(nums)+1), Counter(nums)            # To store all the quotients increases; counter
        for num in counter:                                       # Loop over all the divisors
            for j in range(num, len(incs), num):                  # Loop over all the possible dividends where the quotient increases
                incs[j] += counter[num]                           # Increment the increases in quotients
        quots=list(accumulate(incs))                              # Accumulate the increases to get the sum of quotients
        return sum([quots[num] for num in nums]) % 1_000_000_007  # Sum up all the quotients for all the numbers in the list.
```

Notes. The first solution that was posted here was not utilizing the counter. After the comments from @yaroslav-repeta and @MrGhasita, the solution was updated (I dropped the solution without the counter all together - it was causing quite some confusion).

        

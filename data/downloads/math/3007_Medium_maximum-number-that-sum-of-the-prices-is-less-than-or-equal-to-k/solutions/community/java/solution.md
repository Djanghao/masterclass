# [Java] ⬆️ Binary Search | Short Solution | O(nlogn) ⬆️. Explanation of Upper bound

**Author:** sandeepk97
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4561892/](https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4561892/)

---

**Upper bound**
Calculating the sum of 1 bits from 1 to num = 1e15 yields a maximum value of 2.4784747400675328\xD710^16 when x = 1. 

Similarly, when calculating the sum of 1 bits from 1 to num = 1e14, the maximum value is 2.306412649693184\xD710^15 when x = 1, just surpassing the threshold of k = 1e15. 

The decision to choose the maximum possible num as 1e15 is based on the observation that the sum exceeds the maximum value of k = 1e15 in any case. Therefore, values of num greater than 10^15 can be disregarded.

```
class Solution {
    private long getCurrSum(long num, int x) {
        long count = 0;
        for (int b = x - 1; b < 60; b += x) {
			// This gives the count of full cycles of bits in the binary representation of numbers from 1 to num.
            long fullCycles = num / (1L << (b + 1)); 
			//  count of set bits at the current position, given by (1L << b).
            count += fullCycles * (1L << b); 
			 // Calculate the remaining bits after the full cycles 
            long remaining = num % (1L << (b + 1));
			 // This part ensures that only the relevant remaining bits are considered, and any excess bits are ignored.
            count += Math.max(0, remaining - (1L << b));
        }
        return count;
    }
	
    public long findMaximumNumber(long k, int x) {
        long l = 1, r = (long) 1e15, result = 0;
        while (l <= r) {
            long mid = l + (r - l) / 2;
            if (getCurrSum(mid + 1, x) <= k) {
                result = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return result;
    }
}
```

**getCurrSum**
For example we are calculating currSum from 1 to 9 for x = 2

here green color box indicates fullCycles and red boxes indicate remianing calculation
b: 1 Full Cycles: 2
fullCycles * (1L << b): 4
num % (1L << (b + 1)): 2
remaining - (1L << b) = 0
Count After including Remaining - last Full Cycle: 4
b: 3 Full Cycles: 0
fullCycles * (1L << b): 4
num % (1L << (b + 1)): 10
remaining - (1L << b) = 2
Count After including Remaining - last Full Cycle: 6

<img src="https://assets.leetcode.com/users/images/8a761b90-9697-4032-9e2f-15983c1a8094_1705387346.1757853.png" alt="image" title="Image" width="250" height="250"/>

**Please Upvote**

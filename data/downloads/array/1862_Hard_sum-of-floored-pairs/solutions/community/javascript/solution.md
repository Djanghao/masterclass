# JavaScript DP

**Author:** ektegjetost
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-floored-pairs/solutions/1212752/](https://leetcode.com/problems/sum-of-floored-pairs/solutions/1212752/)

---

The idea:
For each number, we have ```x``` other numbers that are at least as large as it, then some subset that are 2x larger, 3x larger, etc until you go over MAX.
- Any number that's between sizes of ```1 x n``` to ```1.99999... x n``` count once
- numbers between ```2 x n``` to ```2.99999... x n``` count twice, etc.
```
    n * 4                        L M
    n * 3                  I J K L M
num n * 2        D E F G H I J K L M
    n * 1  A B C D E F G H I J K L M
				nums greater
```
So we can build a table that shows how many numbers are >= any number up to the max of nums. Then, for each num, we'll multiply it by 1, 2, 3, etc until we get to max, and look up how many numbers fall into each range.

An edge case would be, what if we have 99,999 1s and 1 100,000. We can deal with that by using a frequency counter of each num instead of looking at literally every num, so our worst case scenario is if we have all the numbers in the range ```1...100,000```, which is a lot better than if we did ```99,999 x 100,000``` comparisons for all those ones.

Given the example nums ```[2, 5, 9]```, we get a table that looks like
```
[3, 3, 3, 2, 2, 2, 1, 1, 1, 1]
```
We find:
```
num: 2
3 nums >= 2 * 1
2 nums >= 2 * 2
1 nums >= 2 * 3
1 nums >= 2 * 4
0 nums >= 2 * 5

num: 5
2 nums >= 5 * 1
0 nums >= 5 * 2

num: 9
1 nums >= 9 * 1
0 nums >= 9 * 2
```
Sum the first column to get 10, and you're done.

**The Code**

```javascript
var sumOfFlooredPairs = function(nums) {
  const MAX = Math.max(...nums);
  
  const countsGreaterOrEqualTo = new Array(MAX+1).fill(0);
  
  nums.forEach((num) => countsGreaterOrEqualTo[num] += 1 );
  
  for (let num = MAX - 1; num >= 0; num -= 1) {
    countsGreaterOrEqualTo[num] += countsGreaterOrEqualTo[num + 1];
  }

  const numCounts = nums.reduce((counts, num) => {
    counts.set(num, (counts.get(num) || 0) + 1);
    return counts;
  }, new Map())
  
  const MOD = 10 ** 9 + 7;
  let totalCount = 0;

  numCounts.forEach((count, num) => {
    let current = num;
    
    while (current <= MAX) {
      totalCount = (totalCount + countsGreaterOrEqualTo[current] * count) % MOD;
      current += num;
    }
  });
  
  return totalCount;
};
```
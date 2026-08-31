# Brute Force -> Binary Search -> Hashmap

**Author:** Irving09
**Votes:** 51
**Link:** [https://leetcode.com/problems/fair-candy-swap/solutions/3442225/](https://leetcode.com/problems/fair-candy-swap/solutions/3442225/)

---

# Brute Force Intuition + Approach
Just consider every possible pair, and try to match one element `aliceCandies[i]` from alice and another element `bobCandies[j]` from bob. 

Return when 
```
  total(aliceCandies) - aliceCandies[i] + bobCandies[j] 
equals
  total(bobCandies) - bobCandies[j] + aliceCandies[j]
```

where
`total(aliceCandies) = all candies initially owned by alice`
`total(bobCandies) = all candies initially owned by alice`
`aliceCandies[i] = chosen box of candies to trade FROM alice`
`bobCandies[i] = chosen box of candies to trade FROM bob`

# Complexity
- Time complexity:
O(mn) - m is length of array from alice, and n is length of array from bob

- Space complexity:
O(1)

# Code
```
  public int[] fairCandySwap(int[] aliceSizes, int[] bobSizes) {
    int aliceTotal = 0;
    int bobTotal = 0;
    for (int candies : aliceSizes) aliceTotal += candies;
    for (int candies : bobSizes) bobTotal += candies;
    
    int m = aliceSizes.length, n = bobSizes.length;
    for (int i = 0; i < m; i++)
      for (int j = 0; j < n; j++)
        if ((aliceTotal - aliceSizes[i] + bobSizes[j]) == (bobTotal - bobSizes[j] + aliceSizes[i]))
          return new int[] { aliceSizes[i], bobSizes[j] };

    return new int[0];
  }
```

# Binary Search Intuition + Approach
This builds off of previous solution by taking advantage of 
the formula:

```
(aliceTotal - aliceSizes[i] + bobSizes[j]) == (bobTotal - bobSizes[j] + aliceSizes[i])
```

where
`total(aliceCandies) = all candies initially owned by alice`
`total(bobCandies) = all candies initially owned by alice`
`aliceCandies[i] = chosen box of candies to trade FROM alice`
`bobCandies[i] = chosen box of candies to trade FROM bob`

Because we know that what alice is trading is proportional to what bob is losing and bob's total, we arrive to the following formula to find `bobSizes[j]`, which is what bob needs to trade to get an equivalent total from both sides:
```
A_total - A[i] + B[j] = B_total - B[j] + A[i]
B[j] + A_total - A[i] + B[j] = B_total + A[i]
2 * B[j] + A_total - A[i] = B_total + A[i]
2 * B[j] + A_total = B_total + A[i] + A[i]
2 * B[j] + A_total = B_total + 2 * A[i]
2 * B[j] = B_total - A_total + 2 * A[i]
B[j] = (B_total - A_total + 2 * A[i]) / 2
```
`B[j]` in this case is equivalent to `target` in the code that we are going to binary search every ith iteration, in bob's array.

However, first need to sort bob's array to be able to perform binary search.

# Complexity
- Time complexity:
O(nlogn + mlogn) - m is length of array from alice, and n is length of array from bob

- Space complexity:
O(1) - no extra space is used

# Code
```
  public int[] fairCandySwap(int[] aliceSizes, int[] bobSizes) {
    int aliceTotal = 0;
    int bobTotal = 0;
    for (int candies : aliceSizes)
      aliceTotal += candies;
    for (int candies : bobSizes)
      bobTotal += candies;
    
    Arrays.sort(bobSizes);
    
    int m = aliceSizes.length, n = bobSizes.length;
    for (int i = 0; i < m; i++) {      
      int target = (bobTotal + 2 * aliceSizes[i] - aliceTotal) / 2;
      if (binarySearch(bobSizes, target))
        return new int[] { aliceSizes[i], target };
    }

    return new int[0];
  }

  private boolean binarySearch(int[] arr, int target) {
    int l = 0, r = arr.length - 1;
    while (l <= r) {
      int m = l + (r - l) / 2;
      if (target < arr[m])
        r = m - 1;
      else if (target > arr[m])
        l = m + 1;
      else
        return true;
    }
    return false;
  }
```

# HashMap Intuition + Approach
This again builds on previous intuition, where we can figure out hte corresponding pair that must be traded from bob. Store a hashmap of pairing between what alice trade (`A[i]`), and the calculation of what bob must trade.

Do a first pass on alice array to compute all keys (trades from bob that must satisfy the formula, given a trade from alice `A[i]`)

Do another pass on bob's array, If the key existts in hashmap, then we found a pair, because this was precomputed in first pass.

# Complexity
- Time complexity:
O(m + n) - m is length of array from alice, and n is length of array from bob

- Space complexity:
O(m) - For storing the target pairs from alice array, m is the length fo the array from alice

# Code
```
class Solution {
  public int[] fairCandySwap(int[] aliceSizes, int[] bobSizes) {
    int aliceTotal = 0;
    int bobTotal = 0;
    for (int candies : aliceSizes) aliceTotal += candies;
    for (int candies : bobSizes) bobTotal += candies;
        
    Set<Integer> targets = new HashSet<>();
    for (int i = 0, m = aliceSizes.length; i < m; i++)
      targets.add((bobTotal - aliceTotal + 2 * aliceSizes[i]) / 2);

    for (int j = 0, n = bobSizes.length; j < n; j++)
      if (targets.contains(bobSizes[j]))
        return new int[] { (aliceTotal + 2 * bobSizes[j] - bobTotal) / 2, bobSizes[j] };

    return new int[0];
  }
}
```
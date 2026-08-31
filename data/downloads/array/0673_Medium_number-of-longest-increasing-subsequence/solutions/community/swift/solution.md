# Swift | Patience sorting with Binary search O(n²) + Prefix sum O(n log n) solutions

**Author:** VladimirTheLeet
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/3797444/](https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/3797444/)

---

# Patience sorting with Binary search
Since [patience sorting](https://en.wikipedia.org/wiki/Patience_sorting#Algorithm_for_finding_a_longest_increasing_subsequence) can be used to find a longest increasing subsequence, with some modifications it can just as well be used to count all LIS. Instead of storing a back-pointer to the current top card in previous pile, we need to keep with each num the count of LIS ending at it. To calculate it we need to sum all LIS counts for nums in previous pile that are smaller than current num (as they can be used to prepend the increasing sequence to current num).

## Complexity
- Time complexity: $O(n^2)$
- Space complexity: $O(n)$

## Code
```
class Solution {
    func findNumberOfLIS(_ nums: [Int]) -> Int
    {
        if nums.isEmpty { return 0 }
        var piles: [[(num: Int, lisCount: Int)]] = [[(nums[0], 1)]]

        for num in nums[1...]
        {
            // for first pile there is no previous, so all LIS counts are equal 1
            if num <= piles[0].last!.num {
                piles[0].append((num, 1)); continue
            }

            var idx = piles.count
            var lisCount = 0

            if num <= piles.last!.last!.num
            {   // find leftmost pile with top value \u2A7E num
                var left = 1, right = piles.count - 1, mid: Int
                while left < right
                {
                    mid = (left + right) / 2
                    if piles[mid].last!.num >= num { right = mid }
                    else { left = mid + 1 }
                }
                idx = left
            }

            // sum all LIS counts for nums in previous pile
            // that are smaller than current num. O(n) time
            for (prevNum, count) in piles[idx-1].reversed()
            {
                if prevNum < num { lisCount += count }
                else { break }
            }

            if idx == piles.count { piles.append([(num, lisCount)]) }
            else { piles[idx].append((num, lisCount)) }
        }
        return piles.last!.reduce(0) { $0 + $1.lisCount } 
    }
}
```

# Prefix sum optimization

As each pile is naturally sorted in decreasing order, calculating sum of counts for all nums < current in a previous pile can be optimized with prefix sums and binary search from $O(n)$ to $O(\\log n)$:

```
// sum all LIS counts for nums in previous pile
// that are smaller than current num. O(n) time
for (prevNum, count) in piles[idx-1].reversed()
{
    if prevNum < num { lisCount += count }
    else { break }
}
```
turns into
```
let pile = piles[idx-1]
lisCount = pile.last!.prefixSum
if pile[0].num >= num 
{   // find last item in pile with value \u2A7E num
    var left = 0, right = pile.count - 1, mid: Int
    while left < right
    {
        mid = (left + right + 1) / 2
        if pile[mid].num >= num { left = mid }
        else { right = mid - 1 }
    }
    lisCount -= pile[left].prefixSum
}
```

## Complexity
- Time complexity: $O(n \\cdot \\log n)$
- Space complexity: $O(n)$

## Code
```
class Solution {
    func findNumberOfLIS(_ nums: [Int]) -> Int
    {
        if nums.isEmpty { return 0 }
        var piles: [[(num: Int, lisCount: Int, prefixSum: Int)]] = [[(nums[0], 1, 1)]]

        for num in nums[1...]
        {
            if num <= piles[0].last!.num
            {
                piles[0].append((num, 1, piles[0].last!.prefixSum + 1))
                continue
            }

            var idx = piles.count
            var lisCount = 0

            if num <= piles.last!.last!.num
            {   // find leftmost pile with top value \u2A7E num
                var left = 1, right = piles.count - 1, mid: Int
                while left < right
                {
                    mid = (left + right) / 2
                    if piles[mid].last!.num >= num { right = mid }
                    else { left = mid + 1 }
                }
                idx = left
            }

            // sum all LIS counts for nums in previous pile
            // that are smaller than current num. O(log n) time
            let pile = piles[idx-1]
            lisCount = pile.last!.prefixSum
            if pile[0].num >= num 
            {   // find last item in pile with value \u2A7E num
                var left = 0, right = pile.count - 1, mid: Int
                while left < right
                {
                    mid = (left + right + 1) / 2
                    if pile[mid].num >= num { left = mid }
                    else { right = mid - 1 }
                }
                lisCount -= pile[left].prefixSum
            }

            if idx == piles.count { piles.append([(num, lisCount, lisCount)]) }
            else { piles[idx].append((num, lisCount, piles[idx].last!.prefixSum + lisCount)) }
        }
        return piles.last!.reduce(0) { $0 + $1.lisCount } 
    }
}
```
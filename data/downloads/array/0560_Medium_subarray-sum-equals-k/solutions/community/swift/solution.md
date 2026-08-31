# Swift solution in O(n) time (w/ comments)

**Author:** mkim1030
**Votes:** 7
**Link:** [https://leetcode.com/problems/subarray-sum-equals-k/solutions/1811920/](https://leetcode.com/problems/subarray-sum-equals-k/solutions/1811920/)

---

Here's an example to understand why this works in linear time:

Consider the example below:
```
let nums = [1, 3, 4, 2, 5, 3]
let k = 6
```

We can visually verify that `[4, 2]` is the only subarray that works. But how can we find this linearly?

Go through `nums` and keep track of the cumulative sum. For example, here's the cumulative sum at each iteration:
```
cumulativeSum: 1, 4, 8, 10, 15, 18
```

When `cumulativeSum` is 10 (at index 3 of `nums`), we look at the result: 10 - k = 10 - 6 = 4, we see that 4 is a past cumulative sum that occurred (at index 1 of `nums`). 

The **INSIGHT** is that, between these 2 cumulative sums (10 and 4), there is a subarray which sums to `k` (i.e., 6) from indices [2 ... 3].

```
class Solution {
    func subarraySum(_ nums: [Int], _ k: Int) -> Int {
        var cumulativeSum = 0
        var sumCount = [Int: Int]()
        sumCount[cumulativeSum] = 1
        
        var countToReturn = 0
        
        for num in nums {
            cumulativeSum += num
            
            // order matters below
            // i.e., if (2) came before (1), this would fail for k = 0

            // (1)
            let result = cumulativeSum - k
            if let count = sumCount[result] {
                countToReturn += count
            }            
            // (2)
            if let count = sumCount[cumulativeSum] {
                sumCount[cumulativeSum] = count + 1
            } else {
                sumCount[cumulativeSum] = 1
            }
        }
        
        return countToReturn
    }
}
```
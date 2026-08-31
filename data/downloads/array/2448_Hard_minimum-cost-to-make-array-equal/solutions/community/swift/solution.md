# Swift | One solution to have them all: Weighted median Prefix sum Two pointers Binary Ternary Search

**Author:** VladimirTheLeet
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3664169/](https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3664169/)

---

[TOC]

# Weighted median

[Weighted median](https://en.wikipedia.org/wiki/Weighted_median)

- Time complexity: $O(n\\cdot\\log n)$, mainly for sorting
- Space complexity: $O(n)$, for sorted array

```
class Solution
{
    typealias NumCost = (num: Int, cost: Int)
    func minCost(_ nums: [Int], _ costs: [Int]) -> Int
    {
        let numCosts: [NumCost] = zip(nums, costs).sorted() { $0.0 < $1.0 } // sorted by num, ascending
        let costsSumHalved = (costs.reduce(0, +) + 1) / 2
        
        var cost = 0, median = 0
        for nc in numCosts {
            if cost < costsSumHalved { median = nc.num } else { break }
            cost += nc.cost
        }
        return numCosts.reduce(0) { moves, nc in moves + abs(nc.num - median) * nc.cost }
    }
}
```

# Prefix sum

- Time complexity: $O(n\\cdot\\log k)$
- Space complexity: $O(n)$
$k$ is the difference between the maximal and minimal nums values

```
class Solution
{
    typealias NumCost = (num: Int, cost: Int)
    func minCost(_ nums: [Int], _ costs: [Int]) -> Int
    {
        let numCosts: [NumCost] = zip(nums, costs).sorted() { $0.0 < $1.0 } // sorted by num, ascending
        
        // sum of costs in order of increasing num
        var costsPrefixSum: [Int] = [0]
        for nc in numCosts { costsPrefixSum.append(costsPrefixSum.last! + nc.cost) }

        let minNum = numCosts.first!.num, maxNum = numCosts.last!.num
        if minNum == maxNum { return 0 }

        var totalCost = numCosts.reduce(0) { sum, nc in sum + (nc.num - minNum) * nc.cost }
        var minTotalCost = totalCost

        var prefixInd = 0
        for num in (minNum+1)...maxNum
        {
            while numCosts[prefixInd].num < num { prefixInd += 1 }
            // totalCost -= (costsPrefixSum.last! - costsPrefixSum[prefixInd])
            // totalCost += costsPrefixSum[prefixInd]
            totalCost += 2 * costsPrefixSum[prefixInd] - costsPrefixSum.last!
            minTotalCost = min(totalCost, minTotalCost)
        }
        return minTotalCost
    }
}
```

# Two Pointers

We are accumulating costs of bringing low numbers up and high numbers down to the target value. As the numbers are sorted, we run two pointers from the beginning on one side and the end on the other, until we meet in the middle. 

Conceptually it works similarly to the prefix sum approach, but instead of iterating over the array each time, we build the total cost per side as we go, at each transition to the next num. We greedily grow whichever side is cheapest, so we end up meeting in the middle at the minimum total cost.

Based on [this](https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3664261/python-o-n-log-n-time-o-n-space-two-pointers-beats-97-5-for-time/) solution by [DennisJohnsonDevOps](/DennisJohnsonDevOps). Check it out, that's a really elaborate explanation there.

- Time complexity: $O(n\\cdot\\log n)$, mainly for sorting
- Space complexity: $O(n)$, just for sorted array

```
class Solution
{
    typealias NumCost = (num: Int, cost: Int)
    func minCost(_ nums: [Int], _ costs: [Int]) -> Int
    {
        let numCosts: [NumCost] = zip(nums, costs).sorted() { $0.0 < $1.0 } // sorted by num, ascending
        var leftIndex = 0, rightIndex = nums.count - 1
        var leftAccumulatedCost = numCosts.first!.cost, rightAccumulatedCost = numCosts.last!.cost
        var leftTotalCost = 0, rightTotalCost = 0

        var numsDiff: Int
        while leftIndex < rightIndex
        { 
            if leftAccumulatedCost < rightAccumulatedCost
            {
                numsDiff = numCosts[leftIndex + 1].num - numCosts[leftIndex].num
                leftTotalCost += numsDiff * leftAccumulatedCost
                leftAccumulatedCost += numCosts[leftIndex + 1].cost
                leftIndex += 1
            }
            else
            {
                numsDiff = numCosts[rightIndex].num - numCosts[rightIndex - 1].num
                rightTotalCost += numsDiff * rightAccumulatedCost
                rightAccumulatedCost += numCosts[rightIndex - 1].cost               
                rightIndex -= 1                
            }
        }        
        return leftTotalCost + rightTotalCost
    }
}
``` 

# Binary Search

- Time complexity: $O(n\\cdot\\log k)$
- Space complexity: $O(1)$
$k$ is the difference between the maximal and minimal nums values

```
class Solution
{
    typealias NumCost = (num: Int, cost: Int)
    func minCost(_ nums: [Int], _ costs: [Int]) -> Int
    {
        var minNum = Int.max, maxNum = Int.min
        for num in nums { minNum = min(num, minNum); maxNum = max(num, maxNum) }
        if minNum == maxNum { return 0 }

        func totalCost(_ num: Int) -> Int {
            nums.indices.reduce(0){ sum, i in sum + abs(nums[i] - num) * costs[i]}
        }

        var minVal = minNum, maxVal = maxNum, checkVal = 0
        var cost1 = 0, cost2 = 0
        while minVal <  maxVal
        {
            checkVal = (minVal + maxVal) / 2
            cost1 = totalCost(checkVal)
            cost2 = totalCost(checkVal+1)

            if cost1 > cost2 {
                minVal = checkVal + 1
            }
            else {
                maxVal = checkVal
            }
        }
        return totalCost(minVal)
    }
}
```

# Ternary Search

- Time complexity: $O(n\\cdot\\log n)$
- Space complexity: $O(n)$

```
class Solution
{
    typealias NumCost = (num: Int, cost: Int)
    func minCost(_ nums: [Int], _ costs: [Int]) -> Int
    {
        let numCosts: [NumCost] = zip(nums, costs).sorted() { $0.0 < $1.0 } // sorted by num, ascending
      
        let minNum = numCosts.first!.num, maxNum = numCosts.last!.num
        if minNum == maxNum { return 0 }

        var memo: [Int:Int] = [:]
        func totalCost(_ num: Int) -> Int
        {
            if let res = memo[num] { return res }            
            let res = numCosts.reduce(0){ sum, nc in sum + abs(nc.num - num) * nc.cost}
            memo[num] = res
            return res
        }

        var minTotalCost = 0

        var minIndex = 0, maxIndex = numCosts.count - 1
        var checkIndex1 = 0, checkIndex2 = 0, dist = 0
        var num1 = 0, num2 = 0, cost1 = 0, cost2 = 0
        while true // ternary search
        {
            dist = (maxIndex - minIndex) / 3
            if dist == 0
            {   // final 3 or less elements
                let totalCosts = (minIndex...maxIndex).map{totalCost(numCosts[$0].num)}
                minTotalCost = totalCosts.min()!; break
            }

            checkIndex1 = minIndex + dist
            checkIndex2 = maxIndex - dist
            num1 = numCosts[checkIndex1].num
            num2 = numCosts[checkIndex2].num
            cost1 = totalCost(num1)
            cost2 = totalCost(num2)

            if cost1 > cost2 {
                minIndex = checkIndex1
            }
            else {
                maxIndex = checkIndex2
            }
        }
        return minTotalCost
    }
}
```
By the way, if we change 3 to 2.618 this way
```
dist = Int(Double(maxIndex - minIndex) / 2.618)
```
it will become [Golden section search](https://en.wikipedia.org/wiki/Golden-section_search)
# Simple Swift solution ✅

**Author:** bakhtishoddev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/6128351/](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/6128351/)

---

# Intuition
When purchasing items with a discount applied every third item, we should prioritize buying the most expensive items first. This ensures that the discount is applied to the least costly items, minimizing the overall cost.

# Approach
1.	Sort the costs: Start by sorting the costs of items in descending order. This allows us to apply the discount on the least expensive items every third iteration.
2.	Iterate through the sorted list: Use a counter to track every third item. Add the cost of the item to the total unless it is the third item (counting from 1).
3.	Return the total: After iterating through the list, return the accumulated total as the result.

# Complexity
- Time complexity:
Sorting the array takes $$O(n / log n),$$, and iterating through it takes $$O(n)$$. Thus, the total time complexity is $$O(n \\log n)$$.

- Space complexity:
Sorting requires $$O(n)$$ additional space for the sorted array, but no other auxiliary space is used. Thus, the space complexity is $$O(n)$$.

# Code
```swift []
class Solution {
    func minimumCost(_ cost: [Int]) -> Int {
        let sortedCost = cost.sorted()
        var result = 0
        var count = 0
        for i in stride(from: sortedCost.count-1, to: -1, by: -1) {
            count+=1
            if count % 3 == 0 {
                continue
            }
            result+=sortedCost[i]
        }
        return result
    }
}
```
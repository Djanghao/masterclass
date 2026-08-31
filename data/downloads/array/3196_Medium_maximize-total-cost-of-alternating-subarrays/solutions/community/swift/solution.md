# Detailed and Concise ✅

**Author:** lebon
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5364562/](https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5364562/)

---

## Intuition
The problem requires finding the maximum total cost possible by either adding or subtracting each element in the array `A`. To solve this, we need to keep track of the highest possible sum we can get when we choose to either add or subtract each element as we iterate through the array.

## Approach
We use dynamic programming to keep track of two main values as we iterate through the array:
1. `positiveMaxCost`: the maximum sum we can get if the last operation was an addition.
2. `negativeMaxCost`: the maximum sum we can get if the last operation was a subtraction.

We initialize `positiveMaxCost` to a very large negative value to ensure that any valid path will be larger and `negativeMaxCost` to 0. For each element in the array, we update these two values as follows:
- Update `negativeMaxCost` by subtracting the current element from the previous `positiveMaxCost`.
- Update `positiveMaxCost` by taking the maximum of the previous `positiveMaxCost` and the previous `negativeMaxCost`, then adding the current element.

Finally, we return the maximum of `positiveMaxCost` and `negativeMaxCost`.

### Example
Let's take an example array: `A = [3, 2, 1]`.

| Element | Temp Negative | Negative Max Cost | Positive Max Cost |
|---------|---------------|-------------------|-------------------|
| Initial |               | 0                 | -1e15             |
| 3       | 0             | -1e15 - 3 = -1e15 | max(-1e15, 0) + 3 = 3 |
| 2       | -1e15         | 3 - 2 = 1         | max(3, -1e15) + 2 = 5 |
| 1       | 1             | 5 - 1 = 4         | max(5, 1) + 1 = 6 |

So, the maximum total cost is `max(6, 4) = 6`.

## Complexity
- **Time complexity:** $$O(n)$$
  - We iterate through the array once, performing constant time operations for each element.
- **Space complexity:** $$O(1)$$
  - We use a constant amount of space for the variables `positiveMaxCost`, `negativeMaxCost`, and `temp`.

## Code
```swift []
func maximumTotalCost(_ A: [Int]) -> Int {
    // Initialize positive maximum cost with a very large negative value
    var positiveMaxCost: Int = -Int(1e15)
    // Initialize negative maximum cost to 0
    var negativeMaxCost: Int = 0
    // Temporary variable to store previous negative maximum cost
    var temp: Int

    // Iterate through each element in the array
    for value in A {
        // Store current negative maximum cost in a temporary variable
        temp = negativeMaxCost
        // Update negative maximum cost to the previous positive maximum cost minus the current value
        negativeMaxCost = positiveMaxCost - value
        // Update positive maximum cost to the maximum of the previous positive maximum cost or the previous negative maximum cost plus the current value
        positiveMaxCost = max(positiveMaxCost, temp) + value
    }

    // Return the maximum of positive and negative maximum costs
    return max(positiveMaxCost, negativeMaxCost)
}
```
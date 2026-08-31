# Maximum Ice Cream Bars in GO

**Author:** MOHAMMADmiZAN
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3008974/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3008974/)

---

# Intuition
To solve this problem, I would first think about how to identify the maximum number of ice creams that can be bought with a given number of coins.

# Approach
One approach to do this would be to sort the costs of the ice creams in ascending order, and then iterate through the sorted list of costs. For each cost, I would check if the current number of coins is greater than or equal to the cost of the current ice cream. If it is, I would buy the ice cream and decrement the number of coins by the cost of the ice cream. If the number of coins is less than the cost of the ice cream, I would stop iterating and return the total number of ice creams that were bought.

# Complexity
- Time complexity:
The time complexity of this function is $$O(n \\log n)$$, where $$n$$ is the number of elements in the costs array. This is because the function first sorts the costs array using the sort() method, which has a time complexity of $$O(n \\log n)$$ for arrays with $$n$$ elements. The function then iterates through the sorted array and performs a constant-time operation for each element, resulting in a time complexity of $$O(n)$$ for the loop. The overall time complexity of the function is therefore $$O(n \\log n + n)$$, which can be simplified to $$O(n \\log n)$$.

- Space complexity:
The space complexity of this function is $$O(1)$$.

This is because the function only uses a constant amount of space regardless of the size of the input. The space used by the function is primarily for the variables numIceCreams and coins, which are both numbers and therefore take up a fixed amount of space. The costs array is not modified in the function, so it does not contribute to the space complexity.

As a result, the space complexity of this function is $$O(1)$$.

# Code
```
func maxIceCream(costs []int, coins int) int {
    // Initialize a variable to keep track of the number of ice creams
    // that can be bought with the given number of coins
    numIceCreams := 0

    // Sort the costs in ascending order
    sort.Ints(costs)

    // Iterate through the costs
    for _, cost := range costs {
        // If we have enough coins to buy the current ice cream,
        // buy it and decrement the number of coins by the cost
        // of the ice cream
        if coins >= cost {
            numIceCreams++
            coins -= cost
        } else {
            // If we don't have enough coins to buy the current ice cream,
            // stop iterating
            break
        }
    }

    // Return the number of ice creams that were bought
    return numIceCreams
}

```
# Code
```
func maxIceCream(costs []int, coins int) int {
    // Sort the costs in ascending order
    sort.Ints(costs)

    // Initialize a variable to keep track of the number of ice creams
    // that can be bought with the given number of coins
    iceCreams := 0

    // Iterate through the costs
    for _, ice := range costs {
        // If we have enough coins to buy the current ice cream,
        // buy it and decrement the number of coins by the cost
        // of the ice cream
        if coins -= ice; coins >= 0 {
            iceCreams++
        }
    }

    // Return the number of ice creams that were bought
    return iceCreams
}

```
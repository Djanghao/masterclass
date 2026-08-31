# Go - Hourglass Visualization for easy understanding

**Author:** benard_kong
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3620049/](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3620049/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

### Visualization
This question was quite difficult to understand, but the way I came to understand it was dropping sand in a 2D hourglass. The mouth of the hourglass need not be in the middle.

In the examples below, the numbers represent how high in the hourglass the sand has risen. The mouth is represented at the top by an 'M', and the number at the end is the total number of sand dropped into the hourglass.

Example 1: Mouth is in the middle
```
  M
1111    -4
1121    -5
1221    -6
1222    -7
1232    -8
2232    -9
2332    -10
2333    -11
2343    -12
3343    -13
3443    -14
3444    -15
3454    -16
4454    -17
4554    -18
4555    -19
4565    -20
```

Example 2: Mouth is on the very left
```
M
1111    -4 ## 1 sand to increase height
2111    -5 ## 2 sand to increase height
2211    -6
3211    -7 ## 3 sand to increase height
3221    -8
3321    -9
4321    -10 ## 4 sand to increase height
4322    -11
4332    -12
4432    -13
5432    -14 ## 4 sand to increase height
5433    -15
5443    -16
5543    -17
6543    -18 ## 4 sand to increase height
6544    -19
6554    -20
6654    -21
```

#### In the examples above
- `M` is the `index`
- `n` is the size of the hourglass == `4`
- `maxSum` is the total number of sand in each row, which can be an infinitely large number

### Pattern Observation
From the examples above, example 2 is probably the easiest to understand.
- At `maxSum == 4`, in order to increase the height of the hourglass, it takes `1 sand`
- At `maxSum == 5`, in order to increase the height of the hourglass, it takes `2 sand`
- At `maxSum == 7`, in order to increase the height of the hourglass, it takes `3 sand`
- At `maxSum >= 10`, in order to increase the height of the hourglass, it takes `4 sand`

The reason it takes more and more sand to increase the max height is because gravity will pull the sand down to its adjacent spots. However, we observe the number of sand required stays constant at some point. This is because the number of adjacent spots to satisfy gravity is fixed by the size of the hourglass. This logic can be extrapolated to both the left and the right of the hourglass. I will call the adjacent spots that need to satisfy gravity by the following names: `leftIndicesToSatisfy`, and `rightIndicesToSatisfy`

Thus, we can extrapolate to say the following:
- Increase `leftIndicesToSatisfy` and `rightIndicesToSatisfy` by 1 until they hit the end of the hourglass
- Decrease the amount of sand we have remaining by these two values
- If there is still sand remaining, the max height of the hourglass will increase by 1

That approach will give us a time complexity of `O(maxSum / n)`, which will result in time limit exceeded if `n` is small, and `maxSum` is extremely large. Thus we need to take the other half of the observation, that there is a fixed amount to decrease the remaining sand by at some point.

Based on that observation we can say the following:
- Once `leftIndicesToSatisfy` and `rightIndicesToSatisfy` have both reached their maximums, increase the height by `remainingSand / (leftIndicesToSatisfy + rightIndicesToSatisfy + 1)`. This will result in `O(n)`

# Approach
<!-- Describe your approach to solving the problem. -->
- Define a variable, `remainingSand` which represents how much sand you can put into the hourglass
- Loop until `remainingSand <= 0`
- At each loop, decrease `remainingSand` by `leftIndicesToSatisfy` and `rightIndicesToSatisfy`
- If there is remaining sand, increase the max height by 1
- Increase `leftIndicesToSatisfy` by 1, and get the minimum between it and `index - 0`; `index - 0` represents the very left of the hourglass
- Increase `rightIndicesToSatisfy` by 1, and get the minimum between it and `n - 1 - index`; `n - 1 - index` represents the very right of the hourglass
- Once `leftIndicesToSatisfy` and `rightIndicesToSatisfy` have both reached their maximums, increase the height by `remainingSand / (leftIndicesToSatisfy + rightIndicesToSatisfy + 1)`

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`O(min(n, maxSum / n))`
    - If `n` is large (ie. close to the size of `maxSum`), then the number we decrease `maxSum` by gets bigger and bigger, resulting in `O(maxSum / n)`
    - If `n` is small, we use an `O(1)` operation, resulting in `O(n)`, but `n` is a small value

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`O(1)`

# Code
```go
func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func maxValue(n int, index int, maxSum int) int {
    remainingSand := maxSum - n
    leftIndicesToSatisfy := 0
    rightIndicesToSatisfy := 0
    leftIndicesMax := index - 0
    rightIndicesMax := n - 1 - index
    maxHeight := 1

    for remainingSand > 0 {
        if leftIndicesToSatisfy == leftIndicesMax && rightIndicesToSatisfy == rightIndicesMax {
            // We've reached the end of the hourglass on both sides. Dump all the sand we have remaining.
            bothSidesAdded := leftIndicesToSatisfy + rightIndicesToSatisfy + 1
            maxHeight += remainingSand / bothSidesAdded
            remainingSand %= bothSidesAdded
        }
        remainingSand -= leftIndicesToSatisfy
        remainingSand -= rightIndicesToSatisfy

        if remainingSand > 0 {
            maxHeight++
            remainingSand--
        }

        leftIndicesToSatisfy = min(leftIndicesMax, leftIndicesToSatisfy + 1)
        rightIndicesToSatisfy = min(rightIndicesMax, rightIndicesToSatisfy + 1)
    }

    return maxHeight
}
```
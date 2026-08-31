# [Golang] Even-Odd Tracking Approach (Beats 100%)

**Author:** ivansuteja96
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/5241314/](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/5241314/)

---

# Intuition
The goal is to transform a given binary string into an alternating binary string (e.g., **"1010"** or **"0101"**) with the minimum number of swaps. To achieve an alternating pattern, the counts of '1's and '0's must be balanced, and their positions must alternate. If the count of either '1's or '0's exceeds a certain threshold, it becomes impossible to create an alternating string. The function calculates the minimum swaps required if possible.

# Approach
### Initialization
- Calculate the threshold, which is half the length of the string. If the length is odd, increment the threshold by 1.
- Initialize variables such as counters for '1's, '0's, '1's at odd positions, and '1's at even positions.
### Counting and Position Tracking
- Iterate through the string, counting the occurrences of '1's and '0's.
- Track the number of '1's at even and odd positions to determine the minimum swaps required.
### Result Calculation
- If the count of '1's or '0's exceeds the threshold, return -1 as it is impossible to create an alternating string.
- If the counts of '1's and '0's are equal and the string length is 2, no swaps are needed.
- If '1's are fewer than '0's or if the counts of '1's and '0's are equal and fewer '1's are at even positions, return the count of '1's at even positions.
- Otherwise, return the count of '1's at odd positions.

# Complexity
- Time Complexity: **O(n)**
- Space complexity: **O(1)**

# Code
```
func minSwaps(s string) int {
    var (
        threshold = len(s) / 2  // Calculate the initial threshold as half the length of the string
        countOne, countZero, minSwapOneOdd, minSwapOneEven int // Define and initialize variables
    )

    // Adjust threshold if the length of the string is odd
    if len(s)%2 == 1 {
        threshold++
    }

    // Iterate over the string to count '1's and '0's and their positions
    for i, v := range s {
        if v == '1' {
            countOne++ // Increment the '1' counter
            
            // Check if the current position is even or odd and increment the respective counter
            if i%2 == 0 {
                minSwapOneEven++ // Increment '1' counter at even positions
            } else {
                minSwapOneOdd++ // Increment '1' counter at odd positions
            }
        } else {
            countZero++ // Increment the '0' counter
        }
    }

    // If the count of '1's or '0's exceeds the threshold, return -1
    if countOne > threshold || countZero > threshold {
        return -1
    // If the counts of '1's and '0's are equal and the string length is 2, no swaps are needed
    } else if countOne == countZero && len(s) == 2 {
        return 0
    // If '1's are fewer than '0's or if counts are equal and fewer '1's are at even positions
    } else if countOne < countZero || (countOne == countZero && minSwapOneEven < minSwapOneOdd) {
        return minSwapOneEven
    }

    // Otherwise, return the count of '1's in odd positions
    return minSwapOneOdd
}
```
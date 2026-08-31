# Efficiently Flip Bits: The Optimal K-Bit Flip Solution Explained ✅

**Author:** lebon
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5359476/](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5359476/)

---


## Intuition
The problem requires flipping subarrays of length $$ K $$ such that all elements in the array become 1. We need to determine the minimum number of such flips or determine if it's impossible. The challenge is to efficiently manage the flipping operations without repeatedly flipping the same elements or exceeding the array bounds.

## Approach
1. **Initial Setup**: 
   - We need to track the total number of flips performed and an auxiliary array `isFlipped` to record if a flip starts at each position.

2. **Traversal**:
   - Traverse through each element of the array.
   - Use a variable `flippedCount` to keep track of the cumulative effect of flips at the current position.
   - For each element, adjust `flippedCount` by removing the effect of flips that were done $$ K $$ positions ago if $$ i \\geq K $$.
   - Check if the current element matches `flippedCount`. If it does, it means we need to flip starting from this position to make the element 1.
   - Ensure that flipping $$ K $$ elements from the current position doesn't exceed array bounds. If it does, return -1.
   - Mark the current position as the starting point of a flip, update `flippedCount`, and increment the flip counter.

3. **Return the Result**:
   - After the traversal, return the total number of flip operations performed.

### Example:
Consider $$ A = [0, 1, 0] $$ and $$ K = 2 $$:
1. Initialize `flippedCount = 0`, `flipOperations = 0`, and `isFlipped = [0, 0, 0]`.
2. Traverse the array:
   - For $$ i = 0 $$: 
     - $$ flippedCount $$ (0) equals $$ A[0] $$ (0), so flip starting at 0.
     - Check if $$ 0 + 2 \\leq 3 $$ (yes), so mark `isFlipped[0] = 1`, update `flippedCount` to 1, and increment `flipOperations` to 1.
   - For $$ i = 1 $$:
     - $$ flippedCount $$ (1) does not equal $$ A[1] $$ (1), no flip needed.
   - For $$ i = 2 $$:
     - $$ flippedCount $$ (1) equals $$ A[2] $$ (0), so flip starting at 2.
     - Check if $$ 2 + 2 \\leq 3 $$ (no), so return -1.

## Complexity
- **Time Complexity**: $$ O(n) $$, where $$ n $$ is the length of the array. Each element is processed once.
- **Space Complexity**: $$ O(n) $$ for the auxiliary array `isFlipped`.

## Code

```swift []
func minKBitFlips(_ A: [Int], _ K: Int) -> Int {
    let length = A.count
    var flippedCount = 0  // To keep track of how many times we have flipped
    var flipOperations = 0  // To store the total number of flip operations performed
    var isFlipped = [Int](repeating: 0, count: length)  // Array to mark the positions of flips

    for i in 0..<length {
        // If the current index is beyond the Kth element, remove the effect of the flip done K elements ago
        if i >= K {
            flippedCount ^= isFlipped[i - K]
        }

        // If the flipped state matches the current element, we need to flip
        if flippedCount == A[i] {
            // If flipping K elements starting from the current index exceeds the array bounds, return -1
            if i + K > length {
                return -1
            }
            // Mark the current index as flipped
            isFlipped[i] = 1
            // Update the flipped count
            flippedCount ^= 1
            // Increment the flip operations counter
            flipOperations += 1
        }
    }
    return flipOperations
}
```
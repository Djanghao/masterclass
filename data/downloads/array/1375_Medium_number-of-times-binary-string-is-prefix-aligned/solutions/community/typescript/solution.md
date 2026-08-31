# Efficiently Tracking Prefix Alignment in Binary Strings with Flips: Solution in TypeScript ✨🥇💯✔

**Author:** ranganathv415
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/5362144/](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/5362144/)

---

# Intuition
The key to solving this problem lies in understanding when the binary string becomes prefix-aligned. The string becomes prefix-aligned after the `i`-th flip if all the bits from `1` to `i` are set to `1`. This will happen when the maximum index flipped so far is exactly `i`.

# Approach
1. **Initialization**:
   - Use a variable `maxFlipped` to keep track of the highest index flipped so far.
   - Use a variable `prefixAlignedCount` to count the number of times the string is prefix-aligned.

2. **Iterate through the flips**:
   - For each flip at index `i`, update `maxFlipped` to be the maximum of its current value and the flip position.
   - Check if `maxFlipped` equals `i + 1` (since `i` is zero-based and we need one-based index).
   - If `maxFlipped` equals `i + 1`, it means all bits from `1` to `i + 1` are `1` and the string is prefix-aligned at this step. Increment `prefixAlignedCount`.

3. **Return the result**:
   - After processing all flips, return the `prefixAlignedCount`.

# Complexity
- **Time Complexity**: ***O(n)***, where n is the length of the `flips` array. We iterate through the array once.
- **Space Complexity**: ***O(1)***, as we use only a fixed amount of extra space for the variables.

# Code

```typescript
function numTimesAllBlue(flips: number[]): number {
    let maxFlipped = 0;
    let prefixAlignedCount = 0;
    
    for (let i = 0; i < flips.length; i++) {
        maxFlipped = Math.max(maxFlipped, flips[i]);
        
        if (maxFlipped == i + 1) {
            prefixAlignedCount++;
        }
    }
    
    return prefixAlignedCount;
};

```

### Explanation of the Code
1. **Initialization**:
   - `maxFlipped` is set to 0 to track the highest index flipped so far.
   - `prefixAlignedCount` is set to 0 to count the number of prefix-aligned states.

2. **Loop through the flips**:
   - For each flip at index `i`, update `maxFlipped` to be the maximum of its current value and `flips[i]`.
   - Check if `maxFlipped` equals `i + 1`. If true, increment `prefixAlignedCount`.

3. **Return the result**:
   - After processing all flips, return `prefixAlignedCount`.
# Optimal TypeScript Solution ✨💯✔

**Author:** ranganathv415
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/5362418/](https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/5362418/)

---

# Intuition

The problem requires finding the minimum time to remove all cars containing illegal goods ('1') from a binary string `s` using three allowed operations: removing from the left (cost 1), removing from the right (cost 1), or removing from any position (cost 2). The challenge is to efficiently compute the minimum time by considering prefix and suffix costs.

# Approach

1. **Prefix and Suffix Calculation**:
   - **Prefix Cost (`prefix` array)**: This array stores the minimum time required to remove all illegal cars up to each position `i` in the string `s`. 
     - If `s[i]` is '0', the cost to remove up to `i` is the same as the cost to remove up to `i-1`.
     - If `s[i]` is '1', the cost to remove up to `i` is the minimum of either:
       - Flipping the car at position `i` (`prefix[i] + 2`).
       - Removing all cars up to `i` (which is `i + 1`).
   - **Suffix Cost (`suffix` array)**: This array stores the minimum time required to remove all illegal cars from each position `i` to the end of the string `s`.
     - Similar logic applies, but computed from right to left.
     - If `s[i]` is '0', the cost to remove from `i` onwards is the same as from `i+1` onwards.
     - If `s[i]` is '1', the cost is the minimum of:
       - Flipping the car at position `i` (`suffix[i + 1] + 2`).
       - Removing all cars from `i` onwards (`size - i`).

2. **Combining Prefix and Suffix**:
   - For each possible boundary between prefix and suffix (`i` from 0 to `size`), calculate the total cost as `prefix[i] + suffix[i]`.
   - Track the minimum of these total costs to find the overall minimum time required.

3. **Return Result**:
   - Return the minimum time computed from the above steps.

# Complexity

- **Time Complexity**: ***O(n)***, where *n* is the length of the string `s`. This is because we perform a linear pass to compute both `prefix` and `suffix` arrays, and then another linear pass to combine and find the minimum cost.
  
- **Space Complexity**: ***O(n)*** for storing the `prefix` and `suffix` arrays, where `n` is the length of the string `s`.

# Code

```typescript
function minimumTime(s: string): number {
    const size: number = s.length;

    const prefix: number[] = new Array(size + 1).fill(0);
    const suffix: number[] = new Array(size + 1).fill(0);

    for (let i = 0; i < size; ++i) {
        if (s.charAt(i) === '0') {
            prefix[i + 1] = prefix[i];
        } else {
            prefix[i + 1] = Math.min(prefix[i] + 2, i + 1);
        }
    }

    for (let i = size - 1; i >= 0; --i) {
        if (s.charAt(i) === '0') {
            suffix[i] = suffix[i + 1];
        } else {
            suffix[i] = Math.min(suffix[i + 1] + 2, size - i);
        }
    }

    let minCost: number = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i <= size; ++i) {
        minCost = Math.min(minCost, prefix[i] + suffix[i]);
    }

    return minCost;
};

```

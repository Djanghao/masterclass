# Solution in TypeScript 🚀✨💯✔🏆

**Author:** ranganathv415
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-interesting-subarrays/solutions/5354238/](https://leetcode.com/problems/count-of-interesting-subarrays/solutions/5354238/)

---

# Intuition

To solve this problem efficiently, we need to avoid checking every possible subarray directly, as that would result in a time complexity of **O(n\xB2)**, which is infeasible for *n* up to 10\u2075. Instead, we can use a prefix sum approach combined with a hashmap (or dictionary) to count the occurrences of prefix sums that satisfy the given condition.

# Approach

1. **Understanding the Problem**: We need to find subarrays where the count of elements satisfying **nums[i]%modulo == k** is also congruent to *k* modulo **modulo**. This means if the count of such elements in a subarray is *cnt*, then ***cnt*%modulo == k**.

2. **Prefix Sum Concept**: Use a modified prefix sum to keep track of the count of such elements up to the current index. Define *P[i]* as the count of elements from the start of the array to the *i*-th index that satisfy the condition **nums[i] % modulo == k**.

3. **Prefix Sum Modulo Condition**: We need to find how often the condition **P[j] - P[i-1] \u2261 k (mod modulo)** holds for subarrays ending at each *j*. This can be rephrased as **P[[j] \u2261 P[i-1] + k (mod modulo)**.

4. **Using a Hashmap**: Use a hashmap to store the frequencies of the prefix sums modulo **modulo**. For each prefix sum, check if there is a previous prefix sum that when subtracted and taken modulo **modulo** gives *k*. 

# Complexity

- **Time Complexity**: ***O(n)***, where *n* is the length of the array. We traverse the array once and use hashmap operations which are ***O(1)*** on average.
- **Space Complexity**: ***O(n)***, for storing the prefix sums in the hashmap.

# Code
```typescript
function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
    const n = nums.length;
    let prefixCount = 0;
    const prefixMap = new Map<number, number>();
    prefixMap.set(0, 1);
    
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        if (nums[i] % modulo === k) {
            prefixCount++;
        }
        
        const currentMod = prefixCount % modulo;
        
        const targetMod = (currentMod - k + modulo) % modulo;
        
        if (prefixMap.has(targetMod)) {
            count += prefixMap.get(targetMod)!;
        }
        
        prefixMap.set(currentMod, (prefixMap.get(currentMod) || 0) + 1);
    }
    
    return count;
};

```

### Explanation of Code

1. **Initialization**:
   - `prefixCount` tracks the number of elements up to the current index that satisfy `nums[i] % modulo == k`.
   - `prefixMap` is a hashmap to store frequencies of `prefixCount % modulo`.

2. **Iterating Over Array**:
   - For each element in `nums`, update `prefixCount` if it satisfies the condition.
   - Compute `currentMod` as `prefixCount % modulo`.
   - Compute `targetMod` which is the value we need to check in `prefixMap` to find valid subarrays.
   - If `targetMod` is in `prefixMap`, it means there are subarrays ending at the current index that satisfy the condition, so update the count.
   - Update `prefixMap` with the new `currentMod`.
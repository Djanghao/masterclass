# Counting Successful Spell-Potion Pairs Using Binary Search (100% Runtime Efficiency)

**Author:** authxth
**Votes:** 2
**Link:** [https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/5655814/](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/5655814/)

---

# Intuition
The function calculates the number of successful pairs between each spell and a potion. A pair is considered successful if the product of the spell and potion values is greater than or equal to a given success threshold. To efficiently find these pairs, binary search is employed after sorting the potions array.


# Approach
1. **Sort Potions**: Begin by sorting the `potions` array. This allows for efficient searching using binary search.
2. **Binary Search for Each Spell**:
    - For each spell, determine the smallest index in the `potions` array such that the product of the spell and the potion at that index meets or exceeds the success threshold.
    - Use binary search to find this index efficiently. The idea is to minimize the number of comparisons by halving the search space in each iteration.
    - The number of successful pairs for each spell is then the total number of potions minus the found index.
3. **Store Results**: Append the result for each spell to the `ans` array.


# Complexity
- **Time complexity**: $O(nlogm)$, where n is the number of spells and m is the number of potions. Sorting the potions array takes $O(mlogm)$, and each binary search operation for a spell is $O(logm)$, leading to the overall complexity.

- **Space complexity**: $O(1)$ for the binary search and $O(n)$ for storing the results in the `ans` array.

# Code
```
function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a, b) => a - b);
    const m = potions.length;
    const ans: number[] = [];
    for (const v of spells) {
        let left = 0;
        let right = m;
        while (left < right) {
            const mid = (left + right) >> 1;
            if (v * potions[mid] >= success) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        ans.push(m - left);
    }
    return ans;
}
```
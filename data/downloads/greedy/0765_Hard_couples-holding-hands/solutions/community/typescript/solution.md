# TypeScript, simple solution | Runtime beats 100%

**Author:** r9n
**Votes:** 11
**Link:** [https://leetcode.com/problems/couples-holding-hands/solutions/5742142/](https://leetcode.com/problems/couples-holding-hands/solutions/5742142/)

---

# Intuition
To solve this problem, we can use a greedy approach with the help of a hashmap to track the positions of individuals. The idea is to ensure that every couple sits next to each other by making the minimum number of swaps. Let's go through the solution step by step.

# Approach
Couple Identification: Each couple is represented as consecutive numbers (e.g., 0 & 1, 2 & 3). For each person sitting at an index, their partner should sit next to them. If they don't, we need to swap.

Greedy Strategy: As we iterate through the row, whenever we find a person not sitting next to their partner, we swap them with whoever is currently sitting next to their partner.

Minimizing Swaps: By directly swapping with the correct partner, we minimize the number of swaps.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```typescript []
function minSwapsCouples(row: number[]): number {
    const position = new Map<number, number>();
    const n = row.length;

    for (let i = 0; i < n; i++) {
        position.set(row[i], i);
    }

    let swaps = 0;

    for (let i = 0; i < n; i += 2) {
        const firstPerson = row[i];
        const expectedPartner = firstPerson ^ 1; // XOR to get the partner

        if (row[i + 1] !== expectedPartner) {
            swaps++;
            const currentPartnerPosition = position.get(expectedPartner)!;
            
            // Swap the partner in the row
            [row[i + 1], row[currentPartnerPosition]] = [row[currentPartnerPosition], row[i + 1]];

            // Update their positions in the map
            position.set(row[i + 1], i + 1);
            position.set(row[currentPartnerPosition], currentPartnerPosition);
        }
    }

    return swaps;
}

```
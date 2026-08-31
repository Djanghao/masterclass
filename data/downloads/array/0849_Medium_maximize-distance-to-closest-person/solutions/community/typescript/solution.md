# EASY TO UNDERSTAND one pass

**Author:** vsezol
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/6023721/](https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/6023721/)

---

# Intuition

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function maxDistToClosest(seats: number[]): number {
    let maxDistance = 0;
    let lastSitting = -1;

    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {            
            const totalDistance = lastSitting === -1 ? i : Math.floor((i - lastSitting) / 2);
            maxDistance = Math.max(maxDistance, totalDistance);
            lastSitting = i;
        } else if (i + 1 === seats.length) {
            maxDistance = Math.max(maxDistance, i - (lastSitting || 0));
        }
    }

    return maxDistance;
};
```
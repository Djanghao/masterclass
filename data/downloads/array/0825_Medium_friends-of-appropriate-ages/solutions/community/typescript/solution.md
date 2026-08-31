# Beats 100% || Easy to understand

**Author:** abhinavleadsquared
**Votes:** 0
**Link:** [https://leetcode.com/problems/friends-of-appropriate-ages/solutions/5896725/](https://leetcode.com/problems/friends-of-appropriate-ages/solutions/5896725/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
![image.png](./images/0.png)


# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function numFriendRequests(ages: number[]): number {
    const ageCount = new Array(121).fill(0); 
    for (const age of ages) {
        ageCount[age]++;
    }
    let totalRequests = 0;
    for (let ageA = 1; ageA <= 120; ageA++) {
        if (ageCount[ageA] === 0) continue;

        for (let ageB = 1; ageB <= 120; ageB++) {
            if (ageCount[ageB] === 0) continue;
            if (ageB <= 0.5 * ageA + 7 || ageB > ageA) continue;
            if (ageA === ageB) {
                totalRequests += ageCount[ageA] * (ageCount[ageA] - 1);
            } else {
                totalRequests += ageCount[ageA] * ageCount[ageB];
            }
        }
    }

    return totalRequests;
};
```
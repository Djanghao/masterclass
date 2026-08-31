# Simple Solution 100% faster

**Author:** dnthem
**Votes:** 1
**Link:** [https://leetcode.com/problems/total-distance-traveled/solutions/3849374/](https://leetcode.com/problems/total-distance-traveled/solutions/3849374/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It is really just a straight forward problem, just follow the prompt to calculate the distance
# Approach
<!-- Describe your approach to solving the problem. -->
For every 5 liters we can think of it as for every 50 km. So we only need to check if the car has traveled for 50km and check for the additional tank, then we add to the main tank 1 liter
# Complexity
- Time complexity: O(maintank + additionalTank)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function distanceTraveled(mainTank: number, additionalTank: number): number {
    let distance : number = 0;
    do {
        distance+= 10;
        mainTank--;
        if (distance % 50 === 0 && additionalTank > 0) {
            additionalTank--;
            mainTank++;
        }
    } while(mainTank > 0);
    return distance;
};
```
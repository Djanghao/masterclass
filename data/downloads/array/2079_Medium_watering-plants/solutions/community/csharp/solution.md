# Java ✅ || Easy Solution ✅ || 100% beats ✅ || With Explanation ✅

**Author:** akobirswe
**Votes:** 1
**Link:** [https://leetcode.com/problems/watering-plants/solutions/3838149/](https://leetcode.com/problems/watering-plants/solutions/3838149/)

---

# Approach

The problem requires watering plants in a row, starting from a river (x = -1) and moving towards the right. We have a watering can with a certain capacity, and each plant requires a specific amount of water. We need to find the minimum number of steps required to water all the plants while refilling the watering can at the river whenever needed.

**Logic:**
1. We start at the river (x = -1) with a full watering can. Initialize variables `water` to keep track of the current water amount in the can and `count` to keep track of the total steps taken.
2. We iterate through the plants from left to right (from index 0 to n-1).
3. For each plant, we check if the amount of water in the can (`water`) is sufficient to water that plant.
4. If there is enough water, we water the plant and reduce the amount of water in the can accordingly.
5. If there is not enough water, we refill the watering can at the river and water the current plant again. We keep track of the number of steps taken to refill and water the plant.
6. After watering each plant, we increment the `count` to keep track of the total steps taken.
7. Finally, we return the `count`, which represents the minimum number of steps needed to water all the plants.

**Explanation:**
The given solution uses a simple logic to water the plants efficiently while keeping track of the steps taken. It starts at the river with a full watering can and iterates through the plants from left to right. At each plant, it checks the amount of water in the can and waters the plant accordingly.

If there is not enough water to fully water the current plant, it refills the watering can at the river, and then waters the current plant again. This ensures that the plants are watered completely and that we minimize the number of steps needed.

The solution efficiently handles the refilling and watering process and keeps track of the total steps taken. It returns the total count of steps, which represents the minimum number of steps needed to water all the plants.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int wateringPlants(int[] plants, int capacity) {
        int water = capacity;
        int count = 0;

        for(int i = 0; i < plants.length; i++) {
            if(water < plants[i]) {
                count += (i + i + 1);
                water = capacity - plants[i];
            } else {
                count++;
                water -= plants[i];
            }
        }

        return count;
    }
}
```
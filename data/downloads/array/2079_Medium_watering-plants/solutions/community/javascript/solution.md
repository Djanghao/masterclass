# JAVA☕, PYTHON🐍, JAVASCRIPT 💛 EASY SOLUTION 💯 Beats 100%✅

**Author:** VishnuThangaraj
**Votes:** 1
**Link:** [https://leetcode.com/problems/watering-plants/solutions/4389070/](https://leetcode.com/problems/watering-plants/solutions/4389070/)

---

![image.png](./images/0.png)


# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
As we iterate through the plants array the can ask ourselves two questions before attempting to water the next plant:
    - Can we move onto the next plant?
    - Do we need to refil?
Moving to the next plant is straight forward, update our capacity and increment the steps taken. One way to refill our capacity is to move the same number of steps back and forward as our current index.


# Approach
<!-- Describe your approach to solving the problem. -->
1. Declare Variables `steps` and `water`.
2. Iterate the array `plants`.
    -  If `water` is not sufficient for the plant in `plants[index]`, refill the water to the capacity and increase `steps` by `index*2`.
    - If `water` is sufficient reduce the water by `plants[index]` and increment `steps` by 1.
3. Return the `Steps`.

# Complexity
- Time complexity: **O(n)** where n is the size of the input array. We iterate through the array once.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(1)** as we use a constant amount of space for variables.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` Java []
class Solution {
    public int wateringPlants(int[] plants, int capacity) {
        int steps = 0, water = capacity;

        for(int index = 0; index < plants.length; index++){
            if(plants[index] > water){
                steps += (index)*2;
                water = capacity; // Refill water
            }
            water -= plants[index];
            steps++;
        }

        return steps;
    }
}
```
``` Python []
class Solution:
    def wateringPlants(self, plants: List[int], capacity: int) -> int:
        steps, water = 0, capacity

        for index in range(0,len(plants)):
            if(plants[index] > water):
                steps += (index)*2
                water = capacity; # Refill water
            
            water -= plants[index]
            steps += 1

        return steps
```
``` Javascript []
var wateringPlants = function(plants, capacity) {
    let steps = 0, water = capacity;

    for(let index = 0; index < plants.length; index++){
        if(plants[index] > water){
            steps += (index)*2;
            water = capacity; // Refill water
        }
        water -= plants[index];
        steps++;
    }

    return steps;
};
```

# Github
- https://github.com/VishnuThangaraj
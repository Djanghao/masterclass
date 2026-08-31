# Beats 100% on runtime, 85% on memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-all-possible-routes/solutions/5837867/](https://leetcode.com/problems/count-all-possible-routes/solutions/5837867/)

---

# Intuition
The problem involves finding all possible routes from a starting city to a destination city with a limited amount of fuel. You can move between cities based on their distances and need to account for the fuel consumed for each move. The key insight is that a city can be revisited multiple times, allowing for various paths to be explored.

# Approach
Use Depth-First Search (DFS) with memoization to explore all routes from the starting city to the destination, keeping track of the remaining fuel and counting valid routes.

# Complexity
- Time complexity:
O(N x F2) 

- Space complexity:
O(N x F)

# Code
```typescript []
/**
 * @param {number[]} locations - The positions of the cities.
 * @param {number} start - The starting city index.
 * @param {number} finish - The destination city index.
 * @param {number} fuel - The initial amount of fuel.
 * @return {number} - The number of possible routes to reach the destination city.
 */
const countRoutes = function(locations: number[], start: number, finish: number, fuel: number): number {
    const MOD = 1000000007; // Modulo value to prevent overflow
    const cache: number[][] = Array.from({ length: locations.length }, () => Array(fuel + 1).fill(-1)); // Cache for memoization

    // Depth-First Search (DFS) function to explore routes
    const DFS = (current: number, destination: number, remainingFuel: number): number => {
        // Return cached result if already computed
        if (cache[current][remainingFuel] !== -1) return cache[current][remainingFuel];

        const distanceToDestination = Math.abs(locations[destination] - locations[current]); // Distance to the destination city
        
        // If the fuel needed to reach the destination exceeds available fuel, return 0
        if (distanceToDestination > remainingFuel) {
            cache[current][remainingFuel] = 0;
            return 0;
        }

        let totalRoutes = (current === destination) ? 1 : 0; // Count this route if at destination

        // Explore all possible cities to move to
        for (let nextCity = 0; nextCity < locations.length; nextCity++) {
            if (nextCity !== current) { // Avoid moving to the same city
                const fuelCost = Math.abs(locations[nextCity] - locations[current]); // Cost to move to the next city
                if (fuelCost <= remainingFuel) { // If enough fuel is available
                    totalRoutes = (totalRoutes + DFS(nextCity, destination, remainingFuel - fuelCost)) % MOD; // Explore further
                }
            }
        }

        cache[current][remainingFuel] = totalRoutes; // Store the result in cache
        return totalRoutes; // Return the total routes found
    };

    return DFS(start, finish, fuel); // Start DFS from the initial city
};



```
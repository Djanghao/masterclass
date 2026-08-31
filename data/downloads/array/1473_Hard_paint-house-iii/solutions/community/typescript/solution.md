# Bottom up dynamic programming

**Author:** somashek81
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house-iii/solutions/5185854/](https://leetcode.com/problems/paint-house-iii/solutions/5185854/)

---

# Approach
Use 3-D array to hold optimal cost for every house, color and neighborhood.

# Complexity
- Time complexity:

$$O(houses * colors^2 * neighborhoods)$$

- Space complexity:

$$O(houses * colors * neighborhoods)$$ because of 3-D array

# Code
```
function minCost(houses: number[], cost: number[][], m: number, n: number, target: number): number {
    const dp: number[][][] = [];
    
    // Initialization:
    for (let neighborhood = 0; neighborhood < target; neighborhood++) {
        const houseWithColors: number[][] = [];
        for (let house = 0; house < m; house++) {
            houseWithColors.push( new Array<number>(n).fill(Number.POSITIVE_INFINITY) );
        }
        dp.push(houseWithColors);
    }
    
    // Base case (1 neighborhood):
    let selectedColor = 0;
    for (let house = 0; house < m; house++) {
        const isPainted = houses[house] !== 0;
        if (!selectedColor) {
            selectedColor = houses[house];
        } else if (isPainted && selectedColor !== houses[house]) {
            break;
        }
        
        for (let color = 0; color < n; color++) {
            if (selectedColor > 0 && color + 1 !== selectedColor) {
                continue;
            }
            const curCost = isPainted ? 0 : cost[house][color];
            dp[0][house][color] = house > 0 ? dp[0][house - 1][color] + curCost : curCost;
        }
    }
    
    // Recurrence (all neighborhoods):
    for (let neighborhood = 1; neighborhood < target; neighborhood++) {
        for (let house = 1; house < m; house++) {
            const isPainted = houses[house] !== 0;
            const paintedColor = houses[house];
            
            for (let color = 0; color < n; color++) {
                if (isPainted && paintedColor !== color + 1) {
                    continue;
                }
                const curCost = isPainted ? 0 : cost[house][color];
                const prevCostWithSameNeighborhood = dp[neighborhood][house - 1][color];
                const prevCostWithDiffNeighborhood = getMinCostWithDiffColors(neighborhood - 1, house - 1, color, dp, n);
                dp[neighborhood][house][color] = curCost + Math.min(prevCostWithDiffNeighborhood, prevCostWithSameNeighborhood);
            }
        }
    }
    
    const minCost = getMinCostWithDiffColors(target - 1, m - 1, -1, dp, n);
    return minCost === Number.POSITIVE_INFINITY ? -1 : minCost;
};
    
function getMinCostWithDiffColors(neighborhood: number, house: number, targetColor: number, dp: number[][][], n: number): number {
    let minCost = Number.POSITIVE_INFINITY;
    
    for (let color = 0; color < n; color++) {
        if (color === targetColor) {
            continue;
        }
        
        minCost = Math.min(minCost, dp[neighborhood][house][color]);
    }
    
    return minCost;
}
```
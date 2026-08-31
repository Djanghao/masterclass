# Python & JavaScript Backtracking w/ explanation

**Author:** stevenkinouye
**Votes:** 9
**Link:** [https://leetcode.com/problems/paint-house-iii/solutions/674304/](https://leetcode.com/problems/paint-house-iii/solutions/674304/)

---

Note: Written verbosely for easy understanding
```python
################ PYTHON
class Solution:
    def minCost(self, houses: List[int], cost: List[List[int]], m: int, n: int, target: int) -> int:
        cache = {}
        def backtrack(prev_color, house, num_neighborhoods):
            # return if we have too many neighborhoods
            if num_neighborhoods > target:
                return float('inf')

            # if we have painted all the houses
            # return 0 if we have the correct number of neighborhoods
            # otherwise return maximum value
            if house == m:
                return 0 if num_neighborhoods == target else float('inf')

            # if we have already seen this combination, return the result
            key = (prev_color, house, num_neighborhoods)
            if key in cache:
                return cache[key]

            # case if house is already painted
            if houses[house]:
                # see if we have a new neighborhood
                additional_neighborhoods = 1 if houses[house] != prev_color else 0
                cache[key] = backtrack(houses[house], house + 1, num_neighborhoods + additional_neighborhoods)
                return cache[key]

            min_price = float('inf')
            for i in range(n):
                # paint the house this color (offset by 1)
                houses[house] = i + 1;
                # see if we have a new neighborhood
                additional_neighborhoods = 1 if houses[house] != prev_color else 0
                # find the minimum price to paint all other houses with this combination
                res = backtrack(houses[house], house + 1, num_neighborhoods + additional_neighborhoods)
                # price to pain the house this color
                price = cost[house][i]
                min_price = min(min_price, price + res)
                # remove the paint
                houses[house] = 0
            cache[key] = min_price
            return cache[key]

        result = backtrack(-1, 0, 0)
        return result if result < float('inf') else -1
```

================================================================================

```javascript
////////////////// JAVASCRIPT
var minCost = function(houses, cost, m, n, target) {
    const cache = {};
    const backtrack = (prevColor, house, numNeighborhoods) => {
        // return if we have too many neighborhoods
        if (numNeighborhoods > target) return Infinity;

        // if we have painted all the houses
        // return 0 if we have the correct number of neighborhoods
        // otherwise return maximum value
        if (house === m) {
            return numNeighborhoods === target ? 0 : Infinity;
        }

        // if we have already seen this combination, return the result
        const key = [prevColor, house, numNeighborhoods].join('-')
        if (cache.hasOwnProperty(key)) return cache[key];


        // case if house is already painted
        if (houses[house]) {
            // see if we have a new neighborhood
            const additionalNeighborhoods = houses[house] !== prevColor ? 1 : 0;
            return cache[key] = backtrack(houses[house], house + 1, numNeighborhoods + additionalNeighborhoods);
        }

        let min = Infinity;
        for (let color = 0; color < n; color++) {
            // paint the house this color (offset by 1)
            houses[house] = color + 1;
            // see if we have a new neighborhood
            const additionalNeighborhoods = houses[house] !== prevColor ? 1 : 0;
            // find the minimum price to paint all other houses with this combination
            const res = backtrack(houses[house], house + 1, numNeighborhoods + additionalNeighborhoods);
            // price to pain the house this color
            const price = cost[house][color];
            min = Math.min(min, price + res);
            // remove the paint
            houses[house] = 0;
        }
        return cache[key] = min;
    }

    // Backtrack through all the different possibilities
    // if the result is max value, return -1;
    const result = backtrack(-1, 0, 0);
    return result === Infinity ? -1 : result;
};
```
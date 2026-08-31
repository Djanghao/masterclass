# Simple typescript solution using BFS (O(n) space and time, apparently beats 100%)

**Author:** dobuki
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/3978671/](https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/3978671/)

---

# Intuition
Keep traversing the graph using BFS, until we got k items. After that, keep going until the distance is too far.

We want to stop as early as possible. Once we got k items, we can limit our distance to where we're at, because we know that any further items will be outranked. That way we avoid traversing the entire grid.

# Approach
- Setup a queue in which we'll push position AND distance.
- For each item in the queue
    - If it's already visited, skip
    - Check if the price. If there's no price, just skip (note that out of bound means price is undefined, so same check for no price).
    - If the price is within range, add it to our basket.
    - Add surroundings in the queue (position + distance increased by 1)
    - Check if we got enough items in the basket. If so, mark our distance and keep looking for items within the same distance.
- Once done, sort by all criterias (distance, price, row, col) and take the first k.

# Complexity
- Time complexity:
O(n) (n is number of cells)

- Space complexity:
O(n)

# Code
```
const DIR = [
        [-1,0],
    [0,-1], [0,1],
        [1,0],
];

function highestRankedKItems(grid: number[][], pricing: number[], start: number[], k: number) {
    const queue: number[][] = [];
    queue.push([...start, 0]);
    const items = [];
    let maxDistance = 0;
    const visited = new Set<string>();
    while(queue.length) {
        const pos = queue.shift();
        const [r, c, distance] = pos;
        if (visited.has(`${r}_${c}`)) {
            continue;
        }
        visited.add(`${r}_${c}`);
        const price = grid[r]?.[c];
        if (price) {
            if (pricing[0] <= price && price <= pricing[1]) {
                items.push({
                    pos,
                    distance,
                    price,
                });
            }
            for (let [y, x] of DIR) {
                queue.push([r + y, c + x, distance + 1]);
            }
            if (items.length >= k) {
                if (!maxDistance) {
                    maxDistance = distance;
                }
                if (distance > maxDistance) {
                    break;
                }
            }
        }
    }
    return items.sort((a, b) => {
        if (a.distance !== b.distance) {
            return a.distance - b.distance;
        }
        if (a.price !== b.price) {
            return a.price - b.price;
        }
        if (a.pos[0] !== b.pos[0]) {
            return a.pos[0] - b.pos[0];
        }
        return a.pos[1] - b.pos[1];
    }).map(({pos}) => pos.slice(0,2)).slice(0, k);
}

```
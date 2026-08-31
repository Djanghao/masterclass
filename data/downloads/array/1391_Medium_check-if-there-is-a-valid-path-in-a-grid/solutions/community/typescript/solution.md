# 100% (runtime and memory), typescript

**Author:** aherbez
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/4397293/](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/4397293/)

---

# Intuition
At heart, this is a simple breadth-first search- we start on the 0,0 tile, mark it as explored, then expand to any viable neighbors. 

# Approach
<!-- Describe your approach to solving the problem. -->

Evaluating the neighbors is a little tricky due to the nature of the tiles. At first I considered tracking some kind of "heading" value and essentially simulating the journey along the road. But that would prove tricky given that we might start on a corner tile. 

It's much easier to just test a given two tiles to see if they can connect in a given direction. For example, tile 1 has an exit on the right, which means it can connect to any tile with an entry on the left (namely 1, 3, and 5). 

So the general approach is to:

- start at 0,0 as the current tile
- for each neighbor of the current tile:
-- see if it can connect to the current tile, and if so
-- add it to the list of tiles to explore
- continue until either we've arrived at the bottom-right, or we have no more tiles to explore (representing hitting a dead end)

To make things easier, we can use 0-3 to represent the cardinal directions in clockwise order, with:

- 0: up
- 1: right
- 2: down
- 3: left

This does a few things for us- it makes it easier to loop through the directions, and also makes it easy to set up an array of position offsets.

It also allows us to get the opposite direction with:

```
oppositeDirection = (direction + 2) % 4;
```

Ok, so let's start checking neighbors. For each current tile, we loop through the directions, adding the proper offset ([0, -1] for up, for example). Its easy to get snarled up in checking for out-of-bound positions, so I like to make a helper function like `getTileAt(x,y)` for situations like these. Given that our tile values are only 1-6, we can use -1 as a sentinel to represent out-of-bounds.

Ok, so if we have a proper, in-bounds tile that's neihboring the current one, we need to see if we can actually travel in that direction. That will only be true if:

- the current tile has an exit in that direction (up, for example), AND
- the next tile has an exit in the opposite direction (down)

So we implement a `hasDir` function that takes a tile type and a direction, and returns whether or not that tile has an exit there. I just brute-forced this by enumerating all the tiles for each direction. Given that there are only three each, this wasn't bad, and it also makes the check itself really fast- just a switch-based lookup for the direction and a max of three comparisons. 

Now that we have that, we can test a given direction with:

```
d2 = (d + 2) % 4;
if (hasDir(curr, d) && hasDir(next, d2)) {
    // we can travel from curr to next in direction d
}
```

That's pretty much it. We now have a way to identify viable neighbors, and can apply standard breadth-first search. The only other thing to watch out for is the possibility of cycles. To prevent endless looping, I set up a Set to hold the tiles we've seen, and insert a string key (x_y) for each tile that we process.



# Complexity
- Time complexity:

Linear on the number of grid tiles in the worst case, but that is fairly unlikely to happen. We examine each tile only once, and stop adding tiles once we've hit a dead end.

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
This is also linear on the number of grid tiles. We store two things: a Set representing the list of explored tiles, and a list of currently unexplored neighbors.

Neither of these can ever be larger than the total number of tiles, and the list of unexplored neighbors is likely to be substantially smaller in most cases.

# Code
```
function hasValidPath(grid: number[][]): boolean {
    if (grid.length < 2 && grid[0].length < 2) return true;

    const tileAt = (x: number, y:number): number => {
        if (y < 0 || y >= grid.length) return -1;
        if (x < 0 || x >= grid[y].length) return -1;
        return grid[y][x];
    }

    // checks if a given tile has an exit in a given direction
    const hasDir = (n: number, d: number): boolean => {
        switch (d) {
            case 0:
                return (n === 2 || n === 5 || n === 6);
            case 1:
                return (n === 1 || n === 4 || n === 6);
            case 2:
                return (n === 2 || n === 3 || n === 4);
            case 3:
                return (n === 1 || n === 3 || n === 5);
        }
        return false;
    }

    const dirOffsets = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0]
    ];

    const canMove = (x: number, y: number, d: number): boolean => {
        const curr = tileAt(x, y);
        if (curr < 0) return false;

        let next = tileAt(
            x + dirOffsets[d][0],
            y + dirOffsets[d][1]
        );
        // need to check dest for opposite direction
        let d2 = (d + 2) % 4;

        if (next < 0) return false;
        
        if (hasDir(curr, d) && hasDir(next, d2)) {
            return true;
        }
        return false;
    }

    let toCheck = [[0,0]];

    const seen = new Set<string>();
    seen.add('0_0');
    let x, y;
    let x2, y2;
    let k;
    let nextX, nextY;
    while (toCheck.length > 0) {
        [x, y] = toCheck.pop();
        let currType = grid[y][x];

        for (let i=0; i < 4; i++ ) {
            if(canMove(x, y, i)) {
                x2 = x + dirOffsets[i][0];
                y2 = y + dirOffsets[i][1];

                if ((y2 === grid.length - 1) && 
                    (x2 === grid[y2].length-1)) {
                        return true;
                    }

                k = `${x2}_${y2}`;
                if (!seen.has(k)) {
                    toCheck.push([x2, y2]);
                    seen.add(k);
                }
            }
        }
    }
    return false;


};
```
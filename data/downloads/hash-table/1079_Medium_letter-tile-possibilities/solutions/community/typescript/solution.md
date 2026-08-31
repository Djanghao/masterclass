# typescript, dfs - w/ comments

**Author:** carti
**Votes:** 1
**Link:** [https://leetcode.com/problems/letter-tile-possibilities/solutions/835099/](https://leetcode.com/problems/letter-tile-possibilities/solutions/835099/)

---

```
function numTilePossibilities(tiles: string): number {
    // set to keep track of all possibly sequences
    let set: Set<string> = new Set();

    // count of tiles
    let N: number = tiles.length;

    /**
     * dfs helper function
     * @param cur : current sequence this iteration has
     * @param left : characters left to draw from
     * @param count : characters taken so far
     */
    function dfs(cur: string, left: string[], count: number): void {
        // base case : no more tiles to draw from
        if (count === N) {
            // push this current sequence to set, and break
            set.add(cur);
            return;
        }

        // no-choice (empty string) is also a choice
        dfs(cur, [...left], count + 1);

        // go through all tile possibilities to draw from
        for (let i = 0; i < left.length; i++) {
            // simulate taking this tile from set of possible tiles
            let new_left = [...left];
            new_left.splice(i, 1);

            // use this tile as our choice
            dfs(cur + left[i], new_left, count + 1);
        }
    }

    // start recursion
    dfs('', tiles.split(''), 0);

    // we do 'size - 1' because our solution will have empty string, and thats not allowed
    return set.size - 1;
}
```

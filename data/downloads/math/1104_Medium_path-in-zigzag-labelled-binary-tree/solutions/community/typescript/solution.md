# typescript, simple o(logn). beats 100%. w/ detailed comments

**Author:** carti
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/845575/](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/845575/)

---

```
function pathInZigZagTree(label: number): number[] {
    // find level this label is on
    let level: number = Math.floor(Math.log(label) / Math.log(2) + 1);

    // create an empty path array of size level
    // (since we need to go that many levels to reach label)
    const path: number[] = Array(level);

    // go until label is 0
    while (label > 0) {
        // at this level is simply the label (node we encountered in path)
        path[level - 1] = label;

        // calculate symmetric node on other side (since we are zig zagging)
        label = 2 ** level - 1 - label + 2 ** (level - 1);

        // right shift by 1 since we are going up a level
        label >>= 1;

        // go up a level
        level--;
    }

    return path;
}
```

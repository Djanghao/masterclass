# Swap up

**Author:** Probaton
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/4165531/](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/4165531/)

---

# Intuition
Solution is based on two premises.

1. The requirements to determine whether a row is valid will only get more lax as you go down the rows. I.e. any row that is valid for its current position would also be a valid option for all positions further down. That means you only have to move rows _up_ the list, never down. 

2. The only factor that determines the validity of a row is the position of its first 1. Any preceding 0s are irrelevant. 

# Approach
First we map the rows to a list of indices that indicate what the _minimum_ index is at which it would be a valid option. As stated above, this is determined entirely by the position of its first 1. 

E.g. `[0, 0, 1, 0, 0]` has it's first 1 at `i === 2`, therefore it would be a valid option for `grid[2]` and anything below it. 

Then we iterate over the rows, ignoring them if they are already valid candidates. If not, we search further down the rows for the first candidate that _does_ meet the requirements (i.e. the one that requires the least number of moves to swap), and then...
1. ...remove suitable row from the list
2. ...reinsert it at the current index
3. ...add the distance moved(/number of swap) to the total moves

Remember, any row that's valid in any given position is also valid in all subsequent positions, so we're safe simply grabbing the first valid option as long as we're moving _down_ the list. 

If no valid rows can be found further down it means the grid cannot be solved, as there are not (enough) valid options available. 

# Code
```
function minSwaps(grid: number[][]): number {
    // map rows to a list of integers that indicate the 
    // minimum index at which it would be a valid option
    const minIs = grid.map(row => row.lastIndexOf(1));

    let moves = 0;
    for (let i = 0; i < minIs.length; i++) {
        // if the row is already valid, we can move on
        if (minIs[i] <= i) {
            continue;
        }

        // iterate over all subsequent rows to find the 
        // first suitable candidate, moving it up to the 
        // current index if one is found
        for (let j = i; j < minIs.length; j++) {
            if (minIs[j] <= i) {
                moves += j - i;
                minIs.splice(i, 0, minIs[j]);
                minIs.splice(j + 1, 1);
                break;
            }
        }

        // if we weren't able to find a suitable candidate
        // the grid is unsolvable
        if (minIs[i] > i) return -1;
    }
    return moves;
};
```
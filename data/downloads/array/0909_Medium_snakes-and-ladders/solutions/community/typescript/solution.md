# Basic BFS traversal w/ steps processed in batches

**Author:** Zeddic
**Votes:** 4
**Link:** [https://leetcode.com/problems/snakes-and-ladders/solutions/3658919/](https://leetcode.com/problems/snakes-and-ladders/solutions/3658919/)

---

# Intuition
- Use BFS to to simulate an expanding set of moves starting at square 1
- When the BFS reaches the last location, you have reached the end
- In graph traversal problems, questions that ask for the "minimal" number of moves hint a BFS traversal as an option
- When doing the BFS you have two options of tracking the moves count
  - You can encode it with the next step in the work queue
  - You can process your work queue in 'batches' that share the same move count

# Approach
- Create a helper function that can take a 1-based board location and lookup the corresponding value in the board. This is a combination of mod and division math.
- Create a BFS, with a work queue starting at position 1
  - Process the queue in batches of # of steps taken so far
  - For each queue location, you want to find what new locations you can reach.
  - To do this, consider each dice throw between 1 and 6 as possible new locations. If a dice throws would end on a snake/ladder, the possible location is the END of the snake/ladder
  - If one of the possible locations is the winning state, return the steps so far.
  - Otherwise, add each possible new, unseen location to the pending queue.

# Code
```
const DICE = [1, 2, 3, 4, 5, 6];

function snakesAndLadders(board: number[][]): number {
    const n = board.length;
    const end = n * n;
    const seen = new Set<number>();

    let queue: number[] = [1];
    let steps = 1;

    while (queue.length > 0) {
        const pending: number[] = [];

        while (queue.length > 0) {
            const i = queue.shift();
            for (const dice of DICE) {
                let loc = i + dice;
                const val = getValue(board, loc);
                if (val !== -1) {
                    loc = val;
                }

                if (seen.has(loc) || loc > end) {
                    continue;
                }

                if (loc === end) {
                    return steps;
                }

                seen.add(loc);
                pending.push(loc);
            }
        }

        queue = pending;
        steps++;
    }


    return -1;
};

function getValue(board: number[][], loc: number): number {
    const pos = loc - 1; // board is 1-based, but data is 0-based
    const n = board.length;
    const rowFromBottom = Math.floor(pos / n);
    const row = n - 1 - rowFromBottom;    

    const offset = pos % n;
    const isBackwards = rowFromBottom % 2 === 1;
    
    const col = isBackwards ? n - 1 -  offset : offset;

    return board[row]?.[col];
}


```
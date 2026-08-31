# Array.sort vs Counting Sort

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board/solutions/5656995/](https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board/solutions/5656995/)

---

[toc]

# Array.sort

- Time complexity: $$O(N\\log{N})$$

- Space complexity: $$O(N)$$

```typescript []
function minMoves(rooks: number[][]): number {
    const N = rooks.length;
    let moves = 0;

    rooks.sort((rookA, rookB) => rookA[0] - rookB[0]);
    for (let i = 0; i < N; ++i) {
        moves += Math.abs(rooks[i][0] - i);
    }

    rooks.sort((rookA, rookB) => rookA[1] - rookB[1]);
    for (let i = 0; i < N; ++i) {
        moves += Math.abs(rooks[i][1] - i);
    }
    
    return moves;
};
```

```javascript []
/**
 * @param {number[][]} rooks
 * @return {number}
 */
var minMoves = function(rooks) {
    const N = rooks.length;
    let moves = 0;

    rooks.sort((rookA, rookB) => rookA[0] - rookB[0]);
    for (let i = 0; i < N; ++i) {
        moves += Math.abs(rooks[i][0] - i);
    }

    rooks.sort((rookA, rookB) => rookA[1] - rookB[1]);
    for (let i = 0; i < N; ++i) {
        moves += Math.abs(rooks[i][1] - i);
    }
    
    return moves;
};
```

```java []
class Solution {
    public int minMoves(int[][] rooks) {
        final int N = rooks.length;
        int moves = 0;

        Arrays.sort(rooks, new IndexComparator(0));
        for (int i = 0; i < N; ++i) {
            moves += Math.abs(rooks[i][0] - i);
        }

        Arrays.sort(rooks, new IndexComparator(1));
        for (int i = 0; i < N; ++i) {
            moves += Math.abs(rooks[i][1] - i);
        }
        
        return moves; 
    }
}
 
class IndexComparator implements Comparator<int[]> {
    private int index;

    IndexComparator(int index) {
        this.index = index;
    }

    @Override
    public int compare(int[] array1, int[] array2) {
        return array1[this.index] - array2[this.index];
    }
}
```

# Counting Sort I

- Time complexity: $$O(N)$$

- Space complexity: $$O(N)$$

```typescript []
function minMoves(rooks: number[][]): number {
    const N = rooks.length;
    let moves = 0;

    // Counting sort
    const cols = new Array(N).fill(0);
    const rows = new Array(N).fill(0);
    for (const [col, row] of rooks) {
        ++cols[col];
        ++rows[row];
    }

    // Assign columns
    for (let i = 0, j = 0; j < N; ++j) {
        while (cols[j] > 1) {
            if (cols[i] < 1) {
                moves += Math.abs(i - j);
                --cols[j];
            }
            ++i;
        }
    }

    // Assign rows
    for (let i = 0, j = 0; j < N; ++j) {
        while (rows[j] > 1) {
            if (rows[i] < 1) {
                moves += Math.abs(i - j);
                --rows[j];
            }
            ++i;
        }
    }
    
    return moves;
};
```

```javascript []
/**
 * @param {number[][]} rooks
 * @return {number}
 */
function minMoves(rooks) {
    const N = rooks.length;
    let moves = 0;

    // Counting sort
    const cols = new Array(N).fill(0);
    const rows = new Array(N).fill(0);
    for (const [col, row] of rooks) {
        ++cols[col];
        ++rows[row];
    }

    // Assign columns
    for (let i = 0, j = 0; j < N; ++j) {
        while (cols[j] > 1) {
            if (cols[i] < 1) {
                moves += Math.abs(i - j);
                --cols[j];
            }
            ++i;
        }
    }

    // Assign rows
    for (let i = 0, j = 0; j < N; ++j) {
        while (rows[j] > 1) {
            if (rows[i] < 1) {
                moves += Math.abs(i - j);
                --rows[j];
            }
            ++i;
        }
    }
    
    return moves;
};
```

```java []
class Solution {
    public int minMoves(int[][] rooks) {
        final int N = rooks.length;
        int moves = 0;

        // Counting sort
        final int[] cols = new int[N];
        final int[] rows = new int[N];
        for (int[] rook : rooks) {
            ++cols[rook[0]];
            ++rows[rook[1]];
        }

        // Assign columns
        for (int i = 0, j = 0; j < N; ++j) {
            while (cols[j] > 1) {
                if (cols[i] < 1) {
                    moves += Math.abs(i - j);
                    --cols[j];
                }
                ++i;
            }
        }

        // Assign rows
        for (int i = 0, j = 0; j < N; ++j) {
            while (rows[j] > 1) {
                if (rows[i] < 1) {
                    moves += Math.abs(i - j);
                    --rows[j];
                }
                ++i;
            }
        }
        
        return moves;
    }
}
```

# Counting Sort II

- Time complexity: $$O(N)$$

- Space complexity: $$O(N)$$

```typescript []
function minMoves(rooks: number[][]): number {
    const N = rooks.length;
    let moves = 0;

    // Counting sort
    const cols = new Array(N).fill(0);
    const rows = new Array(N).fill(0);
    for (const [col, row] of rooks) {
        ++cols[col];
        ++rows[row];
    }

    // Assign columns
    let missing = 0;
    for (let j = 0; j < N; ++j) {
        missing += 1 - cols[j];
        moves += Math.abs(missing);
    }

    // Assign rows
    for (let j = 0; j < N; ++j) {
        missing += 1 - rows[j];
        moves += Math.abs(missing);
    }
    
    return moves;
};
```

```javascript []
/**
 * @param {number[][]} rooks
 * @return {number}
 */
function minMoves(rooks) {
    const N = rooks.length;
    let moves = 0;

    // Counting sort
    const cols = new Array(N).fill(0);
    const rows = new Array(N).fill(0);
    for (const [col, row] of rooks) {
        ++cols[col];
        ++rows[row];
    }

    // Assign columns
    let missing = 0;
    for (let j = 0; j < N; ++j) {
        missing += 1 - cols[j];
        moves += Math.abs(missing);
    }

    // Assign rows
    for (let j = 0; j < N; ++j) {
        missing += 1 - rows[j];
        moves += Math.abs(missing);
    }
    
    return moves;
};
```

```java []
class Solution {
    public int minMoves(int[][] rooks) {
        final int N = rooks.length;
        int moves = 0;

        // Counting sort
        final int[] cols = new int[N];
        final int[] rows = new int[N];
        for (int[] rook : rooks) {
            ++cols[rook[0]];
            ++rows[rook[1]];
        }

        // Assign columns
        int missing = 0;
        for (int j = 0; j < N; ++j) {
            missing += 1 - cols[j];
            moves += Math.abs(missing);
        }

        // Assign rows
        for (int j = 0; j < N; ++j) {
            missing += 1 - rows[j];
            moves += Math.abs(missing);
        }
        
        return moves;
    }
}
```
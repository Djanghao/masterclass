# JavaScript: Intuition vs Greedy algorithm

**Author:** asdsfad
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/4327346/](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/4327346/)

---

# Intuition

First of all, how we can solve it in real life. Let think about it.

|       | 0 | 1 | 2 |
| ----- | - | - | - |
| **0** | 4 | 1 | 8 |
| **1** | 2 | 7 | 3 |
| **2** | 6 | 5 | 9 |

Let's prepare our matrix where we'll work. Each element is initially set to one, because we assume that this's the minimum allowable number:

|       | 0 | 1 | 2 |
| ----- | - | - | - |
| **0** | 1 | 1 | 1 |
| **1** | 1 | 1 | 1 |
| **2** | 1 | 1 | 1 |

What's next? Let's go through e.g. the first:

3 > 1, so, let's make `matrix[0][0] += 1`, 4 < 1, hm... Let's make `matrix[0][2] = matrix[0][0] + 1`. We can go through the first column too. It means that we compare 4 and 2, 4 and 6: `matrix[2][0] = matrix[0][0] + 1`

|       | 0 | 1 | 2 |
| ----- | - | - | - |
| **0** | <span style="color: red"><s>1</s></span><span style="color: green">2</span> | 1 | <span style="color: red"><s>1</s></span><span style="color: green">3</span> |
| **1** | 1 | 1 | 1 |
| **2** | <span style="color: red"><s>1</s></span><span style="color: green">3</span> | 1 | 1 |

Due to the fact that we updated smth it means we need to go through their rows and columns. We need to handle the following items: `[[0, 0], [0, 2], [2,0]]`. Let's add them into a stack.

So, as you understand we need to go through rows/columns until stack is empty. Also we need to handle in such way all the matrix. So, initially we need to add: `[[2, 2], [2, 1], [2, 0], [1, 2], ..., [0, 0]]`. And after first add `[[0, 0], [0, 2], [2,0]]`.

In the results we'll have smth like this:

|       | 0 | 1 | 2 |
| ----- | - | - | - |
| **0** | 2 | 1 | 3 |
| **1** | 1 | 3 | 2 |
| **2** | 3 | 2 | 4 |

The complexity of such kind of intuitive algorithm will cause the Time Limit Exception on large arrays if you're using JavaScript.

# Greedy algorithm

I suggest to use a greedy algorithm for such kind of case. Maybe my expertice doesn't allow me to come up with different idea but the algorithm looks fine for me ;) 

So, what we need to do? As you can see, the smallest number in a row/column should be the smallest number (1). A little bit bigger number should be equal the smallest number + 1.

What if we prepare the same stack in the decrement order of numbers?

```js
const stack = grid.flatMap((row, i) => row.map((val, j) => [i, j, val]));
stack.sort((a, b) => b[2] - a[2]);
```

Great! We have this stack. When we take a new number from the stack we can be sure that this number is smallest in both a column and a row. And this number is larger than the rest numbers we've already used! It means that we should remember maximum in a column and in a row to solve that puzzle.

Let's prepare this arrays:

```js
const rowsMaxes = new Array(m).fill(0);
const colsMaxes = new Array(n).fill(0);
```

Last thing that we need to do is to go through the stack and increment the number in each cell. 

```js
while (stack.length) {
    const [i, j] = stack.pop();
    
    // We need to find the old maximum in a row and in a column
    // and increase it by 1
    matrix[i][j] = Math.max(rowsMaxes[i], colsMaxes[j]) + 1;

    // After our manipulation the number will be maximum in
    // both the column and the row
    rowsMaxes[i] = matrix[i][j];
    colsMaxes[j] = matrix[i][j];
}
```

That's it!

**P.S.** This algorithm doesn't work if we have equal numbers

# Complexity
- Time complexity:
    - **Creating the matrix**: This step involves creating a new 2D array of dimensions m x n. The operation here is $$O(m * n)$$ since it fills the entire matrix with ones.
    - **Creating the stack**: The `grid.flatMap` operation combined with the map function iterates over all elements in the 2D grid, which also has a time complexity of $$O(m * n)$$.
    - **Sorting the stack**: The average and worst-case time complexity of the sort function in JavaScript (which typically uses a variant of quicksort or mergesort) is $$O(m * n * log(m * n))$$
    - **Loop**: The loop runs for each element in the stack, which is $$O(m * n)$$.
    - Adding up these parts, the **total time complexity** is dominated by the sorting operation, so the overall time complexity is $$O(m * n * log(m * n))$$
- Space complexity:
    - **Space for matrix**: $$O(m * n)$$ as it creates a new 2D array of the same size as the input grid.
    - **Space for stack**: $$O(m * n)$$ since it stores every element from the grid with its coordinates.
    - **Space for rowsMaxes and colsMaxes**: $$O(m + n)$$
    - **Total space complexity** is therefore the sum of these, but since $$O(m * n)$$ is the larger term, it dominates. So, **the overall space complexity** is O(m\xD7n).

You can improve the algorithm by doing the same stuff on the spot. You don't need to create a new matrix, just maximum arrays. I'm not a fan of mutating input parameters

# Code
```js
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
const minScore = (grid) => {
  const m = grid.length;
  const n = grid[0].length;

  const matrix = Array.from({ length: m }, () => new Array(n).fill(1));
  const stack = grid.flatMap((arr, i) => arr.map((val, j) => [i, j, val]));

  stack.sort((a, b) => b[2] - a[2]);

  const rowsMaxes = new Array(m).fill(0);
  const colsMaxes = new Array(n).fill(0);

  while (stack.length) {    
    const [i, j] = stack.pop();

    matrix[i][j] = Math.max(rowsMaxes[i], colsMaxes[j]) + 1;

    rowsMaxes[i] = matrix[i][j];
    colsMaxes[j] = matrix[i][j];
  }

  return matrix;
};
```
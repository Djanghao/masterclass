# 1728. Cat and Mouse II

**Author:** stormsunshine
**Votes:** 1
**Link:** [https://leetcode.com/problems/cat-and-mouse-ii/solutions/3108403/](https://leetcode.com/problems/cat-and-mouse-ii/solutions/3108403/)

---

# Solution

## Thoughts and Algorithm

This problem is a follow-up version of [913. Cat and Mouse](https://leetcode.com/problems/cat-and-mouse). The rules of this problem are as follows.

- Cat and Mouse play the game in a grid, where Mouse moves first.

- Each player can jump in one of the four directions, or stay in the same position. The player to jump cannot jump over the wall nor outside of the grid.

- If Cat and Mouse are at the same position, Cat wins. The player that reaches the food first wins. To make sure at most one player wins, assume that when Cat and Mouse are at the same position, they cannot be at the position of the food.

- If Mouse cannot get to the food within 1000 turns, Cat wins.

Although this problem restricts the maximum number of turns to 1000, the time complexity of using dynamic programming with the maximum number of turns to be 1000 is still quite high, so this problem should be solved using topological sort.

When using topological sort, the grid can be considered as a graph, and the solution to [913. Cat and Mouse](https://leetcode.com/problems/cat-and-mouse) can be reused to solve this problem. Since this problem restricts the maximum number of turns to 1000, for each state, we need to store the result and the number of turns to reach the end of game of the state, where the draw states have the number of turns 0.

Traverse the grid to find Cat's initial position, Mouse's initial position and the position of food, and determine all edge states. Edge states include the states where Cat and Mouse are at the same position (not at the position of the food) or one of the players is at the same position as the food. The results of edge states can be directly obtained according to the rules, and the number of turns of edge states are 0.

According to the rules, the edge states where the results can be determined directly are as follows.

- When Cat and Mouse are at the same position that is not the position of the food, the Cat wins. Such a state is the Cat's win state and the Mouse's lose state.

- When one of the players is at the same position as the food (but not both players), the player at the same position as the food wins. Such a state is the win state of the player that reaches the food, and the lose state of the other player.

After all edge states are determined, traverse all possible states starting from edge states. Each state contains Mouse's position, Cat's position and the player to move. The previous turn's all possible states can be obtained from the current state, where the previous turn's player to move is opposite to the current state's player to move, and the previous turn's player to move has a different position as the current position. Use `(mouse, cat, turn)` to represent the current state and use `(prevMouse, prevCat, prevTurn)` to represent a possible state of the previous turn. The possible states of the previous turn are as follows.

- If `turn` is Mouse, then `prevTurn` is Cat, `prevMouse = mouse`, and `prevCat` can be `cat` or any position that can be reached from `cat` (no more than `catJump` and not over the wall or outside of the grid).

- If `turn` is Cat, then `prevTurn` is Mouse, `prevMouse` can be `mouse` or any position that can be reached from `mouse` (no more than `mouseJump` and not over the wall or outside of the grid), and `prevCat = cat`.

Initially, only the edge states' results are known, and all other states' results are unknown. Start from edge states to explore the results of the unknown states. For each current state that the result is known, get all possible states of the previous turn and update the results. Use `state` and `prevState` to represent the current state and the state in the previous turn respectively. If the result of `prevState` is known, then the result of `prevState` is updated as follows.

1. If the player to move of `prevState` is the same as the winner of `state`, then the player to move of `prevState` can move to `state` and win the game, so `prevState` is the win state of the player to move of `preState`. Update the result of `prevState` to be the winner of `state`, and update the number of turns of `prevState` to be the number of turns of `state` plus 1.

2. If the player to move of `prevState` is different from the winner of `state` and all the states that can be reached from `prevState` are the lose state of the player to move of `prevState`, then `prevState` is the lose state of the player to move of `prevState`. Update the result of `prevState` to be the winner of `state`, and update the number of turns of `prevState` to be the number of turns of `state` plus 1.

For the second situation, we need to record the degrees of each state. Initially, each state's degree equals the number of positions that the player to move of the state can reach.

During the traversal, when the second situation is met, decrease the degree of `prevState` by 1. If the degree of `prevState` is decreased to 0, then the player to move of `prevState` can only move to one of the lose states, so `prevState` is the lose state of the player to move of `prevState`.

Once the result of `prevState` is known, we can continue exploring other states from `prevState`. When no more states' results can be determined, the traversal ends, and the result of the initial state can be obtained.

According to the result and the number of turns of the initial state, the result of the game is as follows.

- If the result of the initial state is that Mouse wins and the number of turns does not exceed 1000, return `true`.

- If the result of the initial state is that Mouse wins but the number of turns exceeds 1000, return `false`.

- If the result of the initial state is that Cat wins, return `false`.

- If the result of the initial state is unknown, then Mouse cannot get to the food within 1000 turns, so Cat wins and return `false`.

For implementation, use `rows` and `cols` to represent the number of rows and the number of columns of `grid`, respectively. For `0 <= row < rows` and `0 <= col < cols`, the `row`-th row and the `col`-th column can be encrypted by `row * cols + col`, and each encrypted value can uniquely represent a position in the grid. The row index and the column index can be obtained by decrypting the encrypted value.

## Proof of the Optimal Strategy

To prove the correctness of the optimal strategy, the correctness of the results and the correctness of the numbers of turns need to be proven.

### Proof of Correctness of Results

When the traversal ends, all the states that the results are known are the win states or the lose states of one of the players, according to the optimal strategy. For any state that the result is unknown, the player to move cannot move to a win state but can move to another unknown state, or the result is contradictary to the updates in traversal. Therefore, any state that the result is unknown cannot be any player's win state or lose state.

### Proof of Correctness of Numbers of Turns

Under the optimal strategy, each state that the result is known is the win state of one of the players and the lose state of the other player. The two players have opposite strategies. The player at the win state aims to minimize the number of turns, and the player at the lose state aims to maximize the number of turns.

Since topological sort is implemented using breadth-first search, topological sort traverses the states in the order of ascending number of turns.

Use `state` ane `prevState` to represent the current state and the state in the previous turn respectively. When the result of `prevState` is updated, there are two possible cases. The first case is that `state` is the win state of the player to move of `prevState`. The second case is that `state` is the lose state of the player to move of `prevState`.

For the first case, the player to move of `prevState` can move to `state`. Moving from `prevState` to `state` corresponds to the minimum number of turns of `prevState` (otherwise the result of `prevState` should have been updated before visiting `state`).

For the second case, the player to move of `prevState` will always move to a lose state, and all adjacent states of `prevState` are already visited before visiting `state`, so `state` has the maximum number of turns among all adjacent states of `prevState`. Moving from `prevState` to `state` corresponds to the maximum number of turns of `prevState`.

The two cases correspond to the strategy of the player at the win state and the strategy of the player at the lose state, respectively.

## Code

The Java code is as follows.

```
class Solution {
    public static final int MOUSE_TURN = 0, CAT_TURN = 1;
    public static final int MOUSE_WIN = 1, CAT_WIN = 2, UNKNOWN = 0;
    public static final int MAX_MOVES = 1000;
    public static final char WALL = '#';
    public static final char CAT = 'C', MOUSE = 'M', FOOD = 'F';
    private static int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    private int rows, cols;
    private String[] grid;
    private int catJump, mouseJump;
    private int food;
    private int[][][] degrees;
    private int[][][][] results;

    public boolean canMouseWin(String[] grid, int catJump, int mouseJump) {
        this.rows = grid.length;
        this.cols = grid[0].length();
        this.grid = grid;
        this.catJump = catJump;
        this.mouseJump = mouseJump;
        int mouseStart = -1, catStart = -1;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                char c = grid[i].charAt(j);
                if (c == CAT) {
                    catStart = getPos(i, j);
                } else if (c == MOUSE) {
                    mouseStart = getPos(i, j);
                } else if (c == FOOD) {
                    food = getPos(i, j);
                }
            }
        }
        int total = rows * cols;
        this.degrees = new int[total][total][2];
        this.results = new int[total][total][2][2];
        Queue<int[]> queue = new ArrayDeque<int[]>();
        for (int mouse = 0; mouse < total; mouse++) {
            int mouseRow = mouse / cols, mouseCol = mouse % cols;
            if (grid[mouseRow].charAt(mouseCol) == WALL) {
                continue;
            }
            for (int cat = 0; cat < total; cat++) {
                int catRow = cat / cols, catCol = cat % cols;
                if (grid[catRow].charAt(catCol) == WALL) {
                    continue;
                }
                degrees[mouse][cat][MOUSE_TURN]++;
                degrees[mouse][cat][CAT_TURN]++;
                for (int[] dir : dirs) {
                    for (int row = mouseRow + dir[0], col = mouseCol + dir[1], jump = 1; row >= 0 && row < rows && col >= 0 && col < cols && grid[row].charAt(col) != WALL && jump <= mouseJump; row += dir[0], col += dir[1], jump++) {
                        int nextMouse = getPos(row, col), nextCat = getPos(catRow, catCol);
                        degrees[nextMouse][nextCat][MOUSE_TURN]++;
                    }
                    for (int row = catRow + dir[0], col = catCol + dir[1], jump = 1; row >= 0 && row < rows && col >= 0 && col < cols && grid[row].charAt(col) != WALL && jump <= catJump; row += dir[0], col += dir[1], jump++) {
                        int nextMouse = getPos(mouseRow, mouseCol), nextCat = getPos(row, col);
                        degrees[nextMouse][nextCat][CAT_TURN]++;
                    }
                }
            }
        }
        for (int pos = 0; pos < total; pos++) {
            if (pos == food) {
                continue;
            }
            int row = pos / cols, col = pos % cols;
            if (grid[row].charAt(col) == WALL) {
                continue;
            }
            results[pos][pos][MOUSE_TURN][0] = CAT_WIN;
            results[pos][pos][MOUSE_TURN][1] = 0;
            results[pos][pos][CAT_TURN][0] = CAT_WIN;
            results[pos][pos][CAT_TURN][1] = 0;
            queue.offer(new int[]{pos, pos, MOUSE_TURN});
            queue.offer(new int[]{pos, pos, CAT_TURN});
        }
        for (int mouse = 0; mouse < total; mouse++) {
            int mouseRow = mouse / cols, mouseCol = mouse % cols;
            if (grid[mouseRow].charAt(mouseCol) == WALL || mouse == food) {
                continue;
            }
            results[mouse][food][MOUSE_TURN][0] = CAT_WIN;
            results[mouse][food][MOUSE_TURN][1] = 0;
            results[mouse][food][CAT_TURN][0] = CAT_WIN;
            results[mouse][food][CAT_TURN][1] = 0;
            queue.offer(new int[]{mouse, food, MOUSE_TURN});
            queue.offer(new int[]{mouse, food, CAT_TURN});
        }
        for (int cat = 0; cat < total; cat++) {
            int catRow = cat / cols, catCol = cat % cols;
            if (grid[catRow].charAt(catCol) == WALL || cat == food) {
                continue;
            }
            results[food][cat][MOUSE_TURN][0] = MOUSE_WIN;
            results[food][cat][MOUSE_TURN][1] = 0;
            results[food][cat][CAT_TURN][0] = MOUSE_WIN;
            results[food][cat][CAT_TURN][1] = 0;
            queue.offer(new int[]{food, cat, MOUSE_TURN});
            queue.offer(new int[]{food, cat, CAT_TURN});
        }
        while (!queue.isEmpty()) {
            int[] state = queue.poll();
            int mouse = state[0], cat = state[1], turn = state[2];
            int result = results[mouse][cat][turn][0];
            int steps = results[mouse][cat][turn][1];
            List<int[]> prevStates = getPrevStates(mouse, cat, turn);
            for (int[] prevState : prevStates) {
                int prevMouse = prevState[0], prevCat = prevState[1], prevTurn = prevState[2];
                if (results[prevMouse][prevCat][prevTurn][0] == UNKNOWN) {
                    boolean winState = (result == MOUSE_WIN && prevTurn == MOUSE_TURN) || (result == CAT_WIN && prevTurn == CAT_TURN);
                    if (winState) {
                        results[prevMouse][prevCat][prevTurn][0] = result;
                        results[prevMouse][prevCat][prevTurn][1] = steps + 1;
                        queue.offer(new int[]{prevMouse, prevCat, prevTurn});
                    } else {
                        degrees[prevMouse][prevCat][prevTurn]--;
                        if (degrees[prevMouse][prevCat][prevTurn] == 0) {
                            results[prevMouse][prevCat][prevTurn][0] = result;
                            results[prevMouse][prevCat][prevTurn][1] = steps + 1;
                            queue.offer(new int[]{prevMouse, prevCat, prevTurn});
                        }
                    }
                }
            }
        }
        return results[mouseStart][catStart][MOUSE_TURN][0] == MOUSE_WIN && results[mouseStart][catStart][MOUSE_TURN][1] <= MAX_MOVES;
    }

    private List<int[]> getPrevStates(int mouse, int cat, int turn) {
        List<int[]> prevStates = new ArrayList<int[]>();
        int mouseRow = mouse / cols, mouseCol = mouse % cols;
        int catRow = cat / cols, catCol = cat % cols;
        int prevTurn = turn == MOUSE_TURN ? CAT_TURN : MOUSE_TURN;
        int maxJump = prevTurn == MOUSE_TURN ? mouseJump : catJump;
        int startRow = prevTurn == MOUSE_TURN ? mouseRow : catRow;
        int startCol = prevTurn == MOUSE_TURN ? mouseCol : catCol;
        prevStates.add(new int[]{mouse, cat, prevTurn});
        for (int[] dir : dirs) {
            for (int i = startRow + dir[0], j = startCol + dir[1], jump = 1; i >= 0 && i < rows && j >= 0 && j < cols && grid[i].charAt(j) != WALL && jump <= maxJump; i += dir[0], j += dir[1], jump++) {
                int prevMouseRow = prevTurn == MOUSE_TURN ? i : mouseRow;
                int prevMouseCol = prevTurn == MOUSE_TURN ? j : mouseCol;
                int prevCatRow = prevTurn == MOUSE_TURN ? catRow : i;
                int prevCatCol = prevTurn == MOUSE_TURN ? catCol : j;
                int prevMouse = getPos(prevMouseRow, prevMouseCol);
                int prevCat = getPos(prevCatRow, prevCatCol);
                prevStates.add(new int[]{prevMouse, prevCat, prevTurn});
            }
        }
        return prevStates;
    }

    private int getPos(int row, int col) {
        return row * cols + col;
    }
}
```

The C# code is as follows.

```
public class Solution {
    public const int MOUSE_TURN = 0, CAT_TURN = 1;
    public const int MOUSE_WIN = 1, CAT_WIN = 2, UNKNOWN = 0;
    public const int MAX_MOVES = 1000;
    public const char WALL = '#';
    public const char CAT = 'C', MOUSE = 'M', FOOD = 'F';
    private static int[][] dirs = {new int[]{-1, 0}, new int[]{1, 0}, new int[]{0, -1}, new int[]{0, 1}};
    private int rows, cols;
    private string[] grid;
    private int catJump, mouseJump;
    private int food;
    private int[][][] degrees;
    private int[][][][] results;

    public bool CanMouseWin(string[] grid, int catJump, int mouseJump) {
        this.rows = grid.Length;
        this.cols = grid[0].Length;
        this.grid = grid;
        this.catJump = catJump;
        this.mouseJump = mouseJump;
        int mouseStart = -1, catStart = -1;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                char c = grid[i][j];
                if (c == CAT) {
                    catStart = GetPos(i, j);
                } else if (c == MOUSE) {
                    mouseStart = GetPos(i, j);
                } else if (c == FOOD) {
                    food = GetPos(i, j);
                }
            }
        }
        int total = rows * cols;
        this.degrees = new int[total][][];
        this.results = new int[total][][][];
        for (int i = 0; i < total; i++) {
            degrees[i] = new int[total][];
            results[i] = new int[total][][];
            for (int j = 0; j < total; j++) {
                degrees[i][j] = new int[2];
                results[i][j] = new int[2][];
                results[i][j][0] = new int[2];
                results[i][j][1] = new int[2];
            }
        }
        Queue<Tuple<int, int, int>> queue = new Queue<Tuple<int, int, int>>();
        for (int mouse = 0; mouse < total; mouse++) {
            int mouseRow = mouse / cols, mouseCol = mouse % cols;
            if (grid[mouseRow][mouseCol] == WALL) {
                continue;
            }
            for (int cat = 0; cat < total; cat++) {
                int catRow = cat / cols, catCol = cat % cols;
                if (grid[catRow][catCol] == WALL) {
                    continue;
                }
                degrees[mouse][cat][MOUSE_TURN]++;
                degrees[mouse][cat][CAT_TURN]++;
                foreach (int[] dir in dirs) {
                    for (int row = mouseRow + dir[0], col = mouseCol + dir[1], jump = 1; row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] != WALL && jump <= mouseJump; row += dir[0], col += dir[1], jump++) {
                        int nextMouse = GetPos(row, col), nextCat = GetPos(catRow, catCol);
                        degrees[nextMouse][nextCat][MOUSE_TURN]++;
                    }
                    for (int row = catRow + dir[0], col = catCol + dir[1], jump = 1; row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] != WALL && jump <= catJump; row += dir[0], col += dir[1], jump++) {
                        int nextMouse = GetPos(mouseRow, mouseCol), nextCat = GetPos(row, col);
                        degrees[nextMouse][nextCat][CAT_TURN]++;
                    }
                }
            }
        }
        for (int pos = 0; pos < total; pos++) {
            if (pos == food) {
                continue;
            }
            int row = pos / cols, col = pos % cols;
            if (grid[row][col] == WALL) {
                continue;
            }
            results[pos][pos][MOUSE_TURN][0] = CAT_WIN;
            results[pos][pos][MOUSE_TURN][1] = 0;
            results[pos][pos][CAT_TURN][0] = CAT_WIN;
            results[pos][pos][CAT_TURN][1] = 0;
            queue.Enqueue(new Tuple<int, int, int>(pos, pos, MOUSE_TURN));
            queue.Enqueue(new Tuple<int, int, int>(pos, pos, CAT_TURN));
        }
        for (int mouse = 0; mouse < total; mouse++) {
            int mouseRow = mouse / cols, mouseCol = mouse % cols;
            if (grid[mouseRow][mouseCol] == WALL || mouse == food) {
                continue;
            }
            results[mouse][food][MOUSE_TURN][0] = CAT_WIN;
            results[mouse][food][MOUSE_TURN][1] = 0;
            results[mouse][food][CAT_TURN][0] = CAT_WIN;
            results[mouse][food][CAT_TURN][1] = 0;
            queue.Enqueue(new Tuple<int, int, int>(mouse, food, MOUSE_TURN));
            queue.Enqueue(new Tuple<int, int, int>(mouse, food, CAT_TURN));
        }
        for (int cat = 0; cat < total; cat++) {
            int catRow = cat / cols, catCol = cat % cols;
            if (grid[catRow][catCol] == WALL || cat == food) {
                continue;
            }
            results[food][cat][MOUSE_TURN][0] = MOUSE_WIN;
            results[food][cat][MOUSE_TURN][1] = 0;
            results[food][cat][CAT_TURN][0] = MOUSE_WIN;
            results[food][cat][CAT_TURN][1] = 0;
            queue.Enqueue(new Tuple<int, int, int>(food, cat, MOUSE_TURN));
            queue.Enqueue(new Tuple<int, int, int>(food, cat, CAT_TURN));
        }
        while (queue.Count > 0) {
            Tuple<int, int, int> state = queue.Dequeue();
            int mouse = state.Item1, cat = state.Item2, turn = state.Item3;
            int result = results[mouse][cat][turn][0];
            int steps = results[mouse][cat][turn][1];
            IList<Tuple<int, int, int>> prevStates = GetPrevStates(mouse, cat, turn);
            foreach (Tuple<int, int, int> prevState in prevStates) {
                int prevMouse = prevState.Item1, prevCat = prevState.Item2, prevTurn = prevState.Item3;
                if (results[prevMouse][prevCat][prevTurn][0] == UNKNOWN) {
                    bool winState = (result == MOUSE_WIN && prevTurn == MOUSE_TURN) || (result == CAT_WIN && prevTurn == CAT_TURN);
                    if (winState) {
                        results[prevMouse][prevCat][prevTurn][0] = result;
                        results[prevMouse][prevCat][prevTurn][1] = steps + 1;
                        queue.Enqueue(new Tuple<int, int, int>(prevMouse, prevCat, prevTurn));
                    } else {
                        degrees[prevMouse][prevCat][prevTurn]--;
                        if (degrees[prevMouse][prevCat][prevTurn] == 0) {
                            results[prevMouse][prevCat][prevTurn][0] = result;
                            results[prevMouse][prevCat][prevTurn][1] = steps + 1;
                            queue.Enqueue(new Tuple<int, int, int>(prevMouse, prevCat, prevTurn));
                        }
                    }
                }
            }
        }
        return results[mouseStart][catStart][MOUSE_TURN][0] == MOUSE_WIN && results[mouseStart][catStart][MOUSE_TURN][1] <= MAX_MOVES;
    }

    private IList<Tuple<int, int, int>> GetPrevStates(int mouse, int cat, int turn) {
        IList<Tuple<int, int, int>> prevStates = new List<Tuple<int, int, int>>();
        int mouseRow = mouse / cols, mouseCol = mouse % cols;
        int catRow = cat / cols, catCol = cat % cols;
        int prevTurn = turn == MOUSE_TURN ? CAT_TURN : MOUSE_TURN;
        int maxJump = prevTurn == MOUSE_TURN ? mouseJump : catJump;
        int startRow = prevTurn == MOUSE_TURN ? mouseRow : catRow;
        int startCol = prevTurn == MOUSE_TURN ? mouseCol : catCol;
        prevStates.Add(new Tuple<int, int, int>(mouse, cat, prevTurn));
        foreach (int[] dir in dirs) {
            for (int i = startRow + dir[0], j = startCol + dir[1], jump = 1; i >= 0 && i < rows && j >= 0 && j < cols && grid[i][j] != WALL && jump <= maxJump; i += dir[0], j += dir[1], jump++) {
                int prevMouseRow = prevTurn == MOUSE_TURN ? i : mouseRow;
                int prevMouseCol = prevTurn == MOUSE_TURN ? j : mouseCol;
                int prevCatRow = prevTurn == MOUSE_TURN ? catRow : i;
                int prevCatCol = prevTurn == MOUSE_TURN ? catCol : j;
                int prevMouse = GetPos(prevMouseRow, prevMouseCol);
                int prevCat = GetPos(prevCatRow, prevCatCol);
                prevStates.Add(new Tuple<int, int, int>(prevMouse, prevCat, prevTurn));
            }
        }
        return prevStates;
    }

    private int GetPos(int row, int col) {
        return row * cols + col;
    }
}
```

## Complexity Analysis

- Time Complexity: O(rows<sup>2</sup> * cols<sup>2</sup> * (rows + cols)), where `rows` and `cols` are the number of rows and the number of columns of `grid` respectively. The number of states is O(rows<sup>2</sup> * cols<sup>2</sup>) and it takes O(rows + cols) time to calculate the result of each state, so the time complexity is O(rows<sup>2</sup> * cols<sup>2</sup> * (rows + cols)).

- Space Complexity: O(rows<sup>2</sup> * cols<sup>2</sup>), where `rows` and `cols` are the number of rows and the number of columns of `grid` respectively. We need to store all states' degrees and results, and the number of states is O(rows<sup>2</sup> * cols<sup>2</sup>).
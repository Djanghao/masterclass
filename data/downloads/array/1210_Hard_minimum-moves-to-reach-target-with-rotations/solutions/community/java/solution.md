# [Java] BFS Solution - Very clean code easy to understand

**Author:** hiepit
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/392904/](https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/392904/)

---

```java
public class Solution {
    public int minimumMoves(int[][] grid) {
        int n = grid.length;
        SnakePos src = new SnakePos(new Cell(0, 0), new Cell(0, 1));
        SnakePos dst = new SnakePos(new Cell(n - 1, n - 2), new Cell(n - 1, n - 1));

        HashSet<String> visited = new HashSet<>();
        Queue<SnakePos> queue = new LinkedList<>();
        queue.add(src);
        visited.add(src.getKey());

        ArrayList<SnakePos> nextMoves = new ArrayList<>(4);
        int steps = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                SnakePos top = queue.remove();
                if (top.equals(dst))
                    return steps;

                nextMoves.clear();
                nextMoves.add(tryMoveRight(top, grid));
                nextMoves.add(tryMoveDown(top, grid));
                nextMoves.add(tryMoveClockwise(top, grid));
                nextMoves.add(tryMoveCounterClockwise(top, grid));

                for (SnakePos next : nextMoves) {
                    if (next != null && !visited.contains(next.getKey())) {
                        visited.add(next.getKey());
                        queue.add(next);
                    }
                }
            }
            steps++;
        }

        return -1;
    }

    SnakePos tryMoveRight(SnakePos curr, int[][] grid) {
        SnakePos next = new SnakePos(
                new Cell(curr.cell1.r, curr.cell1.c + 1),
                new Cell(curr.cell2.r, curr.cell2.c + 1)
        );
        if (valid(next, grid))
            return next;
        return null;
    }

    SnakePos tryMoveDown(SnakePos curr, int[][] grid) {
        SnakePos next = new SnakePos(
                new Cell(curr.cell1.r + 1, curr.cell1.c),
                new Cell(curr.cell2.r + 1, curr.cell2.c)
        );
        if (valid(next, grid))
            return next;
        return null;
    }

    SnakePos tryMoveClockwise(SnakePos curr, int[][] grid) {
        if (curr.cell1.r == curr.cell2.r) {
            SnakePos next = new SnakePos(
                    new Cell(curr.cell1.r, curr.cell1.c),
                    new Cell(curr.cell2.r + 1, curr.cell2.c - 1)
            );
            if (valid(next.cell2, grid)
                    && valid(new Cell(curr.cell1.r + 1, curr.cell1.c + 1), grid)) {
                return next;
            }
        }
        return null;
    }

    SnakePos tryMoveCounterClockwise(SnakePos curr, int[][] grid) {
        if (curr.cell1.c == curr.cell2.c) {
            SnakePos next = new SnakePos(
                    new Cell(curr.cell1.r, curr.cell1.c),
                    new Cell(curr.cell2.r - 1, curr.cell2.c + 1)
            );
            if (valid(next.cell2, grid)
                    && valid(new Cell(curr.cell1.r + 1, curr.cell1.c + 1), grid)) {
                return next;
            }
        }
        return null;
    }

    boolean valid(int r, int c, int[][] grid) {
        int n = grid.length;
        return r >= 0 && r < n && c >= 0 && c < n && grid[r][c] == 0;
    }

    boolean valid(Cell cell, int[][] grid) {
        return valid(cell.r, cell.c, grid);
    }

    boolean valid(SnakePos snakePos, int[][] grid) {
        return valid(snakePos.cell1, grid) && valid(snakePos.cell2, grid);
    }

    // For testing and debug on IDE purpose
    public static void main(String[] args) {
        int[][] grid = {
                {0, 0, 0, 0, 0, 1},
                {1, 1, 0, 0, 1, 0},
                {0, 0, 0, 0, 1, 1},
                {0, 0, 1, 0, 1, 0},
                {0, 1, 1, 0, 0, 0},
                {0, 1, 1, 0, 0, 0}
        };

        Solution sol = new Solution();
        System.out.println(sol.minimumMoves(grid));
    }
}

class Cell {
    int r, c;

    public Cell(int r, int c) {
        this.r = r;
        this.c = c;
    }

    public String getKey() {
        return r + "," + c;
    }

    @Override
    public boolean equals(Object obj) {
        Cell cell = (Cell) obj;
        return r == cell.r && c == cell.c;
    }
}

class SnakePos {
    Cell cell1, cell2;

    public SnakePos(Cell cell1, Cell cell2) {
        this.cell1 = cell1;
        this.cell2 = cell2;
    }

    public String getKey() {
        return cell1.getKey() + ":" + cell2.getKey();
    }

    @Override
    public boolean equals(Object obj) {
        SnakePos snakePos = (SnakePos) obj;
        return snakePos.cell1.equals(cell1) && snakePos.cell2.equals(cell2);
    }
}
```
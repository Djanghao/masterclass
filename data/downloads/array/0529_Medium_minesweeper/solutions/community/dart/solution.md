# Dart Minesweeper Solution

**Author:** Alphacostankion
**Votes:** 0
**Link:** [https://leetcode.com/problems/minesweeper/solutions/5386953/](https://leetcode.com/problems/minesweeper/solutions/5386953/)

---

# Code
```
class Solution {
  List<List<String>> updateBoard(List<List<String>> board, List<int> click) {

    final row = board.length;
    final col = board[0].length;

    final [y, x] = click;
    final Point<int> start = Point<int>(x, y);

    /// first step is mine
    if(board[start.y][start.x] == 'M') {
        board[start.y][start.x] = 'X';
        return board;
    }
    

    bool isValid(Point<int> position) {
        if(position.y < 0 || position.y >= row) return false;
        if(position.x < 0 || position.x >= col) return false;
        return true;
    }

    List<Point<int>> getEightNeighbors(Point<int> position) {
        return [
            /// top
            position + Point(0, -1),
            /// topRight
            position + Point(1, -1),
            /// right
            position + Point(1, 0),
            /// bottomRight
            position + Point(1, 1),
            /// bottom
            position + Point(0, 1),
            /// bottomLeft
            position + Point(-1, 1),
            /// left
            position + Point(-1, 0),
            /// topLeft
            position + Point(-1, -1),
        ];
    }

    bool isMine(Point<int> position) {
        if (board[position.y][position.x] case 'M' || 'X') {
            return true;
        }
        else {
            return false;
        }
    }

    int findMine(Point<int> position) {
        return getEightNeighbors(position).where(isValid).where(isMine).length;
    }


    // bfs
    List<Point<int>> queue = [start];

    while(queue.isNotEmpty) {
        List<Point<int>> newQueue = [];
        for(final point in queue) {
            if(!isValid(point)) continue;
            switch(board[point.y][point.x]) {
                case '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8':
                continue;
                case 'B':
                continue;
                case 'E':
                    final mineCount = findMine(point);
                    if(mineCount > 0) {
                        board[point.y][point.x] = '$mineCount';
                    }
                    else {
                        board[point.y][point.x] = 'B';
                        newQueue.addAll(getEightNeighbors(point));
                    }
            }
        }

        queue = newQueue;
    }
    

    return board;
  }
}
```
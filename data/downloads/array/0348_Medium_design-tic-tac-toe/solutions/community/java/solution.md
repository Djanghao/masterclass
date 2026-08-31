# 7/8 lines O(1) Java/Python

**Author:** StefanPochmann
**Votes:** 41
**Link:** [https://leetcode.com/problems/design-tic-tac-toe/solutions/81896/](https://leetcode.com/problems/design-tic-tac-toe/solutions/81896/)

---

**Java**

    public class TicTacToe {
    
        public TicTacToe(int n) {
            count = new int[6*n][3];
        }
        
        public int move(int row, int col, int player) {
            int n = count.length / 6;
            for (int x : new int[]{row, n+col, 2*n+row+col, 5*n+row-col})
                if (++count[x][player] == n)
                    return player;
            return 0;
        }
        
        int[][] count;
    }

**Python**

    class TicTacToe(object):
        def __init__(self, n):
            count = collections.Counter()
            def move(row, col, player):
                for i, x in enumerate((row, col, row+col, row-col)):
                    count[i, x, player] += 1
                    if count[i, x, player] == n:
                        return player
                return 0
            self.move = move
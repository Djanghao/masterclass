# [Java/Python/C++] 0ms, short and simple, all 8 ways to win in one array

**Author:** savvadia
**Votes:** 184
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/441422/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/441422/)

---

There are 8 ways to win for each player:
 - 3 columns
 - 3 rows
 - 2 diagonals
 
Players make moves one by one so all odd moves are for player A, even for B.
Now we just need to track if we reach 3 in any line for any of the players.
One array keeps all ways to win for each player:
  - 0,1,2 - for rows
  - 3,4,5 - for cols
  - 6 - for diagonal top left - bottom right
  - 7 - for diagonal top right - bottom left

Java, 0 ms
```
    public String tictactoe(int[][] moves) {
        int[] A = new int[8], B = new int[8];  // 3 rows, 3 cols, 2 diagonals
        for(int i=0;i<moves.length;i++) {
            int r=moves[i][0], c=moves[i][1];
            int[] player = (i%2==0)?A:B;
            player[r]++;
            player[c+3]++;
            if(r==c) player[6]++;
            if(r==2-c) player[7]++;
        }
        for(int i=0;i<8;i++) {
            if(A[i]==3) return "A";
            if(B[i]==3) return "B";
        }
        return moves.length==9 ? "Draw":"Pending";
    }
```

C++, 0 ms
 ```
    string tictactoe(vector<vector<int>>& moves) {
       vector<int> A(8,0), B(8,0); // 3 rows, 3 cols, 2 diagonals
       for(int i=0; i<moves.size(); i++) {
           int r=moves[i][0], c=moves[i][1];
           vector<int>& player = (i%2==0)?A:B;
           player[r]++;
           player[c+3]++; 
           if(r==c) player[6]++;
           if(r==2-c) player[7]++;
       }
       for(int i=0; i<8; i++) {
           if(A[i]==3) return "A";
           if(B[i]==3) return "B";
       }
       return moves.size()==9 ? "Draw":"Pending";
   }
```

Python, 24 ms, beats 100%
```
    def tictactoe(self, moves: List[List[int]]) -> str:
        A=[0]*8
        B=[0]*8
        for i in range(len(moves)):
            r,c=moves[i]
            player = A if i%2==0 else B
            player[r] += 1
            player[c+3] += 1
            if r==c:
                player[6] += 1
            if r==2-c:
                player[7] += 1
        for i in range(8):
            if A[i]==3:
                return "A"
            if B[i]==3:
                return "B"
        
        return "Draw" if len(moves) == 9 else "Pending"
```
# C++100% 100%

**Author:** MedYoussef
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/545654/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/545654/)

---

```
string tictactoe(vector<vector<int>>& moves) {
        int *rows = new int[3]();
        int *cols = new int[3]();
        int diag = 0;
        int antidiag = 0;
        for(int i=0;i<moves.size();i++){
            int x = moves[i][0];
            int y = moves[i][1];
            if(i%2==0){
                rows[x] +=1;
                cols[y] +=1;
                if(x == y) diag++;
                if(x == 2-y) antidiag++;
            }else{
                rows[x] -=1;
                cols[y] -=1;
                if(x == y) diag--;
                if(x == 2-y) antidiag--;
            }
            
            if(rows[x] == 3 || cols[y]==3 || diag==3 || antidiag==3 ) return "A";
            if(rows[x] == -3 || cols[y]==-3 || diag==-3 || antidiag==-3 ) return "B";
            
        }
        if(moves.size()<9) return "Pending";
        return "Draw";
    }
```
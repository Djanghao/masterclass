# Simple C# Solution

**Author:** nazir_cinu
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/1237638/](https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/1237638/)

---

```
public class Solution 
{
    public bool ValidTicTacToe(string[] board) 
    {
        int xc = 0;
        int oc = 0;
        
        for(int i=0;i<3;i++)
        {
            for(int j=0;j<3;j++)
            {
                if(board[i][j]=='X')
                    xc++;
                else if(board[i][j]=='O')
                    oc++;
            }
        }
        
        if(xc-oc > 1 || oc>xc)
            return false;
        
        if(WinningMove(board,'X') && WinningMove(board,'O'))
            return false;
        
        if(WinningMove(board,'X') && xc==oc)
            return false;
        
        if(WinningMove(board,'O') && xc>oc)
            return false;
        
        return true;
    }
    
    private bool WinningMove(string[] b, char c)
    {
        bool wm1 = b[0][0]==c && b[0][1]==c && b[0][2]==c;
        bool wm2 = b[0][0]==c && b[1][1]==c && b[2][2]==c;
        bool wm3 = b[0][0]==c && b[1][0]==c && b[2][0]==c;
        bool wm4 = b[1][0]==c && b[1][1]==c && b[1][2]==c;
        bool wm5 = b[2][0]==c && b[2][1]==c && b[2][2]==c;
        bool wm6 = b[2][0]==c && b[1][1]==c && b[0][2]==c;
        bool wm7 = b[0][2]==c && b[1][2]==c && b[2][2]==c;
        bool wm8 = b[0][1]==c && b[1][1]==c && b[2][1]==c;
        
        if(wm1 || wm2 || wm3 || wm4 || wm5 || wm6 || wm7 || wm8)
            return true;
        
        return false;
    }
}
```
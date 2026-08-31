# Top down approach using C#

**Author:** samy-timalsina
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-paths-with-max-score/solutions/3892578/](https://leetcode.com/problems/number-of-paths-with-max-score/solutions/3892578/)

---

# Complexity
- Time complexity:
 O(NxM)


# Code
```
public class Solution {
    private int mod = (int)1e9+7;
    private int rl;
    private int cl;

    private Dictionary<(int,int), int[]> cache = new Dictionary<(int,int), int[]>();
    public int[] PathsWithMaxScore(IList<string> board) {
        rl = board.Count;
        cl = board[0].Length;
        int[] ans = f(board,0,0);
        if(ans[1] == 0) return new int[]{0,0};
        return ans;
    }

    //get the maximum sum
    private int[] f(IList<string> b, int r, int c){
        if(r >= rl || c >= cl) return new int[]{0,0};
        if(cache.ContainsKey((r,c))) return cache[(r,c)];
        int temp = 0;
        if(b[r][c] == 'S'){
            return new int[]{0,1};
        }
        int[] p1 = new int[2];
        int[] p2 = new int[2];
        int[] p3 = new int[2];
        if( Char.IsDigit(b[r][c]) || (b[r][c] == 'E')){
            p1 = f(b,r+1,c); 
            p2 = f(b,r,c+1);
            p3 = f(b,r+1,c+1);
        }
        temp = max(p1[0],p2[0],p3[0]);
        int val = 0;
        if(Char.IsDigit(b[r][c])){
            val = b[r][c] - '0';
        }
        int count = 0;
        if(p1[0] == temp){
            count += p1[1];
        }
        if(p2[0] == temp){
             count += p2[1];
        }
        if(p3[0] == temp){
             count += p3[1];
        }
        int[] x = new int[]{temp+val,count%mod};
        cache[(r,c)] =x;
        return x;
    }
    private int max(int a, int b ,int c) => Math.Max(a, Math.Max(b,c));

}
```
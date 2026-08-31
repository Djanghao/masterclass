# Java - 0 ms , faster than 100% , Easy to understand solution

**Author:** anand004
**Votes:** 20
**Link:** [https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/924162/](https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/924162/)

---

The basic idea here is to move to all the 8 possible directions from king and see if any of the spot is occupied by a queen. If occupied then add that position to output and don't move in that direction since all other queens in that direction will be blocked by this queen.




```
class Solution {
    public List<List<Integer>> queensAttacktheKing(int[][] queens, int[] king) {
        boolean[][] q = new boolean[8][8];
		//Mark all the positions of queen on a 8 X 8 board.
        for (int[] queen: queens) {
            q[queen[0]][queen[1]] = true;
        }
        List<List<Integer>> output = new ArrayList<>();
		//Specify all the moves of the queen
        int[][] moves = {{-1,-1}, {0,-1}, {1,-1},{1,0}, {1,1}, {0,1}, {-1,1}, {-1,0}};
        for(int i = 0; i < moves.length; i++){
            int k = king[0] + moves[i][0];
            int l = king[1] + moves[i][1];
            while(k >= 0 && l >=0 && k < 8 && l < 8){
                if(q[k][l]){
                    List<Integer> pair = new ArrayList<>();
                    pair.add(k);
                    pair.add(l);
                    output.add(pair);
                    break;
                }
                k = k + moves[i][0];
                l = l + moves[i][1];
            }
        }
        
        return output;
    }
}

```
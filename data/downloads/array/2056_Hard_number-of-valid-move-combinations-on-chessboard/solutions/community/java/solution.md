# Java Brute Force & Intuitive

**Author:** dc0329
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/solutions/2065684/](https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/solutions/2065684/)

---

The idea is:
- generate all combinations of moves
- when all the pieces are in a combination, then simulate the move given the step of each piece

```
  int directions[][] = new int[][] {
      {0, 0},
      { 0, -1 }, { 0, 1 }, { -1, 0 }, { 1, 0 }, // for rook only
      { 1, 1}, {1, -1}, {-1, 1}, {-1, -1}};     // for queen and bishop
  
  int count;

  public int countCombinations(String[] pieces, int[][] positions)
  {
    dfs(pieces, positions, 0, new HashMap<>());
    
    return count;
  }

  void dfs(String[] pieces, int[][] positions, int p, HashMap<Integer, int[]> board) 
  {
    // for case the piece not moving
    boolean flag = true;  
    
    for (int d=1; d < directions.length; d++)
    {
      if ((d < 5 && pieces[p].equals("bishop")) || (d > 4 && pieces[p].equals("rook")))
          continue;
      
      for (int step = flag ? 0:1; step <= 8; step++, flag=false)
      {        
        int x = positions[p][0] + step * directions[d][0];
        int y = positions[p][1] + step * directions[d][1];
        int start = (positions[p][0] - 1) * 8 + positions[p][1];          
        int dest = 8 * (x - 1) + y;
    
        if (x < 1 || x > 8 || y < 1 || y > 8) 
          break;
        
        if (board.containsKey(dest)) 
          continue;
             
         // dest, step, type, direction, start
        board.put(dest, new int[] {dest, step, p, d, start}); 
          
        if (board.size() == pieces.length)
          count += simulateMove(positions, board);
        else
          dfs(pieces, positions, p + 1, board);
        
        board.remove(dest);
      }
    }
  }
  
  private int simulateMove(int[][] positions, Map<Integer, int[]> board)
  {
    List<int[]> data = new ArrayList<>();
    Set<Integer> position = new HashSet<>();
    for (int piece[]: board.values()) 
    {
      int d[] = new int[] {piece[0], piece[1], piece[2], piece[3], piece[4]};
      data.add(d);
      if (d[1] == 0)
        position.add(d[0]);
    }
    
    for (int i = 1; i <= 8; i++)
    {
      for (int d[]: data) 
      {
        int dir[] = directions[d[3]];
        int x = positions[d[2]][0] + i * dir[0];
        int y = positions[d[2]][1] + i * dir[1];
        int move = 8 * (x - 1) + y;
      
        if (d[1] > 0 && x >= 1 && x <= 8 && y >= 1 && y <= 8) {
          if (position.contains(move)) 
            return 0;

          position.add(move);
          d[1]--;
          d[4] = move;
        }
      }
      
	  // clear the moves that are not done yet
      for (int d[]: data) 
      {
        if (d[1] > 0)
          position.remove(d[4]);
      }
    }
    return 1;
  }  
```
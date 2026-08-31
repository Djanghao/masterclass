# Java Very Easy Solution

**Author:** its_ayuu
**Votes:** 3
**Link:** [https://leetcode.com/problems/strange-printer-ii/solutions/3167855/](https://leetcode.com/problems/strange-printer-ii/solutions/3167855/)

---

*Comment if you have any doubt and upvote if you like the solution if I get **100** UpVote i will upload solution explantion on youtube as well*

# Code
```
class Solution {
    private boolean isRectangle(int[][] grid , int n , int r1 , int c1,int r2, int c2, Set<Integer> rect){
        for(; r1 <= r2; r1++){
            for(int i = c1; i <= c2; i++){
                if(grid[r1][i] == n || rect.contains(grid[r1][i])){
                    continue;
                }else{
                    return false;
                }
            }
        }
        return true;
    }
    public boolean isPrintable(int[][] grid) {
        Map<Integer, int[]> colors = new HashMap<>();
        Set<Integer> rect = new HashSet<>();
        for(int i = 0; i < grid.length; i++){
            for(int j = 0; j < grid[0].length; j++){
                if(colors.containsKey(grid[i][j])){
                    int[] arr = colors.get(grid[i][j]);
                    arr[0] = Math.min(arr[0], i);
                    arr[1] = Math.min(arr[1], j);
                    arr[2] = Math.max(arr[2], i);
                    arr[3] = Math.max(arr[3], j);
                }else{
                    colors.put(grid[i][j], new int[]{i, j, i, j});
                }
            }
        }
        for(int color : colors.keySet()){
            int[] arr = colors.get(color);
            if(isRectangle(grid, color, arr[0], arr[1], arr[2], arr[3], rect)){
                rect.add(color);
            }
        }
        for(int i = 0; i < colors.size(); i++){
        for(int color : colors.keySet()){
            if(rect.contains(color))
            continue;
            int[] arr = colors.get(color);
            if(isRectangle(grid, color, arr[0], arr[1], arr[2], arr[3], rect)){
                rect.add(color);
            }
         }
        }
        return rect.size()==colors.size();
    }
}
```
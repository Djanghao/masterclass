# C# | Tuple

**Author:** c_4less
**Votes:** 1
**Link:** [https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/3002878/](https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/3002878/)

---


# Code
```
public class Solution {
    public IList<IList<int>> QueensAttacktheKing(int[][] queens, int[] king) {
        IList<IList<int>> result = new List<IList<int>>();
        HashSet<(int,int)> queensPosition = new();

        foreach(int[] queen in queens)
            queensPosition.Add((queen[0], queen[1]));

        List<int[]> directions = new()  {    new int[]{-1,0}, new int[]{0,1 }, new int[]{1,0 },  new int[]{0,-1 },
                                            new int[]{-1,1}, new int[]{1,1 }, new int[]{-1,-1 },  new int[]{1,-1 } 
                                        }; 

        foreach(var direction in directions)
        {
            int newX = king[0] + direction[0];
            int newY = king[1] + direction[1];

            while(newX >= 0 && newY >= 0 && newX < 8 && newY < 8)
            {
                if(queensPosition.Contains((newX,newY)))
                {
                    result.Add(new List<int>(){ newX, newY});
                    break;
                }
                newX += direction[0];
                newY += direction[1];
            }

        }
        return result;
    }
}
```
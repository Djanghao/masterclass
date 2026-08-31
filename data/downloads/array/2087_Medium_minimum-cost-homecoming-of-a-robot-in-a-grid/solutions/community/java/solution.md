# Java | Simple Straight Solution | O(1) Space

**Author:** Chaitanya1706
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1598879/](https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1598879/)

---

**Intution:** Catch here is that you have been given four direction to travel but u have to travel in only two direction and that is in the direction of home because if u go in opposite direction then u have to surely come back again on that cell to reach home and that will make u add the cost of that cell twice and hence increasing the cost.
```
class Solution {
    public int minCost(int[] startPos, int[] homePos, int[] rowCosts, int[] colCosts) {
        int total = 0;
        
        // if home is to the down of start move, down till there
        if(homePos[0]>startPos[0]){
            int i = startPos[0]+1;
            while(i<=homePos[0]){
                total += rowCosts[i]; // adding cost while moving corresponding to the cell
                i++;
            }
        }
        
        // else if home is up from the start, move up till there
        else if(homePos[0]<startPos[0]){
            int i = startPos[0]-1;
            while(i>=homePos[0]){
                total += rowCosts[i]; // adding cost while moving corresponding to the cell
                i--;
            }
        }
        
        // if home is right to the start, move right till there
        if(homePos[1]>startPos[1]){
            int i = startPos[1]+1;
            while(i<=homePos[1]){
                total += colCosts[i];  // adding cost while moving corresponding to the cell
                i++;
            }
        }
        
        // else if home is left to the start, move left till there
        else if(homePos[1]<startPos[1]){
            int i = startPos[1]-1;
            while(i>=homePos[1]){
                total += colCosts[i];  // adding cost while moving corresponding to the cell
                i--;
            }
        }
        
        return total;
    }
}


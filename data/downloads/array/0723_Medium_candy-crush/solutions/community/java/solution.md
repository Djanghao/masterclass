# ✅ Very Easy to understand Java Solution | Check, Mark, Crush, and then apply gravity

**Author:** malachi1
**Votes:** 5
**Link:** [https://leetcode.com/problems/candy-crush/solutions/2300879/](https://leetcode.com/problems/candy-crush/solutions/2300879/)

---

Hi,
I think I came up with a pretty easy to understand solution, please let me know what you think.

Essentially, I broke this down into two parts and tried to clearly defined that in the code.
1. Handling the Crush.
2.  Handling the gravity. 
3.  Then repeating until nothing else can be crushed and thur gravity is no longer needed.

Handling the Crush.
* [-LOOP-] I simply iterate through every single block and look 2 to the right and 2 down and check all the cells have the same candy. 
* [-IF-] If they have the same candy, I change the number value to its negative and I can request/call for Gravity by setting the boolean need gravity to truth.
	* This way it is clearly different from all the other values however I can still deduce the original candy value.
* This means that when iterating, i am comparing against the absolute values. 

Handling the gravity. 
* The Loop will go until gravity is not needed, meaning nothing was crushed.
* [-LOOP-] For each column, do the two pointer (sliding window) method. 
	* One pointer, the lead pointer, will move up the column starting from the bottom.
	* The second pointer will only move if the value it is on is positive. To start, the lead pointer and the second pointer are on the same cells. 
	* [-IF-] Second pointer is negative then Second pointer will stay at the same position until lead pointer gets to a positive value, then overwrite Second pointer\u2019s negative values with the nearest positive value in the column (lead pointer\u2019s value) . 
	* When the lead pointer gets to the top of the broad, all the cells between it and the second pointer are set to 0. 



```
class Solution {
    public boolean crushCheck(int[][] board,int y, int x, int xMax, int yMax, boolean needGravity){
        
        //if the value is not Zero ("air") then check it
        int val = Math.abs(board[y][x]);
        if (!(val == 0)){
        
            //Look at 2 right
            if ((x + 2) <= (xMax-1)){ // Make sure there are 2 to the right to check

                //Check if the right 2 are the all equal to the curr box
                if((Math.abs(board[y][x+1]) == val) && (Math.abs(board[y][x+2]) == val)){
                    
                    //if so the set to negtive of val, set to b crunched 
                    board[y][x] = val*-1;
                    board[y][x+1] = val*-1;
                    board[y][x+2] = val*-1;
                    needGravity = true;
                }  
            }
        
            //Look at 2 down
            if ((y + 2) <= (yMax-1)){ // Make sure there are 2 below to check
            
                //Check if the right 2 are the all equal to the curr box
                if((Math.abs(board[y+1][x]) == val) && (Math.abs(board[y+2][x]) == val)){
                    
                    //if so the set to negtive of val, set to b crunched 
                    board[y][x] = val*-1;;
                    board[y+1][x] = val*-1;
                    board[y+2][x] = val*-1;
                    needGravity = true;
                }
            }   
        }
        return needGravity;
    }
    
    public void doGravity(int[][] board, int xMax, int yMax){
        int edit;
        //Doing a 2 pointer pull for each row
        for (int x = 0; x < xMax; x++) { 
            
            edit = (yMax - 1); // 
            
            for (int y = (yMax - 1); y >= 0; y--) {
                // if not marked for removal
                if (board[y][x] > 0){
                    board[edit][x] = board[y][x];
                    edit--;
                }
                //System.out.println(board[edit][x]);
            }
            
            for (int e = edit; e >= 0; e--){
                board[e][x] = 0;
            }
            
        }
    }
    
    public int[][] candyCrush(int[][] board) {
        int xMax = board[0].length;
        int yMax = board.length;
        boolean needGravity = true;
        
        while(needGravity){
            needGravity = false;
        
            for (int y = 0; y < yMax; y++) {
                for (int x = 0; x < xMax; x++) {
                    //Mark candy for removal   
                    needGravity = crushCheck(board,y,x,xMax,yMax,needGravity);
                }       
            }
            
            if(needGravity){//pull down remaining numbers
                doGravity(board,xMax,yMax);
            }
          
        }
       
        return board;
    }
}
```


![image](./images/0.png)

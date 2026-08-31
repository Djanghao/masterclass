# Java | Python | Concise Code |

**Author:** prashul
**Votes:** 12
**Link:** [https://leetcode.com/problems/stone-game/solutions/1385866/](https://leetcode.com/problems/stone-game/solutions/1385866/)

---

Whenever question is about two player and both plays optimally then the key to solving the problem is **making a  optimal choice in the recursion and subtract the next recursive value**

Explaination ->

Alex plays a optimal move  ( recursion 1 ) 
then
Bob plays a optimal move ( recursion 2)
then 
Alex plays a optimal move ( recursion 3 )
	
From this we can derive we have to add the odd recursion stack values and subtract the even ones, thats why in the code we are subtracking the next recursion value

recursion1 
	Alex optimal choice - recursion2
recursion2
	Bob optimal choice - recursion3 

subsituting the value of recursion2 in recursion1 we get
recursion1 
	Alex optimal choice - (Bob optimal choice - recursion3 ) =Alex optimal choice- (Bob optimal choice)+recursion3

Python
```
class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        @cache # annotation which caches the repeated recursive calls.No need to store in dp arrays
        def recursion( start=0,end=len(piles)-1):
            if start >= end:
                return 0
				
            choice1 = piles[start] - recursion( start+1,end)
            choice2 = piles[end] - recursion(start,end-1)
      
            return max( choice1, choice2 )
        
        result = recursion()
        return result > 0
```


Java
```
class Solution {
    Integer[][] dp = new Integer[501][501];
    public boolean stoneGame(int[] piles) {
        return recursion( 0,piles.length-1,piles) > 0;
    }
    
    public int recursion( int start, int end, int[] piles )
    {
        if( start > end )
            return 0;
        if( dp[start][end] != null )
            return dp[start][end];
			
        int option1 = piles[start]-recursion( start+1,end,piles);
        int option2 = piles[end]-recursion(start,end-1,piles);
        
        return dp[start][end] = Math.max(option1,option2);
    }
}
```

Space Complexity is O(n2)
Time Complexity is O(n2) since in the recursion call we have two parameters and order will be n2

If you find it useful, **Please upvote**

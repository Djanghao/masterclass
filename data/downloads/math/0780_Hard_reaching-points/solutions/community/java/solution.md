# EXPLANATION | For math dummies like me

**Author:** heisenbergknocks
**Votes:** 153
**Link:** [https://leetcode.com/problems/reaching-points/solutions/816596/](https://leetcode.com/problems/reaching-points/solutions/816596/)

---

***Core Idea:  Keep subtracting the smaller of (tx, ty) from the larger of (tx, ty) and stop if tx becomes less than sx or ty becomes less than sy and then if tx == sx and ty == sy return true.***

**Explanation of Optimized Implementation:-**
  1. Keep subtracting the smaller of (tx, ty) from the larger of (tx, ty) and stop if tx becomes less than sx or ty becomes less than sy.
  2. But before performing subtraction, check if it is a case of one target coordinate (either of X or Y, not talking about both coordinates i.e the entire point) becoming same as corresponding source coordinate, because if that target coordinate becomes same as its corresponding source cordinate, only the other coordinate needs to change afterwards. 
For eg. if at any iteration you have your tx and ty as tx = 9 and ty = 3 and your starting coordinates were x = 6 and y = 3, then only tx or simply X coordinate needs to change as Y coordinate has become fixed/same ie 3.
Here, tx can be written as tx = x + n * y (i.e. 6 + 1 * 3) 
=> tx - x = n * y
=> taking mod by y or ty(both same)
=> (tx - x) % y = (n * y) % y
=> (tx - x) % y == 0 as (n * y) % y  would be 0. 
So with just one condition i.e (tx - x) % y == 0 we can check if tx would reduce down to x or not. 
Same property can be use when X coordinate gets same and Y still needs to be changed.
		
3. Now, the solution with subtraction is good, but for very large input coordinates (upto 10^9) this is going to give TLE. So, we need to optimize the subtraction part.
How? Instead of doing tx = tx - ty OR ty = ty - tx we can do tx = tx % ty OR ty = ty % tx. Using % does the same thing but reduces multiple operations to a single one.
Eg. if ty = 100 and tx = 9 then you'd have, ty = ty - tx executing 11 times to reach ty = 1 and tx = 9 (ty goes 91, 82, 73, 64, 55, 46, 37, 28, 19, 10, 1) by doing 100 % 9 we're getting to ty = 1 in just one operation.( % is just getting the remainder of division, which is nothing but doing subtraction certain number of times.)

Dealing with some FAQs:-
Why not start from sx and sy and go upto tx and ty.
		- Ans: Try it out, only to reach TLE since there are multiple paths to try if you start from sx and sy and only one if you go from tx and ty to sx and sy.
Why % instead of subtraction
		- Ans: Answered in point 3.
 
**Please upvote if it could help.**

```
class Solution {
    public boolean reachingPoints(int sx, int sy, int tx, int ty) {
		 while(tx >= sx && ty >= sy){
            if(tx > ty) {
                if(sy == ty) return (tx - sx) % ty == 0;
                tx %= ty;
            }
            else {
                if(sx == tx) return (ty - sy) % tx == 0;
                ty %= tx;
            }
        }
        return false;
    }
}
```
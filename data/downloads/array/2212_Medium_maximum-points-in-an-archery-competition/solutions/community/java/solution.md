# JAVA simple Readable Backtracking solution.  With Description.

**Author:** shaishavjogani
**Votes:** 45
**Link:** [https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/1865823/](https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/1865823/)

---

Your goal is to get the maximum points.
So, at each point, you have 2 choices
1. Fire more arrow than Alice. 1 arrow more than Alice's arrows is enough.  OR
2. Don't use any arrow on this point so, we can later utilize it for better points.

**While this problem can have multiple solutions, the maximum points Bob can get is always unique.**

e.g. 
You have 2 arrows.
Alice fired 1 arrow on point 1 and 1 arrow on point 11.  Total point: 12.
Now, you can fire 2 arrows on point 11 to gain 11 points and win the game because it will make Alice's point to 1 and Bob's point to 11. But **remember Your goal is not to reduce Alice's point but to maximize your points.**

So, instead of using your 2 arrows on point 11, you should have used it for point 10 and 9, total points = 19.

**Solution:**
Let's start with the max point = 11, and apply the above two conditions. Move to the next point with the remaining arrow and use the same process untill either you reached to the end or you don't have any more arrows left.  If you have reached to the end and still have arrows left, they are useless because you couldn't gain more points. You can add those arrows to any point. I'm adding them to 0 point.


	   class Solution {
			int bobPoint = 0;
			int[] maxbob = new int[12];
			public int[] maximumBobPoints(int numArrows, int[] aliceArrows) {
				int[] bob = new int[12];
				calculate(aliceArrows, bob, 11, numArrows, 0);  //Start with max point that is 11
				return maxbob;
			}
			public void calculate(int[] alice, int[] bob, int index, int remainArr, int point) {
				if(index < 0 || remainArr <= 0) {
					if(remainArr > 0)
						bob[0] += remainArr;
					if(point > bobPoint) { // Update the max points and result output
						bobPoint = point;
						maxbob = bob.clone();
					}
					return;
				}
				//part 1: assign 1 more arrow than alice
				if(remainArr >= alice[index]+1) {
					bob[index] = alice[index] + 1;
					calculate(alice, bob, index-1, remainArr-(alice[index]+1), point + index);
					bob[index] = 0;
				}
				//part 2: assign no arrow and move to next point
				calculate(alice, bob, index-1, remainArr, point);
				bob[index] = 0;
			}
		}


Since we have 12 states and at each state we make 2 decisions. So, total Time complexity will be **O(2^12)**.
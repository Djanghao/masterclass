# Solution in Python 3 (beats ~99%) (With Detailed Explanation) ( O(n) time ) ( O(1) space )

**Author:** junaidmansuri
**Votes:** 24
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/352417/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/352417/)

---

_Explanation:_

We are asked to determine if the array can be partioned into three _adjacent_ regions each of which have the same sum. Since we must use all of the elements in the array the sum of each of the three regions must be sum(A)//3. If sum(A) is not divisible by 3, one can immediately return False because a number which is not a multiple of 3 cannot be divided evenly into three equal numbers. The program starts by setting _g_ equal to the sum that each region must be. The variable _C_ is initialized to zero and will hold the cumulative sum as we iterate from left to right. The variable _p_ is initialized to zero and is the count of the number of successful partition points we have found thus far. Since the iteration is yet to begin, we have not yet found any partition points so _p_ is equal to zero. The goal of the program is to successfully find two partition points or partition indices such that the sum of the values within each region is equal. Note that the second partition point cannot be at the last index of A because then there would be no room for the third partition.

The for loop iterates through each element of A from left to right, adding the element to the the cumulative sum _C_. If the variable _C_ eventually equals _g_ then that means that we've found a continuous group of numbers starting from the beginning of the list that add up to our goal sum for each of the three regions. So if _C_ == _g_, we can set _p_ equal to one because we have now found the first partition point. We reset the cumulative sum _C_ to zero to being accumulating the numbers in the second region. Note that if _C_ never reaches the goal sum _g_ then there can be no first partition and the for loop will eventually finish and the program will return False.

Now that _p_ equals one and _C_ has been reset to zero we continue on with the loop, adding the elements to _C_ one by one. Note that we are now currently in the middle (or the second) of the three partitions that we hope to find. Once again as _C_ increases (or decreases if the numbers are negative) we check to see if _C_ has reached our goal sum of _g_ yet. Again, if  _C_ never reaches the goal sum _g_ then there can be no second partition and the for loop will eventually finish and the program will return False. If we do successfully reach the goal sum _g_ (i.e. _C_ == _g_) for the second time, we have successfully found the second partition point.

Note that the for loop does not continue onto the last index of A. This is because if the second partition point is not found by the time the last index is reached, there cannot be three partitions. Thus, if two partition points can be found before the last index of A is reached, the program can end and return True. The reason that we don't have to search any further or add any more numbers is because if the first two regions each have a sum of _g_ then the third region must also add to _g_ since _g_ was defined to be one third of the total sum of array A.

I've also included a one line version just for fun!


```
```
_Detailed Version (with explanation above):_
```
class Solution:
    def canThreePartsEqualSum(self, A: List[int]) -> bool:
    	S = sum(A)
    	if S % 3 != 0: return False
    	g, C, p = S//3, 0, 0
    	for a in A[:-1]:
    		C += a
    		if C == g:
    			if p == 1: return True
    			C, p = 0, 1
    	return False

```				
_One-Line Version:_ (beats ~100%)
```
class Solution:
    def canThreePartsEqualSum(self, A: List[int]) -> bool:
    	return (lambda x,y: x in y and 2*x in y and 3*x in y)(sum(A)//3,itertools.accumulate(A))
				
				
				
Junaid Mansuri
Chicago, IL
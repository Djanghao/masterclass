# Very Simple Java Solution with detail explanation

**Author:** keshavk
**Votes:** 118
**Link:** [https://leetcode.com/problems/wiggle-subsequence/solutions/84849/](https://leetcode.com/problems/wiggle-subsequence/solutions/84849/)

---

In Wiggle Subsequence, think that the solution we need should be in a way that we get alternative higher, lower,higher number.
Eg: 2, 5, 3, 8, 6, 9 
In above example, the sequence of numbers is small,big,small,big,small,big numbers (In shape of hill).

Now for explanation, we take example series:
2,1,4,5,6,3,3,4,8,4

First we check  if the series is starting as (big, small) or (small, big). So as 2,1 is big, small. So we will start the loop as we need small number first that is 1 as 2 is already there.
```
Step 1: First we check our requirement is to get small number. As 1<2 so the series will be
 2,1
```
```
Step 2: Now we need big number that is  greater than 1. As 4>1 so series  will be
2,1,4
```
```
Step 3: Now we need small number. But 5>4 so 4 will be replaced by 5. So the series will become
2,1,5
```
```
Step 4:  We need small number. But 6>5. Series will be
2,1,6
```
```
Step 5: Require small number. 3<6. Series will be
2,1,6,3
```
```
Step 6: Require big number. 3=3. No change in series
2,1,6,3
```
```
Step 7: Require big number. 4>3. Series will become
2,1,6,3,4
```
```
Step 8:  Require small number. 8>4. 8 will  replace 4 and series will become
2,1,6,3,8
```
```
Step 9: Require small number. 4<8. So final series will  be
2,1,6,3,8,4
```
Answer is 6.

In the code, for constant space O(1) we will  modify the same 'num' array to store the (small, big, small) hill shape values. So the code will not only calculate the length of the sequence but if the interviewers asks for the Wiggle series also then we can return the series too. The leetcode Online Judge skipped a test case if the series starts with same set of numbers. Thanks to @ztq63830398, modified the  code to consider that test case also.    

Code:
```
    public class Solution {
	public int wiggleMaxLength(int[] nums) {
		if (nums.length == 0 || nums.length == 1) {
			return nums.length;
		}
		int k = 0;
		while (k < nums.length - 1 && nums[k] == nums[k + 1]) {  //Skips all the same numbers from series beginning eg 5, 5, 5, 1
			k++;
		}
		if (k == nums.length - 1) {
			return 1;
		}
		int result = 2;     // This will track the result of result array
		boolean smallReq = nums[k] < nums[k + 1];       //To check series starting pattern
		for (int i = k + 1; i < nums.length - 1; i++) {
			if (smallReq && nums[i + 1] < nums[i]) {
				nums[result] = nums[i + 1];
				result++;
				smallReq = !smallReq;    //Toggle the requirement from small to big number
			} else {
				if (!smallReq && nums[i + 1] > nums[i]) {
					nums[result] = nums[i + 1];
					result++;
					smallReq = !smallReq;    //Toggle the requirement from big to small number
				}
			}
		}
		return result;
	}
}
```
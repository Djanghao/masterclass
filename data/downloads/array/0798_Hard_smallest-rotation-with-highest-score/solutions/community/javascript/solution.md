# Javascript solution O(n) Time and O(n) Space with explain

**Author:** lingling374
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/2288020/](https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/2288020/)

---

we transform the origin nums [2, 3, 1, 4, 0] to  `nums[i] - i`,
it will be:  [2, 2, -1, 1, -4], and that is k = 0; the points is the count of nums[i] <= 0; which is 2.
then we start rotate: 
put new number `nums[0] - nums.length` to the end of array, remove nums[0]. and count the valid numbers `nums[i] <= -k`.
for k = **1**: new number is `2 - 5 = -3`, new array is [2, -1, 1, -4, *-3*], the points is the count of nums[i] <= **-1**; which is 3;
for k = **2**: new number is `2 - 5 = -3`, new array is [-1, 1, -4, -3, *-3*], the points is the count of nums[i] <= **-2**; which is  3;
for k = **3**: new number is `-1 - 5 = -6`, new array is [1, -4, -3, -3, *-6*], the points is the count of nums[i] <= **-3**; which is  4;
for k = **4**: new number is `1 - 5 = -4`, new array is [-4, -3, -3, -6, *-4*], the points is the count of nums[i] <= **-4**; which is 3; 
the max points is 4 and k = 3 is the answer.

when we do the counting, it should be nums.length minus all the invalid numbers.
but we can use the points from previous array,
compare to the previous array, only 2 things changed, 1 new number, and the condition to get point decreased by 1.
so compare to previous array only one number is going to be invalid, we just need to minus the count of this target number from lastPoints.
and if the new number is valid we add 1 to currentPoints
 
so, when k = 0, the transform the nums array, and count the points, which is 2.
when k = 1, there are 0 of 0 in the previous array, and the new number -3 is below 0. the points is 2 - 0 + 1 = 3;
when k = 2, there are 1 of -1 in the previous array, and the new number -3 is below -1. the points is 3 - 1 + 1 = 3; 
when k = 3, there are 0 of -2 in the previous array, and the new number -6 is below -2. the points is 3 - 0 + 1 = 4; 
when k = 4, there are 2 of -3 in the previous array, and the new number -4 is below -3. the points is 4 - 2 + 1 = 3; 


```
function bestRotation(nums: number[]): number {
  const numMap = new Map();

  let currentPoints = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i] - i;
    if (num <= 0) {
      currentPoints++;
      numMap.set(num, (numMap.get(num) || 0) + 1);
    }
    nums[i] = num;
  }

  let k = 0;
  let lastPoints = currentPoints;
  let max = currentPoints;
 
  // r = 0 means rotate until index r(includes), k = r + 1;
  for (let r = 0; r < nums.length; r++) {
    const num = nums[r] - nums.length;
	// reset currentPoints by lastPoints minus the count of target number
    currentPoints = lastPoints - (numMap.get(-r) || 0);
	
	// num <= -k, means num <= -(r + 1), same as num < -r
    if (num < -r) { 
	  // if new number is valid increase currentPoints and add it to numMap 
      currentPoints++;
      numMap.set(num, (numMap.get(num) || 0) + 1);
    }

    if (currentPoints > max) {
      k = r + 1;
      max = currentPoints;
    }
    lastPoints = currentPoints;
  }

  return k;
}

```
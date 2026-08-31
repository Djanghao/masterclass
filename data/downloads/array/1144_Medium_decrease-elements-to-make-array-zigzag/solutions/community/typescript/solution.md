# Typescript || Easy to understand || 100% Faster solution

**Author:** proNOOB577
**Votes:** 0
**Link:** [https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/2067838/](https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/2067838/)

---

Approach =>

1. Calculate moves when odd index is lesser than neighbours.
2. Calculate moves when odd index is greater than neighbours.
3. Return the min value of step 1 && 2

**Step 1 : We need to make the element lesser than left and right indices**
* Compare left and right index (if odd index is the last index then check only left side).
* If any left or right index is less than element then we need to move and decrease the element by min(leftIndexValue,rightIndexValue) + 1(One move lesser than the current value).

**Step 2 : We need to make the element greater than left and right indices**
* Compare left and right index (if odd index is the last index then check only left side). In this case , we need to change the left and right values, as we can not increase the current element.

* If both leftIndexValue and rightIndexValue is greater
	=> then we need to decrease both left and right, decreasing it to current element value - 1, and update the rightIndexValue for next odd index comparison.

* If leftValueIndex is greater
	=> then we need to decrease left , decreasing it to current element value - 1, 

* If rightIndexValue is greater
	=> then we need to decrease right, decreasing it to current element value - 1, and update the rightIndexValue for next odd comparison.



	
	


```
function movesToMakeZigzag(nums: number[]): number {
//return the min of both the calculations
   return Math.min(calculateOddLess(nums),calculateOddGreater(nums)); 
};

//function to check every odd position is less than from the neighbours
function calculateOddLess(nums: number[]):number{
    let count = 0;
    for(let i = 1; i < nums.length; i = i + 2){
		//if not last element then we can compare left and right otherwise compare left element
        if(i != nums.length - 1){
            if(nums[i] >= nums[i-1] || nums[i] >= nums[i+1]){
                count += nums[i] - Math.min(nums[i-1],nums[i+1]) + 1;
            }
        }
        else{
            if(nums[i] >= nums[i-1]){
                count += nums[i] - nums[i-1] + 1;
            }
        }
        
    }
    return count;
}

//function to check every odd position is greater than from the neighbours

function calculateOddGreater(nums: number[]):number{
    let count = 0;
    for(let i = 1; i < nums.length; i = i+2){
        //if not last element then we can compare left and right element otherwise compare left element
        if(i != nums.length - 1){
			//if element is less than from left and right, then decrease left and right both and update the rightmost element for next comparison
            if(nums[i] <= nums[i-1] && nums[i] <= nums[i+1]){
                    count += nums[i-1] + nums[i+1] - (2 * nums[i]) + 2;
                    nums[i+1] = nums[i] -  1;

            }
            else if(nums[i] <= nums[i-1] && nums[i] >= nums[i+1]){
			//if element is less than from left  then decrease left
                    count +=  nums[i-1] - nums[i] + 1;
            }
            else if(nums[i] >= nums[i-1] && nums[i] <= nums[i+1]){
			//if element is less than from  right, then decrease right and update the rightmost element for next compare
                    count +=  nums[i+1] - nums[i] + 1;
                    nums[i+1] = nums[i] - 1;

            }
        }
        else{
            if(nums[i] <= nums[i-1]){
                    count +=  nums[i-1] - nums[i] + 1;

            }
        }

    }

    return count;
}
```
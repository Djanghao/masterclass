# [Javascript] Easy understanding with detailed explanation singlePass

**Author:** tvs
**Votes:** 2
**Link:** [https://leetcode.com/problems/wiggle-sort/solutions/746538/](https://leetcode.com/problems/wiggle-sort/solutions/746538/)

---

```
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
	// if num array is of length 0 or of length 2 
    if(!nums.length || nums.length < 2) {
        return nums;
    }
    
	// the idea of having a less than instead of <= in the for loop is because , we will encounter cases like "nums[i] > nums[i+1]", this condition will fail and give inconsistent results, Hence we make sure, we follow a strict less than.
	
	// the idea basically is to sort your array in a wave format. (Crest should have the higher value and trough should have the lower value. crests are the even indices and troughs are the odd ones. All we need to make sure, is we will make a swap if the value of trough is greater than the value of crest.
	
    for(let i = 0; i < nums.length-1; i++) {
        // when it is a crest, 
        if(
            i%2 === 0 &&
            nums[i] > nums[i+1] 
        ) {
            [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
            
        }
        // when it is a trough..
        else if (
            i%2 === 1 &&
            nums[i] < nums[i+1]
        ) {
            [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
        }
    }
    
    return nums;
};
```

TimeComplexity: Single pass: o(n)
Space Complexity: o(1)
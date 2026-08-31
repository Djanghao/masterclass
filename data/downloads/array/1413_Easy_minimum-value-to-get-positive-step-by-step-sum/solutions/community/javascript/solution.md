# Javascript- tracking min sum O(n) solution

**Author:** Seriously_Ridhi
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/585927/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/585927/)

---

```
var minStartValue = function(nums) {
    var min = 1;
    var sum = 0;
	
    for(var i=0;i<nums.length;i++){
        sum = sum+nums[i];
        min = Math.min(min,sum);
    }
    if(min == 1){
        return min;
    }
	// add 1 to negative of min value obtained to keep the sum always positive
    return (-1*min)+1;
};
```
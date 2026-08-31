# Easy solution Javascript and Go

**Author:** Azizjon003
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/3436646/](https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/3436646/)

---

# Code

```Go []
func triangularSum(nums []int) int {


     start := 0
     end := len(nums) - 1;
     var i int
        for start < end {
            for  i = start; i < end; i++ {
                nums[i] = (nums[i] + nums[i + 1]) % 10;
            }
            end--;
        }
        return nums[0]; 
 
}
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    let start = 0, end = nums.length - 1;
        while (start < end) {
            for (let i = start; i < end; i++) {
                nums[i] = (nums[i] + nums[i + 1]) % 10;
            }
            end--;
        }
        return nums[0]; 
};
```



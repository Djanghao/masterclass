# Efficiently Concatenating and Summing Integers in JavaScript with two Approaches

**Author:** astiksarathe
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-array-concatenation-value/solutions/3224141/](https://leetcode.com/problems/find-the-array-concatenation-value/solutions/3224141/)

---


# Algorithm 1: Using String Conversion
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let ans = 0;
    let left = 0, right = nums.length-1;
    while(left <= right){
        if(left !== right){
            let n = countDigits(nums[left]);
            let m = countDigits(nums[right]);
            ans += nums[left] * Math.pow(10, m) + nums[right];
        }else{
            ans += nums[left];
        }
        left++, right--;
    }

    return ans;
};

function countDigits(num) {
    let count = 0;
    while (num !== 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

```
# Algorithm 2: Using Math
```
var findTheArrayConcVal = function(nums) {
    let ans = 0;
    let left = 0, right = nums.length-1;
    while(left <= right){
        if(left !== right){
            let strNum = nums[left].toString() + nums[right].toString()
            let num = parseInt(strNum)
            ans += num;
        }else{
            ans +=nums[left];
        }
        left++, right--;
    }

    return ans;
};
```
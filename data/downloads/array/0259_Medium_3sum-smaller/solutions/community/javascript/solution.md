# JavaScript with Explanation

**Author:** bramphft
**Votes:** 5
**Link:** [https://leetcode.com/problems/3sum-smaller/solutions/533319/](https://leetcode.com/problems/3sum-smaller/solutions/533319/)

---

The key to understanding this one is the purpose of the `result += right - left` line. Essentially, because the array is sorted, once we find a combination that is less than our target, ALL numbers between left and right ARE ALSO combinations less than our target. Instead of iterating through them just subtract `left` from `right` to get the correct count. 

```
var threeSumSmaller = function(arr, target) {
    let result = 0;
    let length = arr.length;
    arr = arr.sort((a, b) => a - b);
    for(let i = 0; i < length; i++){
        let left = i + 1;
        let right = length - 1;
        while(left < right){
          let currentSum = arr[i] + arr[left] + arr[right];
          if(currentSum < target){
            result += (right - left);
            console.log('result', result)
            left++
          } else {
            right--;
          }
        }
      }
    return result;
};
```
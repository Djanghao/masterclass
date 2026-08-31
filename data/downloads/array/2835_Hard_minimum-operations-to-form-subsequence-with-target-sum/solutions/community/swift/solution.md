# Easy understand beats 100%

**Author:** ms0686714
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/solutions/3969957/](https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/solutions/3969957/)

---

# Code
```
class Solution {
    func minOperations(_ nums: [Int], _ target: Int) -> Int {
        var sum: Int = 0;
        var size = nums.count;
        for i in 0 ..< size{
            sum += nums[i];
        }
        if(sum < target){
            return -1;
        }
        if(sum == target){
            return 0;
        } 
        var Target = target;
        var Nums: [Int] = nums.sorted(); //sorted from small to big
        var cnt: Int = 0; //Used to record the times of operation.
        while(Target > 0){
            var last: Int = Nums.removeLast()
            if(sum - last >= Target){ //It means we dont need this number cause it is too big.
                sum -= last;
            }
            else if(last <= Target){  //We need this number, and we can use it directly.
                Target -= last;
                sum -= last;
            }
            else{                     //We need this nummer, but we need to split into two numbers.
                Nums.append(last >> 1);
                Nums.append(last >> 1);
                cnt += 1;
            }
        }
        return cnt;
    }   
}
```
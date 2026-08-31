# Go/Python/JavaScript/Java O(n) time | O(n) space

**Author:** vtalantsev
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4518930/](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4518930/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func missingInteger(nums []int) int {
    num_set := make(map[int]bool)
    for _,item := range(nums){
        num_set[item] = true
    }
    summ := nums[0]
    idx := 1
    for idx<len(nums) && nums[idx] == nums[idx-1]+1{
        summ+=nums[idx]
        idx++
    }
    for true{
        if _,ok := num_set[summ]; !ok{
            break
        }
        summ++
    }
    
    return summ
}
```
```python []
class Solution:
    def missingInteger(self, nums: List[int]) -> int:
        num_set = set(nums)
        summ = nums[0]
        idx = 1
        while idx<len(nums) and nums[idx] == nums[idx-1]+1:
            summ+=nums[idx]
            idx+=1
        while summ in num_set:
            summ+=1
        
        return summ
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let num_set = new Set()
    for (let item of nums){
        num_set.add(item)
    }
    let summ = nums[0]
    let idx = 1
    while (idx<nums.length && nums[idx] == nums[idx-1]+1){
        summ+=nums[idx]
        idx++
    }
    while (num_set.has(summ)){
        summ++
    }
    
    return summ
};
```
```java []
class Solution {
    public int missingInteger(int[] nums) {
        HashSet<Integer> num_set = new HashSet<>();
        for (int item : nums){
            num_set.add(item);
        }
        int summ = nums[0];
        int idx = 1;
        while (idx<nums.length && nums[idx] == nums[idx-1]+1){
            summ+=nums[idx];
            idx++;
        }
        while (num_set.contains(summ)){
            summ++;
        }

        return summ;
    }
}
```
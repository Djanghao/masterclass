# Beginner friendly [Python/JavaScript/Java] solutions

**Author:** HimanshuBhoir
**Votes:** 23
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/2464020/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/2464020/)

---


```python []
class Solution(object):
    def arithmeticTriplets(self, nums, diff):
        count = 0
        for num in nums:
            if num + diff in nums and num + diff*2 in nums:
                count += 1
        return count
```

```javascript []
var arithmeticTriplets = function(nums, diff) {
    let count = 0
    for(let num of nums){
        if(nums.includes(num + diff) && nums.includes(num + diff*2)){
            count++
        }
    }
    return count;
};
```

```java []
class Solution {
    public int arithmeticTriplets(int[] nums, int diff) {
        Set set = new HashSet();
        for(int num: nums)    set.add(num);
        int count = 0;
        for(int num : nums){
            if(set.contains(num + diff) && set.contains(num + diff*2)){
                count++;
            }
        }
        return count;
    }
}
```
# Go/Python/JavaScript/Java/C++ O(n) time | O(1) space

**Author:** vtalantsev
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/4518970/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/4518970/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func minOperations(nums []int, k int) int {
    value := k
    for _,item := range(nums){
        value ^= item
    }

    answer := 0
    for value > 0{
        value&=(value-1)
        answer+=1
    }
        
    return answer
}
```
```python []
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        value = k
        for item in nums:
            value ^= item

        answer = 0
        while value:
            value&=(value-1)
            answer+=1
            
        return answer
```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let value = k
    for (let item of nums){
        value ^= item
    }

    let answer = 0
    while (value > 0){
        value&=(value-1)
        answer++
    }
        
    return answer
};
```
```java []
class Solution {
    public int minOperations(int[] nums, int k) {
        int value = k;
        for (int item : nums){
            value ^= item;
        }

        int answer = 0;
        while (value > 0){
            value&=(value-1);
            answer++;
        }
            
        return answer;
    }
}
```
```cpp []
class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        int value = k;
        for (auto& item : nums)
        {
            value ^= item;
        }

        int answer = 0;
        while (value > 0)
        {
            value&=(value-1);
            answer++;
        }
            
        return answer;
    }
};
```
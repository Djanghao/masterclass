# Easy solution in multiple language

**Author:** Shubhash_Singh
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/6033115/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/6033115/)

---

# Complexity
- Time complexity:$$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int minOperations(int[] nums, int k) {
        int count = 0;
        for(int i : nums){
            if(i < k){
                count++;
            }
        }
        return count;
    }
}
```
```python []
class Solution:
    def minOperations(self, nums, k):
        count = 0
        for i in nums:
            if i < k:
                count += 1
        return count

```
```ruby []
class Solution
    def min_operations(nums, k)
        count = 0
        nums.each do |i|
            count += 1 if i < k
        end
        count
    end
end

```
``` javascript []
class Solution {
    minOperations(nums, k) {
        let count = 0;
        for (let i of nums) {
            if (i < k) {
                count++;
            }
        }
        return count;
    }
}
```
``` Go []
package main

func minOperations(nums []int, k int) int {
    count := 0
    for _, i := range nums {
        if i < k {
            count++
        }
    }
    return count
}
```
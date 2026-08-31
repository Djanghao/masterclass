# 🚀 Efficient Subarray Removal for Divisibility Using Prefix Sums & Hash Map 🧮 || 100% ||

**Author:** MaheshSavant
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5865444/](https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5865444/)

---

# \uD83D\uDE80 Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to remove the smallest subarray such that the sum of the remaining array is divisible by `p`. This hints at using **prefix sums** with modulo arithmetic, as we're dealing with divisibility and subarrays. A **hash map** can help in tracking the indices where particular prefix sums appear.

# \uD83D\uDD0D Approach
<!-- Describe your approach to solving the problem. -->
1. First, calculate the total sum of the array and take it modulo `p`. If the result is `0`, no need to remove any subarray, so return `0`.
2. Use a hash map to store the prefix sums modulo `p` and their corresponding indices. This will allow for quick lookups of subarrays that may satisfy the condition.
3. As we iterate through the array, compute the current prefix sum modulo `p`, and check if removing the subarray from the last occurrence of the needed remainder to the current index would make the remaining sum divisible by `p`.
4. Track the minimum length of such subarrays.
5. Return the result, or `-1` if no valid subarray is found.

# \u23F1\uFE0F Complexity
- **Time complexity**:  
  The time complexity is $$O(n)$$, where `n` is the number of elements in the `nums` array. We make a single pass through the array and use a hash map for constant time lookups.

- **Space complexity**:  
  The space complexity is $$O(n)$$ due to the hash map that stores up to `n` prefix sums.

# \uD83D\uDCBB Code
```java []
import java.util.HashMap;

class Solution {
    public int minSubarray(int[] nums, int p) {
        int totalSum = 0;
        for (int num : nums) {
            totalSum = (totalSum + num) % p;
        }
        
        if (totalSum == 0) return 0; 
        
        int remainderToRemove = totalSum;
        HashMap<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, -1);
        int prefixSum = 0;
        int minLength = nums.length;
        
        for (int i = 0; i < nums.length; i++) {
            prefixSum = (prefixSum + nums[i]) % p;
            int neededRemainder = (prefixSum - remainderToRemove + p) % p;
            
            if (prefixMap.containsKey(neededRemainder)) {
                minLength = Math.min(minLength, i - prefixMap.get(neededRemainder));
            }
            
            prefixMap.put(prefixSum, i);
        } 
        return minLength == nums.length ? -1 : minLength;
    }
}
```
```C []
#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int minSubarray(int* nums, int numsSize, int p) {
    int totalSum = 0;
    for (int i = 0; i < numsSize; i++) {
        totalSum = (totalSum + nums[i]) % p;
    }
    
    if (totalSum == 0) return 0;
    
    int remainderToRemove = totalSum;
    int* prefixMap = (int*) malloc((p + 1) * sizeof(int));
    for (int i = 0; i <= p; i++) prefixMap[i] = -1;
    prefixMap[0] = -1;
    
    int prefixSum = 0, minLength = numsSize;
    for (int i = 0; i < numsSize; i++) {
        prefixSum = (prefixSum + nums[i]) % p;
        int neededRemainder = (prefixSum - remainderToRemove + p) % p;
        
        if (prefixMap[neededRemainder] != -1) {
            minLength = (i - prefixMap[neededRemainder] < minLength) ? i - prefixMap[neededRemainder] : minLength;
        }
        
        prefixMap[prefixSum] = i;
    }
    
    free(prefixMap);
    return minLength == numsSize ? -1 : minLength;
}

```
```CPP []
#include <unordered_map>
#include <vector>
#include <algorithm>

class Solution {
public:
    int minSubarray(std::vector<int>& nums, int p) {
        int totalSum = 0;
        for (int num : nums) {
            totalSum = (totalSum + num) % p;
        }
        
        if (totalSum == 0) return 0;
        
        int remainderToRemove = totalSum;
        std::unordered_map<int, int> prefixMap;
        prefixMap[0] = -1;
        int prefixSum = 0, minLength = nums.size();
        
        for (int i = 0; i < nums.size(); i++) {
            prefixSum = (prefixSum + nums[i]) % p;
            int neededRemainder = (prefixSum - remainderToRemove + p) % p;
            
            if (prefixMap.count(neededRemainder)) {
                minLength = std::min(minLength, i - prefixMap[neededRemainder]);
            }
            
            prefixMap[prefixSum] = i;
        }
        
        return minLength == nums.size() ? -1 : minLength;
    }
};

```
```C# []
using System;
using System.Collections.Generic;

public class Solution {
    public int MinSubarray(int[] nums, int p) {
        int totalSum = 0;
        foreach (int num in nums) {
            totalSum = (totalSum + num) % p;
        }
        
        if (totalSum == 0) return 0;
        
        int remainderToRemove = totalSum;
        Dictionary<int, int> prefixMap = new Dictionary<int, int>();
        prefixMap[0] = -1;
        int prefixSum = 0, minLength = nums.Length;
        
        for (int i = 0; i < nums.Length; i++) {
            prefixSum = (prefixSum + nums[i]) % p;
            int neededRemainder = (prefixSum - remainderToRemove + p) % p;
            
            if (prefixMap.ContainsKey(neededRemainder)) {
                minLength = Math.Min(minLength, i - prefixMap[neededRemainder]);
            }
            
            prefixMap[prefixSum] = i;
        }
        
        return minLength == nums.Length ? -1 : minLength;
    }
}

```
```Python []
class Solution:
    def minSubarray(self, nums, p):
        totalSum = sum(nums) % p
        if totalSum == 0:
            return 0
        
        remainderToRemove = totalSum
        prefixMap = {0: -1}
        prefixSum = 0
        minLength = len(nums)
        
        for i, num in enumerate(nums):
            prefixSum = (prefixSum + num) % p
            neededRemainder = (prefixSum - remainderToRemove + p) % p
            if neededRemainder in prefixMap:
                minLength = min(minLength, i - prefixMap[neededRemainder])
            prefixMap[prefixSum] = i
        
        return -1 if minLength == len(nums) else minLength

```
```JavaScript []
var minSubarray = function(nums, p) {
    let totalSum = nums.reduce((acc, num) => (acc + num) % p, 0);
    
    if (totalSum === 0) return 0;
    
    let remainderToRemove = totalSum;
    let prefixMap = new Map();
    prefixMap.set(0, -1);
    let prefixSum = 0;
    let minLength = nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        prefixSum = (prefixSum + nums[i]) % p;
        let neededRemainder = (prefixSum - remainderToRemove + p) % p;
        
        if (prefixMap.has(neededRemainder)) {
            minLength = Math.min(minLength, i - prefixMap.get(neededRemainder));
        }
        
        prefixMap.set(prefixSum, i);
    }
    
    return minLength === nums.length ? -1 : minLength;
};

```
```Rust []
use std::collections::HashMap;

impl Solution {
    pub fn min_subarray(nums: Vec<i32>, p: i32) -> i32 {
        let total_sum: i32 = nums.iter().fold(0, |acc, &num| (acc + num) % p);
        if total_sum == 0 {
            return 0;
        }
        
        let remainder_to_remove = total_sum;
        let mut prefix_map: HashMap<i32, i32> = HashMap::new();
        prefix_map.insert(0, -1);
        let mut prefix_sum = 0;
        let mut min_length = nums.len() as i32;
        
        for (i, &num) in nums.iter().enumerate() {
            prefix_sum = (prefix_sum + num) % p;
            let needed_remainder = (prefix_sum - remainder_to_remove + p) % p;
            if let Some(&index) = prefix_map.get(&needed_remainder) {
                min_length = min_length.min(i as i32 - index);
            }
            prefix_map.insert(prefix_sum, i as i32);
        }
        
        if min_length == nums.len() as i32 {
            return -1;
        }
        
        min_length
    }
}

```
```Ruby []
def min_subarray(nums, p)
    total_sum = nums.sum % p
    return 0 if total_sum == 0
    
    remainder_to_remove = total_sum
    prefix_map = {0 => -1}
    prefix_sum = 0
    min_length = nums.length
    
    nums.each_with_index do |num, i|
        prefix_sum = (prefix_sum + num) % p
        needed_remainder = (prefix_sum - remainder_to_remove + p) % p
        if prefix_map.include?(needed_remainder)
            min_length = [min_length, i - prefix_map[needed_remainder]].min
        end
        prefix_map[prefix_sum] = i
    end
    
    min_length == nums.length ? -1 : min_length
end

```
```Go []
func minSubarray(nums []int, p int) int {
    totalSum := 0
    for _, num := range nums {
        totalSum = (totalSum + num) % p
    }
    
    if totalSum == 0 {
        return 0
    }
    
    remainderToRemove := totalSum
    prefixMap := make(map[int]int)
    prefixMap[0] = -1
    prefixSum := 0
    minLength := len(nums)
    
    for i, num := range nums {
        prefixSum = (prefixSum + num) % p
        neededRemainder := (prefixSum - remainderToRemove + p) % p
        
        if idx, exists := prefixMap[neededRemainder]; exists {
            if i - idx < minLength {
                minLength = i - idx
            }
        }
        
        prefixMap[prefixSum] = i
    }
    
    if minLength == len(nums) {
        return -1
    }
    
    return minLength
}

```
```Kotlin []
class Solution {
    fun minSubarray(nums: IntArray, p: Int): Int {
        var totalSum = nums.sum() % p
        if (totalSum == 0) return 0
        
        val remainderToRemove = totalSum
        val prefixMap = mutableMapOf(0 to -1)
        var prefixSum = 0
        var minLength = nums.size
        
        for (i in nums.indices) {
            prefixSum = (prefixSum + nums[i]) % p
            val neededRemainder = (prefixSum - remainderToRemove + p) % p
            
            if (prefixMap.containsKey(neededRemainder)) {
                minLength = minOf(minLength, i - prefixMap[neededRemainder]!!)
            }
            
            prefixMap[prefixSum] = i
        }
        
        return if (minLength == nums.size) -1 else minLength
    }
}

```

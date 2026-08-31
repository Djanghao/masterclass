# 🌟 Simple & Easy Solution 🚀 | Hash Table 🗂️ + Prefix Sum 🧮 | Works in ALL Languages 🌍!

**Author:** mansimittal935
**Votes:** 2
**Link:** [https://leetcode.com/problems/subarray-sum-equals-k/solutions/6105161/](https://leetcode.com/problems/subarray-sum-equals-k/solutions/6105161/)

---

# \uD83D\uDCA1 Intuition
The problem is about finding subarrays whose sum equals k. Instead of brute force, we cleverly use prefix sums \uD83E\uDDEE and a hash map \uD83D\uDDC2\uFE0F to track frequencies of sums. This way, we efficiently detect if a subarray adds up to k! \uD83D\uDE80

---

# \uD83D\uDEE0\uFE0F Approach
## 1. Initialize Variables:
- preSum = 0 \uD83E\uDDFE (tracks cumulative sum).
- mp[0] = 1 \uD83D\uDDC2\uFE0F (base case for subarrays starting from the beginning).
- cnt = 0 \uD83D\uDD22 (counts valid subarrays).

## 2. Iterate through the array:
- Update preSum by adding the current number.
- Check if preSum - k exists in the map \uD83D\uDD75\uFE0F:
- \u2705 Yes: Add its frequency to cnt (subarrays found!).
- Update the hash map with the current preSum.

## 3. Return cnt: The total number of subarrays with sum = k.

---

# \u23F1\uFE0F Complexity
- ## Time: O(n) \uD83C\uDFC3\u200D\u2642\uFE0F (single pass through the array).

- ##  Space: O(n) \uD83D\uDDC2\uFE0F (for the hash map).

---

# \uD83D\uDE80 Key Insights
- Prefix Sum: Tracks cumulative sums as a single pass.
- Hash Map: Efficiently checks subarray existence in O(1).


#### \uD83D\uDCDD Elegant and efficient for a tricky problem! \u2705


# Code
```cpp []
class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        unordered_map<int, int> mp; // prefix_sum -> count
        mp[0] = 1;

        int preSum = 0, cnt = 0;
        for(int num: nums) {
            preSum += num;
            if(mp.count(preSum - k)){
                cnt += mp[preSum-k];
            }
            mp[preSum]++;
        }
        return cnt;
    }
};
```
```java []
import java.util.HashMap;
import java.util.List;

class Solution {
    public int subarraySum(List<Integer> nums, int k) {
        HashMap<Integer, Integer> mp = new HashMap<>(); // prefix_sum -> count
        mp.put(0, 1);

        int preSum = 0, cnt = 0;
        for (int num : nums) {
            preSum += num;
            if (mp.containsKey(preSum - k)) {
                cnt += mp.get(preSum - k);
            }
            mp.put(preSum, mp.getOrDefault(preSum, 0) + 1);
        }
        return cnt;
    }
}

```
```python []
from collections import defaultdict

class Solution:
    def subarraySum(self, nums, k):
        mp = defaultdict(int)  # prefix_sum -> count
        mp[0] = 1

        preSum = 0
        cnt = 0
        for num in nums:
            preSum += num
            if (preSum - k) in mp:
                cnt += mp[preSum - k]
            mp[preSum] += 1
        return cnt

```
```javascript []
class Solution {
    subarraySum(nums, k) {
        const mp = new Map(); // prefix_sum -> count
        mp.set(0, 1);

        let preSum = 0, cnt = 0;
        for (let num of nums) {
            preSum += num;
            if (mp.has(preSum - k)) {
                cnt += mp.get(preSum - k);
            }
            mp.set(preSum, (mp.get(preSum) || 0) + 1);
        }
        return cnt;
    }
}
```
```c# []
using System;
using System.Collections.Generic;

public class Solution {
    public int SubarraySum(int[] nums, int k) {
        Dictionary<int, int> mp = new Dictionary<int, int>(); // prefix_sum -> count
        mp[0] = 1;

        int preSum = 0, cnt = 0;
        foreach(int num in nums) {
            preSum += num;
            if(mp.ContainsKey(preSum - k)){
                cnt += mp[preSum - k];
            }
            if(mp.ContainsKey(preSum)) {
                mp[preSum]++;
            } else {
                mp[preSum] = 1;
            }
        }
        return cnt;
    }
}

```
```ruby []
class Solution
  def subarray_sum(nums, k)
    mp = Hash.new(0) # prefix_sum -> count
    mp[0] = 1

    pre_sum = 0
    cnt = 0
    nums.each do |num|
      pre_sum += num
      cnt += mp[pre_sum - k] if mp.key?(pre_sum - k)
      mp[pre_sum] += 1
    end
    cnt
  end
end

```
```typecsript []
class Solution {
    subarraySum(nums: number[], k: number): number {
        const mp = new Map<number, number>();
        mp.set(0, 1);

        let preSum = 0;
        let cnt = 0;

        for (const num of nums) {
            preSum += num;
            if (mp.has(preSum - k)) {
                cnt += mp.get(preSum - k)!;
            }
            mp.set(preSum, (mp.get(preSum) || 0) + 1);
        }

        return cnt;
    }
}


```
```go []
package main

import "fmt"

func subarraySum(nums []int, k int) int {
	mp := make(map[int]int) // prefix_sum -> count
	mp[0] = 1

	preSum := 0
	cnt := 0
	for _, num := range nums {
		preSum += num
		if count, exists := mp[preSum-k]; exists {
			cnt += count
		}
		mp[preSum]++
	}
	return cnt
}

func main() {
	// Example usage
	nums := []int{1, 1, 1}
	k := 2
	fmt.Println(subarraySum(nums, k)) // Output: 2
}

```
```rust []
use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn subarray_sum(nums: Vec<i32>, k: i32) -> i32 {
        let mut mp: HashMap<i32, i32> = HashMap::new();
        mp.insert(0, 1);

        let mut pre_sum = 0;
        let mut cnt = 0;

        for num in nums {
            pre_sum += num;
            if let Some(&count) = mp.get(&(pre_sum - k)) {
                cnt += count;
            }
            *mp.entry(pre_sum).or_insert(0) += 1;
        }

        cnt
    }
}

```

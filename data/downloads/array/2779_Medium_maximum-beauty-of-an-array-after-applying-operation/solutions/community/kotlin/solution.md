# My kotlin solution with time O(NLogN) and space O(N)

**Author:** hj-core
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/6134908/](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/6134908/)

---

This problem is an interval problem in disguise. Each number expands to an interval, and the problem asks for the maximum number of overlapping intervals. You can solve it using a line sweep (with a relatively large constant factor) or by sorting the numbers and then using a sliding window technique.

Below is my implementation,
```kotlin [kotlin]
class Solution {
    /* Complexity:
     * Time O(NLogN) and Space O(N) where N is the length of nums.
     */
    fun maximumBeauty(
        nums: IntArray,
        k: Int,
    ): Int {
        val sortedNums = nums.sorted()
        var left = 0
        val threshold = k * 2
        for (num in sortedNums) {
            if (threshold < num - sortedNums[left]) {
                left++
            }
        }
        return sortedNums.size - left
    }
}
```
```python3 [python3]
class Solution:
    # Complexity:
    # Time O(NLogN) and Space O(N) where N is the length of nums.
    def maximumBeauty(self, nums: List[int], k: int) -> int:
        sorted_nums = sorted(nums)
        left = 0
        threshold = k * 2
        for num in sorted_nums:
            if threshold < num - sorted_nums[left]:
                left += 1
        return len(sorted_nums) - left
```
```rust [rust/line_sweep]
use std::cmp::{max, min};

impl Solution {
    // Complexity:
    // Time O(N+K) and Space O(K)
    // where N is the length of nums and K is the maximum element in nums.
    pub fn maximum_beauty(nums: Vec<i32>, k: i32) -> i32 {
        let max_elem = nums.iter().max().unwrap();

        let mut line = vec![0; (max_elem + 2) as usize];
        for &num in nums.iter() {
            let left = max(num - k, 0) as usize;
            line[left] += 1;
            let right = min(num + k + 1, max_elem + 1) as usize;
            line[right] -= 1;
        }

        line.iter()
            .fold((0, 0), |mut acc, &count| {
                let (result, prefix_sum) = acc;
                acc.1 = prefix_sum + count;
                acc.0 = max(result, acc.1);
                acc
            })
            .0
    }
}
```
```go [go]
// Complexity:
// Time O(NLogN) and Space O(N) where N is the length of nums.
func maximumBeauty(nums []int, k int) int {
	sortedNums := make([]int, len(nums))
	copy(sortedNums, nums)
	slices.Sort(sortedNums)
    
	left := 0
	threshold := k * 2
	for _, num := range sortedNums {
		if threshold < num-sortedNums[left] {
			left++
		}
	}
	return len(sortedNums) - left
}
```
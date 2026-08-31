# My kotlin solution with time O(NLogK) and space O(1)

**Author:** hj-core
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/solutions/6122610/](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/solutions/6122610/)

---

The idea is that the number of operations required to reduce the overall maximum bag size to a value M is non-decreasing as M decreases. Therefore, we can use binary search to find the maximum M requiring no more than maxOperations.

Below are my implementations,
```kotlin [kotlin]
class Solution {
    /* Complexity:
     * Time O(NLogM) and Space O(1)
     * where N is the size of nums and M is the maximum value in nums.
     */
    fun minimumSize(
        nums: IntArray,
        maxOperations: Int,
    ): Int {
        var low = 1
        var high = nums.max()

        while (low <= high) {
            val middle = low + (high - low) / 2
            if (canReduce(nums, middle, maxOperations)) {
                high = middle - 1
            } else {
                low = middle + 1
            }
        }
        return low
    }

    private fun canReduce(
        bagSizes: IntArray,
        reducedSize: Int,
        maxOperations: Int,
    ): Boolean {
        var totalOps = 0
        for (size in bagSizes) {
            totalOps += requiredOps(size, reducedSize)
            if (totalOps > maxOperations) {
                return false
            }
        }
        return true
    }

    private fun requiredOps(
        bagSize: Int,
        reducedSize: Int,
    ): Int = (bagSize - 1) / reducedSize
}
```
```rust [rust]
impl Solution {
    // Complexity:
    // Time O(NLogK) and Space O(1)
    // where N is the size of nums and K is the maximum possible balls in a bag.
    pub fn minimum_size(nums: Vec<i32>, max_operations: i32) -> i32 {
        let max_possible_size = 1_000_000_000;
        let mut low = 1;
        let mut high = max_possible_size;

        while low <= high {
            let mid = low + (high - low) / 2;
            if Self::can_reduce(&nums, mid, max_operations) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        low
    }

    fn can_reduce(bag_sizes: &[i32], reduced_size: i32, max_ops: i32) -> bool {
        let mut total_ops = 0;
        for &size in bag_sizes {
            total_ops += Self::required_ops(size, reduced_size);
            if total_ops > max_ops {
                return false;
            }
        }
        true
    }

    fn required_ops(bag_size: i32, reduced_size: i32) -> i32 {
        (bag_size - 1) / reduced_size
    }
}
```
```python3 [python3]
class Solution:
    # Complexity:
    # Time O(NLogK) and Space O(1)
    # where N is the length of nums and K is the maximum possible balls in a bag.
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        max_possible_size = 1_000_000_000
        low = 1
        high = max_possible_size

        while low <= high:
            mid = low + (high - low) // 2
            if sum((size - 1) // mid for size in nums) <= maxOperations:
                high = mid - 1
            else:
                low = mid + 1

        return low
```
```go [go]
// Complexity:
// Time O(NLogM) and Space O(1)
// where N is the length of nums and M is the maximum value in nums.
func minimumSize(nums []int, maxOperations int) int {
	low := 1
	high := slices.Max(nums)

	for low <= high {
		mid := low + (high-low)/2
		if canReduce(nums, mid, maxOperations) {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}
	return low
}

func canReduce(bagSizes []int, reducedSize int, maxOps int) bool {
	totalOps := 0
	for _, bagSize := range bagSizes {
		totalOps += requiredOps(bagSize, reducedSize)
		if totalOps > maxOps {
			return false
		}
	}
	return true
}

func requiredOps(bagSize, reducedSize int) int {
	return (bagSize - 1) / reducedSize
}
```
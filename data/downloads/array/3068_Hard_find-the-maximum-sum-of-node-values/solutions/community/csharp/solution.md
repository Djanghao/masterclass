# 🔥 BEATS 100% |✅ [  Java / C++ / Py / C / C# / JS / GO  ]

**Author:** Neoni_77
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5177435/](https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5177435/)

---

# Intuition
To maximize the sum of values of tree nodes, we need to carefully choose which edges to update and which to leave unchanged. Since updating an edge affects the values of both nodes connected by that edge, we need to consider the effect of each update on the overall sum of values.

# Approach
1. Initialize variables `sum` to store the current sum of values, `minExtra` to track the minimum extra value gained from performing operations, and `count` to count the number of nodes whose values are updated by operations.
2. Iterate through each node's value in the `nums` array.
3. For each node's value `val`, if `(val ^ k) > val`, it means updating this node and its connected node with XOR operation will increase the sum. Update `sum` by adding `(val ^ k)` to it and update `minExtra` by taking the minimum of its current value and `(val ^ k) - val`. Increment `count`.
4. If `(val ^ k) <= val`, it means updating this node and its connected node won't increase the sum. Update `sum` by adding `val` to it and update `minExtra` by taking the minimum of its current value and `val - (val ^ k)`.
5. After iterating through all nodes, if `count` is even, return the current `sum`, else return `sum - minExtra`.

# Complexity
- Time complexity: $$O(n)$$, where $$n$$ is the number of nodes in the tree.
- Space complexity: $$O(1)$$

```Java []
class Solution {
    public long maximumValueSum(int[] nums, int k, int[][] edges) {  
        long sum = 0;
        long minExtra = 1000000;
        int count = 0;

        for( int val : nums) {
            if ((val ^ k) > val ) {
                sum += val ^ k;
                minExtra = Math.min(minExtra, (val ^ k)- val);
                count++;
            } else {
                sum += val;
                minExtra = Math.min(minExtra, val - (val ^ k));
            }
        }

        if ( count %2 ==0 ) {
            return sum;
        } else {
            return sum - minExtra;
        }

    }
}
```
```C++ []
class Solution {
public:
    long long maximumValueSum(std::vector<int>& nums, int k, std::vector<std::vector<int>>& edges) {
        long long sum = 0;
        long long minExtra = 1000000;
        int count = 0;

        for (int val : nums) {
            if ((val ^ k) > val) {
                sum += (val ^ k);
                minExtra = std::min(minExtra, static_cast<long long>((val ^ k) - val));
                count++;
            } else {
                sum += val;
                minExtra = std::min(minExtra, static_cast<long long>(val - (val ^ k)));
            }
        }

        if (count % 2 == 0) {
            return sum;
        } else {
            return sum - minExtra;
        }
    }
};

```
```python []
class Solution:
    def maximumValueSum(self, nums: List[int], k: int, edges: List[List[int]]) -> int:
        sum_ = 0
        min_extra = 1000000
        count = 0

        for val in nums:
            if (val ^ k) > val:
                sum_ += val ^ k
                min_extra = min(min_extra, (val ^ k) - val)
                count += 1
            else:
                sum_ += val
                min_extra = min(min_extra, val - (val ^ k))

        if count % 2 == 0:
            return sum_
        else:
            return sum_ - min_extra

```
```C []
long long maximumValueSum(int* nums, int numsSize, int k, int** edges, int edgesSize, int* edgesColSize) {
    long long sum = 0;
    long long minExtra = 1000000;  // Large initial value for minExtra
    int count = 0;

    for (int i = 0; i < numsSize; i++) {
        if ((nums[i] ^ k) > nums[i]) {
            sum += nums[i] ^ k;
            minExtra = (minExtra < ((nums[i] ^ k) - nums[i])) ? minExtra : ((nums[i] ^ k) - nums[i]);
            count++;
        } else {
            sum += nums[i];
            minExtra = (minExtra < (nums[i] - (nums[i] ^ k))) ? minExtra : (nums[i] - (nums[i] ^ k));
        }
    }

    if (count % 2 == 0) {
        return sum;
    } else {
        return sum - minExtra;
    }
}

```
```C# []
public class Solution {
    public long MaximumValueSum(int[] nums, int k, int[][] edges) {
        long sum = 0;
        long minExtra = 1000000; 
        int count = 0;

        foreach (int val in nums) {
            if ((val ^ k) > val) {
                sum += val ^ k;
                minExtra = Math.Min(minExtra, (val ^ k) - val);
                count++;
            } else {
                sum += val;
                minExtra = Math.Min(minExtra, val - (val ^ k));
            }
        }

        return (count % 2 == 0) ? sum : sum - minExtra;
    }
}

```
```javascript []
var maximumValueSum = function(nums, k, edges) {
    let sum = 0;
    let minExtra = 1000000; 
    let count = 0;

    for (const val of nums) {
        if ((val ^ k) > val) {
            sum += val ^ k;
            minExtra = Math.min(minExtra, (val ^ k) - val);
            count++;
        } else {
            sum += val;
            minExtra = Math.min(minExtra, val - (val ^ k));
        }
    }

    return count % 2 === 0 ? sum : sum - minExtra;
};

```
```Go []
func maximumValueSum(nums []int, k int, edges [][]int) int64 {
    var sum int64 = 0
    var minExtra int64 = 1000000 
    count := 0

    for _, val := range nums {
        if (val ^ k) > val {
            sum += int64(val ^ k)
            minExtra = min(minExtra, int64((val ^ k) - val))
            count++
        } else {
            sum += int64(val)
            minExtra = min(minExtra, int64(val - (val ^ k)))
        }
    }

    if count % 2 == 0 {
        return sum
    } else {
        return sum - minExtra
    }
}

func min(a, b int64) int64 {
    if a < b {
        return a
    }
    return b
}

```
**NOTE: THE FOLLOWING IMPLEMENTATION BEATS 100% IN JAVA .. DON'T KNOW ABOUT OTHER CODES** 
```
UPVOTE\u2B06\uFE0F IF IT HELPED\uD83D\uDE0A
```

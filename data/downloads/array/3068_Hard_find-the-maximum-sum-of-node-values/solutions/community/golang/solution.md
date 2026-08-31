# 🔥 🔥 🔥 Fastest (100%) || Video Explanation || Easy to understand 🔥 🔥 🔥

**Author:** bhanu_bhakta
**Votes:** 30
**Link:** [https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5176685/](https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5176685/)

---

# [Detailed Approach Explained in Video Here](https://www.youtube.com/watch?v=bmwQtId0Z2Q)

![Screenshot 2024-05-18 at 6.24.53\u202FPM.png](./images/0.png)


# Intuition
- The intuition behind this approach is that XOR operations on elements in the list can either increase or decrease their values. The goal is to maximize the overall sum after these operations. By tracking the minimum positive change and the maximum negative change, the solution ensures that if the count of beneficial operations (positive changes) is odd, we can adjust the sum to ensure it remains maximized.

# Approach
# [Detailed Approach Explained in Video Here](https://www.youtube.com/watch?v=bmwQtId0Z2Q)

**Initialization:**

- totalSum keeps track of the total sum of elements after potential XOR operations.
- count tracks the number of elements that were increased by the XOR operation.
- positiveMin is initialized to infinity and will store the minimum positive net change from the XOR operation.
- negativeMax is initialized to negative infinity and will store the maximum negative net change from the XOR operation.

**Iterating Through Elements:**

- For each element in nums, compute the result of XOR-ing the element with k (i.e., nodeValAfterOperation = nodeValue ^ k).
- Calculate the netChange which is the difference between the XOR-ed value and the original value (netChange = nodeValAfterOperation - nodeValue).

**Updating totalSum:**

- Add the original value of the element to totalSum.
- If the netChange is positive (i.e., the XOR operation results in a higher value), update positiveMin if this change is the smallest positive change encountered and add this net change to totalSum.
- If the netChange is negative, update negativeMax if this change is the largest negative change encountered.

**Counting Operations:**

- Increment the count for each positive net change since we are tracking how many elements were beneficially changed by the XOR operation.
Balancing the Count of Changes:

- If the count (number of beneficial changes) is even, return totalSum directly since an even count of positive changes ensures the sum is maximized.

- If the count is odd, we face a dilemma since adding or subtracting an odd number of beneficial changes can be suboptimal. Hence, we need to decide whether to:
    - Remove the smallest positive change to make the count even (maximizing totalSum - positiveMin).
    - Add the largest negative change (potentially minimizing the loss) to balance out the sum (maximizing totalSum + negativeMax).

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```Python []
class Solution:
    def maximumValueSum(self, nums: List[int], k: int, edges: List[List[int]]) -> int:
        totalSum = 0
        count = 0
        positiveMin = float("inf")
        negativeMax = float("-inf")

        for nodeValue in nums:
            nodeValAfterOperation = nodeValue ^ k

            totalSum += nodeValue
            netChange = nodeValAfterOperation - nodeValue

            if netChange > 0:
                positiveMin = min(positiveMin, netChange)
                totalSum += netChange
                count += 1
            else:
                negativeMax = max(negativeMax, netChange)

        if count % 2 == 0:
            return totalSum
        return max(totalSum - positiveMin, totalSum + negativeMax)

```
```C++ []
class Solution {
public:
    long long maximumValueSum(vector<int>& nums, int k,
                              vector<vector<int>>& edges) {
        long long totalSum = 0;
        int count = 0;
        int positiveMin = INT_MAX;
        int negativeMax = INT_MIN;

        for (int nodeValue : nums) {
            int nodeValAfterOperation = nodeValue ^ k;
            totalSum += nodeValue;
            int netChange = nodeValAfterOperation - nodeValue;

            if (netChange > 0) {
                positiveMin = min(positiveMin, netChange);
                totalSum += netChange;
                count += 1;
            } else {
                negativeMax = max(negativeMax, netChange);
            }
        }

        if (count % 2 == 0) {
            return totalSum;
        }
        return max(totalSum - positiveMin, totalSum + negativeMax);
    }
};
```
```Java []
class Solution {
    public long maximumValueSum(int[] nums, int k, int[][] edges) {
        long totalSum = 0;
        int count = 0;
        int positiveMin = Integer.MAX_VALUE;
        int negativeMax = Integer.MIN_VALUE;

        for (int nodeValue : nums) {
            int nodeValAfterOperation = nodeValue ^ k;
            totalSum += nodeValue;
            int netChange = nodeValAfterOperation - nodeValue;

            if (netChange > 0) {
                positiveMin = Math.min(positiveMin, netChange);
                totalSum += netChange;
                count += 1;
            } else {
                negativeMax = Math.max(negativeMax, netChange);
            }
        }

        if (count % 2 == 0) {
            return totalSum;
        }
        return Math.max(totalSum - positiveMin, totalSum + negativeMax);
    }
}
```
```Javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function (nums, k, edges) {
    let totalSum = 0;
    let count = 0;
    let positiveMin = Infinity;
    let negativeMax = -Infinity;

    for (let nodeValue of nums) {
        let nodeValAfterOperation = nodeValue ^ k;
        totalSum += nodeValue;
        let netChange = nodeValAfterOperation - nodeValue;

        if (netChange > 0) {
            positiveMin = Math.min(positiveMin, netChange);
            totalSum += netChange;
            count += 1;
        } else {
            negativeMax = Math.max(negativeMax, netChange);
        }
    }

    if (count % 2 === 0) {
        return totalSum;
    }
    return Math.max(totalSum - positiveMin, totalSum + negativeMax);
};
```
```Go []
func maximumValueSum(nums []int, k int, edges [][]int) int64 {
	var totalSum int64
	count := 0
	positiveMin := math.MaxInt64
	negativeMax := math.MinInt64

	for _, nodeValue := range nums {
		nodeValAfterOperation := nodeValue ^ k
		totalSum += int64(nodeValue)
		netChange := nodeValAfterOperation - nodeValue

		if netChange > 0 {
			if netChange < positiveMin {
				positiveMin = netChange
			}
			totalSum += int64(netChange)
			count++
		} else {
			if netChange > negativeMax {
				negativeMax = netChange
			}
		}
	}

	if count%2 == 0 {
		return totalSum
	}
	return int64(math.Max(float64(totalSum-int64(positiveMin)), float64(totalSum+int64(negativeMax))))
}
```
```Kotlin []
class Solution {
    fun maximumValueSum(nums: IntArray, k: Int, edges: Array<IntArray>): Long {
        var totalSum: Long = 0
        var count = 0
        var positiveMin = Int.MAX_VALUE
        var negativeMax = Int.MIN_VALUE

        for (nodeValue in nums) {
            val nodeValAfterOperation = nodeValue xor k
            totalSum += nodeValue
            val netChange = nodeValAfterOperation - nodeValue

            if (netChange > 0) {
                positiveMin = minOf(positiveMin, netChange)
                totalSum += netChange
                count += 1
            } else {
                negativeMax = maxOf(negativeMax, netChange)
            }
        }

        return if (count % 2 == 0) {
            totalSum
        } else {
            maxOf(totalSum - positiveMin, totalSum + negativeMax)
        }
    }
}
```

# **Please Upvote if you like the solution**
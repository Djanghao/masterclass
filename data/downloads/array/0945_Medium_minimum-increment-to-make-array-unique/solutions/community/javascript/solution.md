# 🔥 🔥 🔥 Easy to understand | Fastest | Sorting 🔥 🔥 🔥

**Author:** bhanu_bhakta
**Votes:** 75
**Link:** [https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5309935/](https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5309935/)

---

# Intuition

- The algorithm begins by sorting the array to handle each element in ascending order. For each number, it ensures that it meets or exceeds the last encountered unique value, adding to the total count of increments needed to achieve this. The process is repeated for each element, updating the required unique value each time, to ensure all elements in the array are unique.


# Approach
- **Sorting:** Sort the input array to simplify sequential processing.

- **Initialization:** Set up variables for the target unique value and the total increments counter.

- **Iteration and Adjustment:** For each number, adjust it to at least match the last unique value, increasing the total increments as needed.

- **Result:** Return the cumulative number of increments required to ensure all numbers are unique.

# Complexity
- Time complexity:
O(NlogN)

- Space complexity:
O(1)

# Code
```Python []
class Solution:
    def minIncrementForUnique(self, nums: List[int]) -> int:
        # nums = [3,2,1,2,1,7]
        #        [1,1,2,2,3,7]

        # mySet = set({ num for num in nums }), 2+4
        nums.sort()
        numTracker = 0
        minIncreament = 0

        for num in nums:
            numTracker = max(numTracker, num)
            minIncreament += numTracker - num
            numTracker += 1
        return minIncreament

```
```C++ []
class Solution {
public:
    int minIncrementForUnique(vector<int>& nums) {
        // Sort the vector first
        std::sort(nums.begin(), nums.end());

        int numTracker = 0; // Tracks the next unique number that should be set.
        int minIncrement = 0; // Counts the total increments required.

        for (int num : nums) {
            numTracker = std::max(numTracker, num);
            minIncrement += numTracker - num;
            numTracker += 1; // Increment the tracker for the next number.
        }

        return minIncrement;
    }
};
```
```Java []
class Solution {
    public int minIncrementForUnique(int[] nums) {
        // Sort the array first
        Arrays.sort(nums);

        int numTracker = 0; // Tracks the next unique number that should be set.
        int minIncrement = 0; // Counts the total increments required.

        for (int num : nums) {
            numTracker = Math.max(numTracker, num);
            minIncrement += numTracker - num;
            numTracker += 1; // Increment the tracker for the next number.
        }

        return minIncrement;
    }
}
```
```Kotlin []
class Solution {
    fun minIncrementForUnique(nums: IntArray): Int {
        // Sort the array first
        nums.sort()
        
        var numTracker = 0   // Tracks the next unique number that should be set.
        var minIncrement = 0 // Counts the total increments required.

        for (num in nums) {
            numTracker = maxOf(numTracker, num)
            minIncrement += numTracker - num
            numTracker += 1 // Increment the tracker for the next number.
        }

        return minIncrement
    }
}
```
```Go []
func minIncrementForUnique(nums []int) int {
	// Sort the slice first
	sort.Ints(nums)

	numTracker := 0   // Tracks the next unique number that should be set.
	minIncrement := 0 // Counts the total increments required.

	for _, num := range nums {
		if numTracker < num {
			numTracker = num
		}
		minIncrement += numTracker - num
		numTracker++ // Increment the tracker for the next number.
	}

	return minIncrement
}
```
```Javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
    // Sort the array first
    nums.sort((a, b) => a - b);

    let numTracker = 0;   // Tracks the next unique number that should be set.
    let minIncrement = 0; // Counts the total increments required.

    for (let num of nums) {
        numTracker = Math.max(numTracker, num);
        minIncrement += numTracker - num;
        numTracker++; // Increment the tracker for the next number.
    }

    return minIncrement;
};
```

**Please Upvote if you like the solution**

![upvote.webp](./images/0.webp)

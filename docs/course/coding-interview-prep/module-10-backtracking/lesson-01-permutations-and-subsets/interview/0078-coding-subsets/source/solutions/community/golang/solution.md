# 🔥 🔥 🔥 Fastest ( 100% ) | Easy to understand 🔥 🔥 🔥

**Author:** bhanu_bhakta
**Votes:** 20
**Link:** [https://leetcode.com/problems/subsets/solutions/5186387/](https://leetcode.com/problems/subsets/solutions/5186387/)

---

# [Video Explanation here](https://www.youtube.com/watch?v=ntXQDJGVXrU)

# Intuition
- The goal is to generate all possible subsets of a given list of numbers. A subset is a combination of elements where the order of elements doesn't matter, and each element can either be included or excluded from the subset.

# Approach
- The approach used here is a classic Depth-First Search (DFS) combined with backtracking. Here's a step-by-step breakdown:

**Recursive Function (DFS):**

- The recursive function explore is defined to traverse the list and generate subsets.

**It takes two parameters:**
- index: The current position in the list of numbers.
- curr: The current subset being built.

**Base Case:**

- The base case of the recursion is when index equals the length of nums. - This means we've considered all elements in the list.
- When this happens, the current subset curr is added to the result list result.

**Decision Points:**

**At each step, we have two choices for the current element:**
- Include the current element: Add the current element (nums[index]) to curr and recurse to the next element (index + 1).
- Exclude the current element: Do not add the current element to curr and recurse to the next element (index + 1).

**Backtracking:**

- After exploring the path where the current element is included, we remove it (backtrack) and explore the path where it is excluded.
This ensures that all possible subsets are explored.

**Visual Explanation Stacktree**

**Example input: [1, 2]**


explore(0, [])
\u251C\u2500\u2500 include 1
\u2502   \u251C\u2500\u2500 explore(1, [1])
\u2502   \u2502   \u251C\u2500\u2500 include 2
\u2502   \u2502   \u2502   \u251C\u2500\u2500 explore(2, [1, 2]) -> Add [1, 2] to result
\u2502   \u2502   \u2502   \u2514\u2500\u2500 backtrack to [1]
\u2502   \u2502   \u251C\u2500\u2500 exclude 2
\u2502   \u2502   \u2502   \u251C\u2500\u2500 explore(2, [1]) -> Add [1] to result
\u2502   \u2502   \u2514\u2500\u2500 backtrack to []
\u251C\u2500\u2500 exclude 1
\u2502   \u251C\u2500\u2500 explore(1, [])
\u2502   \u2502   \u251C\u2500\u2500 include 2
\u2502   \u2502   \u2502   \u251C\u2500\u2500 explore(2, [2]) -> Add [2] to result
\u2502   \u2502   \u2502   \u2514\u2500\u2500 backtrack to []
\u2502   \u2502   \u251C\u2500\u2500 exclude 2
\u2502   \u2502   \u2502   \u251C\u2500\u2500 explore(2, []) -> Add [] to result
\u2502   \u2502   \u2514\u2500\u2500 backtrack to []


**Detailed Steps:**

- Initial Call: explore(0, [])

- Include 1: explore(1, [1])

- Include 2: explore(2, [1, 2]) -> Add [1, 2] to result

- Backtrack: explore(1, [1]) (after including 2 and backtracking)

- Exclude 2: explore(2, [1]) -> Add [1] to result

- Backtrack: explore(1, []) (after excluding 2 and backtracking)

- Exclude 1: explore(1, [])

- Include 2: explore(2, [2]) -> Add [2] to result

- Backtrack: explore(1, []) (after including 2 and backtracking)

- Exclude 2: explore(2, []) -> Add [] to result

- Backtrack: explore(1, []) (after excluding 2 and backtracking)

- Final Result

**After all the recursive calls and backtracking steps, the final result is:**
[ [1, 2], [1], [2], [] ]


explore(0, [])
\u251C\u2500\u2500 explore(1, [1])
\u2502   \u251C\u2500\u2500 explore(2, [1, 2]) -> [1, 2]
\u2502   \u2514\u2500\u2500 explore(2, [1])    -> [1]
\u2514\u2500\u2500 explore(1, [])
    \u251C\u2500\u2500 explore(2, [2])    -> [2]
    \u2514\u2500\u2500 explore(2, [])     -> []

# Complexity
- Time complexity:
**O(N * 2^N)**

- Space complexity:
**O(N * 2^N)**

# Code
```Python []
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []

        def explore(index, curr):
            if index == len(nums):
                result.append(curr.copy())
                return

            curr.append(nums[index])
            explore(index + 1, curr)
            curr.pop()
            explore(index + 1, curr)

        explore(0, [])
        return result

```
```C++ []
class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> result;
        vector<int> curr;

        function<void(int)> explore = [&](int index) {
            if (index == nums.size()) {
                result.push_back(curr);
                return;
            }

            // Include the current element
            curr.push_back(nums[index]);
            explore(index + 1);
            curr.pop_back(); // Backtrack

            // Exclude the current element
            explore(index + 1);
        };

        explore(0);
        return result;
    }
};
```
```Java []
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> curr = new ArrayList<>();
        explore(nums, 0, curr, result);
        return result;
    }

    private void explore(int[] nums, int index, List<Integer> curr, List<List<Integer>> result) {
        if (index == nums.length) {
            result.add(new ArrayList<>(curr));
            return;
        }

        // Include the current element
        curr.add(nums[index]);
        explore(nums, index + 1, curr, result);
        curr.remove(curr.size() - 1); // Backtrack

        // Exclude the current element
        explore(nums, index + 1, curr, result);
    }
}
```
```Go []
func subsets(nums []int) [][]int {
	var result [][]int
	var curr []int

	var explore func(int)
	explore = func(index int) {
		if index == len(nums) {
			subset := make([]int, len(curr))
			copy(subset, curr)
			result = append(result, subset)
			return
		}

		// Include the current element
		curr = append(curr, nums[index])
		explore(index + 1)
		curr = curr[:len(curr)-1] // Backtrack

		// Exclude the current element
		explore(index + 1)
	}

	explore(0)
	return result
}
```
```Kotlin []
class Solution {
    fun subsets(nums: IntArray): List<List<Int>> {
        val result = mutableListOf<List<Int>>()
    val curr = mutableListOf<Int>()

    fun explore(index: Int) {
        if (index == nums.size) {
            result.add(curr.toList())
            return
        }

        // Include the current element
        curr.add(nums[index])
        explore(index + 1)
        curr.removeAt(curr.size - 1)  // Backtrack

        // Exclude the current element
        explore(index + 1)
    }

    explore(0)
    return result
    }
}
```

# **Please Upvote**
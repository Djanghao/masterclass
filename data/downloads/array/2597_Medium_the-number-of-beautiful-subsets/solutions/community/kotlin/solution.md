# 🔥 🔥 🔥 Easy to understand | Video explanation | Backtracking 🔥 🔥 🔥

**Author:** bhanu_bhakta
**Votes:** 60
**Link:** [https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5195255/](https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5195255/)

---

# Video Explanation of the Approach

https://www.youtube.com/watch?v=ewbeeOvYUUg

# Intuition
- The problem "Beautiful Subsets" involves finding all subsets of a given list of integers nums such that for any two integers x and y in a subset, the absolute difference between x and y is not equal to a given integer k. The goal is to count the number of such subsets.

# Approach
**1. Subsets Generation:**

- The idea is to generate all possible subsets of the given list nums.
The function explore is used to recursively generate subsets.

**2. Constraints Check:**

- When adding an element x to the current subset, it is checked if x+k or x\u2212k is already in the subset.

- If either x+k or x\u2212k exists in the current subset, x cannot be added to maintain the condition \u2223\uD835\uDC65 \u2212 \uD835\uDC66\u2223 \u2260 \uD835\uDC58.

**3. Backtracking:**

If x can be added, it is marked as visited, and the recursion continues.
After exploring the subset including x, the algorithm backtracks by removing x from the current subset and continues exploring subsets without x.

**4. Count of Subsets:**

The counter count is incremented whenever a valid subset is formed (including the empty subset).
Finally, the count is adjusted by subtracting 1 to exclude the empty subset from the result.

# Complexity
- Time complexity:
O(2^N)

- Space complexity:
O(N)

# Code
```Python []
class Solution:
    def beautifulSubsets(self, nums: List[int], k: int) -> int:
        # nums = [2,4,6]
        # k = 2
        # [], [2], [4], [6], [2, 4], [2, 6], [4, 6], [2, 4, 6]
        # [2], [4], [6], [2, 6] -> 4 ans
        # SOLUTION
        # num - k or n + k

        count = 0
        lenNums = len(nums)

        def explore(index):
            nonlocal count
            if lenNums == index:
                count += 1
                return

            num = nums[index]

            if num - k not in visited and num + k not in visited:
                visited[num] += 1
                explore(index + 1)
                visited[num] -= 1
                if visited[num] == 0:
                    del visited[num]

            explore(index + 1)

        visited = defaultdict(int)
        explore(0)
        return count - 1

```
```Java []
public class Solution {
    private int count;
    private Map<Integer, Integer> visited;

    public Solution() {
        this.count = 0;
        this.visited = new HashMap<>();
    }

    public int beautifulSubsets(int[] nums, int k) {
        explore(nums, k, 0);
        return count - 1; // Subtract 1 to exclude the empty subset
    }

    private void explore(int[] nums, int k, int index) {
        if (index == nums.length) {
            count++;
            return;
        }

        int num = nums[index];

        if (!visited.containsKey(num - k) && !visited.containsKey(num + k)) {
            visited.put(num, visited.getOrDefault(num, 0) + 1);
            explore(nums, k, index + 1);
            visited.put(num, visited.get(num) - 1);
            if (visited.get(num) == 0) {
                visited.remove(num);
            }
        }

        explore(nums, k, index + 1);
    }
}
```
```Go []
func beautifulSubsets(nums []int, k int) int {
	count := 0
	lenNums := len(nums)
	visited := make(map[int]int)

	var explore func(index int)
	explore = func(index int) {
		if index == lenNums {
			count++
			return
		}

		num := nums[index]

		if _, exists1 := visited[num-k]; !exists1 {
			if _, exists2 := visited[num+k]; !exists2 {
				visited[num]++
				explore(index + 1)
				visited[num]--
				if visited[num] == 0 {
					delete(visited, num)
				}
			}
		}

		explore(index + 1)
	}

	explore(0)
	return count - 1 // Subtract 1 to exclude the empty subset
}
```
```Kotlin []
class Solution {
    private var count = 0
    private val visited = mutableMapOf<Int, Int>()

    fun beautifulSubsets(nums: IntArray, k: Int): Int {
        count = 0
        explore(nums, k, 0)
        return count - 1 // Subtract 1 to exclude the empty subset
    }

    private fun explore(nums: IntArray, k: Int, index: Int) {
        if (index == nums.size) {
            count++
            return
        }

        val num = nums[index]

        if (!visited.containsKey(num - k) && !visited.containsKey(num + k)) {
            visited[num] = visited.getOrDefault(num, 0) + 1
            explore(nums, k, index + 1)
            visited[num] = visited[num]!! - 1
            if (visited[num] == 0) {
                visited.remove(num)
            }
        }

        explore(nums, k, index + 1)
    }
}
```
```C++ []
class Solution {
public:
    int beautifulSubsets(vector<int>& nums, int k) {
        count = 0;
        explore(nums, k, 0);
        return count - 1; // Subtract 1 to exclude the empty subset
    }

private:
    int count;
    unordered_map<int, int> visited;

    void explore(vector<int>& nums, int k, int index) {
        if (index == nums.size()) {
            count++;
            return;
        }

        int num = nums[index];

        if (visited.find(num - k) == visited.end() &&
            visited.find(num + k) == visited.end()) {
            visited[num]++;
            explore(nums, k, index + 1);
            visited[num]--;
            if (visited[num] == 0) {
                visited.erase(num);
            }
        }

        explore(nums, k, index + 1);
    }
};
```

# Please upvote

![DALL\xB7E 2024-05-22 20.34.12 - A vibrant and colorful illustration of an upvote icon. The icon is a bold, upward-pointing arrow with a slight 3D effect, giving it a sense of depth. .webp](./images/0.webp)

# 💯Faster✅💯Lesser✅2 Methods🧠Detailed Approach🎯Two Pointer🔥Python🐍Java☕C++😎

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 55
**Link:** [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5098710/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5098710/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share 2 ways to solve this question with detailed explanation of each approach:

# \uD83C\uDFAFProblem Explaination: 
You are given an array of integers. Your task is to find the largest positive integer in the array such that its negative counterpart also exists in the array. If such a pair exists, return the largest positive integer; otherwise, return -1.

### \uD83D\uDCE5Input:

- An array of integers `nums`.
- Each integer `nums[i]` represents an element of the array.

### \uD83D\uDCE4Output:

- An integer representing the largest positive integer satisfying the given condition. If no such integer exists, return -1.

# \uD83D\uDD0D Methods To Solve This Problem:
I'll be covering two different methods to solve this problem:
1. Sorting
2. Two Pointers

# 1\uFE0F\u20E3 Sorting: 

### Approach\uD83E\uDD13:
- Sort the array in ascending order.
- Iterate through the sorted array from the end.
- Return the first positive integer and its negative counterpart.
### Complexity\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDD2C:
- \u23F0 Time complexity: O(n log n) due to sorting.
- \uD83C\uDF0C Space Complexity: O(1)

<!-- ### Algorithm\uD83E\uDD13:

1. Initialize an empty list to store rectangles.
2. Iterate through each cell in the grid:
   - If a cell contains `1` and hasn't been visited:
     - Initiate a DFS from that cell to explore the connected farmland.
     - During DFS, keep track of the boundaries (min/max row and column) of the current region.
     - Once DFS completes for a region, record the rectangle's coordinates.
3. Implement the DFS function recursively or using a stack to traverse adjacent cells.
4. Return the list of identified rectangles. -->

<!-- # Complexity
- \u23F1\uFE0F Time Complexity: `O(n)` where n is the number of pairs in the list.
 -->
<!-- - \uD83D\uDE80 Space Complexity: `O(n)` for the HashSet. -->

# Code\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)
        for i in range(n-1, -1, -1):
            if nums[i] > 0 and -nums[i] in nums:
                return nums[i]
        return -1  # If no such pair found
```
```Java []
class Solution {
    public int findMaxK(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        for (int i = n-1; i >= 0; i--) {
            if (nums[i] > 0 && Arrays.binarySearch(nums, -nums[i]) >= 0) {
                return nums[i];
            }
        }
        return -1;  // If no such pair found
    }
}
```
```C++ []
class Solution {
public:
    int findMaxK(std::vector<int>& nums) {
        std::sort(nums.begin(), nums.end());
        int n = nums.size();
        for (int i = n-1; i >= 0; i--) {
            if (nums[i] > 0 && std::binary_search(nums.begin(), nums.end(), -nums[i])) {
                return nums[i];
            }
        }
        return -1;  // If no such pair found
    }
};
```

# 2\uFE0F\u20E3  Two Pointers:
### Approach\uD83D\uDE0E:
- Sort the array in ascending order.
- Use two pointers, one starting from the beginning and one from the end.
- Move the pointers towards each other until you find a positive integer with its negative counterpart.
- Keep track of the largest positive integer found.
### Complexity\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDD2C:
- \u23F0 Time complexity: O(n log n) due to sorting.
- \uD83C\uDF0C Space Complexity: O(1)

<!-- 
### Algorithm\uD83D\uDE0E:

1. Initialize a queue (`queue`) to perform BFS and a set (`visited`) to keep track of visited cells.
2. Iterate through each cell `(i, j)` in the grid:
   - If `land[i][j]` is `1` and `(i, j)` is not visited:
     - Initialize `min_row`, `min_col`, `max_row`, `max_col` to the current cell `(i, j)`.
     - Enqueue `(i, j)` into the queue and mark it as visited.
     - While the queue is not empty:
       - Dequeue a cell `(cur_i, cur_j)` from the queue.
       - Explore its four neighboring cells `(nx, ny)` (up, down, left, right).
       - If `(nx, ny)` is within the grid bounds and `land[nx][ny]` is `1` and not visited:
         - Enqueue `(nx, ny)`.
         - Mark `(nx, ny)` as visited.
         - Update `min_row`, `min_col`, `max_row`, `max_col` based on `(nx, ny)`.
     - After BFS completes for the current region, record the rectangle `[min_row, min_col, max_row, max_col]`.
3. Return the list of identified rectangles. -->

<!-- # Complexity
- \u23F1\uFE0F Time Complexity: `O(n)` where n is the number of pairs in the list.

- \uD83D\uDE80 Space Complexity: `O(n)` for the two lists. -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        nums.sort()
        left, right = 0, len(nums) - 1
        max_k = float('-inf')
        while left < right:
            if nums[left] + nums[right] == 0:
                max_k = max(max_k, nums[right])
                left += 1
                right -= 1
            elif nums[left] + nums[right] < 0:
                left += 1
            else:
                right -= 1
        return max_k if max_k != float('-inf') else -1  # If no such pair found
```
```Java []
class Solution {
    public int findMaxK(int[] nums) {
        Arrays.sort(nums);
        int left = 0, right = nums.length - 1;
        int maxK = Integer.MIN_VALUE;
        while (left < right) {
            int sum = nums[left] + nums[right];
            if (sum == 0) {
                maxK = Math.max(maxK, nums[right]);
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
        return maxK != Integer.MIN_VALUE ? maxK : -1;  // If no such pair found
    }
}

```
```C++ []
class Solution {
public:
    int findMaxK(std::vector<int>& nums) {
        std::sort(nums.begin(), nums.end());
        int left = 0, right = nums.size() - 1;
        int maxK = std::numeric_limits<int>::min();
        while (left < right) {
            int sum = nums[left] + nums[right];
            if (sum == 0) {
                maxK = std::max(maxK, nums[right]);
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
        return maxK != std::numeric_limits<int>::min() ? maxK : -1;  // If no such pair found
    }
};
```
# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/Mohammed_Raziullah_Ansari/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA
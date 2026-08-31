# 💯Faster✅💯Lesser✅2 Methods🧠Detailed Approach🎯Brute Force🔥Recursion🔥Python🐍Java☕C++😎

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 104
**Link:** [https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/5182332/](https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/5182332/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share 2 ways to solve this question with detailed explanation of each approach:

# \uD83C\uDFAFProblem Explaination: 
The `Sum of All Subset XOR Totals` problem requires calculating the sum of XOR values for all possible subsets of a given list of integers.

- **Subset**: A subset of a set is a collection of elements that can be derived by selecting zero or more elements from the set.
- **XOR (Exclusive OR)**: An operation that takes two bits and returns 1 if they are different, and 0 if they are the same.

For each subset of the given list, you need to calculate the XOR of all the elements in that subset. The final result is the sum of these XOR values for all possible subsets.
### \uD83D\uDCE5Input:
- A list of integers `nums`.
### \uD83D\uDCE4Output:
- An integer representing the sum of XOR values of all subsets of the given list.
# \uD83D\uDD0D Methods To Solve This Problem:
I'll be covering two different methods to solve this problem:
1. Brute Force
2. Recursion

# 1\uFE0F\u20E3 Brute Force: 
## \uD83E\uDDE0Thinking Behind the Solution:
1. **Brute Force Enumeration**:
   - The problem requires finding the sum of XOR values for all possible subsets of a given list of integers.
   - A straightforward approach is to generate all possible subsets and compute the XOR values for each subset.

2. **Bit Manipulation for Subset Generation**:
   - Each subset can be represented by a binary number, where each bit indicates whether an element is included in the subset.
   - For a list of length \\( n \\), there are \\( 2^n \\) possible subsets.
   - We can iterate through all binary numbers from \\( 0 \\) to \\( 2^n - 1 \\), and each number corresponds to a unique subset.

3. **Calculating XOR for Each Subset**:
   - For each subset represented by a binary number, we iterate through its bits.
   - If a bit is set (i.e., equal to \\( 1 \\)), we include the corresponding element from the list in the XOR calculation.
   - The XOR of all included elements in the subset is computed.

4. **Summing XOR Values**:
   - We sum the XOR values obtained for each subset to get the final result, which is the sum of XOR values for all possible subsets.

## \u2705Approach:
1. **Generate All Subsets**:
    - Use a loop to iterate from `0` to `2^n - 1` (where `n` is the length of the list). Each number in this range represents a possible subset.
    - For each number, the binary representation indicates which elements are included in the subset (e.g., `101` means include the first and third elements).
2. **Calculate XOR for Each Subset**:
    - For each subset represented by a number, iterate through its bits.
    - If a bit is set (i.e., `1`), include the corresponding element from the list in the XOR calculation.
3. **Sum the XOR Values**:
    - Add the XOR value of each subset to the total sum.

<!-- ### Complexity\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDD2C:
- \u23F0 Time complexity: O(n log n) due to sorting.
- \uD83C\uDF0C Space Complexity: O(1) -->

# Code\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        n = len(nums)
        total_sum = 0
        # Iterate through all possible subsets
        for i in range(1 << n):
            subset_xor = 0
            for j in range(n):
                # Check if the j-th element is in the i-th subset
                if i & (1 << j):
                    subset_xor ^= nums[j]
            total_sum += subset_xor
        return total_sum

```
```Java []
class Solution {
    public int subsetXORSum(int[] nums) {
        int n = nums.length;
        int totalSum = 0;
        // Iterate through all possible subsets
        for (int i = 0; i < (1 << n); i++) {
            int subsetXor = 0;
            for (int j = 0; j < n; j++) {
                // Check if the j-th element is in the i-th subset
                if ((i & (1 << j)) != 0) {
                    subsetXor ^= nums[j];
                }
            }
            totalSum += subsetXor;
        }
        return totalSum;
    }
}
```
```C++ []
class Solution {
public:
    int subsetXORSum(vector<int>& nums) {
        int n = nums.size();
        int totalSum = 0;
        // Iterate through all possible subsets
        for (int i = 0; i < (1 << n); i++) {
            int subsetXor = 0;
            for (int j = 0; j < n; j++) {
                // Check if the j-th element is in the i-th subset
                if (i & (1 << j)) {
                    subsetXor ^= nums[j];
                }
            }
            totalSum += subsetXor;
        }
        return totalSum;
    }
};
```
# Let's walkthrough\uD83D\uDEB6\uD83C\uDFFB\u200D\u2642\uFE0F the implementation process with an example for better understanding\uD83C\uDFAF:
### \uD83D\uDCE5Input: `nums = [1, 3]`.

### \uD83D\uDCDAStep-by-Step Walkthrough:

1. **Initial Setup**:
   - `nums = [1, 3]`
   - `n = len(nums) = 2`
   - We will iterate through all possible subsets, represented by binary numbers from `0` to `2^n - 1` (i.e., `0` to `3`).

2. **Generating Subsets**:
   - We use a loop to iterate from `0` to `3`. Each number in this range represents a subset, where each bit of the number indicates whether the corresponding element in `nums` is included in the subset.

3. **Calculating XOR for Each Subset**:
   - For each subset, initialize `subset_xor` to `0`.
   - Check each bit of the number to decide whether to include the corresponding element from `nums` in the XOR calculation.

### \uD83D\uDCDADetailed Steps:

#### Iteration 1: i = 0 (Binary: 00)
- Subset: `[]` (no elements are included)
- `subset_xor = 0`
  - `j = 0`: `i & (1 << 0) = 0 & 1 = 0` (1 is not included)
  - `j = 1`: `i & (1 << 1) = 0 & 2 = 0` (3 is not included)
- Total XOR for this subset: `0`
- Add `0` to `total_sum`
- `total_sum = 0`

#### Iteration 2: i = 1 (Binary: 01)
- Subset: `[1]` (only the first element is included)
- `subset_xor = 0`
  - `j = 0`: `i & (1 << 0) = 1 & 1 = 1` (1 is included, XOR with `0` results in `1`)
  - `j = 1`: `i & (1 << 1) = 1 & 2 = 0` (3 is not included)
- Total XOR for this subset: `1`
- Add `1` to `total_sum`
- `total_sum = 0 + 1 = 1`

#### Iteration 3: i = 2 (Binary: 10)
- Subset: `[3]` (only the second element is included)
- `subset_xor = 0`
  - `j = 0`: `i & (1 << 0) = 2 & 1 = 0` (1 is not included)
  - `j = 1`: `i & (1 << 1) = 2 & 2 = 2` (3 is included, XOR with `0` results in `3`)
- Total XOR for this subset: `3`
- Add `3` to `total_sum`
- `total_sum = 1 + 3 = 4`

#### Iteration 4: i = 3 (Binary: 11)
- Subset: `[1, 3]` (both elements are included)
- `subset_xor = 0`
  - `j = 0`: `i & (1 << 0) = 3 & 1 = 1` (1 is included, XOR with `0` results in `1`)
  - `j = 1`: `i & (1 << 1) = 3 & 2 = 2` (3 is included, XOR with `1` results in `2`)
    - Note: `1 XOR 3 = 2`
- Total XOR for this subset: `2`
- Add `2` to `total_sum`
- `total_sum = 4 + 2 = 6`

### Final Result:
- The sum of all subset XOR totals for `nums = [1, 3]` is `6`.


# 2\uFE0F\u20E3  Recursion:
## \uD83E\uDDE0Thinking Behind the Solution:
1. **Recursive Exploration of Subsets**:
   - The problem requires calculating the sum of XOR values for all possible subsets of a given list of integers.
   - A natural way to explore all possible subsets is to use recursion, where at each step, we decide whether to include the current element in the subset or not.

2. **Depth-First Search (DFS) for Subset Generation**:
   - We can use a depth-first search (DFS) approach to explore the subset space.
   - Starting from the first element, we have two choices: either include it in the current subset or exclude it.
   - This decision process continues recursively for each element in the list.

3. **Recursive Function Definition**:
   - Define a recursive function `dfs(index, current_xor)` where `index` represents the current position in the list, and `current_xor` is the XOR value of the subset formed so far.
   - The base case of the recursion is when `index` reaches the end of the list. At this point, return the `current_xor` because the subset is complete.

4. **Combining Results from Recursive Calls**:
   - For each element at position `index`, make two recursive calls:
     - One including the element in the subset (i.e., `dfs(index + 1, current_xor ^ nums[index])`).
     - One excluding the element from the subset (i.e., `dfs(index + 1, current_xor)`).
   - Sum the results of these two recursive calls to get the total XOR sum for the subsets formed from this point onward.

5. **Initial Call and Result**:
   - Start the recursion from index `0` with an initial XOR value of `0`.
   - The final result is obtained by summing the XOR values of all subsets explored by the recursive function.

### \u2705Approach:
1. **Define the Recursive Function**:
    - The function `dfs(index, current_xor)` takes the current index in the list and the current XOR value of the subset being built.
2. **Base Case**:
    - When the index reaches the end of the list, return the current XOR value because the subset is complete.
3. **Recursive Case**:
    - Calculate the XOR value if the current element is included in the subset.
    - Calculate the XOR value if the current element is excluded from the subset.
    - Return the sum of both results.
4. **Initial Call**:
    - Start the recursion from index `0` with an initial XOR value of `0`.
<!-- ### Complexity\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDD2C:
- \u23F0 Time complexity: O(n log n) due to sorting.
- \uD83C\uDF0C Space Complexity: O(1) -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        def dfs(index, current_xor):
            # Base case: when all elements have been considered
            if index == len(nums):
                return current_xor
            # Include nums[index] in the subset
            include = dfs(index + 1, current_xor ^ nums[index])
            # Exclude nums[index] from the subset
            exclude = dfs(index + 1, current_xor)
            return include + exclude
        
        return dfs(0, 0)

```
```Java []
class Solution {
    public int subsetXORSum(int[] nums) {
        return dfs(nums, 0, 0);
    }
    
    private int dfs(int[] nums, int index, int currentXor) {
        // Base case: when all elements have been considered
        if (index == nums.length) {
            return currentXor;
        }
        // Include nums[index] in the subset
        int include = dfs(nums, index + 1, currentXor ^ nums[index]);
        // Exclude nums[index] from the subset
        int exclude = dfs(nums, index + 1, currentXor);
        return include + exclude;
    }
}

```
```C++ []
class Solution {
public:
    int subsetXORSum(vector<int>& nums) {
        return dfs(nums, 0, 0);
    }
    
private:
    int dfs(vector<int>& nums, int index, int currentXor) {
        // Base case: when all elements have been considered
        if (index == nums.size()) {
            return currentXor;
        }
        // Include nums[index] in the subset
        int include = dfs(nums, index + 1, currentXor ^ nums[index]);
        // Exclude nums[index] from the subset
        int exclude = dfs(nums, index + 1, currentXor);
        return include + exclude;
    }
};

```
# Let's walkthrough\uD83D\uDEB6\uD83C\uDFFB\u200D\u2642\uFE0F the implementation process with an example for better understanding\uD83C\uDFAF:
### \uD83D\uDCE5Input: `nums = [1, 3]`

### \uD83D\uDCDAStep-by-Step Walkthrough

1. **Initial Setup**:
   - `nums = [1, 3]`
   - Start recursion with `index = 0` and `current_xor = 0`.

### \uD83D\uDCDADetailed Steps:

#### Initial Call:
- Call `dfs(index = 0, current_xor = 0)`

#### Step 1: index = 0, current_xor = 0
- Two choices:
  1. Include `nums[0]` (which is 1) in the subset:
     - Call `dfs(index = 1, current_xor = 0 ^ 1 = 1)`
  2. Exclude `nums[0]` from the subset:
     - Call `dfs(index = 1, current_xor = 0)`

#### Step 2a: index = 1, current_xor = 1
- Two choices:
  1. Include `nums[1]` (which is 3) in the subset:
     - Call `dfs(index = 2, current_xor = 1 ^ 3 = 2)`
  2. Exclude `nums[1]` from the subset:
     - Call `dfs(index = 2, current_xor = 1)`

#### Step 2b: index = 1, current_xor = 0
- Two choices:
  1. Include `nums[1]` (which is 3) in the subset:
     - Call `dfs(index = 2, current_xor = 0 ^ 3 = 3)`
  2. Exclude `nums[1]` from the subset:
     - Call `dfs(index = 2, current_xor = 0)`

#### Step 3: Base Cases
- When `index = 2`, we have reached the end of the list, and we return the `current_xor`.

### Recursion Unfolded:

#### Path 1:
- `dfs(0, 0)` -> `dfs(1, 1)` -> `dfs(2, 2)` returns `2` (Include 1, Include 3)
- `dfs(0, 0)` -> `dfs(1, 1)` -> `dfs(2, 1)` returns `1` (Include 1, Exclude 3)
- Sum for this path: `2 + 1 = 3`

#### Path 2:
- `dfs(0, 0)` -> `dfs(1, 0)` -> `dfs(2, 3)` returns `3` (Exclude 1, Include 3)
- `dfs(0, 0)` -> `dfs(1, 0)` -> `dfs(2, 0)` returns `0` (Exclude 1, Exclude 3)
- Sum for this path: `3 + 0 = 3`

### Total Sum:
- Sum from all paths: `3 (Path 1) + 3 (Path 2) = 6`

### Detailed Recursive Calls:

1. **First Call**:
   - `dfs(0, 0)`: Start at the first element with `current_xor = 0`.

2. **Include First Element (1)**:
   - `dfs(1, 1)`: Include `1`, so `current_xor` becomes `0 ^ 1 = 1`.

3. **Include Second Element (3)**:
   - `dfs(2, 2)`: Include `3`, so `current_xor` becomes `1 ^ 3 = 2`.
   - Base case: return `2`.

4. **Exclude Second Element (3)**:
   - `dfs(2, 1)`: Exclude `3`, so `current_xor` remains `1`.
   - Base case: return `1`.

5. **Sum for Including First Element**:
   - Sum of including first element paths: `2 (include 3) + 1 (exclude 3) = 3`.

6. **Exclude First Element (1)**:
   - `dfs(1, 0)`: Exclude `1`, so `current_xor` remains `0`.

7. **Include Second Element (3)**:
   - `dfs(2, 3)`: Include `3`, so `current_xor` becomes `0 ^ 3 = 3`.
   - Base case: return `3`.

8. **Exclude Second Element (3)**:
   - `dfs(2, 0)`: Exclude `3`, so `current_xor` remains `0`.
   - Base case: return `0`.

9. **Sum for Excluding First Element**:
   - Sum of excluding first element paths: `3 (include 3) + 0 (exclude 3) = 3`.

10. **Total Sum**:
    - Final total sum: `3 (including 1) + 3 (excluding 1) = 6`.

# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/Mohammed_Raziullah_Ansari/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA
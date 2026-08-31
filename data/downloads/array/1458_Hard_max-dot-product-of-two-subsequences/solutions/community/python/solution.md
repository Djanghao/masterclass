# 🚀92.14% || DP Recursive & Iterative || Explained Intuition🚀

**Author:** MohamedMamdouh20
**Votes:** 42
**Link:** [https://leetcode.com/problems/max-dot-product-of-two-subsequences/solutions/4143693/](https://leetcode.com/problems/max-dot-product-of-two-subsequences/solutions/4143693/)

---

# Porblem Description

Given two arrays, `nums1` and `nums2`. The task is to find the **maximum** dot product that can be obtained by taking **non-empty** **subsequences** of equal length from `nums1` and `nums2`.

A **subsequence** of an array is a new array obtained by deleting some (or none) of the elements from the original array **without changing the order** of the remaining elements. 
The **goal** is to **maximize** the dot product of the selected subsequences by choosing the elements wisely.

- **Constraints:**
    - `1 <= nums1.length, nums2.length <= 500`
    - `-1000 <= nums1[i], nums2[i] <= 1000`


---

# Dynamic Programming
![leet_dp.jpg](./images/0.jpeg)

I love this image. \uD83D\uDE02


**Dynamic Programming** is a powerful technique that involves **caching** pre-computed results, thereby **eliminating** the need for redundant computations and significantly **optimizing** time complexity.
There are **two primary approaches** to Dynamic Programming:

## Recursive Approach (Top-Down)
We can think of Recursive Approach as **breaking** hard bricks into **small** rocks. but, how this apply to our problem ?
We can **break** our **complex problem** into **easier** ones. For our problem, we can start at the **beginning** of the arrays and try to find the optimal answer for the subarrays **starting** from our current indices. until we reach the **end** of the arryas. and collect the answers together to form the optimal answer.

## Iterative Approach (Bottom-Up)
We can think of Iterative Approach as **building** high building from small bricks. but, how this also apply to our problem ?
We can **solve** our **complex problem** by solving **easier** ones first and build until we reach our complex problem. For our problem, we can start from the **end** of our arrays and try to find the optimal answer for the subarrays **starting** from our current indices until the **beginning** of array. 

---



# Intuition

Hi there my friends, \uD83D\uDE03

Let's take a look on our today's interesting problem.\uD83D\uDC40
The problem to find two subsequence that their dot product is maximum.

For this problem, Their is nothing to try than trying all possible **combinations** of subsequences from the two input arrays.
I believe that will give as the **maximum** dot product but we can see that it is **inefficient**.\uD83D\uDE14
How can we **optimize** it? I will pretend that I didn't say the approach in the title or in the previous section\uD83D\uDE02

Let's see next example together.
```
EX: nums1 = [2,1,-2,5], nums2 = [3,0,-6]
Let's try different subsequences: 
[2, -2] & [3, -6] -> 18
[2, -2] & [0, -6] -> 12
[1, -2] & [3, -6] -> 15
[1, -2] & [0, -6] -> 13
Answer = 18
```

In all **previous** subsequences, we notice something **shared** between them.\uD83E\uDD2F
Yes, The second half of all subsequences is **repeated** which mean there are repeated subproblems we can make use of.\uD83E\uDD14

We are here todya with our hero **Dynamic Programming**.\uD83E\uDDB8\u200D\u2642\uFE0F
I think you are surprised like me \uD83D\uDE02

For the **DP** solution, we will try all **combinations** of subsequences but we won't **calculate** all the combinations' results.
What does that mean?\uD83E\uDD14
Like we say in the previous example we have part of the subsequences is **repeated** so we will **cache** the optimal result for that part and whenever we encounter the same subproblem of that part again we will only return the optimal result.\uD83D\uDE03

```
EX: nums1 = [2,1,-2,5,-1,4], nums2 = [3,0,-6,5,2]
Let's try different subsequences: 
[2, -2, 4] & [3, -6, 5] -> 38 = 18 + 20
[2, -2, 4] & [0, -6, 5] -> 32 = 12 + 20
[1, -2, 4] & [3, -6, 5] -> 35 = 15 + 20 
[1, -2, 4] & [0, -6, 5] -> 33 = 13 + 20
Answer = 38
```
We can see here that we added new two numbers (new subarray) in each array from the previous example.
**BUT** we can notice that those subarrays have always the **best** answer which is `20` and won't change so we will **cache** it and whenever we want the best solution from them we will return simply `20`.

- For the **DP** solution, we will start with **two pointers** one for each array and for the pointers we have **three** options:
    - **multiply** the numbers that the pointers point at then move the both pointers to next element indicating that we are **taking** them in the final subsequences
    - **move first** pointer to the next element indicating that we are **deleting** it from the final subsequences
    - **move second** pointer to the next element indicating that we are **deleting** it from the final subsequences

Then, there is only **one edge case** that we must handle its when one of the arrays is all **negative** numbers and the other is all **positive** numbers.
our fuction will return `0` as an answer since it won't take any number of the **negative** array which means **empty** subsequence which is **invalid**.\uD83D\uDE14
```
EX: nums1 = [-2, -3, -1, -5], nums2 = [4, 2, 1, 5]
Answer -> -1 * 1 = -1
```
The answer is to get **maximum** element in **positive** array and **minimum** element in **negative** array then multiply them.

But what about both of the arrays are both negative numbers?\uD83E\uDD14
simply the dot product of any subsequence will be **positive** and we will have answer eventually unlike the previous case. 


And this is the solution for our today'S problem I hope that you understood it\uD83D\uDE80\uD83D\uDE80


---




# Approach
## DP Recursive (Top-Down)
1. Initialize a dynamic programming array `dp` of size `505x505` and some variables for the **size** and **maximums** and **minimums**.
2. Find the **maximum** and **minimum** values in both arrays to handle **special** case where all elements are negative in any of the arryas.
3. Call the recursive function `calculateDotProduct` with initial indices `0` and `0` to compute the **maximum** dot product:
    - **Base Cases:** returns `0`, as the end of an array has been reached.
    - **Memoization:** Checks if the result for the current indices is **already** calculated and stored in `dp`.
    - **Calculates** the dot product with three options:
        - Multiply the elements at the current indices in `nums1` and `nums2`, and recursively calculate the dot product for the next indices (`idx1 + 1`, `idx2 + 1`).
     - Calculate the dot product by moving to the next index in `nums2` while keeping the index in `nums1` unchanged.
     - Calculate the dot product by moving to the next index in `nums1` while keeping the index in `nums2` unchanged.
    - **Stores** the **maximum** dot product among the three options in `dp` for the current indices (`idx1`, `idx2`) then return.
4. Return the computed **maximum dot product** taht you got from the function.


## Complexity
- **Time complexity:** $$O(N * M)$$
Since we are trying all possible options in Dynamic Programming, The complexity is the product of the sizes of the arrays which we are trying all possible combinations of then which is `O(N * M)`.
- **Space complexity:** $$O(N * M)$$
Since we are storing the DP matrix and its size is `N * M` then complexity is `O(M * N)`.
where `N` is maximum size of first array and `M` is maximum size of second array.

---

## DP Iterative (Bottom-Up)
1. Initialize a dynamic programming array `dp` of size `505x505` and some variables for the **size** and **maximums** and **minimums**.
2. Find the **maximum** and **minimum** values in both arrays to handle **special** case where all elements are negative in any of the arryas.
3. Iterate through `nums1` and `nums2` in **reverse** order.
4. Calculate the dot product for each combination of elements and store the **maximum** among three options in `dotProductMatrix`.
5. Return the maximum dot product stored in `dotProductMatrix` for the initial indices `(0, 0)`.


## Complexity
- **Time complexity:** $$O(N * M)$$
Since we are trying all possible options in Dynamic Programming, The complexity is the product of the sizes of the arrays which we are trying all possible combinations of then which is `O(N * M)`.
- **Space complexity:** $$O(N * M)$$
Since we are storing the DP matrix and its size is `N * M` then complexity is `O(M * N)`.
where `N` is maximum size of first array and `M` is maximum size of second array.


---




# Code
## DP Recursive (Top-Down)
```C++ []
class Solution {
public:
    int dp[505][505];  // Dynamic programming array
    int nums1_size, nums2_size;  // Sizes of nums1 and nums2 arrays

    // Recursive function to calculate the maximum dot product
    int calculateDotProduct(vector<int>& nums1, vector<int>& nums2, int idx1, int idx2) {
        if (idx1 == nums1_size || idx2 == nums2_size)
            return 0;

        if (~dp[idx1][idx2])
            return dp[idx1][idx2];

        // Calculate dot product for three options
        int option1 = nums1[idx1] * nums2[idx2] + calculateDotProduct(nums1, nums2, idx1 + 1, idx2 + 1);
        int option2 = calculateDotProduct(nums1, nums2, idx1, idx2 + 1);
        int option3 = calculateDotProduct(nums1, nums2, idx1 + 1, idx2);

        return dp[idx1][idx2] = max({option1, option2, option3});  // Store the maximum dot product
    }

    // Main function to calculate the maximum dot product
    int maxDotProduct(vector<int>& nums1, vector<int>& nums2) {
        nums1_size = nums1.size();
        nums2_size = nums2.size();

        int firstMax = INT_MIN;
        int secondMax = INT_MIN;
        int firstMin = INT_MAX;
        int secondMin = INT_MAX;

        // Calculate maximum and minimum values for nums1
        for (int num : nums1) {
            firstMax = max(firstMax, num);
            firstMin = min(firstMin, num);
        }
        // Calculate maximum and minimum values for nums2
        for (int num : nums2) {
            secondMax = max(secondMax, num);
            secondMin = min(secondMin, num);
        }

        // Check special cases where all elements are negative
        if ((firstMax < 0 && secondMin > 0) || (firstMin > 0 && secondMax < 0)) {
            return max(firstMax * secondMin, firstMin * secondMax);
        }

        memset(dp, -1, sizeof(dp));  // Initialize dp array with -1
        
        // Calculate the maximum dot product recursively
        return calculateDotProduct(nums1, nums2, 0, 0);
    }
};
```
```Java []
class Solution {
    private int[][] dp = new int[505][505];  // Dynamic programming array
    private int nums1Size, nums2Size;  // Sizes of nums1 and nums2 arrays

    // Recursive function to calculate the maximum dot product
    private int calculateDotProduct(int[] nums1, int[] nums2, int idx1, int idx2) {
        if (idx1 == nums1Size || idx2 == nums2Size)
            return 0;

        if (dp[idx1][idx2] != -1)
            return dp[idx1][idx2];

        // Calculate dot product for three options
        int option1 = nums1[idx1] * nums2[idx2] + calculateDotProduct(nums1, nums2, idx1 + 1, idx2 + 1);
        int option2 = calculateDotProduct(nums1, nums2, idx1, idx2 + 1);
        int option3 = calculateDotProduct(nums1, nums2, idx1 + 1, idx2);

        dp[idx1][idx2] = Math.max(Math.max(option1, option2), option3);  // Store the maximum dot product
        return dp[idx1][idx2];
    }

    // Main function to calculate the maximum dot product
    public int maxDotProduct(int[] nums1, int[] nums2) {
        nums1Size = nums1.length;
        nums2Size = nums2.length;

        int firstMax = Integer.MIN_VALUE;
        int secondMax = Integer.MIN_VALUE;
        int firstMin = Integer.MAX_VALUE;
        int secondMin = Integer.MAX_VALUE;

        // Calculate maximum and minimum values for nums1
        for (int num : nums1) {
            firstMax = Math.max(firstMax, num);
            firstMin = Math.min(firstMin, num);
        }
        // Calculate maximum and minimum values for nums2
        for (int num : nums2) {
            secondMax = Math.max(secondMax, num);
            secondMin = Math.min(secondMin, num);
        }

        // Check special cases where all elements are negative
        if ((firstMax < 0 && secondMin > 0) || (firstMin > 0 && secondMax < 0)) {
            return Math.max(firstMax * secondMin, firstMin * secondMax);
        }

        // Initialize dp array with -1
        for (int i = 0; i < 505; i++) {
            Arrays.fill(dp[i], -1);
        }

        // Calculate the maximum dot product recursively
        return calculateDotProduct(nums1, nums2, 0, 0);
    }
}
```
```Python []
class Solution:
    def __init__(self):
        self.dp = [[-1] * 505 for _ in range(505)]  # Dynamic programming array
        self.nums1_size = 0
        self.nums2_size = 0

    # Recursive function to calculate the maximum dot product
    def calculate_dot_product(self, nums1: list[int], nums2: list[int], idx1: int, idx2: int) -> int:
        if idx1 == self.nums1_size or idx2 == self.nums2_size:
            return 0

        if self.dp[idx1][idx2] != -1:
            return self.dp[idx1][idx2]

        # Calculate dot product for three options
        option1 = nums1[idx1] * nums2[idx2] + self.calculate_dot_product(nums1, nums2, idx1 + 1, idx2 + 1)
        option2 = self.calculate_dot_product(nums1, nums2, idx1, idx2 + 1)
        option3 = self.calculate_dot_product(nums1, nums2, idx1 + 1, idx2)

        self.dp[idx1][idx2] = max(option1, option2, option3)  # Store the maximum dot product
        return self.dp[idx1][idx2]


    def maxDotProduct(self, nums1: list[int], nums2: list[int]) -> int:
        self.nums1_size = len(nums1)
        self.nums2_size = len(nums2)

        first_max = float('-inf')
        second_max = float('-inf')
        first_min = float('inf')
        second_min = float('inf')

        # Calculate maximum and minimum values for nums1
        for num in nums1:
            first_max = max(first_max, num)
            first_min = min(first_min, num)
        # Calculate maximum and minimum values for nums2
        for num in nums2:
            second_max = max(second_max, num)
            second_min = min(second_min, num)

        # Check special cases where all elements are negative
        if (first_max < 0 and second_min > 0) or (first_min > 0 and second_max < 0):
            return max(first_max * second_min, first_min * second_max)

        # Initialize dp array with -1
        for i in range(505):
            for j in range(505):
                self.dp[i][j] = -1

        # Calculate the maximum dot product recursively
        return self.calculate_dot_product(nums1, nums2, 0, 0)
```


---


## DP Iterative (Bottom-Up)

```C++ []
class Solution {
public:
    int dotProductMatrix[505][505];  // Dynamic programming array
    int nums1_size, nums2_size;  // Sizes of nums1 and nums2 arrays

    int maxDotProduct(vector<int>& nums1, vector<int>& nums2) {
        nums1_size = nums1.size();
        nums2_size = nums2.size();

        int firstMax = INT_MIN;
        int secondMax = INT_MIN;
        int firstMin = INT_MAX;
        int secondMin = INT_MAX;

        // Calculate maximum and minimum values for nums1
        for (int num : nums1) {
            firstMax = max(firstMax, num);
            firstMin = min(firstMin, num);
        }
        // Calculate maximum and minimum values for nums2
        for (int num : nums2) {
            secondMax = max(secondMax, num);
            secondMin = min(secondMin, num);
        }

        // Check special cases where all elements are negative
        if ((firstMax < 0 && secondMin > 0) || (firstMin > 0 && secondMax < 0)) {
            return max(firstMax * secondMin, firstMin * secondMax);
        }

        memset(dotProductMatrix, 0, sizeof dotProductMatrix);  // Initialize the dot product matrix

        // Calculate dot products and populate the dot product matrix
        for (int i = nums1_size - 1; i >= 0; i--) {
            for (int j = nums2_size - 1; j >= 0; j--) {
                int currentDotProduct = nums1[i] * nums2[j] + dotProductMatrix[i + 1][j + 1];
                dotProductMatrix[i][j] = max({currentDotProduct, dotProductMatrix[i + 1][j], dotProductMatrix[i][j + 1]});
            }
        }
        return dotProductMatrix[0][0];  // Return the maximum dot product
    }
};
```
```Java []
class Solution {
    int[][] dotProductMatrix = new int[505][505];  // Dynamic programming array
    int nums1Size, nums2Size;  // Sizes of nums1 and nums2 arrays

    public int maxDotProduct(int[] nums1, int[] nums2) {
        nums1Size = nums1.length;
        nums2Size = nums2.length;

        int firstMax = Integer.MIN_VALUE;
        int secondMax = Integer.MIN_VALUE;
        int firstMin = Integer.MAX_VALUE;
        int secondMin = Integer.MAX_VALUE;

        // Calculate maximum and minimum values for nums1
        for (int num : nums1) {
            firstMax = Math.max(firstMax, num);
            firstMin = Math.min(firstMin, num);
        }
        
        // Calculate maximum and minimum values for nums2
        for (int num : nums2) {
            secondMax = Math.max(secondMax, num);
            secondMin = Math.min(secondMin, num);
        }

        // Check special cases where all elements are negative
        if ((firstMax < 0 && secondMin > 0) || (firstMin > 0 && secondMax < 0)) {
            return Math.max(firstMax * secondMin, firstMin * secondMax);
        }

        // Initialize the dot product matrix with 0
        for (int i = 0; i < 505; i++) {
            Arrays.fill(dotProductMatrix[i], 0);
        }

        // Calculate dot products and populate the dot product matrix
        for (int i = nums1Size - 1; i >= 0; i--) {
            for (int j = nums2Size - 1; j >= 0; j--) {
                int currentDotProduct = nums1[i] * nums2[j] + dotProductMatrix[i + 1][j + 1];
                dotProductMatrix[i][j] = Math.max(Math.max(currentDotProduct, dotProductMatrix[i + 1][j]), dotProductMatrix[i][j + 1]);
            }
        }
        return dotProductMatrix[0][0];  // Return the maximum dot product
    }
}
```
```Python []
class Solution:
    def maxDotProduct(self, nums1: List[int], nums2: List[int]) -> int:
        dot_product_matrix = [[0] * 505 for _ in range(505)]  # Dynamic programming array
        nums1_size = len(nums1)
        nums2_size = len(nums2)

        first_max = float('-inf')
        second_max = float('-inf')
        first_min = float('inf')
        second_min = float('inf')

        # Calculate maximum and minimum values for nums1
        for num in nums1:
            first_max = max(first_max, num)
            first_min = min(first_min, num)

        # Calculate maximum and minimum values for nums2
        for num in nums2:
            second_max = max(second_max, num)
            second_min = min(second_min, num)

        # Check special cases where all elements are negative
        if (first_max < 0 and second_min > 0) or (first_min > 0 and second_max < 0):
            return max(first_max * second_min, first_min * second_max)

        # Initialize the dot product matrix with 0
        for i in range(505):
            dot_product_matrix[i] = [0] * 505

        # Calculate dot products and populate the dot product matrix
        for i in range(nums1_size - 1, -1, -1):
            for j in range(nums2_size - 1, -1, -1):
                current_dot_product = nums1[i] * nums2[j] + dot_product_matrix[i + 1][j + 1]
                dot_product_matrix[i][j] = max(current_dot_product, dot_product_matrix[i + 1][j], dot_product_matrix[i][j + 1])

        return dot_product_matrix[0][0]  # Return the maximum dot product
```




![leet_sol.jpg](./images/1.jpeg)

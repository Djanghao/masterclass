# Intuitive Binary Search approach | Optimized solution

**Author:** HarshKadam
**Votes:** 1
**Link:** [https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/4031617/](https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/4031617/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem's objective is to efficiently find the median element within this row wise sorted  matrix. To achieve this we can easily do a binary search, taking advantage of the sorted nature of the matrix. It continually refines the search space by calculating midpoints and determining how many elements in the matrix are less than or equal to each midpoint. By comparing this count to the desired median position, the algorithm intelligently adjusts the search range. This method ensures a rapid and effective way to identify the median element within the sorted 2D matrix, making it an efficient and optimized solution.

# Approach
<!-- Describe your approach to solving the problem. -->
 Here's my approach to solving this problem:
- ## **Initialize Variables:**

Get the number of rows M and columns N in the matrix.
Initialize low to 0 and high to large value (1e6 as per contsrtaint).These values define the initial search range.
Calculate medianIndex as (M * N) / 2, representing the index of the median element if the matrix were flattened into a 1D array.

- ## Binary Search Approach:

Employ a binary search approach to efficiently find the median element.
Binary search is ideal for searching in a sorted range.

## - **Binary Search Loop:**

Execute a binary search loop while low is less than or equal to high.
In each iteration:
Calculate mid as the midpoint between low and high.
Initialize a variable count to 0 to keep track of the number of elements in the matrix less than or equal to mid.

## - **Counting Elements Less Than or Equal to mid:**

For each row in the matrix, count the number of elements that are less than or equal to mid using the upperBound function.
Add these counts to the count variable.
This step determines how many elements in the entire matrix are less than or equal to mid.

## - **Updating low or high:**

Based on the value of count (the count of elements less than or equal to mid in the entire matrix), adjust the search range:
If count is less than or equal to medianIndex, it means that the median element must be greater than mid, so update low to mid + 1 to search in the higher range.
If count is greater than medianIndex, it means that the median element must be less than or equal to mid, so update high to mid - 1 to search in the lower range.

## - **Termination of the Loop:**

The binary search loop continues until low is no longer less than or equal to high.
At this point, low holds the value of the median element.

## - **Return the Median:**

Finally, return the value of low as the median element in the 2D matrix.

In summary, this code effectively uses binary search to efficiently locate the median element in a sorted 2D matrix. By iteratively narrowing down the search space based on the number of elements less than or equal to the midpoint, it identifies the median element with a runtime complexity of O(M * log(N)), where M is the number of rows and N is the number of columns in the matrix.

# Complexity
- Time complexity: O( Log(10^6) * M * Log(N) )
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:

    // Function to find the count of elements less than or equal to 'num' in a sorted vector 'arr'
    int upperBound(vector<int>& arr, int low, int high, int num)
    {
        // Use the upper_bound function to find the position of 'num' in the sorted vector
        int count  = upper_bound(arr.begin(), arr.end(), num) - arr.begin();
        return count;
    }

    // Function to find the median value in a matrix
    int matrixMedian(vector<vector<int>>& grid) {

        int M = grid.size();      // Number of rows in the matrix
        int N = grid[0].size();   // Number of columns in the matrix
        int low = 0;              // The lowest possible median value
        int high = 1e6;           // The highest possible median value
        int medianIndex = (M * N) / 2; // Index of the median value (assuming a flat vector)

        while (low <= high)
        {
            int mid = low + (high - low) / 2; // Calculate the middle value

            int count = 0; // Initialize a count for elements less than or equal to 'mid'

            // Loop through each row in the matrix and use upperBound function to count elements
            for (int i = 0; i < M; i++)
            {
                count += upperBound(grid[i], low, high, mid);
            }

            // If the count is less than or equal to the median index, update 'low'
            if (count <= medianIndex)
                low = mid + 1;
            // If the count is greater than the median index, update 'high'
            else
                high = mid - 1;
        }
        // low will eventually converge to the median value, return it
        return low;
    }
};
```
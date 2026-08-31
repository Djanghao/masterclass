# Java m log(n) solution

**Author:** stysler
**Votes:** 5
**Link:** [https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/4984829/](https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/4984829/)

---

# Intuition
There is couple of key observations:

#### Inner arrays are sorted in ascending order
Grid is a 2D array which is just array of arrays. And every inner array is sorted in ascending order

#### Location of the median value and number of elements before it
If we flatten the 2D array into 1D array and sort it the median value will be at index `(m * n) / 2`, which also means that there is `(m * n)/2` elements with value less than or equal (becuase arrays can contain duplicates) than the median value that we are looking for.

#### Finding min and max value of the grid (range within which is our median value)
we can find min value of the grid by just looking at each inner array's first item `innerArray[0]` and take min of all of them. Same for finding max value of grid - take all last items of inner array `innerArray[innerArray.length - 1]` and take a max value of them. This helps is to determine min and max value of the grid. This means our median value is somewhere between these two.

## Putting it all togetther
Now we know where the median value would be if 2D array was flattened to 1D array. But we cannot do that because that would take `O(m * n)`. However, we can do binary search on each inner array to find how many elements are less than or equal to our candidate, then sum the total. By comparing this value with number of number of elements before median value we will find out if we should contract the search range from left or right.

#### TLDR
Find the range of array (min and max), find median value loction (as if array was flattened) then binary search the value. In each iteration of binary search check how many values would be lesser or equal to our candidate in each inner array (via binary search - finding last index of candidate) and compare it to the value of elementes before median value searched in order to determine whether range should be contracted from left or right.


# Complexity
- Time complexity: $$O(m+n) + O(log(max-min)) * O(mlogn) => ~O(m logn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

$$O(m+n)$$ does not contribute to final time complexity because it would be linear time, while other terms have higher asymptotic complexity.

Then $$O(log(max-min))$$ uses min value and max value and could be written as $$O(log(10^6 - 1))$$ because max value can be $$10^6$$ and min value could be $$1$$. So this value could be technically constant since we have `log` of a constant.

So we have $$ O(m + n) + O(log(10^6 - 1)) * O(m log n)$$. We can drop the first term since it does not contribute to asymptotic complexity and we are left with $$O(log(10^6 - 1)) * O(m log n)$$. And we determined above that $$O(log(10^6 - 1))$$ is a constant, which would mean that we can drop it as well. And we are left with $$ O(m log n)$$

- Space complexity: $$O(1)$$
We are using only constants. 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int matrixMedian(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        // First find min and max values of the grid.
        // Min value is min of all inner arrays at index 0
        // Max value is max of all inner arrays at last index
        // The operation is only O(m)
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        for(int[] arr : grid){
            min = Math.min(arr[0], min);
            max = Math.max(arr[n-1], max);
        }

        
        // Represents total number of elements in flattened sorted array before median value. (also median index)
        int elementsBeforeMedianValue = m * n / 2;

        // Perform binary search on values
        int lowVal = min;
        int highVal = max;

        while(lowVal <= highVal) {
            // Represents the middle value between low and high
            int midVal = lowVal + (highVal - lowVal) / 2;

            // Total count of all elements which are smaller or equal to mid
            int totalCount = 0;

            for(int i = 0; i < m; i++){
                totalCount += getTotalElementsLessThanOrEqual(grid[i], midVal);
            }

            if(totalCount <= elementsBeforeMedianValue) {
                lowVal = midVal + 1;
            } else {
                highVal = midVal - 1;
            }
        }

        return lowVal;
    }


    private int getTotalElementsLessThanOrEqual(int[] arr, int target) {
        int left = 0;
        int right = arr.length -1;

        while(left <= right) {
            // Mid index
            int mid = left + (right - left) / 2;

            if(arr[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left;
    }
}
```
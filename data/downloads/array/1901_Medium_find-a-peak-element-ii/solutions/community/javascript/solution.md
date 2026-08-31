# Binary Search Solution with Proper Explanation and Beats 100%

**Author:** missionMicrosoft_7692
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-a-peak-element-ii/solutions/4392102/](https://leetcode.com/problems/find-a-peak-element-ii/solutions/4392102/)

---

# Intuition 
<!-- Describe your first thoughts on how to solve this problem. -->
Use Binary Search

# Approach
<!-- Describe your approach to solving the problem. -->
Reduce 2d array problem to 1d array

# Complexity
- Time complexity:O(n log(m)), where n rows and m is columns
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:

    //find row index of max element and col index is given by mid
    int getMaxElement(vector<vector<int>>&matrix,int mid){
        int index=-1;
        int maxi=INT_MIN;

        for(int row=0;row<matrix.size();row++){
            int elm=matrix[row][mid];

            if(elm>maxi){
                maxi=max(maxi,elm);
                index=row;
            }
        }
        return index;
    }
    vector<int> findPeakGrid(vector<vector<int>>& matrix) {
        int n=matrix.size();
        int m=matrix[0].size();

        int start=0;
        int end=m-1;

        while(start<=end){
            int mid=start+(end-start)/2;
            
            // we find maximum because we have to check top, bottom,left,right if we use maximum then our element is definately 
            // greater than top and bottom. so we need to check only left and right i.e. our problem is reduced to find peak in 1d

            int row=getMaxElement(matrix,mid);
            int left=-1;
            int right=-1;
            
            //handling edge cases
            if(mid-1>0){
                left=matrix[row][mid-1];
            }

            if(mid+1<m){
                right=matrix[row][mid+1];
            }
            
            // we find peak element
            if(matrix[row][mid]>left && matrix[row][mid]>right){
                return {row,mid};
            }
            
            //our peak is on left side of mid so eliminate right part
            else if(matrix[row][mid]>right){
                end=mid-1;
            }
            
            //our peak is on right side of mid so eliminate left part
            else{
                start=mid+1;
            }
        }

        return {-1,-1};
    }
};
```
```python []
class Solution(object):
    def getMaxElement(self, matrix, mid):
        index = -1
        maxi = float('-inf')

        for row in range(len(matrix)):
            elm = matrix[row][mid]

            if elm > maxi:
                maxi = max(maxi, elm)
                index = row

        return index

    def findPeakGrid(self, matrix):
        n = len(matrix)
        m = len(matrix[0])

        start = 0
        end = m - 1

        while start <= end:
            mid = start + (end - start) // 2

            # find maximum because we have to check top, bottom, left, right
            # if we use maximum, then our element is definitely greater than top and bottom
            # so we need to check only left and right, i.e., our problem is reduced to finding a peak in 1D

            row = self.getMaxElement(matrix, mid)
            left = -1
            right = -1

            # handling edge cases
            if mid - 1 >= 0:
                left = matrix[row][mid - 1]

            if mid + 1 < m:
                right = matrix[row][mid + 1]

            # we find the peak element
            if matrix[row][mid] > left and matrix[row][mid] > right:
                return [row, mid]

            # our peak is on the left side of mid, so eliminate the right part
            elif matrix[row][mid] > right:
                end = mid - 1

            # our peak is on the right side of mid, so eliminate the left part
            else:
                start = mid + 1

        return [-1, -1]

```
```Java []
public class Solution {
    // find row index of max element and col index is given by mid
    public int getMaxElement(int[][] matrix, int mid) {
        int index = -1;
        int maxi = Integer.MIN_VALUE;

        for (int row = 0; row < matrix.length; row++) {
            int elm = matrix[row][mid];

            if (elm > maxi) {
                maxi = Math.max(maxi, elm);
                index = row;
            }
        }
        return index;
    }

    public int[] findPeakGrid(int[][] matrix) {
        int n = matrix.length;
        int m = matrix[0].length;

        int start = 0;
        int end = m - 1;

        while (start <= end) {
            int mid = start + (end - start) / 2;

            // we find maximum because we have to check top, bottom, left, right if we use maximum then our element is definitely
            // greater than top and bottom. so we need to check only left and right i.e. our problem is reduced to find peak in 1d

            int row = getMaxElement(matrix, mid);
            int left = -1;
            int right = -1;

            // handling edge cases
            if (mid - 1 >= 0) {
                left = matrix[row][mid - 1];
            }

            if (mid + 1 < m) {
                right = matrix[row][mid + 1];
            }

            // we find peak element
            if (matrix[row][mid] > left && matrix[row][mid] > right) {
                return new int[]{row, mid};
            }

            // our peak is on the left side of mid so eliminate the right part
            else if (matrix[row][mid] > right) {
                end = mid - 1;
            }

            // our peak is on the right side of mid so eliminate the left part
            else {
                start = mid + 1;
            }
        }

        return new int[]{-1, -1};
    }
}

```

```JavaScript []
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findPeakGrid = function(matrix) {
    const getMaxElement = (matrix, mid) => {
        let index = -1;
        let maxi = Number.MIN_SAFE_INTEGER;

        for (let row = 0; row < matrix.length; row++) {
            let elm = matrix[row][mid];

            if (elm > maxi) {
                maxi = Math.max(maxi, elm);
                index = row;
            }
        }
        return index;
    };

    const n = matrix.length;
    const m = matrix[0].length;

    let start = 0;
    let end = m - 1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        let row = getMaxElement(matrix, mid);
        let left = -1;
        let right = -1;

        // handling edge cases
        if (mid - 1 >= 0) {
            left = matrix[row][mid - 1];
        }

        if (mid + 1 < m) {
            right = matrix[row][mid + 1];
        }

        // we find peak element
        if (matrix[row][mid] > left && matrix[row][mid] > right) {
            return [row, mid];
        }

        // our peak is on the left side of mid so eliminate the right part
        else if (matrix[row][mid] > right) {
            end = mid - 1;
        }

        // our peak is on the right side of mid so eliminate the left part
        else {
            start = mid + 1;
        }
    }

    return [-1, -1];
};


```
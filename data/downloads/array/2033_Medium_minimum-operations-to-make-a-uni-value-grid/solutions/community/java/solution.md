# [Java] Efficient + Interview solution + Easy to understand

**Author:** pikachu_approves
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/1515856/](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/1515856/)

---

The thing that makes this question a bit more complicated is the fact that you have to get the minimum steps to convert the grid to uni-value.

For this, a simple brute force solution that you might think is getting the steps for all numbers in range `[minValue, maxValue]` and find the minimum steps that you found. Here `minValue` and `maxValue` are the minimum and maximum values from the grid.

This whole approach can be simplified though. How?
Using the median of the data. Remember that the median of a set of numbers is the value that is closest to all of them.

So, how do we find the median of the numbers we have in the grid?
Sort the elements of the grid and get the middle element.

Now, implementation-wise, the best approach is adding all the elements from the grid to an array. Then we can easily sort and get the median. After that we can go through those elements and bring the value up/down to the median value while counting the steps that it took.

Here we can also tackle the impossible case, if the `abs(currentValue - median)` is not divisible by `x` then we cannot bring `currentValue` to `median` while adding/subtracting `x` at a time. So we can return `-1` in that case.

Also counting steps can simply be done in `O(1)` time complexity by doing `abs(currentNum - median) / x`. This would count the number of steps required to make `currentNum` equal to `median` while subtracting/adding `x` at a time.

In code, this would look something like this:

```
class Solution {
    public int minOperations(int[][] grid, int x) {
        int[] arr = new int[grid.length * grid[0].length];
        int index = 0;
        
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                arr[index++] = grid[i][j];
            }
        }
        
        Arrays.sort(arr);
        int median = arr[(arr.length - 1) / 2];
        int steps = 0;
        
        for (int num : arr) {
            if (num == median) {
                continue;
            }
            
            if (Math.abs(num - median) % x != 0) {
                return -1;
            }
            
            steps += (Math.abs(num - median) / x);
        }
        
        return steps;
    }
}
```
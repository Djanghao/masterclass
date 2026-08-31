# C++, Java, Kotlin || O(n) Partial sorting using Fibonacci optimization

**Author:** dudeandcat
**Votes:** 5
**Link:** [https://leetcode.com/problems/largest-perimeter-triangle/solutions/2693108/](https://leetcode.com/problems/largest-perimeter-triangle/solutions/2693108/)

---

The standard solution for this leetcode problem, as shown on the problem's Solution tab and as used by most people's solutions for this problem, is to first sort the entire `nums[]` array, then search for the highest three adjacent values that form a valid triangle.  The code below uses a slightly different algorithm which uses ony a partial heap sort of the `nums[]` array to only sort as many values as needed, with the maximum values to be sorted being 31 as defined by the Fibonacci test case shown further below.  The standard coding solution is O(NlogN) because of the full sort of all `nums[]` values, while the partial sort algorithm is O(N).

--- PARTIAL SORT ALGORITHM ---
The solution below optimizes runtime by only doing a partial heap sort to try to solve this problem, which appears to be faster than the standard coding solution for this problem.  In Java, the partial heap sort code below is 8 times faster than my standard solution code, using my fastest runtimes for both coding solutions.  The partial sorting routine `swapMaxElement()` is called each time the next highest number from `nums[]` is needed, and that next highest number is placed toward the end of the `nums[]` array.  The `nums[]` array becomes sorted from the end back toward the start of the array, one value at a time.

First the three highest values are moved to the last three positions in the `nums[]` array, by calling `swapMaxElement()` three times.  Then we test the triplet made of those highest three values in `nums[]` to see if they form a valid triangle.  A valid triangle is formed if the highest value at `nums[i]` is less than the sum of the next two adjacent lower values in `nums[i-1]` and `nums[i-2]`, when those values are in their sort order within `nums[]`.  If the highest three values in `nums[]` don't form a valid triangle, then call `swapMaxElement()` again to get the next higher value in `nums[]` into its sorted position, then test the next lower triplet of values in `nums[]` to see if they form a valid triangle.  Repeat this process of sorting one more value, then testing the next triplet of adjacent values for a valid triangle, until a valid triangle is found, or we run out of triplets to test.

--- FIBONACCI TEST CASE WITHOUT ANY TRIANGLES ---
In this leetcode problem, the longest possible test case which does not form any valid triangle, is shown in sorted order as:
```
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 
233, 377, 610, 987, 1597, 2584, 4181, 6765, 
10946, 17711, 28657, 46368, 75025, 121393, 
196418, 317811, 514229, 832040]
```
This test case is formed by starting with 1, 1 then each successive number is the sum of the previous two numbers, which gives the Fibonacci sequence.  This process is repeated until a number exceeds the maximum value, which is defined in this leetcode problem's description as 10^6.  Any test case formed this way will NOT be able to form a valid triangle from any triplet of the values.  **The above test case has 30 values**.

--- WORST CASE FOR PARTIAL SORT ---
Using the partial heap sort in the code below, which gets the next higher value for each call to the partial heap sort routine `swapMaxElement()`, we will have to **sort at most 31 values before finding a valid triangle**.  The longest test case without any valid triangle has 30 values, as shown in the example test case above.  If another value is appended to that test case, then that modified test case would contain a valid triangle.  In this leetcode problem, the passed `nums[]` array can have up to 10_000 values.  But in the partial-sorting algorithm in the code below, at most only 31 values would need to be sorted, and usually fewer would need sorting.  This implies that **any test case with 31 or more values MUST contain a valid triangle**.

Currently in this leetcode problem's test cases in October 2022, the worst test case only has to search through 19 triplets before finding a valid triangle.  This means that the partial-sort routine `swapMaxElement` had to be called 19+2=21 times, which is once for each of the 19 triplets searched, plus 2 extra times to create the first triplet.

Although the Fibonacci test case above is the longest possible test case without any valid triangles, it is not the only possible test case of this length.  For example, adding a positive integer to the last value in the above Fibonacci test case, will result in a test case that still doesn't have any valid triangles.  Other values in that Fibonacci test case can also be increased, as long as all values in the test case are increased by at least the sum of the increase of the previous two values in the test case, which will still result in a test case without any valid triangles.  The Fibonacci test case is the lowest valued test case possible for length 30 while not having any valid triangles.

--- EXECUTION TIMES ---
The code below had fast runtimes in C++ (32ms 99%), Java (1ms 100%), and Kotlin (263ms 100%) based on the leetcode problem's graph data on October 10, 2022.  These runtimes are the fastest runtimes from my multiple Submits, and the runtimes and percentages may change in the future as test cases are changed and as other people develop faster code.

If useful, please upvote.

**C++ ----------------**
```
class Solution {
public:
    int largestPerimeter(vector<int>& nums) {
        swapMaxElement(nums, nums.size() - 1);
        swapMaxElement(nums, nums.size() - 2);
        for (int i = nums.size() - 1; i >= 2; i--) {
            swapMaxElement(nums, i - 2);
            if (nums[i] < nums[i - 1] + nums[i - 2])
                return nums[i] + nums[i - 1] + nums[i - 2];
        }
        return 0;
    }
    
    void swapMaxElement(vector<int>& nums, int index) {
        int max = nums[0];
        int maxIndex = 0;
        for (int i = 1; i <= index; i++)
            if (nums[i] > max)
                max = nums[(maxIndex = i)];
        nums[maxIndex] = nums[index];
        nums[index] = max;
    }
};
```
**Java -----------------**
```
class Solution {
    public int largestPerimeter(int[] nums) {
        swapMaxElement(nums, nums.length - 1);
        swapMaxElement(nums, nums.length - 2);
        for (int i = nums.length - 1; i >= 2; i--) {
            swapMaxElement(nums, i - 2);
            if (nums[i] < nums[i - 1] + nums[i - 2])
                return nums[i] + nums[i - 1] + nums[i - 2];
        }
        return 0;
    }
    
    
    private void swapMaxElement(int[] nums, int index) {
        int max = nums[0];
        int maxIndex = 0;
        for (int i = 1; i <= index; i++)
            if (nums[i] > max)
                max = nums[(maxIndex = i)];
        nums[maxIndex] = nums[index];
        nums[index] = max;
    }
}
```
**Kotlin ----------------**
```
class Solution {
    fun largestPerimeter(nums: IntArray): Int {
        swapMaxElement(nums, nums.lastIndex)
        swapMaxElement(nums, nums.lastIndex - 1)
        for (i in nums.lastIndex downTo 2) {
            swapMaxElement(nums, i - 2)
            if (nums[i] < nums[i - 1] + nums[i - 2])
                return nums[i] + nums[i - 1] + nums[i - 2]
        }
        return 0
    }
    
    
    fun swapMaxElement(nums: IntArray, index: Int) {
        var max = nums[0]
        var maxIndex = 0
        for (i in 1..index)
            if (nums[i] > max) {
                max = nums[i]
                maxIndex = i
            }
        nums[maxIndex] = nums[index]
        nums[index] = max
    }
}
```


**Java (standard solution) --------------**
The following Java code is the solution that most people use, and is the official solution on the Solution tab for this leetcode problem.  This code is much simpler than the faster code above.  It simply sorts the `nums[]` array in ascending order.  Then search backward in the array from highest to lowest values, to find the first three adjacent values in the sorted array which can form a valid triangle.
```
class Solution {
    public int largestPerimeter(int[] nums) {
        Arrays.sort(nums);
        for (int i = nums.length - 1; i >= 2; i--)
            if (nums[i] < nums[i - 1] + nums[i - 2])
                return nums[i] + nums[i - 1] + nums[i - 2];
        return 0;
    }
}
```

# Simple Easy Approach | | PrefixSum | | Beats 73.94% | | C++ | | Java | | Kotlin | | ✅✅✅🔥🔥

**Author:** Hunter_0718
**Votes:** 41
**Link:** [https://leetcode.com/problems/product-of-array-except-self/solutions/4876857/](https://leetcode.com/problems/product-of-array-except-self/solutions/4876857/)

---


![image.png](./images/0.png)
# Intuition
To compute the product of all elements in the array except the current element at index `i`, we can utilize the concept of prefix and suffix products. We can calculate the prefix product of all elements to the left of `i` and the suffix product of all elements to the right of `i`. Then, the product excluding the element at index `i` is simply the product of the prefix product and the suffix product.

# Approach
1. Initialize two arrays `left` and `right`, each of size `n`, where `n` is the length of the input array `nums`.
2. Initialize `left[i]` to store the product of all elements to the left of `nums[i]` and `right[i]` to store the product of all elements to the right of `nums[i]`.
3. Calculate `left` array by iterating from left to right and multiplying the previous element's value with the current element.
4. Calculate `right` array by iterating from right to left and multiplying the previous element's value with the current element.
5. Finally, calculate the result array by multiplying `left[i]` and `right[i]` for each index `i`.

# Complexity
- Time complexity: O(n) where n is the length of the input array `nums`. We perform three linear passes over the array.
- Space complexity: O(n) for the additional arrays `left`, `right`, and `result`.

# Code


```C++ []
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int>left(n,1);
        vector<int>right(n,1);
        left[0] = 1;
        for(int i=1; i<n; i++){
            left[i] = left[i-1]*nums[i-1];
        }

        right[n-1] = 1;
        for(int i=n-2; i>=0; i--){
           right[i] = right[i+1]*nums[i+1];
        }
       vector<int>result(n);
       for(int i=0; i<n; i++){
           result[i] = left[i]*right[i];
       }
       
        return result;
    }
};
```
```C []
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    int *result = (int *)malloc(numsSize * sizeof(int));
    int *left = (int *)malloc(numsSize * sizeof(int));
    int *right = (int *)malloc(numsSize * sizeof(int));
    
    left[0] = 1;
    for (int i = 1; i < numsSize; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    right[numsSize - 1] = 1;
    for (int i = numsSize - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    for (int i = 0; i < numsSize; i++) {
        result[i] = left[i] * right[i];
    }

    *returnSize = numsSize;
    free(left);
    free(right);
    return result;
}


```
```Java []
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        int[] left = new int[n];
        int[] right = new int[n];
        
        left[0] = 1;
        for (int i = 1; i < n; i++) {
            left[i] = left[i - 1] * nums[i - 1];
        }

        right[n - 1] = 1;
        for (int i = n - 2; i >= 0; i--) {
            right[i] = right[i + 1] * nums[i + 1];
        }

        for (int i = 0; i < n; i++) {
            result[i] = left[i] * right[i];
        }
        
        return result;
    }
}



```
```Python3 []
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        left = [1] * n
        right = [1] * n
        
        # Calculate left prefix product
        for i in range(1, n):
            left[i] = left[i - 1] * nums[i - 1]

        # Calculate right suffix product
        for i in range(n - 2, -1, -1):
            right[i] = right[i + 1] * nums[i + 1]

        # Calculate result array
        result = [left[i] * right[i] for i in range(n)]
       
        return result


```
```Kotlin []
class Solution {
    fun productExceptSelf(nums: IntArray): IntArray {
        val n = nums.size
        val left = IntArray(n) { 1 }
        val right = IntArray(n) { 1 }

        for (i in 1 until n) {
            left[i] = left[i - 1] * nums[i - 1]
        }

        for (i in n - 2 downTo 0) {
            right[i] = right[i + 1] * nums[i + 1]
        }

        val result = IntArray(n) { 0 }
        for (i in 0 until n) {
            result[i] = left[i] * right[i]
        }

        return result
    }
}


```
```Javascript []
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    const result = [];
    for (let i = 0; i < n; i++) {
        result[i] = left[i] * right[i];
    }

    return result;
};

```



Let's dry run this algorithm on a test case:

**Test Case: nums = [1, 2, 3, 4]**

1. Initialize `left = [1, 1, 1, 1]` and `right = [1, 1, 1, 1]`.
2. Calculate `left` array:
   - `left[1] = left[0] * nums[0] = 1 * 1 = 1`
   - `left[2] = left[1] * nums[1] = 1 * 2 = 2`
   - `left[3] = left[2] * nums[2] = 2 * 3 = 6`
3. Calculate `right` array:
   - `right[2] = right[3] * nums[3] = 1 * 4 = 4`
   - `right[1] = right[2] * nums[2] = 4 * 3 = 12`
   - `right[0] = right[1] * nums[1] = 12 * 2 = 24`
4. Calculate result array:
   - `result[0] = left[0] * right[0] = 1 * 24 = 24`
   - `result[1] = left[1] * right[1] = 1 * 12 = 12`
   - `result[2] = left[2] * right[2] = 2 * 4 = 8`
   - `result[3] = left[3] * right[3] = 6 * 1 = 6`
   
The final result is `[24, 12, 8, 6]`, which matches the expected output.
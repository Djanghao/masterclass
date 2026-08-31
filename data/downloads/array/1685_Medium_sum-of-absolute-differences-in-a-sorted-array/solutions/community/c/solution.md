# 🚀 PrefixSum &  SuffixSum || Explained Intuition 🚀

**Author:** MohamedMamdouh20
**Votes:** 113
**Link:** [https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/4326552/](https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/4326552/)

---

# Problem Description

Given a **sorted** integer array `nums`, create and return an array result of the same length, where each element `result[i]` represents the sum of absolute differences between `nums[i]` and all other elements in the array, **excluding** itself.

- Constraints:
    - `result[i] = |nums[0]-nums[i]| + |nums[1]-nums[i]| +......+ |nums[n]-nums[i]|` 
    - $2 <= nums.length <= 10^5$
    - $1 <= nums[i] <= nums[i + 1] <= 10^4$


---



# Intuition


Hi there,\uD83D\uDE04

Let's take a look\uD83D\uDC40 at our today's problem.
We have a **sorted** integer array and we are required to return an array such that for each element `i` in the **result** array, it equals the **absolute** **difference** of element `i` in original array and all other elements.
In other words, `result[i] = |nums[0]-nums[i]| + |nums[1]-nums[i]| +......+ |nums[n]-nums[i]|`

Seem interesting problem.\uD83E\uDD29
**First** thing that we can think of is our **big guy**\uD83D\uDCAA Brute Force, by looping with **nested loop** and for each element we compute the absolute difference between them and add it to our `result[i]`.
For us, this solution is inefficient since it takes $O(N^2)$ and will give us headace\uD83D\uDE02.

How can we improve this?\uD83E\uDD14
Since for each element we want to compute the absolute difference between them and other elements in the array.
We can first thing **sum** all the elements of the array and for each element `i` we compute `|sum - nums[i] * size of arrray|` which means that we actually compute differece between each element and the current element.
It's code will be:
```cpp
vector<int> getSumAbsoluteDifferences(vector<int>& nums) {
        int n = nums.size(), sum = 0;
        vector<int> ans(n);
        for(int i = 0 ; i < n ; i ++){
            sum += nums[i] ;
        }
        for(int i = 0 ; i < n ; i ++){
            int cur = abs(sum - nums[i] * n) ;
            ans[i] = cur ;
        }
        return ans;
    }
```
This may look right from first look but unfortunately it is not valid answer.\uD83D\uDE14

Let's see some examples to see why it is not valid:
```
nums = [2,3,5]
sum = 10
for 2: |10 - 2 * 3| = |2 - 2 + 3 - 2 + 5 - 2| = |8 - 4| = 4
for 3: |10 - 3 * 3| = |2 - 3 + 3 - 3 + 5 - 3| = |7 - 6| = 1
for 5: |10 - 5 * 3| = |2 - 5 + 3 - 5 + 5 - 5| = |5 - 10| = 5
```
```
nums = [1,4,6,8,10]
sum = 29
for 1: |29 - 1 * 5| = |1 - 1 + 4 - 1 + 6 - 1 + 8 - 1 + 10 - 1| = |28 - 4| = 24
for 4: |29 - 4 * 5| = |1 - 4 + 4 - 4 + 6 - 4 + 8 - 4 + 10 - 4| = |25 - 16| = 9
.
.
.
```

I think we got why it is wrong...\uD83D\uDE22
What we are doing is
`|nums[i] - nums[0] + nums[i] - nums[1] +..... nums[n] - nums[i]|` 
and this is far from our objective which is 
`|nums[0]-nums[i]| + |nums[1]-nums[i]| +......+ |nums[n]-nums[i]|`.

Now we reached here, How can we get the right formula.\uD83E\uDD14
We can think about one thing.
When is `|nums[i] - nums[0] + nums[i] - nums[1] +..... ` is equal to `|nums[0]-nums[i]| + |nums[1]-nums[i]| +......` ?\uD83E\uDD28
I know that I said earlier that they are two different things but they can be equal in one case.... Actually two cases.\uD83E\uDD2F

When `nums[i]` is greater than all other elements in the array so 
```
nums[i]-nums[0] = |nums[0]-nums[i]|
nums[i]-nums[1] = |nums[1]-nums[i]|
nums[i]-nums[2] = |nums[2]-nums[i]|
.
.
and so on so forth
```

and when `nums[i]` is smaller than all other elements in the array so 
```
nums[0]-nums[i] = |nums[0]-nums[i]|
nums[1]-nums[i] = |nums[1]-nums[i]|
nums[2]-nums[i] = |nums[2]-nums[i]|
.
.
and so on so forth
```

Since our array is already **sorted**, we can use these two cases to compute our objective so for each element we can use the **sum** trick two times -which was invalid first but now are valid-.\uD83E\uDD29

**First time**, with all the elements **before** the current element since it is **greater** than them all and for this we can use **prefix** array to get immediately the sum of all elements **before** current element.

**Second time**, with all the elements **after** the current element since it is **smaller** than them all and for this we can use **suffix** array to get immediately the sum of all elements **after** current element.


And this is the solution for our today'S problem I hope that you understood it\uD83D\uDE80\uD83D\uDE80




---


# Approach

1. **Initialization:** Obtain the size of the input array `nums` and create a result array of the same size.
    ```cpp
    int n = nums.size();
    vector<int> result(n);
    ```
2. **Prefix and Suffix Sums:** Create two additional arrays, `prefixSum` and `suffixSum`, to store the cumulative sums from the beginning and end of the `nums` array, respectively. Initialize the first element of both arrays -Don't forget that the input array is sorted- .
    ```cpp
    vector<int> prefixSum(n), suffixSum(n);
    prefixSum[0] = nums[0];
    suffixSum[n - 1] = nums[n - 1];
    ```
3. **Calculate Sums in One Loop:** Use a single loop to calculate both the prefix and suffix sums simultaneously.
    ```cpp
    for (int i = 1; i < n; ++i) {
        prefixSum[i] = prefixSum[i - 1] + nums[i];
        suffixSum[n - i - 1] = suffixSum[n - i] + nums[n - i - 1];
    }
    ```
4. **Calculate Absolute Differences:** Iterate through the array and compute the absolute differences using the prefix and suffix sums.
    ```cpp
    for (int i = 0; i < n; ++i) {
        int currentAbsoluteDiff = ((nums[i] * i) - prefixSum[i]) + (suffixSum[i] - (nums[i] * (n - i - 1)));
        result[i] = currentAbsoluteDiff;
    }
    ```
5. **Return** the calculated result array.

## Complexity
- **Time complexity:** $O(N)$
Since we are **looping** over the input array **two** time, one time to calculate `prefix` and `suffix` arrays and another time to calculate the result which costs us `2 * N` so time complexity is `O(N)`.
Where `N` is the size of the input array.
- **Space complexity:** $O(N)$
Since are storing two arrays of the same length of the input array which are the prefix and suffix arrays which costs us `2 * N` so space complexity is `O(N)`.



---


# Code
```C++ []
class Solution {
public:
    vector<int> getSumAbsoluteDifferences(vector<int>& nums) {
        int n = nums.size();
        vector<int> result(n);
        vector<int> prefixSum(n), suffixSum(n);
        
        // Calculate and initialize the prefix sums & suffixSum array
        prefixSum[0] = nums[0];
        suffixSum[n - 1] = nums[n - 1];
        
        // Calculate the prefix sums & suffixSum array in one loop
        for (int i = 1; i < n; ++i) {
            prefixSum[i] = prefixSum[i - 1] + nums[i];
            suffixSum[n - i - 1] = suffixSum[n - i] + nums[n - i - 1];
        }
        
        // Calculate absolute differences and update the result array
        for (int i = 0; i < n; ++i) {
            int currentAbsoluteDiff = ((nums[i] * i) - prefixSum[i]) + (suffixSum[i] - (nums[i] * (n - i - 1)));
            result[i] = currentAbsoluteDiff;
        }
        
        return result;
    }
};
```
```Java []
class Solution {
    public int[] getSumAbsoluteDifferences(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        int[] prefixSum = new int[n];
        int[] suffixSum = new int[n];

        // Calculate and initialize the prefix sums & suffixSum array
        prefixSum[0] = nums[0];
        suffixSum[n - 1] = nums[n - 1];

        // Calculate the prefix sums & suffixSum array in one loop
        for (int i = 1; i < n; ++i) {
            prefixSum[i] = prefixSum[i - 1] + nums[i];
            suffixSum[n - i - 1] = suffixSum[n - i] + nums[n - i - 1];
        }

        // Calculate absolute differences and update the result array
        for (int i = 0; i < n; ++i) {
            int currentAbsoluteDiff = ((nums[i] * i) - prefixSum[i]) + (suffixSum[i] - (nums[i] * (n - i - 1)));
            result[i] = currentAbsoluteDiff;
        }

        return result;
    }
}
```
```Python []
class Solution:
    def getSumAbsoluteDifferences(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = [0] * n
        prefix_sum = [0] * n
        suffix_sum = [0] * n

        # Calculate and initialize the prefix sums & suffix_sum array
        prefix_sum[0] = nums[0]
        suffix_sum[n - 1] = nums[n - 1]

        # Calculate the prefix sums & suffix_sum array in one loop
        for i in range(1, n):
            prefix_sum[i] = prefix_sum[i - 1] + nums[i]
            suffix_sum[n - i - 1] = suffix_sum[n - i] + nums[n - i - 1]

        # Calculate absolute differences and update the result array
        for i in range(n):
            current_absolute_diff = ((nums[i] * i) - prefix_sum[i]) + (suffix_sum[i] - (nums[i] * (n - i - 1)))
            result[i] = current_absolute_diff

        return result
```
```C []
int* getSumAbsoluteDifferences(int* nums, int numsSize, int* returnSize) {
    int* result = (int*)malloc(numsSize * sizeof(int));
    *returnSize = numsSize;

    int* prefixSum = (int*)malloc(numsSize * sizeof(int));
    int* suffixSum = (int*)malloc(numsSize * sizeof(int));

    // Calculate and initialize the prefix sums & suffixSum array
    prefixSum[0] = nums[0];
    suffixSum[numsSize - 1] = nums[numsSize - 1];

    // Calculate the prefix sums & suffixSum array in one loop
    for (int i = 1; i < numsSize; ++i) {
        prefixSum[i] = prefixSum[i - 1] + nums[i];
        suffixSum[numsSize - i - 1] = suffixSum[numsSize - i] + nums[numsSize - i - 1];
    }

    // Calculate absolute differences and update the result array
    for (int i = 0; i < numsSize; ++i) {
        int currentAbsoluteDiff = ((nums[i] * i) - prefixSum[i]) + (suffixSum[i] - (nums[i] * (numsSize - i - 1)));
        result[i] = currentAbsoluteDiff;
    }

    // Free dynamically allocated memory
    free(prefixSum);
    free(suffixSum);

    return result;
}
```


![HelpfulJerry.jpg](./images/0.jpeg)

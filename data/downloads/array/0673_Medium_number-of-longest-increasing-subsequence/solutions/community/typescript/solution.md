# ✅Step by step explanation | short and optimize code

**Author:** SumitPokhriyal
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/3795268/](https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/3795268/)

---

# Intuition
The problem requires finding the number of longest increasing subsequences in the given array of numbers. We can use a dynamic programming approach to solve this problem.

# Approach
We will use two arrays lis and cnt. The lis array will keep track of the length of the longest increasing subsequence ending at each index, and the cnt array will keep track of the count of the longest increasing subsequences ending at each index.

To fill these arrays, we will iterate through the array from right to left. For each index i, we will find the length of the longest increasing subsequence ending at that index and store it in the lis array. We will also keep track of the count of such subsequences and store it in the cnt array.

To compute the lis value at each index i, we will iterate through the array from i + 1 to the end. For each index j, if the element at index j is greater than the element at index i, we can extend the increasing subsequence ending at index i by one, and the length of the longest increasing subsequence ending at index j will be lis[j] + 1. We will take the maximum of all such values to get the lis value for index i.

While calculating the lis value, we will also keep track of the count of such subsequences. If the lis value for index j plus one is greater than the current lis value for index i, it means we have found a new longer subsequence, so we set the cnt value for index i to the cnt value for index j. If the lis value for index j plus one is equal to the current lis value for index i, it means we have found another subsequence of the same length, so we add the cnt value for index j to the cnt value for index i.

After filling the lis and cnt arrays, we find the maximum value in the lis array, which represents the length of the longest increasing subsequence. Then we iterate through the lis array and add up the cnt values for all indices where the lis value matches the maximum value. This will give us the total count of the longest increasing subsequences in the array.

# Complexity
- Time complexity: The time complexity of this approach is O(n^2), where n is the number of elements in the array. We iterate through the array twice, once to compute the lis and cnt arrays, and then to find the count of longest increasing subsequences.
- Space complexity: The space complexity is O(n) as we use two arrays lis and cnt of length n to store the intermediate results.

# Code
```
function findNumberOfLIS(nums: number[]): number {
    let n = nums.length, lis = new Array(n).fill(1), cnt = new Array(n).fill(1);
    for( let i = n - 2 ; i >= 0 ; i-- ){
        let max = 1, c = 1;
        for( let j = i + 1 ; j < n ; j++ ){
            if( nums[i] < nums[j] ){
                if( max < lis[j] + 1 ){
                    max = lis[j] + 1;
                    c = cnt[j]
                }
                else if( max === lis[j] + 1 )c += cnt[j];
            }
        }
        lis[i] = max;
        cnt[i] = c;
    }
    let max = Math.max(...lis), res = 0;
    for( let i = 0 ; i < n ; i++ )if( max === lis[i])res += cnt[i];
    return res
};
```
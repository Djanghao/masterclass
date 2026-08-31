# [JavaScript] 87ms + Prefix Sum + BinarySearch + Comments

**Author:** NurNils
**Votes:** 9
**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2949495/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2949495/)

---

# Approach
To solve this problem, I divided it into three steps: Sorting the nums array, create a prefix sum array of sorted nums and use binary search to get the index of the last fitting prefix sum.

## 1. Sort Nums array:
To create our prefix sum arr we have to sort the input nums array. For this I simply used the already defined sort function of JavaScript: 

`nums.sort((a, b) => a - b); // Sort nums array`

The input array `nums = [4, 5, 2, 1];` will be `[1, 2, 4, 5]`.

## 2. Create Prefix sum vector/array of nums
<table>
    <tr>
        <td>Input Numbers:</td>
        <td>1</td>
        <td>2</td>
        <td>4</td>
        <td>5</td>
    </tr>
    <tr>
        <td>Prefix sums:</td>
        <td>1</td>
        <td>3</td>
        <td>7</td>
        <td>12</td>
    </tr>
</table>

The prefix sum array will be: `prefixSum = [1, 3, 7, 12]`

## 3. Binary Search 
Now I use Binary Search to find element in prefix lesser or equal to query (`queries = [3, 10, 21]`): Search query in prefixSum array and push index + 1 to the answer array.

- For query `3`: 
Number `3` at index `1` in `prefixSum` is found. Store `1 + 1 = 2` (index + 1) in answer array.

- For query `10`: 
Number `7` at index `2` in `prefixSum` is found (7 first element lesser than 10). Store `2 + 1 = 3` (index + 1) in answer array.

- For query `21`: 
Number `12` at index `3` in `prefixSum` is found (12 first element lesser than 21). Store `3 + 1 = 4` (index + 1) in answer array.

At last return answer array.

# Code
```
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b); // Sort nums array
    
    const prefixSum = [nums[0]]; // Initialize prefix sum array with first element
    for (let i = 1; i < nums.length; i++) { // For loop to traverse the input array
        prefixSum.push(prefixSum[i - 1] + nums[i]); // Add sum of present element with previous element to prefixSum
    }

    const binarySearch = (arr, l, r, x) => { // Recursive binary search
        if (r >= l) {
            let mid = l + Math.floor((r - l) / 2); // Calculate mid
            if (arr[mid] == x) { // Check if element is present in middle
                return mid; // Return if element 
            } else if (x < arr[mid]) { // Check if element is smaller than mid
                return binarySearch(arr, l, mid - 1, x); // Return left side
            } else { // x is bigger than mid
                return binarySearch(arr, mid + 1, r, x); // Return right side
            } 
        } else { // Any element was checked
            return r; // Return oldMid
        }
    }

    const answer = []; // Initialize answer array
    for(let j = 0; j < queries.length; j++) { // Loop all queries
        answer.push(binarySearch(prefixSum, 0, prefixSum.length - 1, queries[j]) + 1); // Use binary search on each query
    }
    return answer; // Return answer array
};
```
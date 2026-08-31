# Beats 100% || Best Solution || All languages || Easy Explanation

**Author:** raghavagarwal28
**Votes:** 50
**Link:** [https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/5771697/](https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/5771697/)

---

# Intuition
we can use a prefix XOR array where each element at index i represents the XOR of all elements from the start of the array to index i. This allows us to compute the XOR for any subarray in constant time

# Approach
1) Compute Prefix XOR Array:
Build a prefix XOR array where prefix[i] holds the XOR of all elements from the start of the array up to index i. This can be done in a single pass through the array.

2) Answer Queries Using Prefix XOR Array:
For each query (left, right), if left is 0, the result is simply prefix[right].
If left is greater than 0, the result can be obtained by prefix[right] ^ prefix[left - 1]. This works because XORing with prefix[left - 1] effectively removes the elements before left, leaving the XOR of the subarray from left to right.

# Complexity
- Time complexity:
the total time complexity is O(n+q), where q is the number of queries & n is the size of arr.

- Space complexity:
the space complexity is O(n+q). n is the space used to store ans & q is the space for prefix.

# Code
```java []
class Solution {
    public int[] xorQueries(int[] arr, int[][] queries) {

        int[] ans = new int[queries.length];
        int[] prefix = new int[arr.length];
        prefix[0] = arr[0];

        // fill the prefix xor array
        for(int i=1; i<arr.length; i++){
            prefix[i] = prefix[i-1] ^ arr[i];
        } 

        for(int i=0; i<queries.length; i++){
            int left = queries[i][0];
            int right = queries[i][1];
            if(left == 0){
                ans[i] = prefix[right];
            }else{
                ans[i] = prefix[right]^prefix[left-1];
            }
        }
        return ans;
    }
}
```
``` C++ []
class Solution {
public:
    vector<int> xorQueries(vector<int>& arr, vector<vector<int>>& queries) {
        int n = arr.size();
        vector<int> prefix(n);
        vector<int> ans(queries.size());

        // Fill the prefix XOR array
        prefix[0] = arr[0];
        for (int i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] ^ arr[i];
        }

        // Process each query
        for (int i = 0; i < queries.size(); i++) {
            int left = queries[i][0];
            int right = queries[i][1];
            if (left == 0) {
                ans[i] = prefix[right];
            } else {
                ans[i] = prefix[right] ^ prefix[left - 1];
            }
        }

        return ans;
    }
};

```
``` Python []
class Solution(object):
    def xorQueries(self, arr, queries):
        """
        :type arr: List[int]
        :type queries: List[List[int]]
        :rtype: List[int]
        """
        n = len(arr)
        prefix = [0] * n
        ans = []

        # Fill the prefix XOR array
        prefix[0] = arr[0]
        for i in range(1, n):
            prefix[i] = prefix[i - 1] ^ arr[i]

        # Process each query
        for left, right in queries:
            if left == 0:
                ans.append(prefix[right])
            else:
                ans.append(prefix[right] ^ prefix[left - 1])

        return ans

```
``` Javascript []
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let n = arr.length;
    let prefix = new Array(n);
    let ans = [];

    // Fill the prefix XOR array
    prefix[0] = arr[0];
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] ^ arr[i];
    }

    // Process each query
    for (let [left, right] of queries) {
        if (left === 0) {
            ans.push(prefix[right]);
        } else {
            ans.push(prefix[right] ^ prefix[left - 1]);
        }
    }

    return ans;
};
```
![193730892e8675ebafc11519f6174bee5c4a5ab0.jpeg](./images/0.jpeg)

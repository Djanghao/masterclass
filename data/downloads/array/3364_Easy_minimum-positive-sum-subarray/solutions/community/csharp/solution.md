# Prefix Sum +Sliding Window || Beats 100% || C, C++, Python and more

**Author:** Pixelrick420
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6123931/](https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6123931/)

---

![image.png](./images/0.png)

---


# Intuition
To solve this problem, we need to find a subarray of nums whose size lies between l and r (inclusive), and whose sum is greater than zero. Among such subarrays, we aim to find the one with the smallest sum.


A brute-force approach would involve iterating through all possible subarrays, but calculating all the sums individually can be computationally expensive. Instead, we can use prefix sums to efficiently calculate subarray sums and minimize redundant computations.


Let the size of the given array nums be n. The idea is to create an array pref (short for prefix sum) of size n + 1 such that `pref[i]` is the sum of the first i terms of nums.

let `0 <= i < j < n` be 2 indicies. To calculate the sum of all elements in the subarray `nums[i:j]`, we simply calcuate `pref[j] - pref[i]`. This method will help us calculate the sum of any subarray quickly and efficiently.

---


# Approach

**Prefix Sum Calculation** : Compute the prefix sum array, where each element represents the cumulative sum of the array up to that index.

**Iterate Through Subarrays** : This is done using a sliding window type approach with nested loops. The outer loop determines the starting index (left) of the subarray. The inner loop determines the ending index (right) of the subarray, ensuring that the subarray size lies within the range [l, r].

**Check Conditions** : For each valid subarray, calculate the sum using the prefix array and check if it is greater than zero. If so, update the minimum sum.

**Edge Case** : If no subarray meets the conditions, return -1.

---


# Complexity
- **Time Complexity** :
The outer loop runs O(n), and the inner loop runs from a size of l up to r, so the total complexity is approximately $$O(n \\cdot (r - l))$$.
In the worst case where `r - l = n`, this becomes $$O(n^2).$$

- **Space Complexity** :
We use an additional array for the prefix sums, which has size n + 1. Thus, the space complexity is $$O(n)$$.


---


# Code
``` C []
int min(int a, int b) { 
    return ((a < b) ? a : b); 
}

int minimumSumSubarray(int* nums, int numsSize, int l, int r) {
    int out = 75001, curSum;
    int* pref = (int*)malloc(sizeof(int) * (numsSize + 1));
    pref[0] = 0;

    for (int i = 1; i <= numsSize; i++) {
        pref[i] = pref[i - 1] + nums[i - 1];
    }

    for (int left = 0; left <= numsSize - l; left++) {
        for (int right = left + l; right <= min(left + r, numsSize); right++) {
            curSum = pref[right] - pref[left];
            if (curSum > 0) {
                out = min(out, curSum);
            }
        }
    }
    return ((out != 75001) ? out : -1);
}
```
``` C++ []
class Solution {
public:
    int min(int a, int b) { 
        return ((a < b) ? a : b); 
    }

    int minimumSumSubarray(vector<int>& nums, int l, int r) {
        int n = nums.size(), out = 75001, curSum;
        int* pref = (int *)malloc(sizeof(int) * (n + 1));
        pref[0] = 0;

        for (int i = 1; i <= n; i++) {
            pref[i] = pref[i - 1] + nums[i - 1];
        }

        for (int left = 0; left <= n - l; left++) {
            for (int right = left + l; right <= min(left + r, n); right++) {
                curSum = pref[right] - pref[left];
                if (curSum > 0) {
                    out = min(out, curSum);
                }
            }
        }
        return ((out != 75001) ? out : -1);
    }
};
```
``` python []
class Solution:
    def minimumSumSubarray(self, nums: List[int], l: int, r: int) -> int:
        n = len(nums)
        out = float('inf')
        pref = [0] * (n + 1)
        for i in range(1, n + 1):
            pref[i] = pref[i - 1] + nums[i - 1]

        for left in range(0, n - l + 1):
            for right in range(left + l, min(left + r, n) + 1):
                curSum = pref[right] - pref[left]
                if curSum > 0:
                    out = min(out, curSum)

        return out if out != float('inf') else -1
```
``` java []
class Solution {
    public int min(int a, int b){
        return ((a < b) ? a : b);
    }

    public int minimumSumSubarray(List<Integer> nums, int l, int r) {
        int n = nums.size(), out =  75001, curSum;
        int[] pref = new int[n + 1];

        for (int i = 1; i <= n; i++){
            pref[i] = pref[i - 1] + nums.get(i - 1);
        }
            
        for (int left = 0; left <= n - l; left++){
            for (int right = left + l; right <= min(left + r, n); right++){
                curSum = pref[right] - pref[left];
                if (curSum > 0){
                    out = min(out, curSum);
                }  
            }
        }
        return ((out != 75001) ? out : -1);
    }
}
```
``` C# []
public class Solution {
    public int min(int a, int b){
        return ((a < b) ? a : b);
    }

    public int MinimumSumSubarray(IList<int> nums, int l, int r) {
        int n = nums.Count, output = 75001, curSum;
        int[] pref = new int[n + 1];

        for (int i = 1; i <= n; i++){
            pref[i] = pref[i - 1] + nums[i - 1];
        }
            
        for (int left = 0; left <= n - l; left++){
            for (int right = left + l; right <= min(left + r, n); right++){
                curSum = pref[right] - pref[left];
                if (curSum > 0){
                    output = min(output, curSum);
                }  
            }
        }
        return ((output != 75001) ? output : -1);
    }
}
```
```javascript []
var min = function(a, b) {
    return ((a < b) ? a : b);
}

var minimumSumSubarray = function (nums, l, r) {
    var n = nums.length, out = 75001, curSum;
    pref = new Array(n + 1);
    pref[0] = 0;

    for (let i = 1; i <= n; i++) {
        pref[i] = pref[i - 1] + nums[i - 1];
    }

    for (let left = 0; left <= n - l; left++) {
        for (let right = left + l; right <= min(left + r, n); right++) {
            curSum = pref[right] - pref[left];
            if (curSum > 0) {
                out = min(out, curSum);
            }
        }
    }
    return ((out != 75001) ? out : -1);
};
```
``` Dart []
class Solution {
    int min(int a, int b){
        return ((a < b) ? a : b);
    }

    int minimumSumSubarray(List<int> nums, int l, int r) {
        int n = nums.length, output = 75001, curSum;
        var pref = List.filled(n + 1, 0);

        for (int i = 1; i <= n; i++){
            pref[i] = pref[i - 1] + nums[i - 1];
        }
            
        for (int left = 0; left <= n - l; left++){
            for (int right = left + l; right <= min(left + r, n); right++){
                curSum = pref[right] - pref[left];
                if (curSum > 0){
                    output = min(output, curSum);
                }  
            }
        }
        return ((output != 75001) ? output : -1);
    }
}
```

---


Thank you for reading. Hope this was helpful.

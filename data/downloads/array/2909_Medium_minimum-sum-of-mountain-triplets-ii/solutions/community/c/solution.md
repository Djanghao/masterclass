# ✅☑[C++/Java/Python/JavaScript] || Beats 100% || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4195302/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4195302/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
- `l` and `r` are two arrays of integers to store minimum values on the left and right of each element in the input array.
- `n` stores the size of the input vector `nums`.

1. Initialize `l[0]` with the first element of `nums` and `r[n-1]` with the last element of `nums`. These arrays help in finding the minimum values on the left and right of each element in `nums`.
1. Calculate `l[i]` for `i` from 1 to `n-1` to represent the minimum value to the left of element `i` in `nums`. `l[i]` is computed as the minimum of `l[i-1]` and `nums[i]`.
1. Calculate `r[i]` for `i` from `n-2` to 0 to represent the minimum value to the right of element `i` in `nums`. `r[i]` is computed as the minimum of `r[i+1]` and `nums[i]`.
1. Initialize `mn` with a large value (`2e9`), which will be used to track the minimum sum.
1. Iterate through the elements in `nums` from 1 to `n-1`, excluding the first and last elements. For each element at index `i`:
    - Check if `l[i]` (minimum on the left) is less than `nums[i]` and `r[i]` (minimum on the right) is also less than `nums[i]`.
    - If the above condition is met, calculate a potential sum `l[i] + nums[i] + r[i]` and update `mn` if this sum is smaller than the current minimum.
1. Finally, check if `mn` is still equal to the initial large value (`2e9`). If it is, return -1, indicating that there is no valid sum. Otherwise, return `mn` as the minimum sum.


# Complexity
- *Time complexity:*
   $$O(n)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []
class Solution 
{
public:
    int l[100010], r[100010]; // Declare two arrays to store minimum values on the left and right of each element.

    int minimumSum(vector<int>& nums) 
    {
        int n = nums.size(); // Get the size of the input vector.
        l[0] = nums[0]; // Initialize the left array with the first element of nums.
        r[n-1] = nums[n-1]; // Initialize the right array with the last element of nums.

        // Calculate the minimum values from the left side of the array.
        for(int i = 1; i < n; i ++)
            l[i] = min(l[i-1], nums[i]);

        // Calculate the minimum values from the right side of the array.
        for(int i = n-2; i >= 0; i --)
            r[i] = min(r[i+1], nums[i]);

        int mn = 2e9; // Initialize mn with a large value to track the minimum sum.

        // Iterate through the array elements except the first and last.
        for(int i = 1; i < n-1; i ++)
        {
            // Check if the current element is smaller than its left and right minimums.
            if(l[i] < nums[i] && r[i] < nums[i])
                mn = min(mn, l[i] + nums[i] + r[i]); // Update mn if the sum is smaller.
        }

        return (mn==2e9) ? -1 : mn; // Return the minimum sum if found, otherwise -1.
    }
};

```


```C []

#define SIZE 100010

int l[SIZE], r[SIZE]; // Declare two arrays to store minimum values on the left and right of each element.

int minimumSum(int* nums, int numsSize) 
{
    int n = numsSize; // Get the size of the input array.
    l[0] = nums[0]; // Initialize the left array with the first element of nums.
    r[n-1] = nums[n-1]; // Initialize the right array with the last element of nums.

    // Calculate the minimum values from the left side of the array.
    for(int i = 1; i < n; i++)
        l[i] = (l[i-1] < nums[i]) ? l[i-1] : nums[i];

    // Calculate the minimum values from the right side of the array.
    for(int i = n-2; i >= 0; i--)
        r[i] = (r[i+1] < nums[i]) ? r[i+1] : nums[i];

    int mn = 2e9; // Initialize mn with a large value to track the minimum sum.

    // Iterate through the array elements except the first and last.
    for(int i = 1; i < n-1; i++)
    {
        // Check if the current element is smaller than its left and right minimums.
        if(l[i] < nums[i] && r[i] < nums[i])
        {
            // Update mn if the sum is smaller.
            int sum = l[i] + nums[i] + r[i];
            mn = (sum < mn) ? sum : mn;
        }
    }

    return (mn == 2e9) ? -1 : mn; // Return the minimum sum if found, otherwise -1.
}


```

```Java []
public class Solution {
    public int minimumSum(int[] nums) {
        int n = nums.length;
        int[] l = new int[n];
        int[] r = new int[n];

        l[0] = nums[0];
        r[n - 1] = nums[n - 1];

        for (int i = 1; i < n; i++) {
            l[i] = Math.min(l[i - 1], nums[i]);
        }

        for (int i = n - 2; i >= 0; i--) {
            r[i] = Math.min(r[i + 1], nums[i]);
        }

        int mn = 2e9;

        for (int i = 1; i < n - 1; i++) {
            if (l[i] < nums[i] && r[i] < nums[i]) {
                int sum = l[i] + nums[i] + r[i];
                mn = Math.min(mn, sum);
            }
        }

        return (mn == 2e9) ? -1 : mn;
    }
}

```


```python3 []
class Solution:
    def minimumSum(self, nums):
        n = len(nums)
        l = [0] * n
        r = [0] * n

        l[0] = nums[0]
        r[n - 1] = nums[n - 1]

        for i in range(1, n):
            l[i] = min(l[i - 1], nums[i])

        for i in range(n - 2, -1, -1):
            r[i] = min(r[i + 1], nums[i])

        mn = 2e9

        for i in range(1, n - 1):
            if l[i] < nums[i] and r[i] < nums[i]:
                sm = l[i] + nums[i] + r[i]
                mn = min(mn, sm)

        return -1 if mn == 2e9 else mn


```

```javascript []
class Solution {
    minimumSum(nums) {
        const n = nums.length;
        const l = new Array(n);
        const r = new Array(n);

        l[0] = nums[0];
        r[n - 1] = nums[n - 1];

        for (let i = 1; i < n; i++) {
            l[i] = Math.min(l[i - 1], nums[i]);
        }

        for (let i = n - 2; i >= 0; i--) {
            r[i] = Math.min(r[i + 1], nums[i]);
        }

        let mn = 2e9;

        for (let i = 1; i < n - 1; i++) {
            if (l[i] < nums[i] && r[i] < nums[i]) {
                const sum = l[i] + nums[i] + r[i];
                mn = Math.min(mn, sum);
            }
        }

        return mn === 2e9 ? -1 : mn;
    }
}

```


---



# PLEASE UPVOTE IF IT HELPED

---
---


---
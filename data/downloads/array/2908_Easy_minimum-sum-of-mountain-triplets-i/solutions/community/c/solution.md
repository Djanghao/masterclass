# ✅☑[C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/4195273/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/4195273/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
1. The code defines a class `Solution`, which contains a single function `minimumSum` that takes a vector of integers as input.

1. Two arrays, `l` and `r`, are declared with a maximum size of 100010 to store minimum values on the left and right sides of the array.

1. The function starts by calculating the size of the input vector `nums` and initializes the left array `l` with the first element of `nums` and the right array `r` with the last element of `nums`.

1. It then proceeds to calculate the minimum values from the left side of the array using a for loop. The left minimum at index `i` is calculated as the minimum of the left minimum at index `i-1` and the value of `nums[i]`.

1. Similarly, it calculates the minimum values from the right side of the array using another for loop. The right minimum at index `i` is calculated as the minimum of the right minimum at index `i+1` and the value of `nums[i]`.

1. The code initializes a variable `mn` with a large value (2e9), which is used to track the minimum sum. It's initialized with a large value to ensure any valid sum is smaller.

1. The code then iterates through the elements of the array, excluding the first and last elements, using a for loop. This is because the first and last elements don't have both left and right elements.

1. For each element at index `i`, it checks if the element is smaller than both its left and right minimums. If so, it proceeds to calculate a potential sum.

1. The potential sum is calculated as `l[i] + nums[i] + r[i]`, where `l[i]` is the minimum value on the left of the element, `nums[i]` is the current element, and `r[i]` is the minimum value on the right of the element.

1. If the potential sum is smaller than the current minimum sum `mn`, `mn` is updated with the potential sum.

1. Finally, the code returns the minimum sum `mn`. If no valid sum is found (i.e., `mn` remains at its initialized value), it returns -1.



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
    int l[100010], r[100010]; // Declare two arrays to store minimum values on the left and right.

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

#define min(a, b) ((a) < (b) ? (a) : (b))

int minimumSum(int* nums, int numsSize) {
    int l[100010], r[100010];
    int n = numsSize;

    // Initialize the left and right arrays with the first and last elements of nums.
    l[0] = nums[0];
    r[n - 1] = nums[n - 1];

    // Calculate the minimum values from the left side of the array.
    for (int i = 1; i < n; i++)
        l[i] = min(l[i - 1], nums[i]);

    // Calculate the minimum values from the right side of the array.
    for (int i = n - 2; i >= 0; i--)
        r[i] = min(r[i + 1], nums[i]);

    int mn = 2e9; // Initialize mn with a large value to track the minimum sum.

    // Iterate through the array elements except the first and last.
    for (int i = 1; i < n - 1; i++) {
        // Check if the current element is smaller than its left and right minimums.
        if (l[i] < nums[i] && r[i] < nums[i])
            mn = min(mn, l[i] + nums[i] + r[i]); // Update mn if the sum is smaller.
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

        int mn = 2_000_000_000;

        for (int i = 1; i < n - 1; i++) {
            if (l[i] < nums[i] && r[i] < nums[i]) {
                mn = Math.min(mn, l[i] + nums[i] + r[i]);
            }
        }

        return (mn == 2_000_000_000) ? -1 : mn;
    }
}

```


```python3 []
class Solution:
    def minimumSum(self, nums: List[int]) -> int:
        n = len(nums)
        l = [0] * n
        r = [0] * n

        l[0] = nums[0]
        r[n - 1] = nums[n - 1]

        for i in range(1, n):
            l[i] = min(l[i - 1], nums[i])

        for i in range(n - 2, -1, -1):
            r[i] = min(r[i + 1], nums[i])

        mn = 2_000_000_000

        for i in range(1, n - 1):
            if l[i] < nums[i] and r[i] < nums[i]:
                mn = min(mn, l[i] + nums[i] + r[i])

        return -1 if mn == 2_000_000_000 else mn

```


```javascript []
var minimumSum = function(nums) {
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

    let mn = 2_000_000_000;

    for (let i = 1; i < n - 1; i++) {
        if (l[i] < nums[i] && r[i] < nums[i]) {
            mn = Math.min(mn, l[i] + nums[i] + r[i]);
        }
    }

    return mn === 2_000_000_000 ? -1 : mn;
};


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---
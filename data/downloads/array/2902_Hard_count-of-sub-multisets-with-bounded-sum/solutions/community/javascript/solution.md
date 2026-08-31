# ✅☑[C++/C/Java/Python/JavaScript] || DP || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4168203/](https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4168203/)

---

# *PLEASE UPVOTE IF IT HELPED*

---


# Approaches
***(Also explained in the code)***

1. **Problem Context:** The code aims to calculate the number of multisets with sums within a specified range [l, r] for a given set of integers.

1. **Initialization:**

    - The code defines constants for modulo arithmetic (MOD) and the maximum number of elements (MAXN).
    - It initializes an array `dp` to store dynamic programming values.

1. **Dynamic Programming:**

    - The code employs dynamic programming to compute the number of multisets efficiently.
    - It initializes the `dp` array with zeros and sets `dp[0] = 1` as the base case for an empty set.
1. **Sorting and Processing:**

    - It sorts the input numbers in ascending order to handle duplicates more efficiently.
    - The sorted array is reversed so that processing begins with the largest numbers.
1. **Handling Leading Zeros:**

    - The code checks and handles leading zeros in the sorted array.
    - It increments dp[0] for each leading zero and removes these zeros from the array.
1. **Iterating Through Unique Numbers:**

- The code iterates through the sorted array and identifies unique numbers.
- It counts the occurrences of each unique number and calculates a variable `chg` based on the sum of elements processed so far.
1. **Counting Multisets:**

    - It uses nested loops to count the number of multisets that contribute to each sum in the range [l, r].
    - The inner loops handle various combinations of elements to achieve the target sum.
    - The dynamic programming values are updated as the code progresses.
1. **Final Result:**

    - The code calculates the final result for the given range [l, r].
    - It returns the result after applying modulo operation (MOD) to avoid integer overflow.




# Complexity
- **Time complexity:**
   $$O(r * n^2)$$
    (where 'r' is the range and 'n' is the number of unique elements.)

- **Space complexity:**
   $$O(MAXN)$$ 
(The space complexity is constant since the 'dp' array has a fixed size)
    


# Code
```C++ []
class Solution {
    const int MOD = 1000000007; // Define a constant for modulo arithmetic.
    const int MAXN = 20000; // Define a constant for the maximum number of elements in the array.

    int dp[20005]; // Initialize an array to store dynamic programming values.

public:
    int countSubMultisets(vector<int>& nums, int l, int r) {
        for (int i = 0; i <= r; i++) {
            dp[i] = 0; // Initialize the DP array with zeros.
        }
        dp[0] = 1; // The base case for an empty set is 1.

        sort(nums.begin(), nums.end()); // Sort the input numbers in ascending order.
        reverse(nums.begin(), nums.end()); // Reverse the sorted array to start with the largest numbers.
        int sf = 0; // Initialize a variable to keep track of the sum of elements.

        // Handle leading zeros in the sorted array.
        while (nums.size() && nums.back() == 0) {
            dp[0]++;
            nums.pop_back(); // Remove leading zeros.
        }

        // Process the sorted array.
        while (nums.size()) {
            int tt = nums.back(); // Get the next unique number.
            int cn = 0; // Initialize a counter for this number.
            while (nums.size() && nums.back() == tt) {
                nums.pop_back();
                cn++; // Count the occurrences of the current number.
            }

            int chg = min(sf + tt * cn, r); // Calculate the change variable based on the sum so far.
            for (int i = chg; i >= tt; i--) {
                for (int j = 1; j <= cn && i - (j * tt) >= 0; j++) {
                    dp[i] += dp[i - j * tt]; // Calculate the number of subsets for the current sum.
                    if (dp[i] >= MOD) dp[i] -= MOD; // Apply modulo operation.
                }
            }

            sf += tt * cn; // Update the sum so far.
        }

        int ans = 0;
        for (int i = l; i <= r; i++) {
            ans += dp[i]; // Calculate the answer by summing the DP values within the given range.
            ans %= MOD; // Apply modulo operation to the final answer.
        }

        return ans;
    }
};


```
```C []
#include <stdio.h>
#include <stdlib.h>

const int MOD = 1000000007;
const int MAXN = 20000;

int dp[20005];

void reverseArray(int arr[], int n) {
    int start = 0;
    int end = n - 1;
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

void removeLastElement(int arr[], int *n) {
    if (*n > 0) {
        int *newArr = (int *)malloc((*n - 1) * sizeof(int));
        for (int i = 0; i < *n - 1; i++) {
            newArr[i] = arr[i];
        }
        free(arr);
        arr = newArr;
        (*n)--;
    }
}

int countSubMultisets(int nums[], int n, int l, int r) {
    for (int i = 0; i <= r; i++) {
        dp[i] = 0;
    }
    dp[0] = 1;

    reverseArray(nums, n);

    int sf = 0;

    while (n > 0 && nums[n - 1] == 0) {
        dp[0]++;
        removeLastElement(nums, &n);
    }

    while (n > 0) {
        int tt = nums[n - 1];
        int cn = 0;
        while (n > 0 && nums[n - 1] == tt) {
            removeLastElement(nums, &n);
            cn++;
        }

        int chg = (sf + tt * cn) < r ? (sf + tt * cn) : r;
        for (int i = chg; i >= tt; i--) {
            for (int j = 1; j <= cn && (i - (j * tt)) >= 0; j++) {
                dp[i] += dp[i - j * tt];
                if (dp[i] >= MOD) dp[i] -= MOD;
            }
        }

        sf += tt * cn;
    }

    int ans = 0;
    for (int i = l; i <= r; i++) {
        ans += dp[i];
        ans %= MOD;
    }

    return ans;
}

```
```Java []
public class Solution {
    private final int MOD = 1000000007;
    private final int MAXN = 20000;
    private int[] dp = new int[20005];

    public int countSubMultisets(int[] nums, int l, int r) {
        for (int i = 0; i <= r; i++) {
            dp[i] = 0;
        }
        dp[0] = 1;

        Arrays.sort(nums);
        reverseArray(nums);
        int sf = 0;

        while (nums.length > 0 && nums[nums.length - 1] == 0) {
            dp[0]++;
            removeLastElement(nums);
        }

        while (nums.length > 0) {
            int tt = nums[nums.length - 1];
            int cn = 0;
            while (nums.length > 0 && nums[nums.length - 1] == tt) {
                removeLastElement(nums);
                cn++;
            }

            int chg = Math.min(sf + tt * cn, r);
            for (int i = chg; i >= tt; i--) {
                for (int j = 1; j <= cn && i - (j * tt) >= 0; j++) {
                    dp[i] += dp[i - j * tt];
                    if (dp[i] >= MOD) {
                        dp[i] -= MOD;
                    }
                }
            }

            sf += tt * cn;
        }

        int ans = 0;
        for (int i = l; i <= r; i++) {
            ans += dp[i];
            ans %= MOD;
        }

        return ans;
    }

    private void reverseArray(int[] arr) {
        int start = 0;
        int end = arr.length - 1;
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    private void removeLastElement(int[] arr) {
        if (arr.length > 0) {
            int[] newArr = new int[arr.length - 1];
            for (int i = 0; i < newArr.length; i++) {
                newArr[i] = arr[i];
            }
            arr = newArr;
        }
    }
}

```
```python3 []

class Solution:
    MOD = 1000000007
    MAXN = 20000

    def __init__(self):
        self.dp = [0] * 20005

    def countSubMultisets(self, nums, l, r):
        for i in range(r + 1):
            self.dp[i] = 0
        self.dp[0] = 1

        nums.sort()
        nums.reverse()
        sf = 0

        while nums and nums[-1] == 0:
            self.dp[0] += 1
            nums.pop()

        while nums:
            tt = nums[-1]
            cn = 0
            while nums and nums[-1] == tt:
                nums.pop()
                cn += 1

            chg = min(sf + tt * cn, r)
            for i in range(chg, tt - 1, -1):
                for j in range(1, cn + 1):
                    if i - (j * tt) >= 0:
                        self.dp[i] += self.dp[i - j * tt]
                        if self.dp[i] >= self.MOD:
                            self.dp[i] -= self.MOD

            sf += tt * cn

        ans = 0
        for i in range(l, r + 1):
            ans += self.dp[i]
            ans %= self.MOD

        return ans


```
```javascript []

class Solution {
    constructor() {
        this.MOD = 1000000007;
        this.MAXN = 20000;
        this.dp = new Array(20005).fill(0);
    }

    countSubMultisets(nums, l, r) {
        for (let i = 0; i <= r; i++) {
            this.dp[i] = 0;
        }
        this.dp[0] = 1;

        nums.sort((a, b) => a - b);
        nums.reverse();
        let sf = 0;

        while (nums.length > 0 && nums[nums.length - 1] === 0) {
            this.dp[0]++;
            nums.pop();
        }

        while (nums.length > 0) {
            const tt = nums[nums.length - 1];
            let cn = 0;
            while (nums.length > 0 && nums[nums.length - 1] === tt) {
                nums.pop();
                cn++;
            }

            const chg = Math.min(sf + tt * cn, r);
            for (let i = chg; i >= tt; i--) {
                for (let j = 1; j <= cn; j++) {
                    if (i - j * tt >= 0) {
                        this.dp[i] += this.dp[i - j * tt];
                        if (this.dp[i] >= this.MOD) {
                            this.dp[i] -= this.MOD;
                        }
                    }
                }
            }

            sf += tt * cn;
        }

        let ans = 0;
        for (let i = l; i <= r; i++) {
            ans += this.dp[i];
            ans %= this.MOD;
        }

        return ans;
    }
}



```
---


# *PLEASE UPVOTE IF IT HELPED*

---
---


---


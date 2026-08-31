# ✅☑[C++/C/Java/Python/JavaScript] || Beats 100% || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4414866/](https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4414866/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
*(Also explained in the code)*

1. **check(int t):** This function checks whether an integer `t` is a palindrome. It first converts the integer to a string and then traverses the string characters from both ends towards the middle, checking if the characters match symmetrically. If they do, the function returns `true`; otherwise, it returns `false`.

1. **minimumCost(vector<int>& nums):** This function aims to find the minimum cost required to make all elements in the `nums` vector equal. It does so by performing the following steps:

    - Sorts the input array `nums`.
    - Determines the middle elements `first` and `second` based on the array size. `second` is adjusted if the array length is even.
    - Searches for the smallest palindrome value within specific ranges: `[first, second]`, `[first, 0]`, and `[second, INT_MAX]`.
    - For each valid palindrome found in these ranges, it calculates the total cost required to make all elements equal to that palindrome value.
    - Finally, it returns the minimum cost obtained among these possibilities.





# Code
```C++ []
class Solution {
public:
    // Function to check if a number is a palindrome
    bool check(int t) {
        // Convert the number to a string
        string temp = to_string(t);
        int i = 0, j = temp.size() - 1;

        // Check for palindrome property
        while (i < j) {
            if (temp[i] != temp[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    
    // Function to find the minimum cost to make all elements in 'nums' equal
    long long minimumCost(vector<int>& nums) {
        sort(nums.begin(), nums.end()); // Sort the input array
        int n = nums.size();
        int first = nums[n / 2]; // Middle element if the array length is odd
        int second = nums[n / 2]; // Middle element if the array length is odd
        long long ans = 1e18; // Set initial answer to a large value

        // Adjust 'second' if the array length is even
        if (n % 2 == 0) {
            second = nums[(n + 1) / 2];
        }
        
        int temp = -1;

        // Searching for the smallest palindrome value in the range [first, second]
        for (int q = first; q <= second; ++q) {
            if (check(q)) {
                temp = q;
                break;
            }
        }

        // If a palindrome is found within the range, calculate the total cost
        if (temp != -1) {
            long long fo = 0;
            for (int i = 0; i < n; ++i) {
                fo += abs(nums[i] - temp);
            }
            ans = min(ans, fo);
        }
        
        temp = -1;

        // Searching for the smallest palindrome value in the range [first, 0]
        for (int q = first; q >= 0; --q) {
            if (check(q)) {
                temp = q;
                break;
            }
        }

        // If a palindrome is found within the range, calculate the total cost
        if (temp != -1) {
            long long fo = 0;
            for (int i = 0; i < n; ++i) {
                fo += abs(nums[i] - temp);
            }
            ans = min(ans, fo);
        }

        temp = -1;

        // Searching for the smallest palindrome value in the range [second, INT_MAX]
        for (int q = second; q < INT_MAX; ++q) {
            if (check(q)) {
                temp = q;
                break;
            }
        }

        // If a palindrome is found within the range, calculate the total cost
        if (temp != -1) {
            long long fo = 0;
            for (int i = 0; i < n; ++i) {
                fo += abs(nums[i] - temp);
            }
            ans = min(ans, fo);
        }
        
        // Return the minimum cost
        return ans;
    }
};



```
```C []
#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int check(int t) {
    char temp[20];
    int i = 0, j;
    sprintf(temp, "%d", t);
    j = strlen(temp) - 1;
    while (i < j) {
        if (temp[i] != temp[j]) {
            return 0;
        }
        i++;
        j--;
    }
    return 1;
}

long long minimumCost(int nums[], int length) {
    qsort(nums, length, sizeof(int), compare);
    int n = length;
    int first = nums[n / 2];
    int second = nums[n / 2];
    long long ans = 1000000000000000000;

    if (n % 2 == 0) {
        second = nums[(n + 1) / 2];
    }

    int temp = -1;

    for (int q = first; q <= second; ++q) {
        if (check(q)) {
            temp = q;
            break;
        }
    }

    if (temp != -1) {
        long long fo = 0;
        for (int i = 0; i < n; ++i) {
            fo += abs(nums[i] - temp);
        }
        ans = (ans < fo) ? ans : fo;
    }

    // ... Repeat the rest of the code similarly
    // ...

    return ans;
}




```
```Java []
import java.util.Arrays;

class Solution {
    boolean check(int t) {
        String temp = Integer.toString(t);
        int i = 0, j = temp.length() - 1;
        while (i < j) {
            if (temp.charAt(i) != temp.charAt(j)) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    
    long minimumCost(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        int first = nums[n / 2];
        int second = nums[n / 2];
        long ans = Long.MAX_VALUE;

        if (n % 2 == 0) {
            second = nums[(n + 1) / 2];
        }

        int temp = -1;

        for (int q = first; q <= second; ++q) {
            if (check(q)) {
                temp = q;
                break;
            }
        }

        if (temp != -1) {
            long fo = 0;
            for (int i = 0; i < n; ++i) {
                fo += Math.abs(nums[i] - temp);
            }
            ans = Math.min(ans, fo);
        }

        // ... Repeat the rest of the code similarly
        // ...

        return ans;
    }
}



```
```python3 []
class Solution:
    def check(self, t):
        temp = str(t)
        i, j = 0, len(temp) - 1
        while i < j:
            if temp[i] != temp[j]:
                return False
            i += 1
            j -= 1
        return True
    
    def minimumCost(self, nums):
        nums.sort()
        n = len(nums)
        first = nums[n // 2]
        second = nums[n // 2]
        ans = float('inf')

        if n % 2 == 0:
            second = nums[(n + 1) // 2]

        temp = -1

        for q in range(first, second + 1):
            if self.check(q):
                temp = q
                break

        if temp != -1:
            fo = 0
            for i in range(n):
                fo += abs(nums[i] - temp)
            ans = min(ans, fo)

        # ... Repeat the rest of the code similarly
        # ...

        return ans



```
```javascript []
class Solution {
    check(t) {
        const temp = t.toString();
        let i = 0, j = temp.length - 1;
        while (i < j) {
            if (temp[i] !== temp[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    
    minimumCost(nums) {
        nums.sort((a, b) => a - b);
        const n = nums.length;
        let first = nums[Math.floor(n / 2)];
        let second = nums[Math.floor(n / 2)];
        let ans = Number.MAX_SAFE_INTEGER;

        if (n % 2 === 0) {
            second = nums[(n + 1) / 2];
        }

        let temp = -1;

        for (let q = first; q <= second; ++q) {
            if (this.check(q)) {
                temp = q;
                break;
            }
        }

        if (temp !== -1) {
            let fo = 0;
            for (let i = 0; i < n; ++i) {
                fo += Math.abs(nums[i] - temp);
            }
            ans = Math.min(ans, fo);
        }

        // ... Repeat the rest of the code similarly
        // ...

        return ans;
    }
}



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---
# ✅☑[C++/Java/Python/JavaScript] || Beats 100% || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4384609/](https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4384609/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. It iterates through the vector, starting from index 0, and checks if the battery percentage is greater than 0.
1. If it's greater than 0, it increments the cnt (tested devices count) and decreases the battery percentages of subsequent devices by 1 (ensuring they don't go below 0).



# Complexity
- *Time complexity:*
   $$O(n)$$
    

- *Space complexity:*
   $$O(1)$$
    


# Code
```C++ []

class Solution {
public:
    // Function to count the number of tested devices
    int countTestedDevices(vector<int>& bp) {
        int n = bp.size(); // Size of the battery percentage array
        int cnt = 0; // Counter for tested devices
        
        for (int i = 0; i < n; ++i) {
            if (bp[i] > 0) {
                ++cnt; // Increment tested devices count
                for (int j = i + 1; j < n; ++j) {
                    // Decrement battery percentage by 1, ensuring it doesn't go below 0
                    bp[j] = max(0, bp[j] - 1);
                }
            }
        }
        
        return cnt; // Return the count of tested devices
    }
};

```
```C []

#include <stdio.h>
#include <stdlib.h>

// Function to count the number of tested devices
int countTestedDevices(int bp[], int n) {
    int cnt = 0; // Counter for tested devices

    for (int i = 0; i < n; ++i) {
        if (bp[i] > 0) {
            ++cnt; // Increment tested devices count
            for (int j = i + 1; j < n; ++j) {
                // Decrement battery percentage by 1, ensuring it doesn't go below 0
                bp[j] = (bp[j] - 1) > 0 ? (bp[j] - 1) : 0;
            }
        }
    }

    return cnt; // Return the count of tested devices
}



```
```Java []
import java.util.Arrays;

class Solution {
    // Function to count the number of tested devices
    public int countTestedDevices(int[] bp) {
        int n = bp.length; // Size of the battery percentage array
        int cnt = 0; // Counter for tested devices
        
        for (int i = 0; i < n; ++i) {
            if (bp[i] > 0) {
                ++cnt; // Increment tested devices count
                for (int j = i + 1; j < n; ++j) {
                    // Decrement battery percentage by 1, ensuring it doesn't go below 0
                    bp[j] = Math.max(0, bp[j] - 1);
                }
            }
        }
        
        return cnt; // Return the count of tested devices
    }
    
    
}



```
```python3 []
class Solution:
    # Function to count the number of tested devices
    def countTestedDevices(self, bp):
        n = len(bp)  # Size of the battery percentage array
        cnt = 0  # Counter for tested devices
        
        for i in range(n):
            if bp[i] > 0:
                cnt += 1  # Increment tested devices count
                for j in range(i + 1, n):
                    # Decrement battery percentage by 1, ensuring it doesn't go below 0
                    bp[j] = max(0, bp[j] - 1)
        
        return cnt  # Return the count of tested devices




```
```javascript []
// Function to count the number of tested devices
function countTestedDevices(bp) {
    const n = bp.length; // Size of the battery percentage array
    let cnt = 0; // Counter for tested devices

    for (let i = 0; i < n; ++i) {
        if (bp[i] > 0) {
            ++cnt; // Increment tested devices count
            for (let j = i + 1; j < n; ++j) {
                // Decrement battery percentage by 1, ensuring it doesn't go below 0
                bp[j] = Math.max(0, bp[j] - 1);
            }
        }
    }

    return cnt; // Return the count of tested devices
}


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---
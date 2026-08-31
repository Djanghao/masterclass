# ✅☑[C++/Java/Python/JavaScript] || DP || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4328933/](https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4328933/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
1. **Initialization:**

    - `N` stores the size of the input vector `A`.
    - `dp` is initialized as a vector of size `N + 5`, with each element initialized to a large value (`1e9`).
    - `dp[0]` is set to `0` as it takes zero coins to make a sum of zero.
1. **Loop through array:**

    - The loop iterates from index `1` to `N` to traverse through each element in the input vector `A`.
1. **Update minimum coins:**

    - `sdp` stores the sum of the current dp value and the current coin value.
    - Another loop runs from `0` to `i` to update the dp array.
    - `dp[min(N, i + j)]` is updated with the minimum value between the current dp value at `min(N, i + j)` index and `sdp`.
1. **Return result:**

    - The function returns `dp[N]`, which represents the minimum number of coins needed to make the sum of the elements in the array `A`.



# Complexity
- *Time complexity:*
   $$O(n^2)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []


class Solution {
public:
    // Function to find the minimum number of coins needed
    int minimumCoins(vector<int>& A) {
        int N = A.size();
        
        // Initializing a dynamic programming array with a large value
        // This array stores the minimum number of coins needed for each index
        vector<int> dp(N + 5, 1e9); // Initialized with a large value
        
        dp[0] = 0; // Zero coins needed to make zero sum
        
        // Loop through each element of the array A
        for(int i = 1; i <= N; i++) {
            int sdp = dp[i - 1] + A[i - 1]; // Sum of current dp value and current coin value
            
            // Loop through possible positions to update dp array
            for(int j = 0; j <= i; j++) {
                // Update dp array with the minimum value between current dp and calculated sdp
                dp[min(N, i + j)] = min(dp[min(N, i + j)], sdp);
            }
        }
        
        return dp[N]; // Return the minimum coins needed for N elements
    }
};


```
```C []

int minimumCoins(int A[], int size) {
    int N = size;
    int dp[N + 5];
    int i, j;

    // Initializing the dp array with a large value
    for (i = 0; i < N + 5; i++) {
        dp[i] = 1e9; // Initialized with a large value
    }

    dp[0] = 0; // Zero coins needed to make zero sum
    
    // Loop through each element of the array A
    for (i = 1; i <= N; i++) {
        int sdp = dp[i - 1] + A[i - 1]; // Sum of current dp value and current coin value

        // Loop through possible positions to update dp array
        for (j = 0; j <= i; j++) {
            // Update dp array with the minimum value between current dp and calculated sdp
            dp[(N < (i + j)) ? N : (i + j)] = (dp[(N < (i + j)) ? N : (i + j)] < sdp) ? dp[(N < (i + j)) ? N : (i + j)] : sdp;
        }
    }

    return dp[N]; // Return the minimum coins needed for N elements
}



```
```Java []


class Solution {
    public int minimumCoins(int[] A) {
        int N = A.length;
        
        // Initializing a dynamic programming array with a large value
        // This array stores the minimum number of coins needed for each index
        int[] dp = new int[N + 5];
        Arrays.fill(dp, Integer.MAX_VALUE);
        
        dp[0] = 0; // Zero coins needed to make zero sum
        
        // Loop through each element of the array A
        for (int i = 1; i <= N; i++) {
            int sdp = dp[i - 1] + A[i - 1]; // Sum of current dp value and current coin value
            
            // Loop through possible positions to update dp array
            for (int j = 0; j <= i; j++) {
                // Update dp array with the minimum value between current dp and calculated sdp
                dp[Math.min(N, i + j)] = Math.min(dp[Math.min(N, i + j)], sdp);
            }
        }
        
        return dp[N]; // Return the minimum coins needed for N elements
    }
}



```
```python3 []
class Solution:
    def minimumCoins(self, A):
        N = len(A)
        
        # Initializing a dynamic programming array with a large value
        # This array stores the minimum number of coins needed for each index
        dp = [float('inf')] * (N + 5)
        
        dp[0] = 0  # Zero coins needed to make zero sum
        
        # Loop through each element of the array A
        for i in range(1, N + 1):
            sdp = dp[i - 1] + A[i - 1]  # Sum of current dp value and current coin value
            
            # Loop through possible positions to update dp array
            for j in range(i + 1):
                # Update dp array with the minimum value between current dp and calculated sdp
                dp[min(N, i + j)] = min(dp[min(N, i + j)], sdp)
        
        return dp[N]  # Return the minimum coins needed for N elements



```
```javascript []
function minimumCoins(A) {
    let N = A.length;
    let dp = new Array(N + 5).fill(1e9);

    dp[0] = 0; // Zero coins needed to make zero sum

    // Loop through each element of the array A
    for (let i = 1; i <= N; i++) {
        let sdp = dp[i - 1] + A[i - 1]; // Sum of current dp value and current coin value

        // Loop through possible positions to update dp array
        for (let j = 0; j <= i; j++) {
            // Update dp array with the minimum value between current dp and calculated sdp
            dp[Math.min(N, i + j)] = Math.min(dp[Math.min(N, i + j)], sdp);
        }
    }

    return dp[N]; // Return the minimum coins needed for N elements
}



```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---
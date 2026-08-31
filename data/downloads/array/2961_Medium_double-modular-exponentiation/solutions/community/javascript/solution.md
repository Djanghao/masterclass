# ✅☑[C++/Java/Python/JavaScript] || Easy Approach || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 19
**Link:** [https://leetcode.com/problems/double-modular-exponentiation/solutions/4384579/](https://leetcode.com/problems/double-modular-exponentiation/solutions/4384579/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

- The code calculates two values, `n1` and `n2`, using the given formula for each subarray in the `variables` vector.
- `n1` is obtained by calculating `$$(m^b)$$ %10` and `n2` is obtained by calculating `$$(n1^c)$$ %d`.
- If `n2` matches the target, the index `k` is added to the ans vector.





# Complexity
- *Time complexity:*
   $$O(n)$$
    

- *Space complexity:*
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    vector<int> getGoodIndices(vector<vector<int>>& variables, int target) {
        vector<int> ans; // Resultant vector to store good indices
        int k = 0; // Counter for keeping track of the index

        for (const auto& x : variables) { // Loop through the 'variables' vector
            int m = x[0], b = x[1], c = x[2], d = x[3]; // Extracting values from subarray

            int n1 = 1; // Initialize n1

            // Calculate (m ^ b) % 10
            for (int i = 0; i < b; ++i) {
                n1 = (n1 * m) % 10;
            }

            int n2 = 1; // Initialize n2

            // Calculate (n1 ^ c) % d
            for (int i = 0; i < c; ++i) {
                n2 = (n2 * n1) % d;
            }

            // Check if n2 matches the target
            if (n2 == target) {
                ans.push_back(k); // If true, push index 'k' into the answer vector
            }

            k++; // Increment the index counter
        }

        return ans; // Return the resulting vector containing good indices
    }
};



```
```C []

#include <stdio.h>
#include <stdlib.h>

int* getGoodIndices(int variables[][4], int target, int numRows) {
    int* ans = (int*)malloc(numRows * sizeof(int)); // Resultant array to store good indices
    int k = 0; // Counter for keeping track of the index

    for (int i = 0; i < numRows; i++) { // Loop through the 'variables' array
        int m = variables[i][0], b = variables[i][1], c = variables[i][2], d = variables[i][3]; // Extracting values from subarray

        int n1 = 1; // Initialize n1

        // Calculate (m ^ b) % 10
        for (int j = 0; j < b; ++j) {
            n1 = (n1 * m) % 10;
        }

        int n2 = 1; // Initialize n2

        // Calculate (n1 ^ c) % d
        for (int j = 0; j < c; ++j) {
            n2 = (n2 * n1) % d;
        }

        // Check if n2 matches the target
        if (n2 == target) {
            ans[k++] = i; // If true, add index 'k' into the answer array and increment the index counter
        }
    }

    return ans; // Return the resulting array containing good indices
}



```
```Java []
import java.util.*;

class Solution {
    public List<Integer> getGoodIndices(List<List<Integer>> variables, int target) {
        List<Integer> ans = new ArrayList<>(); // Resultant list to store good indices
        int k = 0; // Counter for keeping track of the index

        for (List<Integer> x : variables) { // Loop through the 'variables' list
            int m = x.get(0), b = x.get(1), c = x.get(2), d = x.get(3); // Extract values from subarray

            int n1 = 1; // Initialize n1

            // Calculate (m ^ b) % 10
            for (int i = 0; i < b; ++i) {
                n1 = (n1 * m) % 10;
            }

            int n2 = 1; // Initialize n2

            // Calculate (n1 ^ c) % d
            for (int i = 0; i < c; ++i) {
                n2 = (n2 * n1) % d;
            }

            // Check if n2 matches the target
            if (n2 == target) {
                ans.add(k); // If true, add index 'k' to the answer list
            }

            k++; // Increment the index counter
        }

        return ans; // Return the resulting list containing good indices
    }
}



```
```python3 []
class Solution:
    def getGoodIndices(self, variables, target):
        ans = [] # Resultant list to store good indices
        k = 0 # Counter for keeping track of the index

        for x in variables: # Loop through the 'variables' list
            m, b, c, d = x # Extract values from subarray

            n1 = 1 # Initialize n1

            # Calculate (m ^ b) % 10
            for i in range(b):
                n1 = (n1 * m) % 10

            n2 = 1 # Initialize n2

            # Calculate (n1 ^ c) % d
            for i in range(c):
                n2 = (n2 * n1) % d

            # Check if n2 matches the target
            if n2 == target:
                ans.append(k) # If true, add index 'k' to the answer list

            k += 1 # Increment the index counter

        return ans # Return the resulting list containing good indices



```
```javascript []

function getGoodIndices(variables, target) {
    let ans = []; // Resultant array to store good indices
    let k = 0; // Counter for keeping track of the index

    for (let i = 0; i < variables.length; i++) { // Loop through the 'variables' array
        let [m, b, c, d] = variables[i]; // Extracting values from subarray

        let n1 = 1; // Initialize n1

        // Calculate (m ^ b) % 10
        for (let j = 0; j < b; ++j) {
            n1 = (n1 * m) % 10;
        }

        let n2 = 1; // Initialize n2

        // Calculate (n1 ^ c) % d
        for (let j = 0; j < c; ++j) {
            n2 = (n2 * n1) % d;
        }

        // Check if n2 matches the target
        if (n2 === target) {
            ans.push(k); // If true, push index 'k' into the answer array
        }

        k++; // Increment the index counter
    }

    return ans; // Return the resulting array containing good indices
}


```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---
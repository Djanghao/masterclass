# Very Easy 0 ms 100% (Fully Explained)(Java, C++, Python, JS, C, Python3)

**Author:** PratikSen07
**Votes:** 28
**Link:** [https://leetcode.com/problems/unique-binary-search-trees/solutions/2364615/](https://leetcode.com/problems/unique-binary-search-trees/solutions/2364615/)

---

# **Java Solution (Dynamic Programming Approach):**
Runtime: 0 ms, faster than 100.00% of Java online submissions for Unique Binary Search Trees.
```
class Solution {
    public int numTrees(int n) {
        // Create 'sol' array of length n+1...
        int[] sol = new int[n+1];
        // The value of the first index will be 1.
        sol[0] = 1;
        // Run a loop from 1 to n+1...
        for(int i = 1; i <= n; i++) {
            // Within the above loop, run a nested loop from 0 to i...
            for(int j = 0; j < i; j++) {
                // Update the i-th position of the array by adding the multiplication of the respective index...
                sol[i] += sol[j] * sol[i-j-1];
            }
        }
        // Return the value of the nth index of the array to get the solution...
        return sol[n];
    }
}
```

# **C++ Solution (Dynamic Programming Approach):**
```
class Solution {
public:
    int numTrees(int n) {
        // If n <= 1, then return 1
        if (n <= 1) {
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0return 1;
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}
        // Create 'sol' array of length n+1...
        vector<int> sol(n+1, 0);
        // The value of the first and second index will be 1.
        sol[0] = sol[1] = 1;
        // Run a loop from 2 to n...
        for (int i = 2; i <= n; ++i) {
            // within the above loop, run a nested loop from 0 to i...
            for (int j = 0; j < i; j++) {
                // Update the i-th position of the array by adding the multiplication of the respective index...
                sol[i] += sol[j] * sol[i-j-1];
            }
        }
        // Return the value of the nth index of the array to get the solution...
        return sol[n];
    }
};
```

# **Python Solution (Dynamic Programming Approach):**
Runtime: 17 ms, faster than 90.77% of Python online submissions for Unique Binary Search Trees.
```
class Solution(object):
    def numTrees(self, n):
        if n == 0 or n == 1:
            return 1
        # Create 'sol' array of length n+1...
        sol = [0] * (n+1)
        # The value of the first index will be 1.
        sol[0] = 1
        # Run a loop from 1 to n+1...
        for i in range(1, n+1):
            # Within the above loop, run a nested loop from 0 to i...
            for j in range(i):
                # Update the i-th position of the array by adding the multiplication of the respective index...
                sol[i] += sol[j] * sol[i-j-1]
        # Return the value of the nth index of the array to get the solution...
        return sol[n]
```
        
# **JavaScript Solution (Dynamic Programmming Approach):**
```
var numTrees = function(n) {
    // Create 'sol' array to store the solution...
    var sol = [1, 1];
    // Run a loop from 2 to n...
    for (let i = 2; i <= n; i++) {
        sol[i] = 0;
        // Within the above loop, run a nested loop from 1 to i...
        for (let j = 1; j <= i; j++) {
            // Update the i-th position of the array by adding the multiplication of the respective index...
            sol[i] += sol[i - j] * sol[j - 1];
        }
    }
    // Return the value of the nth index of the array to get the solution...
    return sol[n];
};
```

# **C Language (Catalan Math Approach):**
Runtime: 0 ms, faster than 100.00% of C online submissions for Unique Binary Search Trees.
```
int numTrees(int n){
    long sol = 1;
    for (int i = 0; i < n; ++i) {
        sol = sol * 2 * (2 * i + 1) / (i + 2);
    }
    return (int) sol;
}
```

# **Python3 Solution (Catalan Math Approach):**
```
class Solution:
    def numTrees(self, n: int) -> int:
        sol = 1
        for i in range (0, n):
            sol = sol * 2 * (2 * i + 1) / (i + 2)
        return int(sol)
```
**I am working hard for you guys...
Please upvote if you find any help with this code...**
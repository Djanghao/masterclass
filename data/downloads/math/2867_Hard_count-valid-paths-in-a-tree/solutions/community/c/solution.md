# ✅☑[C++/ C / Java/ Python/ JavaScript ] || Beats 100%  || DP ||EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 18
**Link:** [https://leetcode.com/problems/count-valid-paths-in-a-tree/solutions/4083044/](https://leetcode.com/problems/count-valid-paths-in-a-tree/solutions/4083044/)

---

# *PLEASE UPVOTE IF IT HELPED*

# Approach

***(Also explained in the code)***

1. `genPrimes` Function:

- This function generates a list of prime numbers up to the given integer 'n' using the Sieve of Eratosthenes algorithm.
- It initializes a boolean vector `prime` of size `(n + 1)` to `true` for all numbers greater than or equal to 2. This marks them as potential prime numbers.
- It then iterates through the numbers starting from 2 up to 'n'. For each number 'i', if it's marked as prime (`prime[i] == true`), it marks all its multiples in the vector as non-prime by setting `prime[j] = false`, where `j` is a multiple of 'i'.
- Finally, it returns the `prime` vector, where `prime[i]` indicates whether 'i' is a prime number or not.

2. `countPaths` Function:

- This function calculates the count of paths in a tree-like structure based on the concept of prime and non-prime nodes.
- It first calls the `genPrimes` function to generate a list of prime numbers up to 'n' and stores it in the `isPrime` vector.
- It creates an adjacency list `E` to represent the graph where each node has a list of neighboring nodes.
- It then populates the adjacency list `E` based on the input 'edges' that represent the connections between nodes.
- The function uses a recursive depth-first search (DFS) approach to traverse the tree.
- Inside the DFS function, for each node 'x', it checks whether the node number ('x + 1') is prime using the `isPrime` vector.
- It maintains an array `cur` to count the number of prime and non-prime nodes encountered during the traversal.
- For each neighboring node 'y', it recursively calls the DFS function and collects the counts from that subtree.
- It updates the answer `ans` by counting the paths based on whether 'x' and 'y' are prime or non-prime nodes.
- Finally, it returns the count array `cur` for the current node.
3. The `countPaths` function is called with the root node as '0' and parent '-1' to start the DFS traversal from the root.

# Complexity
- **Time complexity:**
$$O(n)$$

- **Space complexity:**
$$O(n)$$

# Code
```C++ []
class Solution {
public:
    // Helper function to generate prime numbers up to 'n'.
    vector<bool> genPrimes(int n) {
        vector<bool> prime(n + 1);
        if (n > 1) fill(prime.begin() + 2, prime.end(), true); // Initializing all numbers >= 2 as prime.
        for (int i = 2; i <= n; ++i)
            if (prime[i])
                for (int j = i + i; j <= n; j += i)
                    prime[j] = false; // Marking multiples of prime numbers as not prime.
        return prime;
    }
    
    // Main function to count paths based on prime numbers.
    long long countPaths(int n, vector<vector<int>>& edges) {
        auto isPrime = genPrimes(n); // Generate a list of prime numbers up to 'n'.
        vector<vector<int>> E(n); // Creating an adjacency list for the graph.
        
        // Populate the adjacency list based on given edges.
        for (int i = 0; i < n - 1; ++i) {
            int u = edges[i][0], v = edges[i][1];
            --u;
            --v;
            E[u].push_back(v);
            E[v].push_back(u);
        }
        
        long long ans = 0; // Initialize the answer to zero.
        
        // Depth-first search (DFS) function to traverse the tree and count paths.
        function<array<int, 2>(int, int)> dfs = [&](int x, int p) {
            int prime = isPrime[x + 1]; // Check if the node number (1-based) is prime.
            array<int, 2> cur = {}; // Initialize an array to store counts based on prime status.
            cur[prime]++; // Update the count for prime or non-prime node.
            
            for (int y : E[x]) {
                if (y == p) continue; // Skip the parent node.
                auto v = dfs(y, x); // Recursively traverse the tree.
                
                // Update the answer by counting paths based on prime and non-prime nodes.
                ans += (long long)v[0] * cur[1];
                ans += (long long)v[1] * cur[0];
                
                cur[prime] += v[0]; // Update counts for the current node.
                
                if (!prime) cur[1 + prime] += v[1]; // If non-prime, update the count for non-prime nodes.
            }
            return cur; // Return the count array for the current node.
        };
        
        dfs(0, -1); // Start DFS from the root node (node 0) with parent -1.
        
        return ans; // Return the final count of paths.
    }
}; 
```
```C []
#include <stdbool.h>
#include <stdlib.h>
#include <stdio.h>

// Function to generate prime numbers up to 'n' and store them in an array.
bool* genPrimes(int n) {
    bool* prime = (bool*)malloc((n + 1) * sizeof(bool));
    for (int i = 0; i <= n; ++i) {
        prime[i] = (i > 1); // Initializing all numbers >= 2 as prime.
    }
    
    for (int i = 2; i <= n; ++i) {
        if (prime[i]) {
            for (int j = i + i; j <= n; j += i) {
                prime[j] = false; // Marking multiples of prime numbers as not prime.
            }
        }
    }
    return prime;
}

// Depth-first search (DFS) function to traverse the tree and count paths based on prime numbers.
long long countPaths(int n, int** edges, int edgesSize, int* edgesColSize) {
    bool* isPrime = genPrimes(n); // Generate a list of prime numbers up to 'n'.
    int** E = (int**)malloc(n * sizeof(int*)); // Creating an adjacency list for the graph.
    
    // Populate the adjacency list based on given edges.
    for (int i = 0; i < n; ++i) {
        E[i] = (int*)malloc(sizeof(int));
    }
    
    for (int i = 0; i < edgesSize; ++i) {
        int u = edges[i][0], v = edges[i][1];
        --u;
        --v;
        E[u] = (int*)realloc(E[u], (edgesColSize[i] + 1) * sizeof(int));
        E[u][edgesColSize[i]] = v;
        ++edgesColSize[i];
        E[v] = (int*)realloc(E[v], (edgesColSize[i] + 1) * sizeof(int));
        E[v][edgesColSize[i]] = u;
        ++edgesColSize[i];
    }
    
    long long ans = 0; // Initialize the answer to zero.
    
    // Depth-first search (DFS) function to traverse the tree and count paths.
    long long dfs(int x, int p) {
        int prime = isPrime[x + 1]; // Check if the node number (1-based) is prime.
        int cur[2] = {0}; // Initialize an array to store counts based on prime status.
        cur[prime]++; // Update the count for prime or non-prime node.
        
        for (int j = 0; j < edgesColSize[x]; ++j) {
            int y = E[x][j];
            if (y == p) continue; // Skip the parent node.
            int* v = (int*)malloc(2 * sizeof(int));
            v[0] = v[1] = 0;
            v = dfs(y, x); // Recursively traverse the tree.
            
            // Update the answer by counting paths based on prime and non-prime nodes.
            ans += (long long)v[0] * cur[1];
            ans += (long long)v[1] * cur[0];
            
            cur[prime] += v[0]; // Update counts for the current node.
            
            if (!prime) cur[1 + prime] += v[1]; // If non-prime, update the count for non-prime nodes.
        }
        
        return cur; // Return the count array for the current node.
    }
    
    // Start DFS from the root node (node 1) with parent -1.
    dfs(0, -1);
    
    // Free dynamically allocated memory.
    free(isPrime);
    
    for (int i = 0; i < n; ++i) {
        free(E[i]);
    }
    free(E);
    
    return ans; // Return the final count of paths.
}

```
```Java []
import java.util.*;

class Solution {
    // Helper function to generate prime numbers up to 'n'.
    private boolean[] genPrimes(int n) {
        boolean[] prime = new boolean[n + 1];
        if (n > 1) {
            Arrays.fill(prime, 2, prime.length, true); // Initializing all numbers >= 2 as prime.
        }
        for (int i = 2; i <= n; ++i) {
            if (prime[i]) {
                for (int j = i + i; j <= n; j += i) {
                    prime[j] = false; // Marking multiples of prime numbers as not prime.
                }
            }
        }
        return prime;
    }

    // Main function to count paths based on prime numbers.
    public long countPaths(int n, int[][] edges) {
        boolean[] isPrime = genPrimes(n); // Generate a list of prime numbers up to 'n'.
        List<List<Integer>> E = new ArrayList<>(n); // Creating an adjacency list for the graph.

        // Initialize the adjacency list.
        for (int i = 0; i < n; ++i) {
            E.add(new ArrayList<>());
        }

        // Populate the adjacency list based on given edges.
        for (int i = 0; i < n - 1; ++i) {
            int u = edges[i][0], v = edges[i][1];
            --u;
            --v;
            E.get(u).add(v);
            E.get(v).add(u);
        }

        long ans = 0; // Initialize the answer to zero.

        // Depth-first search (DFS) function to traverse the tree and count paths.
        Function<int[], int[]> dfs = (int[] arr) -> {
            int x = arr[0];
            int p = arr[1];
            int prime = isPrime[x + 1]; // Check if the node number (1-based) is prime.
            int[] cur = new int[2]; // Initialize an array to store counts based on prime status.
            cur[prime]++; // Update the count for prime or non-prime node.

            for (int y : E.get(x)) {
                if (y == p) continue; // Skip the parent node.
                int[] v = dfs.apply(new int[]{y, x}); // Recursively traverse the tree.

                // Update the answer by counting paths based on prime and non-prime nodes.
                ans += (long) v[0] * cur[1];
                ans += (long) v[1] * cur[0];

                cur[prime] += v[0]; // Update counts for the current node.

                if (prime == 0) cur[1 + prime] += v[1]; // If non-prime, update the count for non-prime nodes.
            }
            return cur; // Return the count array for the current node.
        };

        dfs.apply(new int[]{0, -1}); // Start DFS from the root node (node 0) with parent -1.

        return ans; // Return the final count of paths.
    }
}

```
```Python3 []
from collections import defaultdict

class Solution:
    def genPrimes(self, n):
        prime = [False] * (n + 1)
        if n > 1:
            prime[2:] = [True] * (n - 1)  # Initializing all numbers >= 2 as prime.
        for i in range(2, n + 1):
            if prime[i]:
                for j in range(i + i, n + 1, i):
                    prime[j] = False  # Marking multiples of prime numbers as not prime.
        return prime

    def countPaths(self, n, edges):
        isPrime = self.genPrimes(n)  # Generate a list of prime numbers up to 'n'.
        E = defaultdict(list)  # Creating an adjacency list for the graph.

        # Populate the adjacency list based on given edges.
        for u, v in edges:
            u -= 1
            v -= 1
            E[u].append(v)
            E[v].append(u)

        ans = 0  # Initialize the answer to zero.

        # Depth-first search (DFS) function to traverse the tree and count paths.
        def dfs(x, p):
            prime = isPrime[x + 1]  # Check if the node number (1-based) is prime.
            cur = [0, 0]  # Initialize an array to store counts based on prime status.
            cur[prime] += 1  # Update the count for prime or non-prime node.

            for y in E[x]:
                if y == p:
                    continue  # Skip the parent node.
                v = dfs(y, x)  # Recursively traverse the tree.

                # Update the answer by counting paths based on prime and non-prime nodes.
                non_prime = 1 if prime == 0 else 0
                ans += v[0] * cur[non_prime]
                ans += v[1] * cur[prime]

                cur[prime] += v[0]  # Update counts for the current node.
                cur[non_prime] += v[1]  # If non-prime, update the count for non-prime nodes.

            return cur  # Return the count array for the current node.

        dfs(0, -1)  # Start DFS from the root node (node 0) with parent -1.

        return ans  # Return the final count of paths.

```
```JavaScript []
class Solution {
    genPrimes(n) {
        const prime = new Array(n + 1).fill(false);
        if (n > 1) prime.fill(true, 2); // Initializing all numbers >= 2 as prime.
        for (let i = 2; i <= n; ++i) {
            if (prime[i]) {
                for (let j = i + i; j <= n; j += i) {
                    prime[j] = false; // Marking multiples of prime numbers as not prime.
                }
            }
        }
        return prime;
    }

    countPaths(n, edges) {
        const isPrime = this.genPrimes(n); // Generate a list of prime numbers up to 'n'.
        const E = new Array(n).fill().map(() => []); // Creating an adjacency list for the graph.

        // Populate the adjacency list based on given edges.
        for (const [u, v] of edges) {
            const uIdx = u - 1;
            const vIdx = v - 1;
            E[uIdx].push(vIdx);
            E[vIdx].push(uIdx);
        }

        let ans = 0; // Initialize the answer to zero.

        // Depth-first search (DFS) function to traverse the tree and count paths.
        const dfs = (x, p) => {
            const prime = isPrime[x + 1]; // Check if the node number (1-based) is prime.
            const cur = [0, 0]; // Initialize an array to store counts based on prime status.
            cur[prime] += 1; // Update the count for prime or non-prime node.

            for (const y of E[x]) {
                if (y === p) continue; // Skip the parent node.
                const v = dfs(y, x); // Recursively traverse the tree.

                // Update the answer by counting paths based on prime and non-prime nodes.
                const nonPrime = prime === 0 ? 1 : 0;
                ans += v[0] * cur[nonPrime];
                ans += v[1] * cur[prime];

                cur[prime] += v[0]; // Update counts for the current node.
                cur[nonPrime] += v[1]; // If non-prime, update the count for non-prime nodes.
            }
            return cur; // Return the count array for the current node.
        };

        dfs(0, -1); // Start DFS from the root node (node 0) with parent -1.

        return ans; // Return the final count of paths.
    }
}

```

# *PLEASE UPVOTE IF IT HELPED*
---


---


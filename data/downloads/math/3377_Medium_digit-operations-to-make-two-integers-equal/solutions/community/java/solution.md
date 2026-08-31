# Easy Dijasktra's - bfs solution || Beats 100%

**Author:** be_fighter
**Votes:** 1
**Link:** [https://leetcode.com/problems/digit-operations-to-make-two-integers-equal/solutions/6130220/](https://leetcode.com/problems/digit-operations-to-make-two-integers-equal/solutions/6130220/)

---



# Approach
# Prime Precomputation:

1. Use the Sieve of Eratosthenes to precompute all prime numbers up to 10,000. This allows efficient checking of whether a number is prime.
# Neighbor Generation:

1. For any number n, generate its "neighbors" by either incrementing or decrementing one of its digits by 1 (while keeping the number within valid bounds). 
2. For example:
From 123, valid neighbors are 223, 23, 133.
# Shortest Path Calculation (Dijkstra's Algorithm):

1. Use a priority queue to perform Dijkstra's algorithm on the number space, where:
2. Each number is treated as a node.
3. The cost of moving from one node to another is equal to the value of the current number (num).
4. Start from n and try to reach m.
# Prime Exclusion:

1. Skip processing for any number that is prime (starting or intermediate numbers cannot be prime).
# Output Result:

1. If m is unreachable from n, return -1.
2. Otherwise, return the shortest path cost as dist[m] + m.

# Complexity
- Time complexity:
O(N*log(log(n))) + O(N *logn) for sieve method and dijsktras

- Space complexity:
O(3*N): dist vector, isprime vector

# Code
```cpp []
class Solution {
public:

    // Step 1: Sieve of Eratosthenes to find all primes up to a given number
    void find_prime(vector<bool>& isprime, int n) {
        isprime[0] = isprime[1] = false; // 0 and 1 are not prime numbers
        
        for (int i = 2; i * i < n; i++) {
            if (isprime[i]) {
                for (int j = i * i; j < n; j += i) {
                    isprime[j] = false; // Mark all multiples of i as non-prime
                }
            }
        }
    }

    // Step 2: Generate possible "neighboring nodes" by increasing or decreasing digits
    vector<int> find_node(int n) {
        vector<int> neighbors;
        
        for (int i = 1; i <= n; i *= 10) {
            int d = (n / i) % 10; // Extract the current digit
            
            // Decrease the current digit if possible
            if (d > 0) {
                neighbors.push_back(n - i);
            }

            // Increase the current digit if possible
            if (d < 9) {
                neighbors.push_back(n + i);
            }
        }

        return neighbors;
    }

    // Step 3: Main function to find the minimum operations
    int minOperations(int n, int m) {
        const int MAX = 1e4; // Limit for prime computation
        const int INF = 1e9; // Represent unreachable distances
        
        // Step 3.1: Precompute all primes up to MAX
        vector<bool> isprime(MAX, true);
        find_prime(isprime, MAX);
        
        // Edge case: If starting or ending node is prime, return -1
        if (isprime[n] || isprime[m]) {
            return -1;
        }

        // Step 3.2: Initialize distance array and priority queue
        vector<int> dist(MAX, INF); // Distance array initialized to infinity
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;

        // Start from node `n`
        dist[n] = 0;
        pq.push({dist[n], n});

        // Step 3.3: Dijkstra's algorithm to find shortest path
        while (!pq.empty()) {
            int dis = pq.top().first; // Current distance
            int num = pq.top().second; // Current node
            pq.pop();

            // Skip processing if the node is prime
            if (isprime[num]) {
                continue;
            }

            // Explore all neighboring nodes
            for (auto neighbor : find_node(num)) {
                // Skip processing if the neighbor is prime
                if (isprime[neighbor]) {
                    continue;
                }

                // Relax the distance for the neighbor
                if (dist[neighbor] > dis + num) {
                    dist[neighbor] = dis + num;
                    pq.push({dist[neighbor], neighbor});
                }
            }
        }

        // Step 3.4: Return the result
        return dist[m] == INF ? -1 : m + dist[m];
    }
};
```
```java []
import java.util.*;

class Solution {

    // Step 1: Sieve of Eratosthenes to find all primes up to a given number
    private void findPrime(boolean[] isPrime, int n) {
        Arrays.fill(isPrime, true);
        isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers
        
        for (int i = 2; i * i < n; i++) {
            if (isPrime[i]) {
                for (int j = i * i; j < n; j += i) {
                    isPrime[j] = false; // Mark all multiples of i as non-prime
                }
            }
        }
    }

    // Step 2: Generate possible "neighboring nodes" by increasing or decreasing digits
    private List<Integer> findNode(int n) {
        List<Integer> neighbors = new ArrayList<>();
        
        for (int i = 1; i <= n; i *= 10) {
            int d = (n / i) % 10; // Extract the current digit
            
            // Decrease the current digit if possible
            if (d > 0) {
                neighbors.add(n - i);
            }

            // Increase the current digit if possible
            if (d < 9) {
                neighbors.add(n + i);
            }
        }

        return neighbors;
    }

    // Step 3: Main function to find the minimum operations
    public int minOperations(int n, int m) {
        final int MAX = 10000; // Limit for prime computation
        final int INF = Integer.MAX_VALUE; // Represent unreachable distances
        
        // Step 3.1: Precompute all primes up to MAX
        boolean[] isPrime = new boolean[MAX];
        findPrime(isPrime, MAX);
        
        // Edge case: If starting or ending node is prime, return -1
        if (isPrime[n] || isPrime[m]) {
            return -1;
        }

        // Step 3.2: Initialize distance array and priority queue
        int[] dist = new int[MAX];
        Arrays.fill(dist, INF);
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);

        // Start from node `n`
        dist[n] = 0;
        pq.add(new int[]{dist[n], n});

        // Step 3.3: Dijkstra's algorithm to find shortest path
        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            int dis = current[0]; // Current distance
            int num = current[1]; // Current node

            // Skip processing if the node is prime
            if (isPrime[num]) {
                continue;
            }

            // Explore all neighboring nodes
            for (int neighbor : findNode(num)) {
                // Skip processing if the neighbor is prime
                if (isPrime[neighbor]) {
                    continue;
                }

                // Relax the distance for the neighbor
                if (dist[neighbor] > dis + num) {
                    dist[neighbor] = dis + num;
                    pq.add(new int[]{dist[neighbor], neighbor});
                }
            }
        }

        // Step 3.4: Return the result
        return dist[m] == INF ? -1 : m + dist[m];
    }
}

```
```python []
import heapq

class Solution:
    def find_prime(self, isprime, n):
        isprime[0] = isprime[1] = False # 0 and 1 are not prime numbers
        
        for i in range(2, int(n**0.5) + 1):
            if isprime[i]:
                for j in range(i * i, n):
                    isprime[j] = False # Mark all multiples of i as non-prime

    def find_node(self, n):
        neighbors = []
        
        i = 1
        while i <= n:
            d = (n // i) % 10 # Extract the current digit
            
            # Decrease the current digit if possible
            if d > 0:
                neighbors.append(n - i)
            
            # Increase the current digit if possible
            if d < 9:
                neighbors.append(n + i)
            
            i *= 10

        return neighbors

    def minOperations(self, n, m):
        MAX = 10000 # Limit for prime computation
        INF = float('inf') # Represent unreachable distances
        
        # Step 1: Precompute all primes up to MAX
        isprime = [True] * MAX
        self.find_prime(isprime, MAX)
        
        # Edge case: If starting or ending node is prime, return -1
        if isprime[n] or isprime[m]:
            return -1

        # Step 2: Initialize distance array and priority queue
        dist = [INF] * MAX
        pq = []
        
        dist[n] = 0
        heapq.heappush(pq, (dist[n], n))

        # Step 3: Dijkstra's algorithm to find shortest path
        while pq:
            dis, num = heapq.heappop(pq)
            
            # Skip processing if the node is prime
            if isprime[num]:
                continue
            
            # Explore all neighboring nodes
            for neighbor in self.find_node(num):
                # Skip processing if the neighbor is prime
                if isprime[neighbor]:
                    continue
                
                # Relax the distance for the neighbor
                if dist[neighbor] > dis + num:
                    dist[neighbor] = dis + num
                    heapq.heappush(pq, (dist[neighbor], neighbor))

        # Step 4: Return the result
        return -1 if dist[m] == INF else m + dist[m]

```
```javascript []
puts 'Hello world!'
class Solution {
    // Step 1: Sieve of Eratosthenes to find all primes up to a given number
    findPrime(isPrime, n) {
        isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers

        for (let i = 2; i * i < n; i++) {
            if (isPrime[i]) {
                for (let j = i * i; j < n; j += i) {
                    isPrime[j] = false; // Mark all multiples of i as non-prime
                }
            }
        }
    }

    // Step 2: Generate possible "neighboring nodes" by increasing or decreasing digits
    findNode(n) {
        const neighbors = [];
        let i = 1;

        while (i <= n) {
            const d = Math.floor(n / i) % 10; // Extract the current digit
            
            // Decrease the current digit if possible
            if (d > 0) {
                neighbors.push(n - i);
            }

            // Increase the current digit if possible
            if (d < 9) {
                neighbors.push(n + i);
            }

            i *= 10;
        }

        return neighbors;
    }

    // Step 3: Main function to find the minimum operations
    minOperations(n, m) {
        const MAX = 10000; // Limit for prime computation
        const INF = Infinity; // Represent unreachable distances

        // Step 1: Precompute all primes up to MAX
        const isPrime = Array(MAX).fill(true);
        this.findPrime(isPrime, MAX);

        // Edge case: If starting or ending node is prime, return -1
        if (isPrime[n] || isPrime[m]) {
            return -1;
        }

        // Step 2: Initialize distance array and priority queue
        const dist = Array(MAX).fill(INF);
        const pq = new MinPriorityQueue({ priority: x => x[0] });

        dist[n] = 0;
        pq.enqueue([dist[n], n]);

        // Step 3: Dijkstra's algorithm to find shortest path
        while (!pq.isEmpty()) {
            const [dis, num] = pq.dequeue().element;

            // Skip processing if the node is prime
            if (isPrime[num]) {
                continue;
            }

            // Explore all neighboring nodes
            for (const neighbor of this.findNode(num)) {
                // Skip processing if the neighbor is prime
                if (isPrime[neighbor]) {
                    continue;
                }

                // Relax the distance for the neighbor
                if (dist[neighbor] > dis + num) {
                    dist[neighbor] = dis + num;
                    pq.enqueue([dist[neighbor], neighbor]);
                }
            }
        }

        // Step 4: Return the result
        return dist[m] === INF ? -1 : m + dist[m];
    }
}

```
![c2d27b08-ffbe-4bc6-8b29-5fc4d8effd5f_1723775276.9029489.jpeg](./images/0.jpeg)

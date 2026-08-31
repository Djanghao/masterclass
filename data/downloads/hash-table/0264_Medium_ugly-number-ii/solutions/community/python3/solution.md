# Easy Heap & DP Solution | Beats 100%

**Author:** Sachinonly__
**Votes:** 144
**Link:** [https://leetcode.com/problems/ugly-number-ii/solutions/5652689/](https://leetcode.com/problems/ugly-number-ii/solutions/5652689/)

---

# Heap Method
```Python []
class Solution(object):
    def nthUglyNumber(self, n):
        primes = [2,3,5]
        uglyHeap = [1]
        visited = set()
        visited.add(1)
        for _ in range(n):
            curr = heappop(uglyHeap)
            for prime in primes:
                new_ugly = curr * prime
                if new_ugly not in visited:
                    heappush(uglyHeap, new_ugly)
                    visited.add(new_ugly)
        return curr
```
```C++ []
class Solution {
public:
    int nthUglyNumber(int n) {
        vector<int> primes = {2, 3, 5};
        priority_queue<long, vector<long>, greater<long>> uglyHeap;
        unordered_set<long> visited;
        
        uglyHeap.push(1);
        visited.insert(1);
        
        long curr;
        for (int i = 0; i < n; ++i) {
            curr = uglyHeap.top();
            uglyHeap.pop();
            for (int prime : primes) {
                long new_ugly = curr * prime;
                if (visited.find(new_ugly) == visited.end()) {
                    uglyHeap.push(new_ugly);
                    visited.insert(new_ugly);
                }
            }
        }
        return (int)curr;
    }
};
```
``` Java []
class Solution {
    public int nthUglyNumber(int n) {
        int[] primes = {2, 3, 5};
        PriorityQueue<Long> uglyHeap = new PriorityQueue<>();
        HashSet<Long> visited = new HashSet<>();
        
        uglyHeap.add(1L);
        visited.add(1L);
        
        long curr = 1L;
        for (int i = 0; i < n; i++) {
            curr = uglyHeap.poll();
            for (int prime : primes) {
                long new_ugly = curr * prime;
                if (!visited.contains(new_ugly)) {
                    uglyHeap.add(new_ugly);
                    visited.add(new_ugly);
                }
            }
        }
        return (int)curr;
    }
}
```

# DP
```Python []
class Solution(object):
    def nthUglyNumber(self, n):
        primes = [2, 3, 5]
        next_ugly = [2, 3, 5]
        increase = [1, 1, 1]
        arr = [1]
        
        for _ in range(1, n):
            smallest = min(next_ugly)
            arr.append(smallest)
            
            for i in range(3):
                if next_ugly[i] == smallest:
                    increase[i] += 1
                    next_ugly[i] = primes[i] * arr[increase[i] - 1]
        
        return arr[-1]
```
```C++ []
class Solution {
public:
    int nthUglyNumber(int n) {
        vector<int> primes = {2, 3, 5};  // Initialize the primes array
        vector<int> indices = {0, 0, 0}; // Initialize indices for multiples of 2, 3, 5
        vector<int> uglyArr(1, 1);       // Initialize the ugly number array with 1

        for (int i = 1; i < n; ++i) {
            // Calculate the next possible ugly numbers
            vector<int> next_uglies = {
                uglyArr[indices[0]] * primes[0],
                uglyArr[indices[1]] * primes[1],
                uglyArr[indices[2]] * primes[2]
            };
            int min_value = *min_element(next_uglies.begin(), next_uglies.end()); // Find the smallest value
            uglyArr.push_back(min_value); // Append the smallest value to uglyArr

            // Update indices for primes that generated the current min_value
            for (int j = 0; j < 3; ++j) {
                if (next_uglies[j] == min_value) {
                    ++indices[j];
                }
            }
        }

        return uglyArr[n - 1];
    }
};
```
```Java []
class Solution {
    public int nthUglyNumber(int n) {
        int[] primes = {2, 3, 5};  // Initialize the primes array
        int[] indices = {0, 0, 0}; // Initialize indices for multiples of 2, 3, 5
        List<Integer> uglyArr = new ArrayList<>();  // Initialize the ugly number array with 1
        uglyArr.add(1);

        for (int i = 1; i < n; ++i) {
            // Calculate the next possible ugly numbers
            int[] nextUglies = {
                uglyArr.get(indices[0]) * primes[0],
                uglyArr.get(indices[1]) * primes[1],
                uglyArr.get(indices[2]) * primes[2]
            };
            int minValue = Math.min(nextUglies[0], Math.min(nextUglies[1], nextUglies[2]));  // Find the smallest value
            uglyArr.add(minValue);  // Append the smallest value to uglyArr

            // Update indices for primes that generated the current min_value
            for (int j = 0; j < 3; ++j) {
                if (nextUglies[j] == minValue) {
                    indices[j]++;
                }
            }
        }

        return uglyArr.get(n - 1);
    }
}
```

![unnamed.jpg](./images/0.jpeg)

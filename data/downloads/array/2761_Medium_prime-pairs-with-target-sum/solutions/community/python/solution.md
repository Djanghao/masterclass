# [C++/Java/Python] || Beat 100% || Easy Intuition || Sieve of Eratosthenes algorithm

**Author:** Aditya00
**Votes:** 36
**Link:** [https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3706637/](https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3706637/)

---

# Intuition
use seive Algorithm to find prime numbers and then chek the given condition

# Complexity
- Time complexity: O(n log log n)

# C++ Code
```
class Solution {
public:
    vector<vector<int>> findPrimePairs(int n) {
        bool prime[n + 1]; // Array to store whether a number is prime or not
        memset(prime, true, sizeof(prime)); // Initializing all numbers as prime
        prime[1] = false; // 1 is not a prime number
        prime[0] = false; // 0 is not a prime number

        // Finding prime numbers using Sieve of Eratosthenes algorithm
        for (int p = 2; p * p <= n; p++) {
            if (prime[p] == true) {
                // Marking multiples of p as non-prime
                for (int i = p * p; i <= n; i += p)
                    prime[i] = false;
            }
        }
        vector<vector<int>> ans; // Vector to store the pairs of prime numbers
        for(int i=2;i <= (n-1);i++){
            int j = n - i; // Finding the complement of i to make the sum n
            if(prime[i] && prime[j] && i <= j){
                vector<int> temp = {i,j}; // Creating a pair of prime numbers
                ans.push_back(temp); // Adding the pair to the result vector
            }
        }
        return ans; // Returning the vector of prime pairs
    }
};
```
# Java Code
```
class Solution {
    public List<List<Integer>> findPrimePairs(int n) {
        boolean[] prime = new boolean[n + 1]; // Array to store whether a number is prime or not
        List<List<Integer>> ans = new ArrayList<>(); // List to store the pairs of prime numbers
        
        // Initializing all numbers as prime
        for (int i = 2; i <= n; i++) {
            prime[i] = true;
        }
        
        prime[1] = false; // 1 is not a prime number
        prime[0] = false; // 0 is not a prime number
        
        // Finding prime numbers using the Sieve of Eratosthenes algorithm
        for (int p = 2; p * p <= n; p++) {
            if (prime[p]) {
                // Marking multiples of p as non-prime
                for (int i = p * p; i <= n; i += p) {
                    prime[i] = false;
                }
            }
        }
        
        for (int i = 2; i <= n - 1; i++) {
            int j = n - i; // Finding the complement of i to make the sum n
            if (prime[i] && prime[j] && i <= j) {
                List<Integer> temp = new ArrayList<>(); // Creating a pair of prime numbers
                temp.add(i);
                temp.add(j);
                ans.add(temp); // Adding the pair to the result list
            }
        }
        
        return ans; // Returning the list of prime pairs
    }
}
```
# Python
```
class Solution(object):
    def findPrimePairs(self, n):
        prime = [True] * (n + 1)  # List to store whether a number is prime or not
        ans = []  # List to store the pairs of prime numbers
        
        # Initializing all numbers as prime
        for i in range(2, n + 1):
            prime[i] = True
        
        prime[1] = False  # 1 is not a prime number
        prime[0] = False  # 0 is not a prime number
        
        # Finding prime numbers using the Sieve of Eratosthenes algorithm
        p = 2
        while p * p <= n:
            if prime[p]:
                # Marking multiples of p as non-prime
                for i in range(p * p, n + 1, p):
                    prime[i] = False
            p += 1
        
        for i in range(2, n):
            j = n - i  # Finding the complement of i to make the sum n
            if prime[i] and prime[j] and i <= j:
                temp = [i, j]  # Creating a pair of prime numbers
                ans.append(temp)  # Adding the pair to the result list
        
        return ans  # Returning the list of prime pairs



```
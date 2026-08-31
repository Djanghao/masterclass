# ||🅱️EATS 💯 % 🎯 | | PRIME NUMBERS || ✨

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5547637/](https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5547637/)

---

![image.png](./images/0.png)


## Intuition
The key observation is that a number is special if and only if it is the square of a prime number. This is because a square of a prime number has exactly two proper divisors: 1 and the prime itself. For example, 4 (which is 2^2) has proper divisors 1 and 2. Therefore, to determine the count of non-special numbers in a given range [l, r], we need to identify and count these special numbers.

## Approach
1. **Prime Generation:** Use the Sieve of Eratosthenes to generate all prime numbers up to the square root of `r`. This is because the square of any prime number greater than the square root of `r` would exceed `r`.
2. **Count Special Numbers:** For each prime, compute its square and check if it falls within the range [l, r]. Count these squares as special numbers.
3. **Compute Non-Special Numbers:** The count of non-special numbers is the total count of numbers in the range [l, r] minus the count of special numbers.

## Complexity
- **Time Complexity:** The time complexity is O(n log log n) for the Sieve of Eratosthenes to generate primes up to sqrt(r), where n is sqrt(r). The subsequent checking of squares is O(p), where p is the number of primes up to sqrt(r).
- **Space Complexity:** The space complexity is O(n) for storing the boolean array in the sieve and the list of primes, where n is sqrt(r).

## Code

### Dart
```dart
import 'dart:math';

class Solution {
  int nonSpecialCount(int l, int r) {
    // Helper function to generate primes up to n using the Sieve of Eratosthenes
    List<int> generatePrimes(int n) {
      List<bool> isPrime = List<bool>.filled(n + 1, true);
      isPrime[0] = isPrime[1] = false;
      for (int i = 2; i <= sqrt(n).toInt(); i++) {
        if (isPrime[i]) {
          for (int j = i * i; j <= n; j += i) {
            isPrime[j] = false;
          }
        }
      }
      List<int> primes = [];
      for (int i = 2; i <= n; i++) {
        if (isPrime[i]) primes.add(i);
      }
      return primes;
    }

    // Generate primes up to sqrt(r)
    int sqrtR = sqrt(r).toInt();
    List<int> primes = generatePrimes(sqrtR);

    // Count special numbers in the range [l, r]
    int specialCount = 0;
    for (int prime in primes) {
      int square = prime * prime;
      if (square >= l && square <= r) {
        specialCount++;
      }
    }

    // Total count of numbers in the range [l, r]
    int totalCount = r - l + 1;

    // Non-special count is total count minus special count
    return totalCount - specialCount;
  }
}

void main() {
  Solution solution = Solution();
  print(solution.nonSpecialCount(5, 7));  // Output: 3
  print(solution.nonSpecialCount(4, 16)); // Output: 11
}
```

### C++
```cpp
#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

class Solution {
public:
    int nonSpecialCount(int l, int r) {
        // Helper function to generate primes up to n using the Sieve of Eratosthenes
        vector<int> generatePrimes(int n) {
            vector<bool> isPrime(n + 1, true);
            isPrime[0] = isPrime[1] = false;
            for (int i = 2; i <= sqrt(n); i++) {
                if (isPrime[i]) {
                    for (int j = i * i; j <= n; j += i) {
                        isPrime[j] = false;
                    }
                }
            }
            vector<int> primes;
            for (int i = 2; i <= n; i++) {
                if (isPrime[i]) primes.push_back(i);
            }
            return primes;
        }

        // Generate primes up to sqrt(r)
        int sqrtR = sqrt(r);
        vector<int> primes = generatePrimes(sqrtR);

        // Count special numbers in the range [l, r]
        int specialCount = 0;
        for (int prime : primes) {
            int square = prime * prime;
            if (square >= l && square <= r) {
                specialCount++;
            }
        }

        // Total count of numbers in the range [l, r]
        int totalCount = r - l + 1;

        // Non-special count is total count minus special count
        return totalCount - specialCount;
    }
};

int main() {
    Solution solution;
    cout << solution.nonSpecialCount(5, 7) << endl;  // Output: 3
    cout << solution.nonSpecialCount(4, 16) << endl; // Output: 11
    return 0;
}
```

### Java
```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public int nonSpecialCount(int l, int r) {
        // Helper function to generate primes up to n using the Sieve of Eratosthenes
        List<Integer> generatePrimes(int n) {
            boolean[] isPrime = new boolean[n + 1];
            Arrays.fill(isPrime, true);
            isPrime[0] = isPrime[1] = false;
            for (int i = 2; i <= Math.sqrt(n); i++) {
                if (isPrime[i]) {
                    for (int j = i * i; j <= n; j += i) {
                        isPrime[j] = false;
                    }
                }
            }
            List<Integer> primes = new ArrayList<>();
            for (int i = 2; i <= n; i++) {
                if (isPrime[i]) primes.add(i);
            }
            return primes;
        }

        // Generate primes up to sqrt(r)
        int sqrtR = (int) Math.sqrt(r);
        List<Integer> primes = generatePrimes(sqrtR);

        // Count special numbers in the range [l, r]
        int specialCount = 0;
        for (int prime : primes) {
            int square = prime * prime;
            if (square >= l && square <= r) {
                specialCount++;
            }
        }

        // Total count of numbers in the range [l, r]
        int totalCount = r - l + 1;

        // Non-special count is total count minus special count
        return totalCount - specialCount;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.nonSpecialCount(5, 7));  // Output: 3
        System.out.println(solution.nonSpecialCount(4, 16)); // Output: 11
    }
}
```

### Python
```python
import math

class Solution:
    def nonSpecialCount(self, l: int, r: int) -> int:
        def generate_primes(n):
            is_prime = [True] * (n + 1)
            is_prime[0] = is_prime[1] = False
            for i in range(2, int(math.sqrt(n)) + 1):
                if is_prime[i]:
                    for j in range(i * i, n + 1, i):
                        is_prime[j] = False
            return [i for i in range(2, n + 1) if is_prime[i]]

        # Generate primes up to sqrt(r)
        sqrt_r = int(math.sqrt(r))
        primes = generate_primes(sqrt_r)

        # Count special numbers in the range [l, r]
        special_count = 0
        for prime in primes:
            square = prime * prime
            if l <= square <= r:
                special_count += 1

        # Total count of numbers in the range [l, r]
        total_count = r - l + 1

        # Non-special count is total count minus special count
        return total_count - special_count

# Example usage
solution = Solution()
print(solution.nonSpecialCount(5, 7))  # Output: 3
print(solution.nonSpecialCount(4, 16)) # Output: 11
```

### JavaScript
```javascript
class Solution {
    nonSpecialCount(l, r) {
        // Helper function to generate primes up to n using the Sieve of Eratosthenes
        function generatePrimes(n) {
            const isPrime = new Array(n + 1).fill(true);
            isPrime[0] = isPrime[1] = false;
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (isPrime[i]) {
                    for (let j = i * i; j <= n; j += i) {
                        isPrime[j] = false;
                    }
                }
            }
            const primes = [];
            for (let i = 2; i <= n; i++) {
                if (isPrime[i]) primes.push(i);
            }
            return primes;
        }

        // Generate primes up to sqrt(r)
        const sqrtR = Math.sqrt(r);
        const primes = generatePrimes(sqrtR);



        // Count special numbers in the range [l, r]
        let specialCount = 0;
        for (const prime of primes) {
            const square = prime * prime;
            if (square >= l && square <= r) {
                specialCount++;
            }
        }

        // Total count of numbers in the range [l, r]
        const totalCount = r - l + 1;

        // Non-special count is total count minus special count
        return totalCount - specialCount;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.nonSpecialCount(5, 7));  // Output: 3
console.log(solution.nonSpecialCount(4, 16)); // Output: 11
```

These implementations will help in solving the problem across different programming languages.

![image.png](./images/1.png)

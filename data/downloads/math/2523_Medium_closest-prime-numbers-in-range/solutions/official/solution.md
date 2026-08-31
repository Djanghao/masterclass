# Official Solution

**Link:** [https://leetcode.com/problems/closest-prime-numbers-in-range/solution/](https://leetcode.com/problems/closest-prime-numbers-in-range/solution/)

---

[TOC]

## Solution

---

### Approach 1: Sieve of Eratosthenes

#### Intuition

We are given two numbers, `left` and `right`, and we need to find a pair of prime numbers within this range such that their difference is minimized. If multiple pairs have the same minimum difference, we return the one with the smallest values. If no such pair exists, we return `[-1, -1]`.

A simple approach would be to iterate through all numbers in this range, check whether each number is prime, store the primes, and then determine the pair with the smallest difference. However, checking if a number is prime requires verifying that it has no divisors other than `1` and itself. A naive way to do this is to test divisibility for all numbers up to `n`, but a more optimized approach would only check divisibility up to `sqrt(n)`. Even with this optimization, the approach remains too slow. Since `right` can be as large as $10^6$, iterating through all numbers and performing a divisibility check for each would still be inefficient, leading to a Time Limit Exceeded (TLE) error.

A much faster way to find all prime numbers up to a given limit is the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes). Instead of checking each number one by one, the sieve marks multiples of each prime in bulk, eliminating the need for repeated divisibility checks.

We start with a list of numbers from 2 to 100. Notice we skip 1 since it’s not considered a prime. Starting with the smallest prime, 2, we know it’s prime because it hasn’t been marked yet. So, we keep it. Now, we cross out all multiples of 2 (like 4, 6, 8, etc.) because they’re definitely not prime. The next number that isn’t crossed out is 3, so we mark it as a prime. Then, we cross out all multiples of 3 (like 6, 9, 12, etc.). We keep going, finding the next unmarked number (which will be 5), and marking all of its multiples. We do this for 7 as well and continue until we’ve processed all numbers up to the limit.

The beauty of the Sieve of Eratosthenes is that it saves a lot of time by marking off composites in bulk, rather than testing each number individually to see if it’s prime. By the end, any number that’s still unmarked is a prime.

As we proceed, we collect all the numbers in an array `primeNumbers`, where `sieve[prime] = 1`. For any marked (non-prime) number, we could also keep track of the specific prime that marked it, though, for this problem, it’s sufficient to identify which numbers are prime.

Since all values lie between 1 and 1000000, we can iterate through the array, check for the minimum difference between two consecutive primes, and return it as the answer.

#### Algorithm

Main Function: `closestPrimes(int left, int right)`

1. Generate Prime Numbers using Sieve:
   - Create an integer array `sieve` of size `(right + 1)` by calling the helper function `sieve(right)`. This function marks all non-prime numbers up to `right` and returns an array where `sieve[num] == 1` indicates a prime number.

2. Collect Prime Numbers in Range:
   - Create a vector `primeNumbers` to store prime numbers within `[left, right]`.
   - Iterate through numbers from `left` to `right`:
     - If `sieve[num] == 1`, add `num` to `primeNumbers`.

3. Find the Closest Prime Pair:
   - If `primeNumbers.size() < 2`, return `{-1, -1}` (since there are not enough primes).
   - Initialize `minDifference` to the maximum integer value and `closestPair` to `{-1, -1}`.
   - Iterate through `primeNumbers` and check consecutive primes:
     - Compute `difference = primeNumbers[index] - primeNumbers[index - 1]`.
     - If `difference` is smaller than `minDifference`, update `closestPair = {primeNumbers[index - 1], primeNumbers[index]}`.

4. Return `closestPair` as the result.

Helper Function: `sieve(int upperLimit)`

1. Create an integer vector `sieve` of size `(upperLimit + 1)`, initialized to `1` (indicating prime numbers).
2. Set `sieve[0]` and `sieve[1]` to `0` (since `0` and `1` are not prime).
3. Iterate through numbers from `2` to `sqrt(upperLimit)`:
   - If `sieve[number] == 1`, mark all multiples of `number` as `0` (non-prime).
4. Return the `sieve` array.

#### Implementation

<iframe src="https://leetcode.com/playground/CjyFbNLy/shared" frameBorder="0" width="100%" height="500" name="CjyFbNLy"></iframe>

#### Complexity Analysis

Let $R$ be `right` and $L$ be `left`, representing the range within which we search for prime numbers.

- Time Complexity: $O(R \log(\log(R)) + R - L)$

    The **Sieve of Eratosthenes** runs in $O(R \log(\log(R)))$, where $R$ is the upper limit of the sieve. After generating the sieve, iterating through the range $[L, R]$ to collect prime numbers takes $O(R - L)$. Finally, finding the closest prime pair requires $O(R - L)$ operations.

    Thus, the overall time complexity is $O(R \log(\log(R)) + R - L)$.

- Space Complexity: $O(R)$

    The algorithm uses a `sieve` array of size $O(R)$ to mark prime numbers. Additionally, the vector storing prime numbers within the range $[L, R]$ can have at most $O(R - L)$ elements. Thus, the overall space complexity is $O(R)$.

---

### Approach 2: Analyze Distance between twin primes

#### Intuition

Instead of generating and storing all primes using the Sieve of Eratosthenes (which requires extra memory), we can directly check whether each number in the range `[left, right]` is prime. While this approach is slower than the sieve for very large ranges, it avoids unnecessary space usage and works efficiently for smaller ranges.

In this approach, we iterate through all numbers between `left` and `right`. Whenever we find a prime number, we compare it with the previously found prime (`prevPrime`). This allows us to continuously track the closest pair of primes seen so far.

However, before applying the general logic, we handle two special optimizations:

1. **Difference of 1 Case (Special Pair 2 and 3):**
   The only consecutive integers that are both prime are `(2, 3)`.
   If the given range includes both `2` and `3` (`left <= 2 && right >= 3`), we can immediately return `{2, 3}` because no smaller difference than `1` is possible.

2. **Twin Prime Optimization (Difference of 2):**
   For all other ranges, the smallest possible prime gap is `2`, known as *twin primes* e.g., `(3, 5)`, `(11, 13)`, `(17, 19)`.
   During iteration, if we ever encounter a pair of primes that differ by exactly `2`, we can stop searching and return them immediately, since no closer pair can exist.

For all other cases, we simply keep track of the smallest difference found between consecutive primes in the range. If there are fewer than two primes, the result will remain `[-1, -1]`.

<details>
  <summary>You can use the following code snippet to verify this behavior by checking the maximum gap between consecutive prime numbers in the range [1, 10^6] (Click to expand): </summary>

```cpp
vector<bool> sieve(int upper_limit) {
    vector<bool> is_prime(upper_limit + 1, true);
    is_prime[0] = is_prime[1] = false;
    for (int num = 2; num * num <= upper_limit; num++) {
        if (is_prime[num]) {
            for (int multiple = num * num; multiple <= upper_limit; multiple += num) {
                is_prime[multiple] = false;
            }
        }
    }
    return is_prime;
}
int main() {
    const int limit = 1000000;
    vector<bool> primes = sieve(limit);

    vector<int> twin_primes;
    // Collect all twin primes
    for (int num = 2; num <= limit - 2; num++) {
        if (primes[num] && primes[num + 2]) {
            twin_primes.push_back(num);
        }
    }
    int max_distance = 0;
    pair<int, int> max_twin_pair = {-1, -1};
    // Find the largest gap between consecutive twin primes
    for (int i = 1; i < twin_primes.size(); i++) {
        int distance = twin_primes[i] - twin_primes[i - 1];
        if (distance > max_distance) {
            max_distance = distance;
            max_twin_pair = {twin_primes[i - 1], twin_primes[i]};
        }
    }
    cout << "Twin primes with maximum distance: (" << max_twin_pair.first
         << ", " << max_twin_pair.second << ")" << endl;
    cout << "Maximum twin prime distance: " << max_distance << endl;
    return 0;
}
```

</details>

However, if the range `[L, R]` is smaller than 1452 numbers, we cannot rely on this property and must manually find the closest prime pair. To do this, we iterate through the numbers in the range, check which ones are prime, and compute the smallest difference between consecutive primes.

Therefore, we leverage the concept of twin primes to optimize our search for the closest prime pair. Instead of storing all prime numbers and comparing them later, we track only the last encountered prime (`prevPrime`). As we iterate through the range `[left, right]`, if we find a new prime, we calculate the difference between it and `prevPrime`. If the difference is `2`, we instantly return the pair, since no closer pair can exist. This early exit significantly reduces unnecessary iterations, especially in large ranges where twin primes are guaranteed to exist.

To summarize, if no twin prime pair is found initially, we continue searching for the closest prime pair by tracking the smallest difference encountered. However, if the range is greater than `1452`, it is mathematically guaranteed that at least one twin prime pair will exist within it.

#### Algorithm

Main Function: `closestPrimes(int left, int right)`

1. Handle the special case of consecutive primes (2 and 3):
   If `left <= 2` and `right >= 3`, return `{2, 3}` immediately.

2. Initialize variables:
   - `prevPrime`: Stores the last found prime (`-1` initially).
   - `closestA`, `closestB`: Store the closest prime pair (`-1, -1` initially).
   - `minDifference`: Keeps track of the smallest difference found so far (`INT_MAX`).

3. Iterate through the range `[left, right]`:
   - For each number `candidate`:
     - If `isPrime(candidate)` returns `true`:
       - If `prevPrime != -1`:
         - Compute the difference: `diff = candidate - prevPrime`.
         - If `diff < minDifference`, update `closestA`, `closestB`, and `minDifference`.
         - If `diff == 2`, return `{prevPrime, candidate}` immediately (twin prime optimization).
       - Update `prevPrime` to the current prime.

4. Return result:
   - Return `{closestA, closestB}`(If no valid pair is found, they will remain `[-1, -1]`.)

Helper Function: `isPrime(int number)`

1. Handle Small Numbers:
   - If `number < 2`, return `false`.
   - If `number` is `2` or `3`, return `true` (both are prime).
   - If `number` is even and greater than `2`, return `false`.

2. Check for Divisibility:
   - Iterate from `3` to `√number`, checking only odd numbers.
   - If `number` is divisible by any of these, return `false`.

3. Return `true` if No Divisors Found.

#### Implementation

<iframe src="https://leetcode.com/playground/fopGag6L/shared" frameBorder="0" width="100%" height="500" name="fopGag6L"></iframe>

#### Complexity Analysis

Let $R$ be `right` and $L$ be `left`, representing the range within which we search for prime numbers.

- Time Complexity: $O(\min(1452, R - L) \cdot sqrt(R))$

  The algorithm iterates through numbers in the range `[L, R]` to identify prime numbers. For each number, it performs a primality check, which takes $O(\sqrt{R})$ time in the worst case.

  - If `R - L ≥ 1452`, we know that a twin prime pair must exist in the range, allowing us to stop early. In this case, the algorithm processes at most 1452 numbers, leading to a complexity of $O(1452 \cdot \sqrt{R})$.
  - If `R - L < 1452`, the algorithm checks up to `R - L` numbers, resulting in a worst-case complexity of $O((R - L) \cdot \sqrt{R})$.

  Therefore, the overall time complexity is bounded by $O(\min(1452, R - L) \cdot \sqrt{R})$.

- Space Complexity: $O(1)$

   We're only using a few variables that don't scale with the input size. Therefore, the overall space complexity remains $O(1)$.

---
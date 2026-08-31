# Solution with explanation

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5889912/](https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5889912/)

---

# Approach
The approach used in this solution is a combination of several techniques:
- Sieve of Eratosthenes: This algorithm is used to generate all prime numbers up to a certain limit (in this case, the maximum number in the input list). The Sieve of Eratosthenes works by iteratively marking the multiples of each prime number starting from 2.

- Dynamic Programming: The solution uses dynamic programming to count the occurrences of each number that has a certain GCD. The idea is to build up a table of GCD counts by iterating over the prime numbers and their multiples.

- Cumulative Sum: The solution calculates the cumulative sum of GCD counts to efficiently compute the number of pairs that have a certain GCD.

- Binary Search: Finally, the solution uses binary search to find the index of each query in the GCD counts array.

1. Generate all prime numbers up to the maximum number in the input list using the Sieve of Eratosthenes.

2. Count the occurrences of each number that has a certain GCD by iterating over the prime numbers and their multiples.

3. Calculate the cumulative sum of GCD counts to efficiently compute the number of pairs that have a certain GCD.

4. Use binary search to find the index of each query in the GCD counts array.

# Complexity
- Time complexity:
$$O(n log log n + m log n)$$, where n is the maximum number in the input list numbers and m is the number of queries in the input list queries.
-- Generating prime numbers using the Sieve of Eratosthenes: O(n log log n)
-- Counting occurrences of each number that has a certain GCD: O(n)
-- Calculating cumulative sum of GCD counts: O(n)
-- Binary search for each query: O(m log n)

- Space complexity:
$$O(n)$$
-- Prime numbers array: O(n)
-- Composite marks array: O(n)
-- GCD counts array: O(n)
-- Cumulative sum array: O(n)

# Code
```python3 []
class Solution:
    def gcdValues(self, nums: List[int], queries: List[int]) -> List[int]:
        # Find the maximum number in the input list
        max_number = max(nums)
        # Create a list to store prime numbers
        prime_numbers = []
        # Create a boolean array to mark composite numbers
        composite_marks = [False] * (max_number + 1)

        # Generate prime numbers using the Sieve of Eratosthenes algorithm
        for possible_prime in range(2, max_number + 1):
            if not composite_marks[possible_prime]:
                prime_numbers.append(possible_prime)
                # Mark multiples of the prime number as composite
                for multiple in range(possible_prime, max_number + 1, possible_prime):
                    composite_marks[multiple] = True

        # Create an array to store the count of numbers that have a certain GCD
        gcd_counts = [0] * (max_number + 1)

        # Count the occurrences of each number in the input list
        for num in nums:
            gcd_counts[num] += 1

        # Count the occurrences of multiples of prime numbers
        for prime in prime_numbers:
            for multiple in range(max_number // prime, 0, -1):
                gcd_counts[multiple] += gcd_counts[multiple * prime]

        # Calculate the number of pairs that have a certain GCD
        for i in range(max_number + 1):
            gcd_counts[i] = gcd_counts[i] * (gcd_counts[i] - 1) // 2

        # Subtract the counts of multiples of prime numbers
        for prime in prime_numbers:
            for multiple in range(0, max_number // prime + 1):
                gcd_counts[multiple] -= gcd_counts[multiple * prime]

        # Calculate the cumulative sum of GCD counts
        for i in range(1, max_number + 1):
            gcd_counts[i] += gcd_counts[i - 1]

        # Use binary search to find the index of each query in the GCD counts array
        return [bisect_right(gcd_counts, query) for query in queries]
```
``` javascript []
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var gcdValues = function(nums, queries) {
    // Find the maximum number in the input list
    let maxNumber = Math.max(...nums);

    // Create a list to store prime numbers
    let primeNumbers = [];

    // Create a boolean array to mark composite numbers
    let compositeMarks = new Array(maxNumber + 1).fill(false);

    // Generate prime numbers using the Sieve of Eratosthenes algorithm
    for (let possiblePrime = 2; possiblePrime <= maxNumber; possiblePrime++) {
        if (!compositeMarks[possiblePrime]) {
            primeNumbers.push(possiblePrime);
            // Mark multiples of the prime number as composite
            for (let multiple = possiblePrime; multiple <= maxNumber; multiple += possiblePrime) {
                compositeMarks[multiple] = true;
            }
        }
    }

    // Create an array to store the count of numbers that have a certain GCD
    let gcdCounts = new Array(maxNumber + 1).fill(0);

    // Count the occurrences of each number in the input list
    for (let num of nums) {
        gcdCounts[num]++;
    }

    // Count the occurrences of multiples of prime numbers
    for (let prime of primeNumbers) {
        for (let multiple = Math.floor(maxNumber / prime); multiple > 0; multiple--) {
            gcdCounts[multiple] += gcdCounts[multiple * prime];
        }
    }

    // Calculate the number of pairs that have a certain GCD
    for (let i = 0; i <= maxNumber; i++) {
        gcdCounts[i] = gcdCounts[i] * (gcdCounts[i] - 1) / 2;
    }

    // Subtract the counts of multiples of prime numbers
    for (let prime of primeNumbers) {
        for (let multiple = 0; multiple <= Math.floor(maxNumber / prime); multiple++) {
            gcdCounts[multiple] -= gcdCounts[multiple * prime];
        }
    }

    // Calculate the cumulative sum of GCD counts
    for (let i = 1; i <= maxNumber; i++) {
        gcdCounts[i] += gcdCounts[i - 1];
    }

    // Use binary search to find the index of each query in the GCD counts array
    return queries.map(query => binarySearch(gcdCounts, query));
};


// Binary search function
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer[] $queries
     * @return Integer[]
     */
    function gcdValues($nums, $queries) {
        // Find the maximum number in the input list
        $maxNumber = max($nums);

        // Create a list to store prime numbers
        $primeNumbers = [];

        // Create a boolean array to mark composite numbers
        $compositeMarks = array_fill(0, $maxNumber + 1, false);

        // Generate prime numbers using the Sieve of Eratosthenes algorithm
        for ($possiblePrime = 2; $possiblePrime <= $maxNumber; $possiblePrime++) {
            if (!$compositeMarks[$possiblePrime]) {
                $primeNumbers[] = $possiblePrime;
                // Mark multiples of the prime number as composite
                for ($multiple = $possiblePrime; $multiple <= $maxNumber; $multiple += $possiblePrime) {
                    $compositeMarks[$multiple] = true;
                }
            }
        }

        // Create an array to store the count of numbers that have a certain GCD
        $gcdCounts = array_fill(0, $maxNumber + 1, 0);

        // Count the occurrences of each number in the input list
        foreach ($nums as $num) {
            $gcdCounts[$num]++;
        }

        // Count the occurrences of multiples of prime numbers
        foreach ($primeNumbers as $prime) {
            for ($multiple = floor($maxNumber / $prime); $multiple > 0; $multiple--) {
                $gcdCounts[$multiple] += $gcdCounts[$multiple * $prime];
            }
        }

        // Calculate the number of pairs that have a certain GCD
        for ($i = 0; $i <= $maxNumber; $i++) {
            $gcdCounts[$i] = $gcdCounts[$i] * ($gcdCounts[$i] - 1) / 2;
        }

        // Subtract the counts of multiples of prime numbers
        foreach ($primeNumbers as $prime) {
            for ($multiple = 0; $multiple <= floor($maxNumber / $prime); $multiple++) {
                $gcdCounts[$multiple] -= $gcdCounts[$multiple * $prime];
            }
        }

        // Calculate the cumulative sum of GCD counts
        for ($i = 1; $i <= $maxNumber; $i++) {
            $gcdCounts[$i] += $gcdCounts[$i - 1];
        }

        // Use binary search to find the index of each query in the GCD counts array
        return array_map(function($query) use ($gcdCounts) {
            return $this->binarySearch($gcdCounts, $query);
        }, $queries);
    }

// Binary search function
    function binarySearch($arr, $target) {
        $left = 0;
        $right = count($arr) - 1;

        while ($left <= $right) {
            $mid = floor(($left + $right) / 2);

            if ($arr[$mid] <= $target) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }

        return $left;
    }
> }
```
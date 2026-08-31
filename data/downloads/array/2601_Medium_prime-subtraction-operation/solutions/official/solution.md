# Official Solution

**Link:** [https://leetcode.com/problems/prime-subtraction-operation/solution/](https://leetcode.com/problems/prime-subtraction-operation/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an integer array `nums`. For each element in `nums`, we can subtract any prime number strictly less than the current element at most once, with the goal of making the array strictly increasing by performing operations on any number of elements.

For example, consider `nums = [5, 5, 4]`. For the first element, we have two options:

1. **Make a minimal adjustment** by subtracting a small prime, like `2`, from `5`, resulting in `[3, 5, 4]`. While `3` is less than `5`, we still need to adjust the second `5` to make it smaller than `4`. Subtracting `2` from the second `5` gives `[3, 3, 4]`, which isn’t strictly increasing.

2. **Make a maximal adjustment** by subtracting the largest possible prime under `5`, which is `3`. This results in `[2, 5, 4]`. Now, for the second element, we again subtract the largest prime that keeps it greater than the previous element, resulting in `[2, 3, 4]`—a strictly increasing sequence.

Following this approach, we prioritize subtracting the largest possible prime from each element while ensuring each adjusted element is still greater than the one before it. This allows us to minimize each value as much as possible, providing the most flexibility for later adjustments.

We’ll explore three approaches based on this greedy strategy. The main difference between them is the method used to find the largest prime to subtract for each element. In the first approach, we use a brute-force method, while in the latter approach, we use the Sieve of Eratosthenes for efficiency. You can refer to these links to learn more about the [Greedy Algorithm](https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/709/greedy/) and [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes).

---

### Approach 1: Brute Force

#### Intuition

Let's think through a basic approach to solve the problem. We want to make sure that each number in the array stays just a bit larger than the one before it. To do this, we’ll be subtracting the largest possible prime number from each element, but we have to be careful: the prime we subtract should leave the current element just slightly above the previous one.

In other words, for each element `nums[i]`, we need to find the biggest prime `p` so that after subtracting `p`, the new value of `nums[i]` is still greater than `nums[i-1]`. Mathematically, that’s `nums[i] - p > nums[i-1]`. So, `p` has to be the largest prime that’s smaller than the difference `nums[i] - nums[i-1]`.

To make this work, we’ll loop through each element in `nums`. For each one, we’ll look at the difference between it and the previous number. If this difference is zero or negative, it’s impossible to make the sequence strictly increasing, so we can just return `false` right away. But if the difference is positive, we need to find the largest prime within this range.

Now, remember a prime number only has two divisors: 1 and itself. To check if a number is prime, we don’t have to test all the way up to that number, we just need to check up to its square root. If we don’t find any divisors up to that point, then the number is prime.

Once we find this largest prime `p`, we subtract it from `nums[i]` and move on to the next element. If we manage to go through the whole array without any issues, we know the sequence is strictly increasing, so we return `true`.

#### Algorithm

Main Function - `primeSubOperation(nums)`

1. Iterate over each element in `nums` by looping through indices `i` ranging from 0 to the size of `nums` minus 1.
    - For the first element (`i` = 0), set bound to `nums[0]`. For subsequent elements, set `bound` to `nums[i] - nums[i - 1]`.
    - If `bound` is less than or equal to 0, return false, as it is impossible to create a strictly increasing sequence.
    - Initialize `largestPrime` as 0.
    - Starting from `bound - 1`, iterate downwards until 2 to find the largest prime number less than `bound`.
        - If a prime number is found (using `checkPrime`), store it in `largestPrime` and stop the search.
    - Subtract `largestPrime` from `nums[i]`.
2. If the loop completes, return `true`.

Helper Function - `checkPrime(x)`

1. Loop from 2 to the square root of `x`:
    - If any number divides `x` evenly, return false (indicating `x` is not prime).
2. If no divisors are found, return `true`, indicating `x`` is prime.

#### Implementation

<iframe src="https://leetcode.com/playground/3NCGBoee/shared" frameBorder="0" width="100%" height="500" name="3NCGBoee"></iframe>

#### Complexity Analysis

Let `n` be the length of the `nums` array, and `m` denotes the maximum value in the `nums` array.

- Time complexity: $O(n \cdot m \cdot \sqrt(m))$

    The algorithm iterates through the `nums` array, which takes $O(n)$ time for the outer loop. For each element in the array, the algorithm may check each number from `bound - 1` down to `2` to find the largest prime. 
    
    The primality check is done using the `checkPrime` function, which has a time complexity of $O(sqrt(m))$, where `m` is the current number being checked. 
    
    In the worst case, this results in an overall time complexity of $O(n \cdot m \cdot \sqrt(m))$.

- Space complexity: $O(1)$

    The space complexity is determined by a few integer variables and does not depend on the size of the input. Hence, the overall space complexity is constant.

---

### Approach 2: Storing the primes

#### Intuition

In our previous method, we checked if each number below a certain difference was prime, which could get repetitive and slow. To make this faster, we can create an array, `previousPrime`, to store the largest prime number less than each number up to our limit. This lets us quickly look up the nearest prime without recalculating it every time.

Since all values in `nums` are between 1 and 1000, we only need to find primes within this range. First, we identify which numbers are prime. For each prime number `p`, we set `previousPrime[p] = p`. Then, for numbers in between (where no prime has been assigned), we just carry forward the most recent prime we found. For example, if we find `previousPrime[3] = 3` and `previousPrime[5] = 5`, but `previousPrime[4]` is empty, we fill in `3` for it.

This way, it lets us find the nearest prime for any number in constant time and avoids recalculating primes repeatedly.

#### Algorithm

Main Function - `primeSubOperation(nums)`
- Calculate `maxElement` as the maximum value in the `nums` array.
- Create an array `previousPrime` of size `maxElement + 1`, where each index will store the largest prime number less than or equal to that index.
- Loop from 2 to `maxElement`:
    - If the number is prime (using `checkPrime`), set `previousPrime[i]` to `i`.
    - If it’s not prime, set `previousPrime[i]` to `previousPrime[i - 1]`.
- Loop Through Each Element in `nums`:
- For each element in `nums`, iterate the index `i` from 0 to `nums.size() - 1`:
    - For the first element (i = 0), set `bound` to `nums[0]`.
    - For subsequent elements, set `bound` to `nums[i] - nums[i - 1]`.
    - If `bound` is less than or equal to 0, return `false`, as it’s impossible to create a strictly increasing sequence.
    - Retrieve `largestPrime` as the value of `previousPrime[bound - 1]`, representing the largest prime number less than `bound`.
    - Subtract `largestPrime` from `nums[i]`.
- If the loop completes successfully, return `true`.

Helper Function - `checkPrime(x)`
- Loop from 2 to the square root of `x`:
    - If any number divides `x` evenly, return false (indicating `x` is not prime).
- If no divisors are found, return `true` (indicating `x` is prime).

#### Implementation

<iframe src="https://leetcode.com/playground/Rf95tfvk/shared" frameBorder="0" width="100%" height="500" name="Rf95tfvk"></iframe>

#### Complexity Analysis

Let `n` be the length of the `nums` array, and `m` denotes the maximum value in the `nums` array.

- Time complexity: $O(n + m \cdot \sqrt(m))$

    We first populate the `previousPrime` array for all integers from 2 to the maximum element. This involves checking the primality of numbers up to `m`, which takes $O(m \cdot \sqrt(m))$ time due to the `checkPrime` function.

    Finally, the algorithm iterates through the `nums` array to apply the prime subtraction operation, which takes $O(n)$ time.
    
    In the worst case, this results in an overall time complexity of $O(n + m \cdot \sqrt(m))$.

- Space complexity: $O(m)$

    The space complexity is determined by the `previousPrime` array, which is of size `m`. This requires $O(m)$ space, where `m` is the maximum value in the input array.

---

### Approach 3: Sieve of Eratosthenes + Two Pointers 

#### Intuition

The [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) is a classic and efficient way to find all the prime numbers up to a certain limit, like 100. Essentially, we’re going to go through a list of numbers and cross off anything that’s not prime.

1. Create a List: We start with a list of numbers from 2 to 100. Notice we skip 1 since it’s not considered a prime.

2. Mark Multiples of Each Prime:
   - Starting with the smallest prime, 2, we know it’s prime because it hasn’t been marked yet. So, we keep it.
   - Now, we cross out all multiples of 2 (like 4, 6, 8, etc.) because they’re definitely not prime.

3. Move to the Next Unmarked Number:
   - The next number that isn’t crossed out is 3, so we mark it as a prime.
   - Then, we cross out all multiples of 3 (like 6, 9, 12, etc.).

4. Repeat the Process:
   - We keep going, finding the next unmarked number (which will be 5), and marking all of its multiples. We do this for 7 as well and continue until we’ve processed all numbers up to the limit.

The beauty of the Sieve of Eratosthenes is that it saves a lot of time by marking off composites in bulk, rather than testing each number individually to see if it’s prime. By the end, any number that’s still unmarked is a prime.

As we proceed, we can store each prime in an array by setting `sieve[prime] = 1`. For any marked (non-prime) number, we could also keep track of the specific prime that marked it, though, for basic prime-finding, it’s sufficient to identify which numbers are prime.

Since all values lie between 1 and 1000, we can iterate through the array and check the minimum value that can be assigned to the current index. The array should be strictly increasing, so the next value assigned would be greater than the current value. Therefore, we can iterate through the indices and the values simultaneously using two pointers. 

We’ll have one pointer, `i`, which represents the current index in the array, and another variable, `currValue`, which keeps track of the current value we want to assign to that index. The key here is that `nums[i]` should equal `currValue` after we subtract a prime number from it, meaning we need to ensure that the difference between `nums[i]` and `currValue` is a prime number.

As we iterate through the array, for each element, we will check if the difference `nums[i] - currValue` is a prime number. We can use the sieve table for this check. If the difference is prime (i.e. `sieve[difference] = 1`), we assign `currValue` to `nums[i]` and move on by incrementing both `i` and `currValue`. However, if the difference isn't prime, we increment `currValue` and check again to see if we can assign it to the same index `i`.

If at any point the difference becomes negative, it means that `nums[i]` is already less than `currValue`, and in that case, we can conclude that it’s impossible to assign the values correctly and return `false`.

#### Algorithm

1. Calculate `maxElement` as the maximum value in the `nums` array.
2. Create a `sieve` array of size `maxElement + 1` where each index initially has a value of 1 (indicating prime), except `sieve[1]`, which is set to 0 (indicating non-prime).
3. Loop through each number from `2` to the square root of `maxElement + 1`:
    - For each prime number `i`, mark all multiples of `i` as non-prime by setting `sieve[j]` to 0 for each multiple `j`.
4. Initialize `currValue` to 1 and start with index `i` = 0 in `nums`:
5. While `i` is less than the size of `nums`:
        - Calculate difference as `nums[i] - currValue`.
            - If difference is less than 0, return `false`, as `nums[i]` is already less than `currValue`.
            - If difference is either prime (`sieve[difference]` equals 1) or `0`, move to the next element by incrementing `i` and `currValue`.
            - Otherwise, increment `currValue` and try again.
6. If the loop completes successfully, return `true`.

!?!../Documents/2601/slideshow1.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/cSsTp4jG/shared" frameBorder="0" width="100%" height="500" name="cSsTp4jG"></iframe>

#### Complexity Analysis

Let `n` be the length of the `nums` array, and `m` denotes the maximum value in the `nums` array.

- Time complexity: $O(n + m \log \log (m))$

    We first construct the sieve array to identify prime numbers up to `maxElement`. The Sieve of Eratosthenes runs in $O(m \log \log (m))$ time, where `m` is the maximum element.

    Finally, the algorithm iterates through the `nums` array to apply the prime subtraction operation, which takes $O(n)$ time.
    
    In the worst case, this results in an overall time complexity of $O(n + m \log \log (m))$.

- Space complexity: $O(m)$

    The space complexity is determined by the `sieve` array, which is of size `m`. This requires $O(m)$ space, where `m` is the maximum value in the input array.

---
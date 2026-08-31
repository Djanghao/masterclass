# GoLang | Step by Step Explain

**Author:** white_panda
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3208275/](https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3208275/)

---


# Code
```
package main

import (
	"fmt"
	"math"
)

// Ref: https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3206717/bitmask-very-detailed-explaination-titans-plz-skip-code-java/
// Ref: https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3204685/python-bitmask-dp-bottom-up-solution/

func squareFreeSubsets(nums []int) int {
	// result should be returned after applying below mod
	MOD := int(math.Pow(10, 9) + 7)
	// 10 primes, each prime can be used at most once in any
	// number, because in a product of these nums all primes
	// should occur only once to maintain product sq-free

	// these 10 primes can produce 2^10 combinations
	// (keep or leave a prime is a product) thus 2^10 products
	// are possible
	// in dp we keep track of which all products are achievable
	// with the subset of nums
	dp := make([]int, 1<<10)
	dp[0] = 1 // product 0 is always achievable

	for _, num := range nums {
		mask := getMask(num)
		if mask < 0 {
			// this number already have a square and can't be
			// used in product subset
			continue
		}
		// iterate over all possible products possible
		// check if the current mask (number) when multiplied
		// with some existing product, produce a new product
		// which is sq-free, if so then inc the count of new
		// product
		for prevProduct := 0; prevProduct < (1 << 10); prevProduct++ {
			// product of this number and existing product
			// do not have common prime - sq free
			// 15 * 7 = 105 = 3*5*7
			// (15) 0110 & (7) 1000 = 0000
			if (mask & prevProduct) == 0 {
				// 15 * 7 = 105 = 3*5*7
				// (15) 0110 | (7) 1000 = 1110 = 7*5*3 = 105
				newProduct := mask | prevProduct
				// if there are n prevProduct achievable
				// then with this new number (mask) there are
				// n newProduct become achievable (that to sq-free)
				dp[newProduct] += (dp[prevProduct] % MOD)
			}
		}
	}

	// take sum of all dp array values and return
	// sub 1 because we don't count the product 0
	// rest all places in dp with value x
	// represent the product is reachable in x subsets
	sum := 0
	for _, value := range dp {
		sum += value
	}
	return (sum - 1) % MOD
}

func getMask(num int) int {
	// since there are 10 primes, 10 bits in mask represent
	// which all primes the number is composed of.

	// due to nums[i] < 30 limit there are only 10 primes
	// under this range - each number can be represented as
	// factor of primes - 20 = 2*3*5
	primes := []int{2, 3, 5, 7, 11, 13, 17, 19, 23, 29}
	mask := 0
	for i, prime := range primes {
		// if the square of prime is present in this number
		// then it can't be part of any product subset
		// else that product will be divisible by sq of that prime
		if num%(prime*prime) == 0 {
			mask = -1
			break
		} else if num%prime == 0 {
			// set the bit corresponding to the prime index
			mask = mask | (1 << i)
		}
	}
	// 6 = 2*3  = bin 0011 (mask) = 3
	// 15 = 3*5 = bin 0110 (mask) = 6
	// 14 = 2*7 = bin 1001 (mask) = 9
	return mask
}

```
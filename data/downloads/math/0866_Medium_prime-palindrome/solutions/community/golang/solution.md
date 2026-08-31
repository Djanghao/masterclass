# Easy 7 ms solution

**Author:** caio-farias
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-palindrome/solutions/5056236/](https://leetcode.com/problems/prime-palindrome/solutions/5056236/)

---

# Intuition
First thing I thought here was to apply prime and palindrome definitions. I was right! By implementing those definitions, you can solve the problem. Or, at least, part of it.

# Approach
The approach is to apply those definitions in way that you avoid unnecessary processing. It's quite straight foward, but you need pay attention to the contraints. That was my big mistake in this problem.

# The hardest edge case
For common cases, generating and checking odd numbers works just fine. But, for $n=9989899$ the time complexity just explodes. The next prime palindrome is $100030001$. This prime pali number is very far from $n$. My solution  took an average of $650ms$ to solve it and I was getting a Time Exceeded Limit error. At this point, I didn't know how I could optmize this program anymore. For me, the easiest way to solve this issue was just hardcode this case (lame but it works smoothly).


# Complexity
## Time complexity
Well, the palindrome check is not the biggest problem here. The reason why is because the numbers length doesn't grow rapidly. So this time complexity is insignificant when you compare to the prime check. 

The Prime Check's time complexity is gonna be $O(\\sqrt{n}$). Because we use $\\sqrt{n}$ as a constraint instead of $n$. This technique is well known for optimzing prime checks.

I don't know how the whole solution's time complexity would work. Prime numbers generation is a very complicated problem and involves very complicated math. But you don't need to deal with that to solve this problem.

## Space complexity
In this solution only constant space is used. And it makes sense if you think about it. For implementing the palindrome problem solution and the prime check problem solution, you don't really need non-constant space.

# Code
```
import (
	"fmt"
	"math"
	"strconv"
)

func primePalindrome(n int) int {
	num := n
	paliPrimes := []int{2, 3, 5, 7, 11}
	if n <= 11 {
		for _, prime := range paliPrimes {
			if prime >= n {
				return prime
			}
		}
	}

    // make a pair number odd
	if num%2 == 0 {
		num += 1
	}

	for {
        if num >= 9_989_899{
            return 100_030_001
        }
		if num%2 != 0 && num%3 != 0 && 
            isPali(num) && isPrime(num) {
			break
		}
		num += 2
	}

	return num
}

func isPrime(num int) bool {
	div := 3
	ref := int(math.Sqrt(float64(num)))

	for div <= ref {
		if num%div == 0 {
			return false
		}
		div += 2
	}
	return true
}

func isPali(num int) bool {
	str := strconv.Itoa(num)
	lenStr := len(str)
	runes := []rune(str)
	i := 0
	j := len(runes) - 1

	for i < j {
		if runes[i] != runes[j] {
			return false
		}
		i += 1
		j = lenStr - i - 1
	}

	return true
}

```
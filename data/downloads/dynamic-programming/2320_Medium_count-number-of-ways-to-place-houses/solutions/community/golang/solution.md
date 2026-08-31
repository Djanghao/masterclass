# Easy and straightforward go solution

**Author:** v_util
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/4318364/](https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/4318364/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
after couple of minutes of thinking about given examples you can see that there is some familiar sequence in count of house placement variations.. and you remember about fibonacci numbers! But keep in mind that here it starts from the fourth element of the sequence 
- 2 variations for 1 plot on one side 

|Variation| Plot          |
|:-------:|:-------------:|
|1        | House         |
|2        |               |

- 3 variations for 2 plots on one side

|Variation|Plot    |Plot    |
|:-------:|:------:|:------:|
|1        |  House |        |
|2        |        | House  |
|3        |        |        |
  

- 5 variations for 3 plots on one side

|Variation|Plot    |Plot    |Plot     |
|:-------:|:------:|:------:|:-------:|
|1        |House   |        |House    |
|2        |        |House   |         |
|3        |House   |        |         |
|4        |        |        |  House  |
|5        |        |        |         |

And also you see that the result is this number in fibonacci sequence multiplied by itself

- 2 variations on each side = 4 variations in result
- 3 variations on each side = 9 variations in result
- 5 variations on each side = 25 variations in result

Simple combinatorics!

# Approach
<!-- Describe your approach to solving the problem. -->
you need to find (n+2)th number in fibonacci sequence and multiply it by itself (pretty easy right?). But the easiest recursive fibonacci function wouldn't pass the time limit so you have to use iterative method and take the modulo of the result and 10^9-7 (you can store it in the constant).
After finding it you just multiply the result by itself and take the modulo as you did in previous step so that the result would fit in standad integer. Done!

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```go
const mod = 1000000007

func fib(n int) int {
	a, b := 0, 1
    for i := 0; i < n; i++ {
        a, b = b, (a+b)%mod
    }
    return a % mod
}

func countHousePlacements(n int) int {
	onSide := fib(n + 2)
	return (onSide * onSide) % mod
}
```
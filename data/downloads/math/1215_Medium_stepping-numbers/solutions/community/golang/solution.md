# Golang --- DFS recursion solution

**Author:** KeroJin
**Votes:** 0
**Link:** [https://leetcode.com/problems/stepping-numbers/solutions/397689/](https://leetcode.com/problems/stepping-numbers/solutions/397689/)

---

According to the description, we need to know how to generate the stepping numbers.

For example, if the first digit of generated numbers is 3 and the length of generated numbers is 2, there're 2 cases when a digit is added:  substract 1 and plus 1
> 3 -> 3(3-1) -> 32
> 3 -> 3(3+1) -> 34
> 
When the length of generated numbers is 3, the total count of generated numbers is 2^(3-1)=4
> 3 -> 3(3-1) -> 32  -> 32(2-1)
> 3 -> 3(3-1) -> 32  								    -> 32(2+1)
> 3 -> 3(3+1) -> 34 -> 34(4-1)
> 3 -> 3(3+1) -> 34							    -> 34(4+1)

**When the length of generated numbers is n, the total count of generated numbers is 2^(n-1) (n >= 1)**



However, there're also some special case:
1. When the first dight is 0 and the length of number is greater than 1
2. When the digit added is not in the range [0, 9]
3. When the number generated is not in the range [low, high]

The last but important thing is to make the result list sorted. We just need to calculate the length of `low` and `high`, then traverse digit by digit from 0 to 9

```go
func countSteppingNumbers(low int, high int) []int {
	res := []int{}
	bl := getBits(low)
	bh := getBits(high)

	for i := bl; i <= bh; i++ {
		for j := 0; j <= 9; j++ {
			res = append(res, generate(0, j, i, low, high)...)
		}
	}
	return res
}

func getBits(n int) int {
	bit := 1
	if n == 0 {
		return bit
	}
	for n >= 10 {
		bit++
		n /= 10
	}
	return bit
}

func generate(base int, firstDigit int, bit int, low int, high int) []int {
	if base == 0 && firstDigit == 0 && bit > 1 {
		return []int{}
	}
	newBase := base*10 + firstDigit
	if bit == 1 {
		if newBase >= low && newBase <= high {
			return []int{newBase}
		}
		return []int{}
	}
	res := []int{}
	if firstDigit > 0 {
		res = append(res, generate(newBase, firstDigit-1, bit-1, low, high)...)
	}
	if firstDigit < 9 {
		res = append(res, generate(newBase, firstDigit+1, bit-1, low, high)...)
	}
	return res
}

```
# palindrom int in range of (x,y )

**Author:** DalianrKholin
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-palindromes/solutions/5362775/](https://leetcode.com/problems/super-palindromes/solutions/5362775/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func FastPow(x, y int64) int64 {
	var wyk int64 = x
	var res int64 = 1
	for y > 0 {
		if y&1 == 1 {
			res *= wyk
		}
		wyk *= wyk
		y >>= 1
	}
	return res
}

func isPalindrom(num int64) bool {
	if num < 10 {
		return true
	}
	l := int64(math.Log10(float64(num)))
	wyk := FastPow(10, l)
	for num > 9 {
		if num/wyk != num%10 {
			return false
		}
		num = (num % wyk) / 10
		wyk /= 100
	}
	return true
}

var lgStop int64 = 0

func rec(v, stopper, zeroCount, lower int64) int64 {
	lg := int64(math.Log10(float64(v)))
	if v > stopper || (lg+zeroCount) > lgStop && !(lg < 0) || zeroCount > lgStop {
		return 0
	}
	res := int64(0)
	if v >= lower && isPalindrom(v*v) {
		res += 1
	}

	preprocessed := make([]int64, 10)
	preprocessed[0] = (v) * 10

	for i := int64(1); i < 10; i++ {
		index := max(lg+1+zeroCount, zeroCount)
		preprocessed[i] = (v+(FastPow(10, index)*i))*10 + i
	}
	res += rec(preprocessed[0], stopper, zeroCount+1, lower)
	for i := int64(1); i < 10; i++ {
		res += rec(preprocessed[i], stopper, 0, lower)
	}
	return res
}


func superpalindromesInRange(left string, right string) int {
    l, _ := strconv.Atoi(left)
	r, _ := strconv.Atoi(right)
	res := int64(0)
	upperBound := int64(math.Sqrt(float64(r)))
	lowerBound := int64(math.Sqrt(float64(l)))
	lgStop = int64(math.Log10(float64(upperBound))) + 3

	res += rec(0, upperBound, 1, lowerBound)
	for _, i := range []int64{11, 22, 33, 44, 55, 66, 77, 88, 99} {
		res += rec(i, upperBound, 0, lowerBound)
	}
	for _, i := range []int64{1, 2, 3, 4, 5, 6, 7, 8, 9} {
		res += rec(i, upperBound, 0, lowerBound)
	}
	return int(res)
}
```
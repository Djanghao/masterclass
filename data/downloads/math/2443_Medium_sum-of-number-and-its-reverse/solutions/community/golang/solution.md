# 2ms math solution

**Author:** andigntv
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/4720539/](https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/4720539/)

---


# Code
```
func sumOfNumberAndReverse(num int) bool {
	if num < 20 {
		return num%2 == 0 || num == 11
	}
	check3Digits := func(n int) bool {
		div := n / 101
		if div == 0 {
			return false
		}
		if div == 1 {
			return (n%101)%20 == 0 || n%11 == 0
		}
		return (n%101)%20 == 0 || (n-(div-1)*101)%20 == 0
	}
	check4Digits := func(n int) bool {
		div := n / 1001
		if div == 0 {
			return false
		}
		if div == 1 {
			return (n%1001)%110 == 0 || check3Digits(n)
		}
		return (n%1001)%110 == 0 || (n-(div-1)*1001)%110 == 0
	}
	check5Digits := func(n int) bool {
		div := n / 10001
		if div == 0 {
			return false
		}
		if div == 1 {
			mod := n % 10001
			moddiv := mod / 1010
			return (mod%1010)%200 == 0 || (mod-(moddiv-1)*1010)%200 == 0 || check4Digits(n)
		}
		mod := n % 10001
		moddiv := mod / 1010
		if (mod%1010)%200 == 0 || (mod-(moddiv-1)*1010)%200 == 0 {
			return true
		}
		mod += 10001
		moddiv = mod / 1010
		if (moddiv <= 18 && (mod%1010)%200 == 0) || (mod-(moddiv-1)*1010)%200 == 0 {
			return true
		}
		return false
	}
	temp := num
	length := 0
	for temp > 0 {
		length++
		temp /= 10
	}
	switch length {
	case 2:
		return num%11 == 0
	case 3:
		return check3Digits(num)
	case 4:
		return check4Digits(num)
	case 5:
		return check5Digits(num)
	}
	return false
}
```
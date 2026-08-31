# golang solution OlgN complexity.

**Author:** broook
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/955578/](https://leetcode.com/problems/number-of-digit-one/solutions/955578/)

---

```
func countDigitOne(n int) int {
	var result, k, a, b, c int
	for a, k = n, 1; k <= n; k *= 10 {
		a, b, c = a/10, a%10, n%k
		switch b {
		case 0:
			result += a * k
		case 1:
			result += a*k + c + 1
		default:
			result += a*k + k
		}
	}
	return result
}
```

The basic idea is counting number of ones of each digit from back to front. 

For example, Let's count number of ones at thousand digit of 1234567. First split number into three parts.
```
1 2 3 4 5 6 7
|-a-| b |-c-|
a=123 b=4 c=567
```

The thousand digit is 4. How many ones at thousand digit positoin? 

```
     1000 1001...1999         1000 ones 
    11000 11001...11999       1000 ones
    21000 21001...21999       1000 ones
     .
     .
     .
  1221000 1221001...1221999   1000 ones   
  1231000 1231001...1231999   1000 ones   
```

There are  `(123 + 1) * 1000` ones at thousand digit when the thousand digit is 4 or any number greater than 1.

What if the thousand digit is 1 of case 1231567?
```
1 2 3 1 5 6 7
|-a-| b |-c-|
a=123 b=1 c=567

     1000 1001...1999         1000 ones 
    11000 11001...11999       1000 ones
    21000 21001...21999       1000 ones
     .
     .
     .
  1221000 1221001...1221999   1000 ones   
  1231000 1231001...1231456   456+1 ones   
```
There are  `123 * 1000 + 456 + 1` ones at thousand digit when thousand digit is 1.

What if the thousand digit is 0 of case 1230567?

```
1 2 3 0 5 6 7
|-a-| b |-c-|
a=123 b=0 c=567

     1000 1001...1999         1000 ones 
    11000 11001...11999       1000 ones
    21000 21001...21999       1000 ones
     .
     .
     .
  1221000 1221001...1221999   1000 ones   
```
There are  `123 * 1000` ones at thousand digit when thousand digit is 0.

This is the basic idea how to count number of ones of each digits. 


# Golang concise solution and some explanation

**Author:** redtree1112
**Votes:** 3
**Link:** [https://leetcode.com/problems/nth-digit/solutions/88389/](https://leetcode.com/problems/nth-digit/solutions/88389/)

---

All numbers can be divided per level as below:

```
level1 level2 level3
1      10     100
2      11     101
3      12     102
4      13     :
5      14
6      :
7
8
9
```

level1 contains `9` numbers from 1 to 9, level2 contains `180` numbers from 10 to 99 ( 90 numbers and each has two digits ). First we check at which level `n` th number is, by subtracting each count `9`, `180`, `2700` ... from `n` until  the result becomes negative number. 

By keeping `n` just before it becomes negative, we can have an index of `n` in the level we calculated.
e.g) Let's say `n = 12`, then `n - 9 = 3` (level1) and `3 - 180 < 0` (level2). So we keep `n` as `3`, then we see `n` is the 3rd number in level2.

After we know the index in the level, we first check in which number the `n` th single digit resides. We know how many  digits each number has in the level (as level2 exactly means each number has 2 digits), so we can calculate which number holds the digit we want by using `/` and `%` of the digit count like below.
`number is (n / digit - 1) + base if (n % digit == 0), otherwise (n / digit) + base`. 

e.g) In case first n = `12`, it's altered to `3` after we see the level as above.
`3 % 2 = 1` so the number is `(3 / 2) + base = 1 + 10 = 11`.

Finally we can obtain the exact number by using its modulo `n / digit`.
If `n / digit == 0` , it shows the number is the last digit of the number. And if `n / digit != 0`, the modulo represents the count from the highest digit start from 1.

This manipulation requires extreme care for me and super error-prone...I feel this problem is kind of between "easy" and "medium" :-\\

```
func findNthDigit(n int) int {
	base, digit := 1, 1
	for {
		diff := n - (9 * base * digit)
		if diff < 0 {
			j := n % digit
			num := base + (n/digit - 1)
			if j != 0 {
				num++
			}
			if j == 0 {
				return num % 10
			}

			for ; j < digit; j++ {
				num /= 10
			}
			return num % 10
		}
		n, base, digit = diff, base*10, digit+1
	}
}

```
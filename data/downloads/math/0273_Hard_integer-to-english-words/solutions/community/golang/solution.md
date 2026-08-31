# Go || Beats 100% || Easy to understand

**Author:** deleted_user
**Votes:** 8
**Link:** [https://leetcode.com/problems/integer-to-english-words/solutions/5600430/](https://leetcode.com/problems/integer-to-english-words/solutions/5600430/)

---

![Screenshot 2024-08-07 at 12.24.14.png](./images/0.png)

# Code
```
var numbers = map[int]string{
	0:  "Zero",
	1:  "One",
	2:  "Two",
	3:  "Three",
	4:  "Four",
	5:  "Five",
	6:  "Six",
	7:  "Seven",
	8:  "Eight",
	9:  "Nine",
	10: "Ten",
	11: "Eleven",
	12: "Twelve",
	13: "Thirteen",
	14: "Fourteen",
	15: "Fifteen",
	16: "Sixteen",
	17: "Seventeen",
	18: "Eighteen",
	19: "Nineteen",
	20: "Twenty",
	30: "Thirty",
	40: "Forty",
	50: "Fifty",
	60: "Sixty",
	70: "Seventy",
	80: "Eighty",
	90: "Ninety",
}

func numberToWords(num int) (res string) {
	defer func() {
        res = strings.TrimSuffix(res, " Zero")
	}()

	switch {
	case num >= 1e9:
		return numberToWords(num/1e9) + " Billion " + numberToWords(num%1e9)
	case num >= 1e6:
		return numberToWords(num/1e6) + " Million " + numberToWords(num%1e6)
	case num >= 1e3:
		return numberToWords(num/1e3) + " Thousand " + numberToWords(num%1e3)
	case num >= 1e2:
		return numberToWords(num/1e2) + " Hundred " + numberToWords(num%1e2)
	default:
		if number, ok := numbers[num]; ok {
			return number
		}
		return numbers[num/10*10] + " " + numbers[num % 10]
	}
}

```
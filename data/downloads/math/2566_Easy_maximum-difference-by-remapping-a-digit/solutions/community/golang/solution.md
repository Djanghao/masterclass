# OOP | Beats 100% Runtime

**Author:** efk
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/4652301/](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/4652301/)

---

# Code
```
package main

import "errors"

// https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/
func minMaxDifference(num int) int {
	var err error
	d, minR, maxR, curR := newDigits(num), num, num, 0
	for from := 0; from <= 9; from++ {
		for to := 0; to <= 9; to++ {
			if from != to {
				if curR, err = d.remap(from, to); err == nil {
					minR, maxR = minInt(minR, curR), maxInt(maxR, curR)
				}
			}
		}
	}

	return maxR - minR
}

type digits []int

var errNoDigit = errors.New("number do not contain remap digit")

func newDigits(n int) digits {
	parsed := make([]int, 0, 9)

	i := 0
	var reminder int
	for 0 < n && 0 <= i {
		reminder = n % 10
		parsed = append(parsed, reminder)
		n = (n - reminder) / 10
		i++
	}

	for i := 0; i < len(parsed)/2; i++ {
		parsed[i], parsed[len(parsed)-1-i] = parsed[len(parsed)-1-i], parsed[i]
	}

	return parsed
}

func (d digits) remap(from, to int) (int, error) {
	var remapped int
	var didRemap bool

	for _, digit := range d {
		if digit == from {
			digit, didRemap = to, true
		}
		remapped = 10*remapped + digit
	}

	if !didRemap {
		return 0, errNoDigit
	}

	return remapped, nil
}

func minInt(a, b int) int {
	if a < b {
		return a
	} else {
		return b
	}
}

func maxInt(a, b int) int {
	if a < b {
		return b
	} else {
		return a
	}
}

```

![image.png](./images/0.png)

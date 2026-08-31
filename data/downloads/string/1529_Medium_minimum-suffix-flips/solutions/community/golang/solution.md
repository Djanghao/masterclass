# Golang: Counting number of 1's

**Author:** harshawasthi90
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/3145888/](https://leetcode.com/problems/minimum-suffix-flips/solutions/3145888/)

---

```
package main

// url: https://leetcode.com/problems/minimum-suffix-flips/
// date: 05-02-2023 : 04:11 pm

func minFlips(target string) int {
	count := 0

	for i := 0; i < len(target); i++ {
		ch := target[i]

		if ch == '1' {
            // Count consecutive 1's
			for i+1 < len(target) && target[i+1] == ch {
				i++
			}

            // First flip for the consecutive 1's.
            // Second flip to set rest of the bits to original state (Because the 1st flip might have changed the state of the rest).
			count += 2
		}
	}

    // The last one's do not require the extra flip.
	if target[len(target)-1] == '1' {
		count--
	}

	return count
}

```
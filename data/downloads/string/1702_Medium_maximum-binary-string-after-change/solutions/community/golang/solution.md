# (Golang) Tracking the previous zero. (True one pass solution)

**Author:** harshawasthi90
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-binary-string-after-change/solutions/3275111/](https://leetcode.com/problems/maximum-binary-string-after-change/solutions/3275111/)

---

```
func maximumBinaryString(binary string) string {
	previousZeroIndex := -1
	chArray := []byte(binary)

	for i := 0; i < len(chArray); i++ {
		if chArray[i] == '0' {
			// Case of 10 -> 01
			// Example (011110 -> 101111); indexOf [ previousZeroIndex = 0; previousZeroIndex+1 = 1; i = 5]
            // We need to prefer operation 2 before operation 1 as it results in bigger number.
			if previousZeroIndex != -1 {
				chArray[previousZeroIndex] = '1'
				chArray[previousZeroIndex+1] = '0'
				chArray[i] = '1'
				previousZeroIndex++
			} else if i+1 < len(chArray) && chArray[i+1] == '0' {
				// Case of 00 -> 10
				chArray[i] = '1'
			} else {
				// Else we can update the position of the last zero
				previousZeroIndex = i
			}
		}
	}
	return string(chArray)
}


```
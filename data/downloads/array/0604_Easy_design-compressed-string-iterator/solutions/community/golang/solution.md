# Go

**Author:** namashin
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-compressed-string-iterator/solutions/3981332/](https://leetcode.com/problems/design-compressed-string-iterator/solutions/3981332/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
    Hash Map
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(1)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(n)
# Code
```
type StringIterator struct {
	charsSet []map[string]int

	currentChar string
	remainCount int
}

// O(n)
func Constructor(compressedString string) StringIterator {
	charsSet := make([]map[string]int, 0)

	var alphabet string
	var digit string

	for i := 0; i < len(compressedString); i++ {
		if unicode.IsDigit(rune(compressedString[i])) {
			digit += string(compressedString[i])

			for i < len(compressedString)-1 && unicode.IsDigit(rune(compressedString[i+1])) {
				digit += string(compressedString[i+1])
				i++
			}

			m := make(map[string]int)
			m[alphabet], _ = strconv.Atoi(digit)

			charsSet = append(charsSet, m)

			// initialize
			alphabet = ""
			digit = ""
		} else {
			alphabet += string(compressedString[i])
		}
	}

	return StringIterator{
		charsSet: charsSet,

		currentChar: "",
		remainCount: 0,
	}
}

// O(1)
func (this *StringIterator) Next() byte {
	if this.HasNext() {
		this.remainCount--
		return this.currentChar[0]
	}

	return byte(' ')
}

// O(1)
func (this *StringIterator) HasNext() bool {
	if 0 < this.remainCount {
		return true
	} else if 0 < len(this.charsSet) {
		// pop first pair
		pair := this.charsSet[0]
		this.charsSet = this.charsSet[1:]

		for char, count := range pair {
			this.currentChar = char
			this.remainCount = count
		}

		return true
	}

	return false
}
```
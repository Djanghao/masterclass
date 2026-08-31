# 20ms(89.19%) 6.76MB(91.89%) | Go solution

**Author:** kitanoyoru_
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4284552/](https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4284552/)

---

```
func isVowel(char byte) bool {
	vowels := "aeiouAEIOU"
	return strings.ContainsRune(vowels, rune(char))
}

func sortVowels(s string) string {
	bytes := []byte(s)
	vowels := make([]byte, 0)

	for i := 0; i < len(bytes); i++ {
		if isVowel(bytes[i]) {
			vowels = append(vowels, bytes[i])
		}
	}

	sort.Slice(vowels, func(i, j int) bool {
		return vowels[i] < vowels[j]
	})

	ptr := 0
	for i := 0; i < len(bytes); i++ {
		if isVowel(bytes[i]) {
			bytes[i] = vowels[ptr]
			ptr++
		}
	}

	return string(bytes)
}

```
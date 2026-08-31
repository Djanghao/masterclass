# solution on go

**Author:** winlu23
**Votes:** 0
**Link:** [https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/5820688/](https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/5820688/)

---

# Complexity
- Time complexity:
124 ms
- Space complexity:
9.61 mb

# Code
```golang []
import "strings"

type Encrypter struct {
	encryptMap    map[string]string
	resultCounter map[string]int
}

func Constructor(keys []byte, values []string, dictionary []string) Encrypter {
	encryptMap := make(map[string]string)
	for i, v := range keys {
		encryptMap[string(v)] = values[i]
	}
	resultCounter := make(map[string]int)
	for _, v := range dictionary {
		encrypted := encryptHelper(v, encryptMap)
		if len(encrypted) == 0 {
			continue
		}
		resultCounter[encrypted]++
	}
	return Encrypter{
		encryptMap:    encryptMap,
		resultCounter: resultCounter,
	}
}

func (e *Encrypter) Encrypt(word1 string) string {
	return encryptHelper(word1, e.encryptMap)
}

func encryptHelper(word string, encryptMap map[string]string) string {
	sb := strings.Builder{}
	for _, v := range word {
		if len(encryptMap[string(v)]) == 0 {
			return ""
		}
		sb.WriteString(encryptMap[string(v)])
	}
	return sb.String()
}

func (e *Encrypter) Decrypt(word2 string) int {
	return e.resultCounter[word2]
}
```
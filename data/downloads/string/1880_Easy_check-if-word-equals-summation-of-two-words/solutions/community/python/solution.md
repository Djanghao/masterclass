# Python simple and clean solution

**Author:** TovAm
**Votes:** 12
**Link:** [https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/1682489/](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/1682489/)

---

**Python :**

```
def isSumEqual(self, firstWord: str, secondWord: str, targetWord: str) -> bool:
	firstNum, secondNum, targetNum = "", "", ""

	for char in firstWord:
		firstNum += str(ord(char) - ord('a'))

	for char in secondWord:
		secondNum += str(ord(char) - ord('a'))

	for char in targetWord:
		targetNum += str(ord(char) - ord('a'))

	return int(firstNum) + int(secondNum) == int(targetNum)
```

**Like it ? please upvote !**
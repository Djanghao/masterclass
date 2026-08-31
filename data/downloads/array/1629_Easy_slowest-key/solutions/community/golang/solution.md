# Golang solution

**Author:** nathannaveen
**Votes:** 2
**Link:** [https://leetcode.com/problems/slowest-key/solutions/1236566/](https://leetcode.com/problems/slowest-key/solutions/1236566/)

---

The idea of this solution is pretty simple, so I will let the code explain:

**The Code:**

```
func slowestKey(releaseTimes []int, keysPressed string) byte {
	max := releaseTimes[0]
	letter := keysPressed[0]

	for i := 1; i < len(releaseTimes); i++ {
		difference := releaseTimes[i] - releaseTimes[i-1]
		if difference > max {
			max = difference
			letter = keysPressed[i]
		} else if difference == max && keysPressed[i] > letter {
			max = difference
			letter = keysPressed[i]
		}
	}

	return letter
}
```

**And the Same Thing Except Using A Struct:**

```
type slowest struct {
	maximum int
	letter  byte
}

func slowestKey(releaseTimes []int, keysPressed string) byte {
	maxAndLetter := slowest{maximum: releaseTimes[0], letter: keysPressed[0]}

	for i := 1; i < len(releaseTimes); i++ {
		difference := releaseTimes[i] - releaseTimes[i-1]
		if difference > maxAndLetter.maximum {
			maxAndLetter.maximum = difference
			maxAndLetter.letter = keysPressed[i]
		} else if difference == maxAndLetter.maximum && keysPressed[i] > maxAndLetter.letter {
			maxAndLetter.maximum = difference
			maxAndLetter.letter = keysPressed[i]
		}
	}

	return maxAndLetter.letter
}
```
# Python, Go | Simple solution with explanation | O(N)

**Author:** globaldjs
**Votes:** 6
**Link:** [https://leetcode.com/problems/split-message-based-on-limit/solutions/4674128/](https://leetcode.com/problems/split-message-based-on-limit/solutions/4674128/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Let's consider a scenario where we merge the split string back without excluding the suffixes. Knowing the **original size** of the string and the **number** of its parts, we can calculate the overall size of this combined string.

Example: `"short mess<1/2>age<2/2>"`
\u2022 Original length: 13
\u2022 Number of parts: 2
\u2022 Length of each suffix: 5
\u2022 Total length: 13 + 2 * 5 = 23

Note that `limit * parts >= total_length`. Knowing the original size of the string, limit and total size of the suffixes, it is possible to find out the number of parts
\u2022 Limit: 15
\u2022 `15 * parts >= 13 + parts * 5; parts >= 13 / (15 - 5); parts >= 1.3`
\u2022 Fractions cannot represent parts, so `parts = ceil(1.3) = 2`

# Approach
<!-- Describe your approach to solving the problem. -->

Let's apply it to all possible ranges of the parts (1-10000)
**\u2022 1 <= parts < 10**
total_length = msg_length + parts * 5
limit * parts >= msg_length + parts * 5
parts >= msg_length / (limit - 5)

**\u2022 10 <= parts < 100**
total_length = msg_length + 9 * 6 + (parts - 9) * 7
*Explanation*: 9 parts with "<K/NN>" suffixes AND (total_parts - 9) parts with "<KK/NN>" suffixes.
limit * parts >= msg_length - 9 + parts * 7
parts >= (msg_length - 9) / (limit - 7)

**\u2022 100 <= parts < 1000**
total_length = msg_length + 9 * 7 + 90 * 8 + (parts -  99) * 9
limit * parts >= msg_length - 108 + parts * 9
parts >= (msg_length - 108) / (limit - 9)

**\u2022 1000 <= parts < 10000**
total_length = msg_length + 9 * 8 + 90 * 9 + 900 * 10 + (parts - 999) * 11
limit * parts >= msg_length - 1107 + parts * 11
parts >= (msg_length - 1107) / (limit - 11)

**\u2022 parts = 10000**
total_length = msg_length + 9 * 9 + 90 * 10 + 900 * 11 + 9000 * 12 + 13
limit * parts >= msg_length + 118894
parts >= (msg_length + 118894) / limit

Determining the exact number of parts to split the string require approximation, as the initial result could potentially fall into the next interval.

# Code
```python3 []
import math


class Solution:
    def getNumberOfParts(self, message: str, limit: int) -> int:
        if limit < 6:
            return 0
        length = len(message)
        parts = math.ceil(length / (limit - 5))
        if 10 <= parts < 100:
            parts = math.ceil((length - 9) / (limit - 7)) if limit > 7 else 0
        if 100 <= parts < 1000:
            parts = math.ceil((length - 108) / (limit - 9)) if limit > 9 else 0
        if 1000 <= parts < 10000:
            parts = math.ceil((length - 1107) / (limit - 11)) if limit > 11 else 0
        if parts > 10000:
            parts = math.ceil((length + 118894) / limit)
            if parts > 10000:
                parts = 0
        return parts

    def splitMessage(self, message: str, limit: int) -> List[str]:
        res = []
        start, end = 0, 0
        parts = self.getNumberOfParts(message, limit)
        for i in range(parts):
            suffix = f"<{i+1}/{parts}>"
            end = start + limit - len(suffix)
            res.append(f"{message[start:end]}{suffix}")
            start = end
        return res
```
```Go []
import (
	"fmt"
	"math"
)

func numberOfParts(message string, limit int) int {
	if limit < 6 {
		return 0
	}
	length := len(message)
	parts := int(math.Ceil(float64(length) / float64(limit-5)))
	if parts >= 10 && parts < 100 {
		if limit < 8 {
			return 0
		}
		parts = int(math.Ceil(float64(length-9) / float64(limit-7)))
	}
	if parts >= 100 && parts < 1000 {
		if limit < 10 {
			return 0
		}
		parts = int(math.Ceil(float64(length-108) / float64(limit-9)))
	}
	if parts >= 1000 && parts < 10000 {
		if limit < 12 {
			return 0
		}
		parts = int(math.Ceil(float64(length-1107) / float64(limit-11)))
	}
    if parts > 10000 {
        parts = int(math.Ceil(float64(length + 118894) / float64(limit)))
        if parts > 10000 {
            parts = 0
        }
    }
	return parts
}

func splitMessage(message string, limit int) []string {
	var start int
	var res []string
	parts := numberOfParts(message, limit)
	for i := 0; i < parts; i++ {
		suffix := fmt.Sprintf("<%d/%d>", i+1, parts)
		end := min(start+limit-len(suffix), len(message))
		res = append(res, message[start:end]+suffix)
		start = end
	}
	return res
}
```

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Go solution (Beats 100% by memory, beats 80% by speed)

**Author:** 1001bit
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-towers-i/solutions/5126401/](https://leetcode.com/problems/beautiful-towers-i/solutions/5126401/)

---

# Intuition
iterate over each height as peak and find biggest answer of all them

# Approach
the same as intuition

# Complexity
- Time complexity:
$$O(n^2)$$ 

- Space complexity:
$$I don't know$$ 

# Code
```
func getTowerSize(peakId int, heights []int) int {
	heightsSum := heights[peakId]

	// right
	lowest := heights[peakId]
	for i := peakId + 1; i < len(heights); i++ {
		heightsSum += heights[i]

		if lowest > heights[i] {
			lowest = heights[i]
		} else if heights[i] > lowest {
			heightsSum -= heights[i] - lowest
		}
	}

	// left
	lowest = heights[peakId]
	for i := peakId - 1; i >= 0; i-- {
		heightsSum += heights[i]

		if lowest > heights[i] {
			lowest = heights[i]
		} else if heights[i] > lowest {
			heightsSum -= heights[i] - lowest
		}
	}

	return heightsSum
}

func maximumSumOfHeights(heights []int) int64 {
	biggest := 0
	for i := range heights {
		biggest = max(getTowerSize(i, heights), biggest)
	}

	return int64(biggest)
}
```
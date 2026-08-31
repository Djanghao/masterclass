# Intuition

**Author:** singh_avi
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/5950779/](https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/5950779/)

---

# Intuition
The problem requires the use of prefix sums. The key idea is as follows:

1. For a num at index i, it will stop contributing to the score after (i+1-num+n)%n rotations.
2. For a num at index i, it will start contributing to the score after (i+1)%n rotations. 

In case the element already contributes to the score, we increment changes[0].

This way we keep a track of potential scores at each rotation of the array. The score at rotation k is the sum of all the scores from 0 to index k in the change array. We find the maximum score and update the num rotations required accordingly.

 Rotate by left as question says

        rotate=>0= [2,3,1,4,0] => [0, 0, 1, 0, 1]
        idx      = [0,1,2,3,4]

        rotate=>1= [3,1,4,0,2] => [0, 1, 0, 1, 1]
        idx      = [0,1,2,3,4]

        rotate=>2= [1,4,0,2,3] => [0, 0, 1, 1, 1]
        idx      = [0,1,2,3,4]

        rotate=>3= [4,0,2,3,1] => [0, 1, 1, 1, 1]
        idx      = [0,1,2,3,4]

        rotate=>4= [0,2,3,1,4] => [1, 0, 0, 1, 1]
        idx      = [0,1,2,3,4]

        number                            = 2 3 1 4 0
        starts contibuting after rotation = 1 2 3 4 4
        ends contibuting  at rotation     = 4 4 2 0 0

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```golang []
func bestRotation(nums []int) int {
   n := len(nums)

	changeArr := make([]int, n)

	for i := 0; i < n; i++ {
		num := nums[i]

		losePointAt := (i + 1 - num + n) % n
		gainPointAt := (i + 1) % n

		// fmt.Printf("num is %v, i is %v \
", num, i)
		// fmt.Printf("losePointAt is %v, gainPointAt is %v \
", losePointAt, gainPointAt)

		// fmt.Printf("=== \
")

		changeArr[losePointAt]--
		changeArr[gainPointAt]++

		if losePointAt <= gainPointAt {
			changeArr[0]++
		}
	}

	// fmt.Printf("changeArr is %v \
", changeArr)

	index := 0

	currentScore := 0
	maxScore := math.MinInt

	for i := 0; i < n; i++ {
		currentScore += changeArr[i]
		if currentScore > maxScore {
			maxScore = currentScore
			index = i
		}
	}

	return index 
}
```
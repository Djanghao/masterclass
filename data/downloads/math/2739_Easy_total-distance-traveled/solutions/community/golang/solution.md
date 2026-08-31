# Go

**Author:** tony5778
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-distance-traveled/solutions/5879071/](https://leetcode.com/problems/total-distance-traveled/solutions/5879071/)

---


Easy straightforward solution

# Code
```golang []
func distanceTraveled(mainTank int, additionalTank int) int {
	distance := 10 * mainTank

	for mainTank >= 5 {
		if additionalTank != 0 {
			distance += 10
			additionalTank--
			mainTank++
		}
		mainTank -= 5
	}

	return distance
}
```
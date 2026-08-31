# Teemo Attacking | Swift

**Author:** meet02
**Votes:** 2
**Link:** [https://leetcode.com/problems/teemo-attacking/solutions/865259/](https://leetcode.com/problems/teemo-attacking/solutions/865259/)

---

Swift Solution:

    func findPoisonedDuration(_ timeSeries: [Int], _ duration: Int) -> Int {
		guard !timeSeries.isEmpty else { return 0 }
		var result = duration
		for i in 1..<timeSeries.count {
			result += min((timeSeries[i] - timeSeries[i-1]), duration)
		}
		return result
	}
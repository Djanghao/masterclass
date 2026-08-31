# Easy 2437

**Author:** Farruhbek
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-clock-times/solutions/5387692/](https://leetcode.com/problems/number-of-valid-clock-times/solutions/5387692/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func countTime(time string) int {
	count := 0
	for hour := 0; hour < 24; hour++ {
		for minute := 0; minute < 60; minute++ {
			hourHigh, hourLow := hour/10, hour%10
			minuteHigh, minuteLow := minute/10, minute%10
			if time[0] != '?' && time[0] != byte(hourHigh +'0') {
				continue
			}
			if time[1] != '?' && time[1] != byte(hourLow +'0') {
				continue
			}
			if time[3] != '?' && time[3] != byte(minuteHigh +'0') {
				continue
			}
			if time[4] != '?' && time[4] != byte(minuteLow +'0') {
				continue
			}
			count++
		}
	}
	return count
}
```
# [Swift] Accepted solution ✅

**Author:** tarantuL1k
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/5027561/](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/5027561/)

---



# Code
```
class Solution {
func shortestBeautifulSubstring(_ s: String, _ k: Int) -> String {
	guard s.contains("1") && k > 0 else { return "" }
	let sArray = Array(s)
	var ans = s
	var queue: [Int] = []

	for (i, char) in sArray.enumerated() where char == "1" {
		queue.append(i)
	}

	if queue.count < k { return "" }

	while queue.count >= k, let firstIndex = queue.first {
		let curr = String(sArray[firstIndex...queue[k-1]])
		if Double(curr)! <= Double(ans)! {
			ans = curr
		}
		queue.removeFirst()
	}
	return ans
}
}
```
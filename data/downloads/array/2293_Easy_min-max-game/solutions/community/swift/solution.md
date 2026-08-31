# Min Max Swift Solution

**Author:** p0nchSalcido
**Votes:** 0
**Link:** [https://leetcode.com/problems/min-max-game/solutions/5102746/](https://leetcode.com/problems/min-max-game/solutions/5102746/)

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
class Solution {
    func minMaxGame(_ nums: [Int]) -> Int {
    var results = nums
    while results.count > 1 {
        var matches = getMatches(results)
        var matchResult = getMatchesResult(matches)
        results = matchResult
    }
  return results[0]
}

func getMatches(_ nums: [Int]) -> [(Int,Int)] {
  var matches: [(Int,Int)] = []
  var index = 0
  while index < nums.count {
    matches.append((nums[index],nums[(index + 1)]))
    index += 2
  }
  return matches
}

func getMatchesResult(_ matches: [(Int, Int)]) -> [Int] {
  var results: [Int] = []
  for (index, match) in matches.enumerated() {
    if index % 2 == 0 {
      results.append(min(match.0, match.1))
    } else {
      results.append(max(match.0, match.1))
    }
  }
  return results
}
}
```
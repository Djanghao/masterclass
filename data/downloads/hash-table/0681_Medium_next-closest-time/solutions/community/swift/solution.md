# Easy Swift Solution with Time Complexcity O(1) and Space Complexity O(1)

**Author:** debashishdash03
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-closest-time/solutions/5806389/](https://leetcode.com/problems/next-closest-time/solutions/5806389/)

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
```swift []
class Solution {
    func nextClosestTime(_ time: String) -> String {
        // Convert time to minutes since 00:00
        let start = (60 * Int(time.prefix(2))!) + Int(time.suffix(2))!
        var ans = start
        var elapsed = 24 * 60  // Total minutes in a day
        var allowed: Set<Int> = Set()

        // Add each digit from the time string to the allowed set
        for char in time where char != ":" {
            allowed.insert(Int(String(char))!)
        }

        // Iterate through all possible hours and minutes using allowed digits
        for h1 in allowed {
            for h2 in allowed where h1 * 10 + h2 < 24 {
                for m1 in allowed {
                    for m2 in allowed where m1 * 10 + m2 < 60 {
                        let cur = 60 * (h1 * 10 + h2) + (m1 * 10 + m2)
                        let candElapsed = (cur - start + 24 * 60) % (24 * 60)
                        if candElapsed > 0 && candElapsed < elapsed {
                            ans = cur
                            elapsed = candElapsed
                        }
                    }
                }
            }
        }

        // Convert result back to HH:MM format
        return String(format: "%02d:%02d", ans / 60, ans % 60)
    }
}
```
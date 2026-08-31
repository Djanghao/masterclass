# Easy Approach

**Author:** Rakesh3993
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/5481854/](https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/5481854/)

---

# Intuition
Easy To Think and Implement

# Approach
Thought from back instead of thinking of adding and doubling, thought making it half if given target is even and having maxDouble greater than 0 else start subtracting the target by 1.

# Complexity
- Time complexity:
O(count)

- Space complexity:
O(1)

# Code
```
class Solution {
    func minMoves(_ target: Int, _ maxDoubles: Int) -> Int {
        var count = 0
        var target = target
        var maxDoubles = maxDoubles
        while target > 1 {
            if target % 2 == 0 && maxDoubles > 0 {
                target = target / 2
                maxDoubles -= 1;
            }else{
                target = target - 1
                if maxDoubles == 0 {
                    count += target
                    break
                }
            }
            count += 1
        }
        return count
    }
}
```
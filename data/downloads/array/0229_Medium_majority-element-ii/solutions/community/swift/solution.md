# Swift | Boyer-Moore Voting with Generalized Partition Count

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/majority-element-ii/solutions/4135302/](https://leetcode.com/problems/majority-element-ii/solutions/4135302/)

---

**Boyer-Moore Voting (accepted answer)**
```
class Solution {
    func majorityElement(_ nums: [Int], _ partitions:Int = 3) -> [Int] {
        guard partitions > 1 else { return [] }
        var candidates = Array(repeating: Int.min, count:partitions-1)
        var counts = Array(repeating: 0, count:partitions-1)
        outer:
        for n in nums {
            for p in candidates.indices where candidates[p] == n {
                counts[p] += 1
                continue outer
            }
            for p in counts.indices where counts[p] == 0 {
                candidates[p] = n
                counts[p] = 1
                continue outer
            }
            for p in counts.indices {
                counts[p] -= 1
            }            
        }

        counts = Array(repeating: 0, count:partitions-1)
        var result = [Int]()
        for n in nums {
            for p in 0..<partitions-1 where counts[p] >= 0 && candidates[p] == n {
                counts[p] += 1
                if counts[p] > nums.count/partitions {
                    result.append(n)
                    counts[p] = -1
                }
            }
        }
        return result
    }
}
```
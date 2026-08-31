# [Swift] sorting | check all possibilities | clear solution

**Author:** builderdg
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4890492/](https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4890492/)

---

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minimumDeletions(_ word: String, _ k: Int) -> Int {
        var frequencyCount = [Character: Int]()

        word.forEach { frequencyCount[$0, default: 0] += 1 }
        let sortedFreq = frequencyCount.values.sorted(by: <)
        
        let minNo = sortedFreq[0]
        let maxNo = sortedFreq[sortedFreq.count-1]
        //print(sortedFreq)

        var res = Int.max
        for i in 0..<sortedFreq.count {
            var deletion = (0..<i).reduce(0){ $0 + sortedFreq[$1]}
            for f in i..<sortedFreq.count {
                if abs(sortedFreq[f]-sortedFreq[i]) < k { continue }
                deletion += abs(sortedFreq[i]+k-sortedFreq[f])
            }
            //print(deletion)
            res = min(res, deletion)
        }
        return res
    }
}

```
# My Swift solution using dictionary

**Author:** yamironov
**Votes:** 4
**Link:** [https://leetcode.com/problems/random-pick-index/solutions/894311/](https://leetcode.com/problems/random-pick-index/solutions/894311/)

---

My Swift solution using dictionary
```
class Solution {

    private var dict = [Int: [Int]]()

    init(_ nums: [Int]) {
        for i in 0..<nums.count {
            dict[nums[i], default: [Int]()].append(i)
        }
    }
    
    func pick(_ target: Int) -> Int {
        let c = dict[target, default: [Int]()].count
        return dict[target, default: [Int]()][Int.random(in: 0..<c)]
    }
}
```
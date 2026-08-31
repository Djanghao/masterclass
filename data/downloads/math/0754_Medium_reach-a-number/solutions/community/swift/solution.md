# Reach A Number | Swift

**Author:** meet02
**Votes:** 0
**Link:** [https://leetcode.com/problems/reach-a-number/solutions/993216/](https://leetcode.com/problems/reach-a-number/solutions/993216/)

---

Swift solution:

    func reachNumber(_ target: Int) -> Int {
        let target = abs(target)
        var step = 0
        var sum = 0
        while (sum < target) || ((sum - target) % 2 != 0) {
            step += 1
            sum += step
        }
        return step
    }
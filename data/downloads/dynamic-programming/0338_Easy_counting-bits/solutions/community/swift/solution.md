# 48ms Simple Swift solution

**Author:** zhugejunwei
**Votes:** 3
**Link:** [https://leetcode.com/problems/counting-bits/solutions/79703/](https://leetcode.com/problems/counting-bits/solutions/79703/)

---

    func countBits(num: Int) -> [Int] {
    if num == 0 {
        return [0]
    }
    var count = [0,1]
    var i = 2
    while i <= num {
        let n1 = i >> 1
        let n2 = i % 2
        count.append(count[n1] + count[n2])
        i += 1
    }
    return count
    }
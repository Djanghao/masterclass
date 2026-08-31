# ✅ O(n) Runtime Solution

**Author:** eleev
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-upgradable-servers/solutions/5187917/](https://leetcode.com/problems/maximum-number-of-upgradable-servers/solutions/5187917/)

---

# Solution
```
struct Solution {
    @_optimize(speed)
    func maxUpgrades(_ count: [Int], _ upgrade: [Int], _ sell: [Int], _ money: [Int]) -> [Int] {
        var result = [Int](repeating: 0, count: count.count)
        
        for i in count.indices {
            let totalUpgradeCost = count[i] * upgrade[i]
            let initialMoney = money[i]

            if initialMoney >= totalUpgradeCost {
                result[i] = count[i]
                continue
            }
            var remainingCost = Double(totalUpgradeCost - initialMoney)
            let gainPerSale = upgrade[i] + sell[i]

            if gainPerSale <= 0 {
                result[i] = 0
                continue
            }
            let sellRequired = Int(ceil(remainingCost / Double(gainPerSale)))
            result[i] = max(0, count[i] - sellRequired)
        }
        return result
    }
}
```
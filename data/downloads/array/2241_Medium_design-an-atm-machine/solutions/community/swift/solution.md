# [Swift] Clean ✅

**Author:** NicolasCombe5555
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-an-atm-machine/solutions/5047332/](https://leetcode.com/problems/design-an-atm-machine/solutions/5047332/)

---

# Complexity
- Time complexity:
`O(1)`

- Space complexity:
`O(1)`

# Code
```
final class ATM {
    private var bills = [20, 50, 100, 200, 500]
    private var funds = [0, 0, 0, 0, 0]

    func deposit(_ banknotesCount: [Int]) {
        for i in 0...4 {
            funds[i] += banknotesCount[i]
        }
    }
    
    func withdraw(_ amount: Int) -> [Int] {
        var withdrawal = [0, 0, 0, 0, 0]
        var amount = amount

        for index in stride(from: 4, through: 0, by: -1) {
            let bill = bills[index]
            let available = funds[index]

            if amount >= bill {
                let times = amount/bill
                let toWithdraw = min(available, times)
                withdrawal[index] += toWithdraw
                amount -= toWithdraw * bill
            }

            if amount == 0 { break } // early break
        }

        guard amount == 0 else { return [-1] }
        return executeWithdrawal(withdrawal)
    }

    private func executeWithdrawal(_ withdrawal: [Int]) -> [Int] {
        for i in 0...4 {
            funds[i] -= withdrawal[i]
        }
        return withdrawal
    }
}

```
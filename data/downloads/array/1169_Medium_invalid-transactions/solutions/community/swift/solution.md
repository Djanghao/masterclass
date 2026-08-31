# Swift - O(n^2) solution ( clean and self explanatory )

**Author:** osama10
**Votes:** 1
**Link:** [https://leetcode.com/problems/invalid-transactions/solutions/1738471/](https://leetcode.com/problems/invalid-transactions/solutions/1738471/)

---

```
class Solution {
    struct Transaction {
    let name: String
    let time: Int
    let amount: Int
    let city: String
    
    init(_ transaction: String) {
        let transaction = transaction
        .split(separator: ",")
        .map(String.init)
        
        self.name = transaction[0]
        self.time = Int(transaction[1])!
        self.amount = Int(transaction[2])!
        self.city = transaction[3]
    }
    
    func toCSV() -> String {
        [name, "\\(time)", "\\(amount)", city].joined(separator: ",")
    }
}

    func invalidTransactions(_ transactions: [String]) -> [String] {
        let transactions = transactions.map(Transaction.init)

        let transactionMap = transactions.reduce(into: [String: [Transaction]]()) {
            $0[$1.name, default: []].append($1)
        }

        var invalidTransactions = [String]()

        for transaction in transactions {
            if isInValidTransaction(transaction, transactionMap) {
                invalidTransactions.append(transaction.toCSV())
            }
        }

        return invalidTransactions
    }

    func isInValidTransaction(_ transaction: Transaction, _ transactionMap: [String: [Transaction]]) -> Bool {
        guard transaction.amount <= 1000 else { return true }

        for otherTrasaction in transactionMap[transaction.name, default: []] {
            let timeDiff = abs(transaction.time - otherTrasaction.time)
            if timeDiff <= 60 && otherTrasaction.city != transaction.city {
                return true
            }
        }

        return false
    }
}
```
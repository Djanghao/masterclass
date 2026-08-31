# Clean Object Oriented Dart O(n^2)

**Author:** magnito232
**Votes:** 0
**Link:** [https://leetcode.com/problems/invalid-transactions/solutions/4934685/](https://leetcode.com/problems/invalid-transactions/solutions/4934685/)

---


```
class Solution {
  List<String> invalidTransactions(List<String> transactions) {
    final List<String> _invalidTransactions = [];
    final Map<String, List<Transaction>> _transactionsMap = {};
    
    for (String transaction in transactions) {
        final Transaction transactionObject = Transaction(transaction);
        _transactionsMap.putIfAbsent(transactionObject.name, () => []).add(transactionObject);
    }
    
    for (String transaction in transactions) {
        final Transaction transactionObject = Transaction(transaction);
        final List<Transaction> userTransactions = _transactionsMap[transactionObject.name]!;
 
        for (Transaction currentTransaction in userTransactions) {
            if (transactionObject != currentTransaction && transactionObject.invalidTransaction(currentTransaction.city, currentTransaction.time)) {
            _invalidTransactions.add(transaction);
            break;
            }
        }
    }
    
    return _invalidTransactions;
  }
}

class Transaction {
    String name = '';
    int time = 0;
    int amount = 0;
    String city = '';

    Transaction(String transaction) {
        List<String> transactionDetail = transaction.split(',');
        this.name = transactionDetail[0];
        this.time = int.parse(transactionDetail[1]);
        this.amount = int.parse(transactionDetail[2]);
        this.city = transactionDetail[3];
    }

    bool _differentCities(String city, int time) {
        print(' CITY -> ${this.city != city}');
        print(' TIME -> ${(this.time - time).abs() <= 60}');
        return this.city != city && (this.time - time).abs() <= 60;
    }

    bool _invalidAmount() {
        return this.amount > 1000;
    }

    bool invalidTransaction(String city, int time) {
        return _differentCities(city, time) || _invalidAmount();
    }
}
```
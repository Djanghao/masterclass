# Best solution on Dart

**Author:** f1xgun
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-an-atm-machine/solutions/3914153/](https://leetcode.com/problems/design-an-atm-machine/solutions/3914153/)

---

# Code
```
class ATM {
  static List<int> nominals = [20, 50, 100, 200, 500];
  List<int> banknotes = List.generate(nominals.length, (_) => 0);

  ATM() {

  }
  
  void deposit(List<int> banknotesCount) {
    for (int i = 0; i < banknotesCount.length; i++) {
        banknotes[i] += banknotesCount[i];
    }
  }
  
  List<int> withdraw(int amount) {
    int tempAmount = amount;
    List<int> result = List.generate(banknotes.length, (_) => 0);
    for (int i = banknotes.length - 1; i >= 0; i--) {
        result[i] = min(banknotes[i], tempAmount ~/ nominals[i]);
        tempAmount -= result[i] * nominals[i];
    }
    if (tempAmount != 0) return [-1];
    for (int i = 0; i < result.length; i++) {
        banknotes[i] -= result[i];
    }
    return result;
  }
}


/**
 * Your ATM object will be instantiated and called as such:
 * ATM obj = ATM();
 * obj.deposit(banknotesCount);
 * List<int> param2 = obj.withdraw(amount);
 */
```
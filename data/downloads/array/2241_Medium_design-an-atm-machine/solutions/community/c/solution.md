# Check then withdraw

**Author:** votrubac
**Votes:** 78
**Link:** [https://leetcode.com/problems/design-an-atm-machine/solutions/1953722/](https://leetcode.com/problems/design-an-atm-machine/solutions/1953722/)

---

We first try to `take` the amount using available bills. If we can get the exact amount, then we complete the withdraw operation.

**Python 3**
```python
class ATM:
    bank, val = [0] * 5, [20, 50, 100, 200, 500]
    
    def deposit(self, banknotesCount: List[int]) -> None:
        self.bank = [a + b for a, b in zip(self.bank, banknotesCount)]
    
    def withdraw(self, amount: int) -> List[int]:
        take = [0] * 5
        for i in range(4, -1, -1):
            take[i] = min(self.bank[i], amount // self.val[i])
            amount -= take[i] * self.val[i]
        if amount == 0:
            self.bank = [a - b for a, b in zip(self.bank, take)]
        return [-1] if amount else take
```
**C++**
```cpp
class ATM {
public:
    long long bank[5] = {}, val[5] = {20, 50, 100, 200, 500};
    void deposit(vector<int> banknotesCount) {
        for (int i = 0; i < 5; ++i)
            bank[i] += banknotesCount[i];
    }
    vector<int> withdraw(int amount) {
        vector<int> take(5);
        for (int i = 4; i >= 0; --i) {
            take[i] = min(bank[i], amount / val[i]);
            amount -= take[i] * val[i];
        }
        if (amount)
            return { -1 };
        for (int i = 0; i < 5; ++i)
            bank[i] -= take[i];            
        return take;
    }
};
```
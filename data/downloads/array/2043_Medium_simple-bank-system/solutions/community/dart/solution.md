# The simplest DART solution for the easiest medium problem

**Author:** Mohamed_Sadeck
**Votes:** 0
**Link:** [https://leetcode.com/problems/simple-bank-system/solutions/4417140/](https://leetcode.com/problems/simple-bank-system/solutions/4417140/)

---


# Code
```
class Bank {
  List<int> balance=[];
  Bank(List<int> balance) {
    this.balance=balance;
  }
  
  bool transfer(int account1, int account2, int money) {
    if(!checkAccount(account1)||!checkAccount(account2)||balance[account1-1]<money) return false;
    balance[account1-1]-=money;
    balance[account2-1]+=money;
    return true;
  }
  
  bool deposit(int account, int money) {
    if(!checkAccount(account)) return false;
    balance[account-1]+=money;
    return true;
  }
  
  bool withdraw(int account, int money) {
    if(!checkAccount(account)||balance[account-1]<money) return false;
    balance[account-1]-=money;
    return true;
  }
  bool checkAccount(int account){
      return account-1 < balance.length;
  }
}

/**
 * Your Bank object will be instantiated and called as such:
 * Bank obj = Bank(balance);
 * bool param1 = obj.transfer(account1,account2,money);
 * bool param2 = obj.deposit(account,money);
 * bool param3 = obj.withdraw(account,money);
 */
```
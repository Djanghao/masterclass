# Java Solution Using ArrayList||Easy to understand

**Author:** rohan_saxena04
**Votes:** 5
**Link:** [https://leetcode.com/problems/simple-bank-system/solutions/3145743/](https://leetcode.com/problems/simple-bank-system/solutions/3145743/)

---

![upvote.jpeg](./images/0.jpeg)


# Code
```
class Bank {
    List<Long>list=new ArrayList<>();
    public Bank(long[] balance) {
        for(int i=0;i<balance.length;i++){
            list.add(balance[i]);
        }
    }
    
    public boolean transfer(int account1, int account2, long money) {
        if(account1-1<list.size()&&account2-1<list.size()&&list.get(account1-1)>=money){
             long val=list.get(account1-1);
             long res=val-money;
             list.set(account1-1,res);
             list.set(account2-1,list.get(account2-1)+money);
             return true;
        }
        return false;
    }
    
    public boolean deposit(int account, long money) {
        if(account-1<list.size()){
            list.set(account-1,list.get(account-1)+money);
            return true;
        }
        return false;
    }
    
    public boolean withdraw(int account, long money) {
        if(account-1<list.size()&&list.get(account-1)>=money){
            list.set(account-1,list.get(account-1)-money);
            return true;
        }
        return false;
    }
}

/**
 * Your Bank object will be instantiated and called as such:
 * Bank obj = new Bank(balance);
 * boolean param_1 = obj.transfer(account1,account2,money);
 * boolean param_2 = obj.deposit(account,money);
 * boolean param_3 = obj.withdraw(account,money);
 */
```
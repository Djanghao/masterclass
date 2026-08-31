# Ruby solution - 100% 100%

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/simple-bank-system/solutions/2578713/](https://leetcode.com/problems/simple-bank-system/solutions/2578713/)

---

```
class Bank

=begin
    :type balance: Integer[]
=end
  def initialize(balance)
    @balance = balance
    @n = @balance.size
  end


=begin
  :type account1: Integer
  :type account2: Integer
  :type money: Integer
  :rtype: Boolean
=end
  def transfer(account1, account2, money)
    return false if account1 < 1 || account1 > @n
    return false if account2 < 1 || account2 > @n
    account1 -= 1
    account2 -= 1
    return false if @balance[account1] < money
    @balance[account1] -= money
    @balance[account2] += money
    true
  end


=begin
  :type account: Integer
  :type money: Integer
  :rtype: Boolean
=end
  def deposit(account, money)
    return false if account < 1 || account > @n
    account -= 1
    @balance[account] += money
    true
  end


=begin
  :type account: Integer
  :type money: Integer
  :rtype: Boolean
=end
  def withdraw(account, money)
    return false if account < 1 || account > @n
    account -= 1
    return false if @balance[account] < money
    @balance[account] -= money
    true
  end


end

# Your Bank object will be instantiated and called as such:
# obj = Bank.new(balance)
# param_1 = obj.transfer(account1, account2, money)
# param_2 = obj.deposit(account, money)
# param_3 = obj.withdraw(account, money)
# Simple C# Solution

**Author:** DavidLindon
**Votes:** 0
**Link:** [https://leetcode.com/problems/simple-bank-system/solutions/3925868/](https://leetcode.com/problems/simple-bank-system/solutions/3925868/)

---

# Intuition
Create an array to hold accounts and their balances.
Create a method to check if the account exists
Create a method to check if the account has the required funds

# Code
```
public class Bank {
    private long[] _accounts;
	public Bank(long[] balance)
	{
		_accounts = balance;
	}

    private bool AccountExists(int account) => _accounts.Length >= account && account > 0;
    private bool HasFunds(int account, long money) => _accounts[account - 1] >= money;

    public bool Transfer(int account1, int account2, long money)
	{
        if (AccountExists(account1) && AccountExists(account2) && HasFunds(account1, money))
        {
            _accounts[account1 - 1] -= money;
            _accounts[account2 - 1] += money;
            return true;
        }
        return false;
    }

	public bool Deposit(int account, long money)
	{
	    if (AccountExists(account))
		{
		    _accounts[account - 1] += money;
			return true;
		}
		return false;
    }

	public bool Withdraw(int account, long money)
	{
		if (AccountExists(account) && HasFunds(account, money))
		{
			_accounts[account - 1] -= money;
            return true;
        }
	    return false;
	}
}
```
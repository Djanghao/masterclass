# Dictionary, bool[] and list<string> with a Transaction Type. Beats 90% on runtime

**Author:** brenoeng
**Votes:** 2
**Link:** [https://leetcode.com/problems/invalid-transactions/solutions/2964979/](https://leetcode.com/problems/invalid-transactions/solutions/2964979/)

---

# Intuition
First I created a type to make it easier to parse and work with the transaction as an option. Then we have to check the basic requirements: value being bigger than 1000 and if it has the same name, less than or equal 60 minutes of difference and different cities, both transactions being compared should be invalid.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I then created a list if invalid transactions. But to check if a transaction for some specific name has being accounted already, I created the dictionary to have the check in constant time. The dictionary has the string as key, and the transactions of that name in the value. An Array of transactions.

The last problem to fix was the order. Although the exercise says the order doesn't matter, it does because it fails on the tests if it's not in the right order. So, I created an array of booleans that would hold true or false for valid transactions in the exact same position of the original array. In the end I iterated on it, and added each of the invalid ones to the list of string representing invalid transactions.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
Time complexity is $$O(n)$$, but for the very specific edge case where all the transactions are for the same name, would be  $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public IList<string> InvalidTransactions(string[] transactions) {
        bool[] invalid = new bool[transactions.Length];
        List<string> invalidTransactions = new List<string>();
        Dictionary<string, List<Transaction>> dict = new Dictionary<string, List<Transaction>>();
        for (int i = 0; i < transactions.Length; i++)
        {
            var transactionSplit = transactions[i].Split(',');
            var transaction = new Transaction(
                                            transactionSplit[0],
                                            Convert.ToInt32(transactionSplit[1]),
                                            Convert.ToInt32(transactionSplit[2]),
                                            transactionSplit[3], i);

            if (transaction.Amount > 1000)
            {
                invalid[i] = true;
            }

            if (dict.ContainsKey(transaction.Name))
            {
                var storedTransactions = dict[transaction.Name];
                for (int j = storedTransactions.Count - 1; j >= 0; j--)
                {
                    var lastTransaction = dict[transaction.Name][j];
                    if (Math.Abs((int)(transaction?.Time - lastTransaction?.Time).Value) <= 60 && transaction.City != lastTransaction?.City)
                    {
                        invalid[i] = true;
                        invalid[lastTransaction.Order] = true;    
                    }
                }
                dict[transaction.Name].Add(transaction);
            }
            else
            {
                dict.Add(transaction.Name, new List<Transaction>() { transaction });
            }
            invalid[i] = invalid[i] ? true : false;
        }

        for(int i = 0; i < invalid.Length; i++)
        {
            if (invalid[i])
            {
                invalidTransactions.Add(transactions[i]);
            }
        }
        return invalidTransactions.ToArray();
    }
}
public class Transaction
{
    public Transaction(string name, int time, int amount, string city, int order)
    {
        Name = name;
        Time = time;
        Amount = amount;
        City = city;
        Order = order;
    }
    public string Name { get; set; }
    public int Time { get; set; }
    public int Amount { get; set; }
    public string City { get; set; }
    public int Order { get; set; }
}
```
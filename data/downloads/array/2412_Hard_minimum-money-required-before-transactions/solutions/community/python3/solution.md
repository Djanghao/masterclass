# The easiest possible explanation you are looking for

**Author:** shriyansnaik
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-money-required-before-transactions/solutions/2604001/](https://leetcode.com/problems/minimum-money-required-before-transactions/solutions/2604001/)

---

It took me a while to get this through my head. So take your time but make sure you understand this.

**Alse note that this is not the perfect O(N) solution. You can see Lee215 soln for that. This is O(NlogN) solution but this is what was easier for me to understand**

**Now lets start**

1. First, know that there are 2 kinds of transaction, one where you earn more than you spend (good transactions), and one where you earn less than you spend (bad transactions).
2.  In the worst case, you will need to perform all the bad transactions at first. What would be even worse? You will have to perform the worst bad transaction first. What does that mean? It means, the transaction, that gives you the least cashback among all bad transactions.
3.  Now that the bad transactions are over, now we will perform the good transactions. Now what can be the worst case here? It can be that you need to perform the costliest transaction among the good transactions first. But once you have done the costliest transaction, you no longer need to check the further transactions. Why so? Because this is a good transaction. If you  spend say 10$, you are guaranteed to receive a cashback of 10$ or more. And since this was the costliest transaction among the good transaction, you will now have money for the rest of them anyway, so no need to consider them.

**Lets take an example to understand even better**

we are given this transaction array :`[[7,2],[0,10],[5,0],[4,1],[5,8],[5,9]]`
Lets separate the good and bad transactions.

**good transactions** :`[[0,10],[5,8],[5,9]]`
**bad transactions** :`[[7,2],[5,0],[4,1]]`

Now cosider the **bad transactions**:
	Which one among `[[7,2],[5,0],[4,1]]` is the worst transaction you might have to make? The answer to that is `[5,0]`. **Why?** because you are spending 5$ and getting nothing in return. What will be the next worst transaction? It will be `[4,1]` for the same reason. Do you see the **pattern**?
	
We do the transaction with the least amount of cashback first. Because there we need to have our own money and can't rely on cashback. So if we follow this,
**First transaction:** `cur += 5` = 5; `need = max(need,cur)` = 5; `cur -= 0` = 5
**Second transaction:** `cur += 4` = 9; `need = max(need,cur)` = 9; `cur -= 1` = 8  ( **NOTE** the need will first become 9, because we get a cashback only after paying the cost first. So in order to make the first and the second transaction, you need minimum of 9$)
**Third transaction:** `cur += 7` = 15;  `need = max(need,cur)` = 15; `cur -= 2` = 13

**Okay so at this point all the bad transactions are over and everything bad that could have happened has happened... Except one\uD83D\uDE05**
Even though we only have good transactions now, we need to pay the cost for them to recieve the cashback. This is simpler though. We only need to figure out which is the costliest good transaction. **Why?** because once we pay that amount, we know since its a good transaction, we will get atleast the same amount back if not more.

So the ***worst*** **good transaction** is `[5,8] or [5,9]`. `cur += 5` = 18; `need = max(need,cur)` = 18

And we got our answer. We need a minimum of 18$ in order to complete all transaction in any order!

**Let's finally have a look at the code to solidify what I just explained**

```
def minimumMoney(self, transactions: List[List[int]]) -> int:
        
	goodTransactions = [txn for txn in transactions if txn[0] <= txn[1]]
	badTransactions = [txn for txn in transactions if txn[0] > txn[1]]

	badTransactions.sort(key=lambda x: x[1])

	need = 0
	cur_amount = 0

	for cost,cashback in badTransactions:
		cur_amount += cost
		need = max(need,cur_amount)
		cur_amount -= cashback

	if goodTransactions:
		costliest_good_transaction = max(goodTransactions, key=lambda x: x[0])
		cur_amount += costliest_good_transaction[0]  
		need = max(need, cur_amount)

	return need
```		

***If this post was helpful at all, pls do upvote : )***
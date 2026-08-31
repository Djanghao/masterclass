# Scala solution, beats 100%

**Author:** yangnirinny
**Votes:** 0
**Link:** [https://leetcode.com/problems/invalid-transactions/solutions/4214665/](https://leetcode.com/problems/invalid-transactions/solutions/4214665/)

---

# Approach
1. use hashmap for all transactions with name as key, a list of `Transaction` belong to this name as value.
2. iterate the hashmap for each transaction and add to answer list if it meets the invalid constraints.

Note: the problem allows duplicate transactions and invalid intervals should be `<=` 60. I wasn't able to pass one of the test cases because of this `=`. It is not clear in the description.

# Complexity
- Time complexity: The overall time complexity is 
`O(n)+O(n\xD7m)=O(n\xD7m)` where `n` is the number of transactions and `m` is the average number of transactions per name. With the worst-case scenario being `O(n^2)` if all transactions are from a single person.


<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.collection.mutable
import scala.collection.mutable.ListBuffer

case class Transaction(name: String, time: Int, amount: Int, city: String) {
  override def toString: String = s"$name,${time.toString},${amount.toString},$city"
}

object Solution {

  def invalidTransactions(transactions: Array[String]): List[String] = {
    val ans = mutable.ListBuffer[String]()
    val hash = new mutable.HashMap[String, ListBuffer[Transaction]]()

    transactions.foreach { t =>
      val split = t.split(",")
      val transaction = Transaction(split(0), split(1).toInt, split(2).toInt, split(3))

      val transactionsForName = hash.getOrElseUpdate(transaction.name, ListBuffer())
      transactionsForName += transaction
    }

    hash.values.foreach { transactionsForName =>
      transactionsForName.filter { current =>
        current.amount > 1000 || transactionsForName.exists(t => 
          t.city != current.city && Math.abs(t.time - current.time) <= 60
        )
      }.foreach { invalidTransaction =>
        ans += invalidTransaction.toString
      }
    }

    ans.toList
  }
}

```
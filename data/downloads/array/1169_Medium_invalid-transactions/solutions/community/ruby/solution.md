# Ruby solution with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/invalid-transactions/solutions/3582917/](https://leetcode.com/problems/invalid-transactions/solutions/3582917/)

---

# Intuition
I don't want to compare every possible pair of transactions  A queue lets me only compare transactions within 60 minutes of each other.

# Approach
1. Convert data to array.
2. Sort by time.
3. Create a queue and a set of suspicious transactions.
4. Iterate through the transactions.  For each transaction:
    - If it's over 1000, add it to the set.
    - Put it in the queue, then remove everything from the queue that was more than an hour before.  (Since transactions are sorted, we don't need to compare those trancactions ever again.)
    - Compare it to each element in the queue.  If any have the same name and a different city, add *both* transactions to sus.  (Note that we have to compare against the queue even if the current transaction is above 1,000, because it could make another transaction also suspicious.)
5. Return the set of suspicious transactions after converting them into strings.

# Complexity
- Time complexity:
$$O(n * k)$$, where *k* is the size of the largest group of transactions that are all within 60 minutes of each other.  (Note that this is still $$O(n^2)$$ in the worst case, but much better in the typical case.)
You could further improve this solution if you group transactions by name and sort/do queues for each name...although it would *still* be $$O(n^2)$$ in the worst case (all transactions by the same person within the same hour).

- Space complexity:
$$O(n)$$

# Code
```
def invalid_transactions(transactions)
    transactions.map! { |transaction| transaction.split(',') }
    transactions.sort_by! { |transaction| transaction[1].to_i }
    queue = []
    sus = Set[]

    transactions.each_with_index do |transaction,i|
        sus.add(transaction+[i]) if transaction[2].to_i > 1000

        queue << transaction+[i]
        while queue[0][1].to_i + 60 < queue[-1][1].to_i
            queue.shift
        end

        queue.each do |el|
            if el[0] == transaction[0] && transaction[3] != el[3]
                sus.add(transaction+[i])
                sus.add(el)
            end
        end
    end

    sus.map { |ele| ele[0..3].join(',')}
end
```
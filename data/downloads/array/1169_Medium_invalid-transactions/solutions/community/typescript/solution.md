# Brute force 😢

**Author:** weakhero
**Votes:** 0
**Link:** [https://leetcode.com/problems/invalid-transactions/solutions/4764794/](https://leetcode.com/problems/invalid-transactions/solutions/4764794/)

---

o(n^2)

# Code
```
type Transaction = {
    name: string;
    time: number;
    amount: number;
    city: string;
    index: number;

}

function invalidTransactions(transactions: string[]): string[] {
    // o(n) space
    const formatted: Transaction[] = transactions.map((transaction, idx) => {
        const split = transaction.split(',');
        return {
            name: split[0],
            time: Number(split[1]),
            amount: Number(split[2]),
            city: split[3],
            index: idx
        }
    });

    const map = new Map<string, Transaction[]>();
    for (const transaction of formatted) {
        const found = map.get(transaction.name);
        if (found) {
            found.push(transaction);
        } else {
            map.set(transaction.name, [transaction])
        }
    };

    const result: string[] = [];

    for (const [name, trans] of map) {
        for (let i = 0; i < trans.length; i++) {
            if (isInvalidTransaction(trans[i], trans)) {
                result.push(transactions[trans[i].index])
            }
        }
    }

    return result;
};

// Check if input transaction is invalid
function isInvalidTransaction(transaction: Transaction, transactions: Transaction[]) {
    if (transaction.amount > 1000) return true

    for (let i = 0; i < transactions.length; i++) {
        // if identical, skip
        if (transactions[i].index === transaction.index) continue;
        if (transaction.city !== transactions[i].city && Math.abs(transaction.time - transactions[i].time) <= 60) return true;
    };

    return false;
}

```
# Beats 100%

**Author:** user4861rB
**Votes:** 0
**Link:** [https://leetcode.com/problems/invalid-transactions/solutions/4201000/](https://leetcode.com/problems/invalid-transactions/solutions/4201000/)

---


# Code
```
class Solution {

    /**
     * @param String[] $transactions
     * @return String[]
     */
    function invalidTransactions($transactions) {
        $invalids = [];
        $orders = [];
        foreach($transactions as $ind => $txn) {
            [$name, $time, $amount, $city] = \\explode(',', $txn);

            if ($amount > 1000) {
                $invalids[$ind] = $txn;
            }

            foreach ($orders[$name] ?? [] as $order) {
                if ($order['city'] !== $city && \\abs($order['time'] - $time) < 61) {
                    $invalids[$order['id']] = $transactions[$order['id']];
                    $invalids[$ind] = $txn;
                }
            }


            $orders[$name][] = ['id' => $ind, 'time' => $time, 'city' => $city];
        }

        return $invalids;
    }
}
```
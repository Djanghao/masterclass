# 2xBFS

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-amount-after-two-days-of-conversions/solutions/6192702/](https://leetcode.com/problems/maximize-amount-after-two-days-of-conversions/solutions/6192702/)

---

```
class Solution:
    def maxAmount(self, initialCurrency: str, pairs1: List[List[str]], rates1: List[float], pairs2: List[List[str]], rates2: List[float]) -> float:
        def get_rates_for_day(day_rates, pairs, rates):
            adj_list = defaultdict(list)
            for (u,v),w in zip(pairs, rates):
                adj_list[u].append((v, w))
                adj_list[v].append((u, 1 / w))
            queue = deque([(currency,quantity) for currency,quantity in day_rates.items()])
            while queue:
                cur, quantity = queue.popleft()
                for nei_cur, w in adj_list[cur]:
                    if quantity * w > day_rates[nei_cur]:
                        day_rates[nei_cur] = quantity * w
                        queue.append((nei_cur, day_rates[nei_cur]))
            return day_rates
        
        day_rates = defaultdict(float)
        day_rates[initialCurrency] = 1.0
        day_rates = get_rates_for_day(day_rates, pairs1, rates1)
        return get_rates_for_day(day_rates, pairs2, rates2)[initialCurrency]

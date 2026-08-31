# Ruby solution with Memory Usage less than 100.00%

**Author:** divyad25
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/363002/](https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/363002/)

---

```
# @param {Integer[]} a
# @param {Integer[][]} queries
# @return {Integer[]}
def sum_even_after_queries(a, queries)
    output = []
    sum_of_evens = 0
    a.each { |n|
        sum_of_evens += n if n%2 == 0
    }
    queries.each { |q|
        val, i = q
        init_val = a[i]
        a[i] += val
        curr_val = a[i]
        
        sum_of_evens -= init_val if init_val%2 == 0
        sum_of_evens += curr_val if curr_val%2 == 0
        output << sum_of_evens
    }
    output
end
```
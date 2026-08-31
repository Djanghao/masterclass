# Ruby: sorting + priority queue

**Author:** lacrosse
**Votes:** 1
**Link:** [https://leetcode.com/problems/ipo/solutions/3220212/](https://leetcode.com/problems/ipo/solutions/3220212/)

---

# Code

```ruby []
def bs_insert(a, item) =
  a.insert(a.bsearch_index { item <= _1 } || a.size, item)

def find_maximized_capital(k, w, profits, costs)
  tasks = costs.zip(profits).sort
  sorted_profits = []

  k.times.reduce(w) do |capital, _|
    while tasks[0] && capital >= tasks[0][0]
      bs_insert(sorted_profits, tasks.shift[1])
    end

    capital + (sorted_profits.pop || 0)
  end
end
```

# Time complexity

$$\\mathcal{O}(n \\log n)$$

# Space complexity

$$\\mathcal{O}(n)$$
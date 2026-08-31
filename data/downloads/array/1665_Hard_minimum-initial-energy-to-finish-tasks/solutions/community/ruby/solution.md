# [Ruby] O(N * log(N)) Sort array in optimal way and calculate result

**Author:** shhavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/944574/](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/944574/)

---

```ruby
def minimum_effort(tasks)
  # Energy spent on all tasks (sum actual).
  spent = tasks.map(&:first).reduce(:+)

  # Optimal order to perform tasks starting from MAX(minimum - actual)
  # Sort tasks by (minimum - actual) descending.
  tasks.sort_by! { |a, m| a - m }

  energy = spent
  # Minimun energy that need to add to have left energy >= minimum for each i
  added = 0
  tasks.each do |actual, minimum|
    if energy < minimum
      diff = minimum - energy
      energy += diff
      added += diff
    end
    energy -= actual
  end

  return spent + added
end
```

We can also calculate spent and requred energy (to start all tasks) in a single loop:

```ruby
def minimum_effort(tasks)
  # Optimal order to perform tasks starting from MAX(minimum - actual)
  # Sort tasks by (minimum - actual) descending.
  tasks.sort_by! { |a, m| a - m }

  cur = 0 # current energy
  need = 0
  tasks.each do |actual, minimum|
    if cur < minimum
      need += minimum - cur # amount that is added to `cur`
      cur = minimum
    end
    cur -= actual
  end

  return need
end
```
# Ruby, Stack

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/exclusive-time-of-functions/solutions/5334250/](https://leetcode.com/problems/exclusive-time-of-functions/solutions/5334250/)

---

# Code
```
def exclusive_time(n, logs)
  logs = logs.map { |tuple| tuple.split(':') }.map { |one, two, three| [one.to_i, two, three.to_i]}

  results = Array.new(n, 0)

  stack = []
  logs.each do |id, status, timestamp|
    if status == 'start'
      stack.push([id, timestamp])
    else
      previous_id, previous_timestamp = stack.pop

      duration = timestamp - previous_timestamp + 1
      results[previous_id] += duration
      if !stack.empty?
        top = stack[-1][0]
        results[top] -= duration
      end
    end
  end

  results
end
```
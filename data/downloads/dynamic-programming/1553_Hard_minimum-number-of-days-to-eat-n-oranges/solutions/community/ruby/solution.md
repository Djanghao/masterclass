# Ruby BFS with Memo

**Author:** kwekekkeeka
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/4261946/](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/4261946/)

---

> BFS should find the first path that gets to 0
> > create a queue
> > add all possible options to the queue as [n, days]
> > return when reaching 0 oranges
> 
> optimization: Since it's a queue, you can skip n's that have already
> been visited, because they will always have larger day and never    
> will finish
```
def min_days(n)
 
  queue = [[n, 0]]
  mem = {}
  while queue.any?
    oranges, days = queue.shift
    next if mem[oranges]
    mem[oranges] = true
    if oranges == 0
      return days
    end
    if oranges % 3 == 0
      queue << [oranges / 3 , days + 1]
    end
    if oranges % 2 == 0
      queue << [oranges / 2, days + 1]
    end
    queue << [oranges - 1, days + 1]
  end
end
```

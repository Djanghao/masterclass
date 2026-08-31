# DFS & BFS | Ruby

**Author:** piyushsawaria
**Votes:** 0
**Link:** [https://leetcode.com/problems/employee-importance/solutions/1039863/](https://leetcode.com/problems/employee-importance/solutions/1039863/)

---

```
BFS
def get_importance(employees, id)
  ans = 0
  manager = employees.find { |emp| emp.id == id }
  queue = [manager.subordinates]
  ans = manager.importance
  while !queue.empty?
    curr = queue.shift
    curr.each do |id|
      emp = employees.find { |e| e.id == id }
      ans += emp.importance
      queue.push(emp.subordinates) unless emp.subordinates.empty?
    end
  end
  ans
end
```
```
DFS
def get_importance(employees, id, ans = 0)
  manager = employees.find { |emp| emp.id == id }
  ans = manager.importance
  manager.subordinates.each do |sub|
    ans += get_importance(employees, sub, ans)
  end
  ans
end

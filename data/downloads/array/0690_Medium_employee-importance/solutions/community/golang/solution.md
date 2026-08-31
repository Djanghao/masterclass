# Detailed intuitive solution depth-first search breadth-first search (py, js, go)

**Author:** usr25
**Votes:** 1
**Link:** [https://leetcode.com/problems/employee-importance/solutions/984697/](https://leetcode.com/problems/employee-importance/solutions/984697/)

---

This is a pretty good question to test your understanding of Depth-First Search and Breadth-First Search. Most people voted down this question I assume because of the input which looks like a list/array but in fact it\u2019s a Class/Object that tripped people up. The writer could\u2019ve done a better job.

Logic:
- Realise that you need to build a hash map to represent a tree / organisation chart. This is done with a huge assumption that there are no managers who have the same subordinates. If there\u2019re managers who have the same subordinates, this will be a graph problem and you\u2019ll need to use a set of seen IDs to traverse the graph.
- Use either depth-first search or breadth-first search to calculate the importance value. 

*It is important to note that the more subordinates an employee has, the more important that employee is therefore the bigger that employee\u2019s ego is. That\u2019s why we need to measure that employee\u2019s ego by calculating that employee\u2019s importance value. Ok, back to business.*

Time: O(n) where n = number of employees because at most we\u2019ll visit all nodes.
Space: 
DFS: O(h) where h = height of tree because at most we need h calls on the call stack. Worst case h = n.
BFS: O(w) where w = width of tree because at most we need w spaces for the queue. Note, here I use Python deque to achieve O(1) operation when I pop left.

Python
```
class Solution:
    
    def getImportance(self, employees, id: int) -> int:
        org_chart = self._make_org_chart_from(employees)
        value = 0
        if id in org_chart:
            value += self._get_importance_value_of(id, org_chart)
        return value
    
    def _make_org_chart_from(self, employees):
        chart = {}
        for employee in employees:
            chart[employee.id] = employee
        return chart
    
    def _get_importance_value_of(self, id, org_chart):
        employee = org_chart[id]
        value = employee.importance
        if len(employee.subordinates) == 0:
            return value
        for subordinate_id in employee.subordinates:
            value += self._get_importance_value_of(subordinate_id, org_chart)
        return value

import collections

class SolutionBFS:
    
    def getImportance(self, employees, id: int) -> int:
        org_chart = self._make_org_chart_from(employees)
        value = 0
        queue = collections.deque()
        queue.append(org_chart[id])
        while len(queue) > 0:
            employee = queue.popleft()
            value += employee.importance
            for subordinate_id in employee.subordinates:
                queue.append(org_chart[subordinate_id])
        return value
    
    def _make_org_chart_from(self, employees):
        chart = {}
        for employee in employees:
            chart[employee.id] = employee
        return chart
  ```

JavaScript
```
var GetImportance = function(employees, id) {
    const orgChart = makeOrgChartFrom(employees);
    let value = 0;
    if (orgChart.has(id)) {
        value += getImportanceValueOf(id, orgChart);
    }
    return value;
};

function makeOrgChartFrom(employees) {
    const chart = new Map();
    for (const employee of employees) {
        chart.set(employee.id, employee)
    }
    return chart;
}

function getImportanceValueOf(id, orgChart) {
    const employee = orgChart.get(id);
    let value = employee.importance;
    if (employee.subordinates.length === 0) {
        return value;
    }
    for (const subordinateID of employee.subordinates) {
        value += getImportanceValueOf(subordinateID, orgChart);
    }
    return value;
}
```

GoLang
```
func getImportance(employees []*Employee, id int) int {
    orgChart := makeOrgChartFrom(employees)
    value := 0
    if _, ok := orgChart[id]; ok {
        value += getImportanceValueOf(id, orgChart)
    }
    return value
}

func makeOrgChartFrom(employees []*Employee) map[int]*Employee {
    chart := make(map[int]*Employee)
    for _, employee := range employees {
        chart[employee.Id] = employee
    }
    return chart
}

func getImportanceValueOf(id int, orgChart map[int]*Employee) int {
    employee := orgChart[id]
    value := employee.Importance
    if len(employee.Subordinates) == 0 {
        return value
    }
    for _, subordinateID := range employee.Subordinates {
        value += getImportanceValueOf(subordinateID, orgChart)
    }
    return value
}
```
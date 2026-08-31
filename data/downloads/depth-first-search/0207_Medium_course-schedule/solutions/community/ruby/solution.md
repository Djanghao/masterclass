# Simple ruby solution using Topological sort with explanation

**Author:** divyad25
**Votes:** 4
**Link:** [https://leetcode.com/problems/course-schedule/solutions/575962/](https://leetcode.com/problems/course-schedule/solutions/575962/)

---

```
def can_finish(num_courses, prerequisites)
  adj_list = {}
  queue = []
  indegree = {}

  # Initialize adjacency list and indegree
  (0...num_courses).each { |i|
    adj_list[i] = []
    indegree[i] = 0
  }

  # Construct adjacency list and calculate indegree
  prerequisites.each { |nodes|
    adj_list[nodes[1]] << nodes[0]
    indegree[nodes[0]] += 1
  }

  # Put the nodes which have indegree zero to the queue
  indegree.each { |node, count|
    queue << node if count == 0
  }

  while(queue.any?)
    node = queue.shift
    num_courses -= 1
    (adj_list[node] || []).each { |adj|
      indegree[adj] -= 1
      queue << adj if indegree[adj] == 0
    }
  end
  num_courses == 0
end
```
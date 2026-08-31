# 🥰 Javascript topological sort beats 95% and passes all test cases

**Author:** dsagidskoi0c
**Votes:** 5
**Link:** [https://leetcode.com/problems/sequence-reconstruction/solutions/965089/](https://leetcode.com/problems/sequence-reconstruction/solutions/965089/)

---

```
/**
const sequenceReconstruction = function(org, seqs) {
  if (seqs.length === 0) {
    return false
  }

  const indegrees = {}
  const graph = {}

  // Integers in org range from 1... n
  for (let i = 1; i <= org.length; i++) {
    graph[i] = []
    indegrees[i] = 0
  }

  for (const seq of seqs) {
    // Can return early if org is not a superset of all seqs
    for (const num of seq) {
      if (!graph[num]) {
        return false
      }
    }

    // Create an edge between each pair of nodes in sequence
    for (let i = 1; i < seq.length; i++) {
      const first = seq[i - 1]
      const second = seq[i]

      graph[first].push(second)
      indegrees[second] += 1
    }
  }

  const queue = []
  let count = 0

  for (const node in indegrees) {
    if (indegrees[node] === 0) {
      queue.push(node)
    }
  }

  while (queue.length > 0) {
    // If we have multiple nodes with 0 indegree it means
    // the sequence is ambiguous and multiple can be reconstructed
    if (queue.length > 1) {
      return false
    }

    // The topological ordering must match the org sequence
    if (parseInt(queue[0]) !== org[count]) {
      return false
    }

    const current = queue.shift()
    count += 1

    for (const node of graph[current]) {
      indegrees[node] -= 1

      if (indegrees[node] === 0) {
        queue.push(node)
      }
    }
  }

  return count === org.length
}
```

See https://www.youtube.com/watch?v=wggaoezAR34 for reference


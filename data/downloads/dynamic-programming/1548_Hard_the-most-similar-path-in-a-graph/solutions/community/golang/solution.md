# [Go] [Golang] [BFS] [Priority Queue] [A* algorithm]

**Author:** nannanav
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/4315329/](https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/4315329/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Use a Priority Queue to store paths and perform use it to perform directed BFS on the graph (A star algorithm). Have a seen-map to avoid pushing duplicates to the priority queue. The only values that matter for the seen-map are previous node, difference with target and length of current path. 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func mostSimilar(n int, roads [][]int, names []string, targetPath []string) []int {
  //Create reverse mapping from target node's index to hashset
  reverseNames := make(map[string]map[int]struct{}, len(names))
  for i, name := range names {
    if reverseNames[name] == nil {
      reverseNames[name] = make(map[int]struct{})
    }
    reverseNames[name][i] = struct{}{}
  }

  targetNodes := make([]map[int]struct{}, len(targetPath))
  for i, nodeName := range targetPath {
    targetNodes[i] = reverseNames[nodeName]
  }

  //Create adjacency list for the graph
  adjacencyList := make([][]int, n)
  for _, road := range roads {
    adjacencyList[road[0]] = append(adjacencyList[road[0]], road[1])
    adjacencyList[road[1]] = append(adjacencyList[road[1]], road[0])
  }

  //a function to compare whether a node matches with that of the target at a particular index
  compareNode := func(targetNodeIndex, node int) bool {
    _, exists := targetNodes[targetNodeIndex][node]
    return exists
  }

  //seenMap is used to eliminate duplicates
  seenMap := make(map[QueueKey]struct{})

  //Directed BFS with priority Queue
  Q := make(Queue, 0, 16)
  for i := 0; i < n; i++ {
    qo := QueueObj{Path: []int{i}}
    if !compareNode(0, i) {
      qo.diff = 1
    }
    qo.Push(&Q, seenMap)
  }

  for {
    qo := heap.Pop(&Q).(QueueObj)
    if len(qo.Path) == len(targetPath) {
      return qo.Path
    }
    l := len(qo.Path)
    for _, node := range adjacencyList[qo.Path[l-1]] {
      arr := make([]int, l, l+1)
      copy(arr, qo.Path) //arrays are passed by reference so use copy
      newQo := QueueObj{Path: append(arr, node), diff: qo.diff}
      if !compareNode(l, node) {
        newQo.diff++
      }
      // heap.Push(&Q, newQo)
      newQo.Push(&Q, seenMap)
    }
  }
}

//Hash key for the seenMap
type QueueKey struct {
  latestNode, pathLen, diff int
}

type QueueObj struct {
  Path []int
  diff int
}

//remove duplicates and push the rest into the queue
func (qo QueueObj) Push(Q *Queue, m map[QueueKey]struct{}) {
  qk := QueueKey{qo.Path[len(qo.Path)-1], len(qo.Path), qo.diff}
  if _, exists := m[qk]; !exists {
    m[qk] = struct{}{}
    heap.Push(Q, qo)
  }
}

type Queue []QueueObj

func (Q Queue) Len() int {
  return len(Q)
}

func (Q Queue) Less(i, j int) (result bool) {
  if Q[i].diff == Q[j].diff {
    result = len(Q[i].Path) > len(Q[j].Path)
  } else {
    result = Q[i].diff < Q[j].diff
  }
  return
}

func (Q Queue) Swap(i, j int) {
  (Q)[i], (Q)[j] = (Q)[j], (Q)[i]
}

func (Q *Queue) Push(x any) {
  (*Q) = append(*Q, x.(QueueObj))
}

func (Q *Queue) Pop() (any) {
  var x any
  (*Q), x = (*Q)[:len(*Q)-1], (*Q)[len(*Q)-1]
  return x
}

```
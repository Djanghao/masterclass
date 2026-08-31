# Databricks: solution with dynamic adding of levels in Go.

**Author:** ilya-pimenov
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-skiplist/solutions/2774869/](https://leetcode.com/problems/design-skiplist/solutions/2774869/)

---

# Intuition

We want to be able to create levels on demand and they need to grow out

So on add we will extend array of grown levels out and we need to keep all the elements that we went down on while creating this elemenet, to update their next value.

On search we go from the top levels into the lower levels.

On erase it becomes a bit more interesting and it could be nice to have back links, then we could go through them and connect the elements.

# Approach

My main insight was to grow the skiplist "down", instead of up, as we promote nodes.

What also makes the implementation much simpler is "dead head", we don't have to deal with a special case of deleting the head then.

The other imporant aspect is to remove the node in place when we are searching for its position.

Lastly, not allowing duplicate nodes, but storing them as `count` makes the implementation structure much simpler.

Further just follow implementation on intuition. (I did have to debug it on the course of 1.5h though, so don't feel bad if it fails and fails tests).

# Complexity
- Time complexity:
$$O(LogN)$$

- Space complexity:
$$O(n)$$ \u2014 in case we fix the amount of allowed levels (in my implementation I didn't).

# Code
```
type Node struct {
    Val int
    Count int
    Next []*Node
}

type Skiplist struct {
    Head *Node    
}

func Constructor() Skiplist {
    // "Dead head"
    return Skiplist{ 
        Head: &Node{ 
            Val: math.MinInt, 
            Next: []*Node{nil},
        },
    }    
}

func (s *Skiplist) Search(target int) bool {
    cur := s.Head
    level := len(cur.Next) - 1
    for {
        if cur.Next[level] == nil || cur.Next[level].Val > target {
            // Go down
            if level == 0 {
                return false // target would've been here if it was found
            }
            level--
        } else if cur.Next[level].Val < target {
            cur = cur.Next[level]
            level = len(cur.Next)-1
        } else if cur.Next[level].Val == target {
            return true
        }
    }
}

func (s *Skiplist) Add(num int)  {
    cur := s.Head
    // Keep pivots where we go down, as we 
    // might have to connect them if we will 
    //promote added node to their level
    pivots := []*Node{cur}

    // Find place
    level := len(cur.Next)-1
    for {
        if cur.Next[level] == nil || cur.Next[level].Val > num {
            if level == 0 {
                break // insert before cur.Next[level]
            }
            pivots = append(pivots, cur)
            level--
        } else if cur.Next[level].Val < num {
            cur = cur.Next[level]
            level = len(cur.Next)-1
        } else if cur.Next[level].Val == num {
            cur.Next[level].Count++
            return
        }
    }

    // Insert
    n := &Node{Val: num, Count: 1, Next: []*Node{cur.Next[0]}}
    cur.Next[0] = n

    // Promote
    pivotLevel := 1
    for rand.Intn(10) % 2 == 1 && len(pivots) > 0 {
        pivot := pivots[len(pivots)-1]
        pivots = pivots[:len(pivots)-1]

        if pivotLevel < len(pivot.Next) {
            // Update
            next := pivot.Next[pivotLevel]
            pivot.Next[pivotLevel] = n
            n.Next = append(n.Next, next)
        } else {
            // Extend
            pivot.Next = append(pivot.Next, n)
            n.Next = append(n.Next, nil)
        }
        pivotLevel++
    }
}


func (s *Skiplist) Erase(num int) bool {
    cur := s.Head
    // Find
    level := len(cur.Next)-1
    for {
        if cur.Next[level] == nil || cur.Next[level].Val > num {
            if level == 0 {
                // Not found
                return false
            }
            level--
        } else if cur.Next[level].Val < num {
            cur = cur.Next[level]
            level = len(cur.Next)-1
        } else if cur.Next[level].Val == num {
            // Erase at current level
            if cur.Next[level].Count > 1 {
                // Duplicate \u2014 keep structure, but reduce count
                cur.Next[level].Count--
                return true
            }
            // Needs to be removed from bottom up through all levels
            cur.Next[level] = cur.Next[level].Next[level]
            level--
            if level < 0 {
                return true
            }
        }
    }
    return true
}

func (s *Skiplist) Report() {
    for level := 0; level < len(s.Head.Next); level++ {
        for cur := s.Head; cur != nil; cur = cur.Next[level] {
            if cur.Count > 1 {
                fmt.Printf("%d(%d) -> ", cur.Val, cur.Count)
            } else {
                fmt.Printf("%d -> ", cur.Val)
            }
        }
        fmt.Printf("nil \
")
    }
}
```
# Golang solution with images for explanation

**Author:** nathannaveen
**Votes:** 1
**Link:** [https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/1409492/](https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/1409492/)

---

The idea of this solution can be shown using the following image:

![](https://i.imgur.com/HQr5JdP.png)


``` go
type Node struct {
    m map[rune] *Node
    isEndCounter int
    starts int
}

type Trie struct {
    node *Node
}

func Constructor() Trie {
    return Trie{node: &Node{make(map[rune] *Node), 0, 0}}
}


func (this *Trie) Insert(word string)  {
    root := this.node
    root.starts++
    
    for _, s := range word {
        if root.m[s] == nil {
            root.m[s] = &Node{ m: make(map[rune] *Node), }
        }
        
        root = root.m[s]
        root.starts++
    }
    root.isEndCounter++
}


func (this *Trie) CountWordsEqualTo(word string) int {
    root := this.node
    
    for _, s := range word {
        root = root.m[s]
        
        if root == nil || root.starts == 0 {
            return 0
        }
    }
    return root.isEndCounter
}


func (this *Trie) CountWordsStartingWith(prefix string) int {
    root := this.node
    
    for _, s := range prefix {
        root = root.m[s]
        
        if root == nil || root.starts == 0 {
            return 0
        }
    }
    return root.starts
}


func (this *Trie) Erase(word string)  {
    root := this.node
    root.starts--
    
    for _, s := range word {
        root = root.m[s]
        root.starts--
    }
    root.isEndCounter--
}
```
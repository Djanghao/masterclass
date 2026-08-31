# [Go] Trie + queue  solution

**Author:** nightybear
**Votes:** 2
**Link:** [https://leetcode.com/problems/stream-of-characters/solutions/807601/](https://leetcode.com/problems/stream-of-characters/solutions/807601/)

---

Time: O(WQ) where W is the max size of word, Q is the query time.

```go
type StreamChecker struct {
    tire *Tire
    maxSize int
    q []byte
}

type Tire struct {
    next map[byte]*Tire
    isWord bool
}

func Constructor(words []string) StreamChecker {
    maxSize := 0
    tire := &Tire{make(map[byte]*Tire), false}
    for i := 0; i < len(words); i++ {
        word := words[i]
        insert_word(word, tire)
        if len(word) > maxSize {
            maxSize = len(word)
        }
    }
    return StreamChecker{tire, maxSize, make([]byte, 0)}
}

func insert_word(word string, tire *Tire) {
    // insert the word reversely into tire
    curr := tire
    for i := len(word)-1; i >= 0; i-- {
        w := word[i]
        if _, ok := curr.next[w]; !ok {
            curr.next[w] = &Tire{make(map[byte]*Tire), false}
        } 
        curr = curr.next[w]
    }
    curr.isWord = true
}

func (this *StreamChecker) search() bool {
    // check the char stream in the queue
    curr := this.tire
    for i:= 0; i<len(this.q);i++ {
        w := this.q[i]
        if _, ok := curr.next[w]; !ok {
            break
        }
        curr = curr.next[w]
        if curr.isWord == true {
            return true
        }
    }
    return false
}

func (this *StreamChecker) Query(letter byte) bool {
    // append letter in the front of the queue
    this.q = append([]byte{letter}, this.q...)
    // if size larger than max size, pop from right
    if len(this.q) > this.maxSize {
        this.q = this.q[:len(this.q)-1]
    }
    return this.search()
}

```
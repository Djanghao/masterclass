# Golang solution

**Author:** SisiGOGO
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-an-ordered-stream/solutions/941816/](https://leetcode.com/problems/design-an-ordered-stream/solutions/941816/)

---

```
type OrderedStream struct {
    ptr int
    list []string
}

func Constructor(n int) OrderedStream {
    return OrderedStream{0,make([]string,n)}
}


func (this *OrderedStream) Insert(id int, value string) []string {
    this.list[id-1] = value
    if this.list[this.ptr] == "" {
        return []string{}
    } else {
        for i,v := range this.list[this.ptr:]{
            if v == "" {
                temp := this.ptr
                this.ptr += i
                return this.list[temp:this.ptr]
            }
        }
    }
    return this.list[this.ptr:]
}
```
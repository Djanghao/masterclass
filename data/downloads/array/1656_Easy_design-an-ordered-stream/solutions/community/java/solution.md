# Java Straightforward Solution!

**Author:** Admin007
**Votes:** 70
**Link:** [https://leetcode.com/problems/design-an-ordered-stream/solutions/935933/](https://leetcode.com/problems/design-an-ordered-stream/solutions/935933/)

---

Well, the problem statement is not very clear even there is a GIF, although I work it out. The problem statement makes it feel as a medium problem, I guess. 

Basically, the idea is that you need to return a longest list that start at index of ptr. if ptr is not pointing an element, you need to return a empty list.
```
class OrderedStream {
    int ptr;
    String[] res;
    
    public OrderedStream(int n) {
        ptr = 0;
        res = new String[n];
    }
    
    public List<String> insert(int id, String value) {
        List<String> list = new ArrayList<>();
        
        res[id - 1] = value;
        while (ptr < res.length && res[ptr] != null) {
            list.add(res[ptr]);
            ptr++;
        }
        
        return list;
    }
}
```
# C#, O(n) solution using Stack

**Author:** edevyatkin
**Votes:** 4
**Link:** [https://leetcode.com/problems/online-stock-span/solutions/640808/](https://leetcode.com/problems/online-stock-span/solutions/640808/)

---

```
public class StockSpanner {
    private Stack<(int Value, int Span)> _stack;

    public StockSpanner() {
        _stack = new Stack<(int,int)>();
    }
    
    public int Next(int price) {
        int span = 1;
        while (_stack.Count > 0 && _stack.Peek().Value <= price) {
            span += _stack.Pop().Span;            
        }
        _stack.Push((price, span));
        return span;
    }
}
```
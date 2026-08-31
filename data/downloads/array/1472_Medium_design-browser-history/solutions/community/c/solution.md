# [C++/Python] Stack and Two Pointers (C++ can be more concise than Python!)

**Author:** WangQiuc
**Votes:** 36
**Link:** [https://leetcode.com/problems/design-browser-history/solutions/674357/](https://leetcode.com/problems/design-browser-history/solutions/674357/)

---

c++. The `=` operator in c++ returning a reference works perfectly here!.
```
class BrowserHistory {
public:
    string stack[5005];
    int p, t;	// current pointer, stack's top
    
    BrowserHistory(string homepage) {
        stack[p = t = 0] = homepage;
    }
    
    void visit(string url) {
        stack[t = ++p] = url;
    }
    
    string back(int steps) {
        return stack[p = max(0, p-steps)];
    }
    
    string forward(int steps) {
        return stack[p = min(t, p+steps)];
    }
};
```
Python
```
class BrowserHistory:

    def __init__(self, homepage: str):
        self.stack = [""] * 5005
        self.p = self.t = 0
        self.stack[0] = homepage
        
    def visit(self, url: str) -> None:
        self.p += 1
        self.stack[self.p] = url
        self.t = self.p

    def back(self, steps: int) -> str:
        self.p = max(0, self.p-steps)
        return self.stack[self.p]
        
    def forward(self, steps: int) -> str:
        self.p = min(self.t, self.p + steps)
        return self.stack[self.p]
```
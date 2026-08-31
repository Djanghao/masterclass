# JS, Python, Java, C++ | Frequency Map & Stack Solution w/ Explanation

**Author:** sgallivan
**Votes:** 31
**Link:** [https://leetcode.com/problems/maximum-frequency-stack/solutions/1086543/](https://leetcode.com/problems/maximum-frequency-stack/solutions/1086543/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

There are many ways to solve this problem, but the description gives us two clues as to the most efficient way to do so. First, any time the word "frequency" is used, we're most likely going to need to make a **frequency map**. Second, they use the word "stack" in the title, so we should look at the possibility of a **stack** solution.

In this instance, we should consider a **2D stack**, with frequency on one side and input order on the other. This **stack** will hold each individual instance of a value (**x**) pushed separately by what the frequency was at the time of insertion.

Frequency will work here because it starts at **1** and will increment from there. If we remember to **pop** off unused frequencies, then the top of the frequency dimension of our **stack** (**stack[stack.length-1]**) will always represent the most frequent element, while the top of the input order dimension will represent the most recently seen value.

Our frequency map (**fmap**) will be used to keep track of the current frequencies of seen elements, so we know where to enter new ones into our stack.

---

#### ***Implementation:***

Since our frequencies are **1-indexed** and the **stack** is **0-indexed**, we have to insert a dummy **0-index** for all languages except Javascript, which lets you directly access even undefined array elements by index.

---

#### ***Javascript Code:***

The best result for the code below is **280ms / 58.6MB** (beats 100% / 76%).
```javascript
class FreqStack  {
    constructor() {
        this.fmap = new Map()
        this.stack = []
    }

    push(x) {
        let freq = (this.fmap.get(x) || 0) + 1
        this.fmap.set(x, freq)
        if (!this.stack[freq]) this.stack[freq] = [x]
        else this.stack[freq].push(x)
    }

    pop() {
        let top = this.stack[this.stack.length-1], x = top.pop()
        if (!top.length) this.stack.pop()
        this.fmap.set(x, this.fmap.get(x) - 1)
        return x
    }
};
```

---

#### ***Python Code:***

The best result for the code below is **280ms / MB** (beats 100% / 15%).
```python
class FreqStack:
    def __init__(self):
        self.fmap = Counter()
        self.stack = [0]

    def push(self, x: int) -> None:
        self.fmap[x] += 1
        freq = self.fmap[x]
        if (freq == len(self.stack)): self.stack.append([x])
        else: self.stack[freq].append(x)

    def pop(self) -> int:
        top = self.stack[-1]
        x = top.pop()
        if (not top): self.stack.pop()
        self.fmap[x] -= 1
        return x
```

---

#### ***Java Code:***

The best result for the code below is **23ms / 47.7MB** (beats 98% / 88%).
```java
class FreqStack {
    HashMap<Integer, Integer> fmap;
    List<Stack<Integer>> stack;
    
    public FreqStack() {
        fmap = new HashMap();
        stack = new ArrayList();
        stack.add(new Stack());
    }
    
    public void push(int x) {
        int freq = fmap.getOrDefault(x, 0) + 1;
        fmap.put(x, freq);
        if (freq == stack.size()) stack.add(new Stack());
        stack.get(freq).add(x);
    }

    public int pop() {
        Stack<Integer> top = stack.get(stack.size()-1);
        int x = top.pop();
        if (top.size() == 0) stack.remove(stack.size()-1);
        fmap.put(x, fmap.get(x) - 1);
        return x;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **152ms / 79.6MB** (beats 98% / 87%).
```c++
class FreqStack {
public:
    unordered_map<int, int> fmap;
    vector<vector<int>> fstack = {{}};
    
    void push(int x) {
        int freq = fmap[x] + 1;
        fmap[x] = freq;
        if (freq == fstack.size()) fstack.push_back(vector<int>());
        fstack[freq].push_back(x);
    }
    
    int pop() {
        int x = fstack.back().back();
        fstack.back().pop_back();
        if (fstack.back().empty()) fstack.pop_back();
        fmap[x]--;
        return x;
    }
};
```
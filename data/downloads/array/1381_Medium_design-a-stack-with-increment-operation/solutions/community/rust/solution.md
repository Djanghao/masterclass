# 🔥🚀🔥 FRiENDLY EXPLAiNED 🔥🚀🔥 ANY LANGUAGE 🔥 BEATS 100% 🚀

**Author:** prodonik
**Votes:** 78
**Link:** [https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/5849971/](https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/5849971/)

---

# Intuition
The problem requires implementing a custom stack with three main operations: `push`, `pop`, and `increment`. The stack should have a fixed size, meaning we can't add more than a certain number of elements, and the increment operation should add a specified value to the bottom `k` elements of the stack. A simple array can be used to simulate the stack behavior.

# Approach
1. **Stack representation**: Use an integer array to simulate the stack with a fixed size.
2. **Push operation**: Add an element to the top of the stack if it hasn't exceeded the stack's size limit.
3. **Pop operation**: Remove the top element of the stack, or return -1 if the stack is empty.
4. **Increment operation**: Iterate through the first `k` elements and increment their value by `val`, but ensure `k` does not exceed the current stack size.

# Complexity
- **Time complexity**:
  - `push`: $$O(1)$$, as we just add an element to the top of the stack.
  - `pop`: $$O(1)$$, as we remove the element from the top of the stack.
  - `increment`: $$O(k)$$ where `k` is the number of elements to increment (bounded by the minimum of `k` and the stack's size).

- **Space complexity**:
  - $$O(n)$$, where `n` is the maximum stack size, as we are storing elements in an array of fixed size.

![image.png](./images/0.png)


# UPVOTE

# Code
```java []
class CustomStack {
    int [] stack;
    int top = -1;

    public CustomStack(int maxSize) {
        this.stack = new int [maxSize];
    }
    
    public void push(int x) {
        if (top < this.stack.length - 1) {
            top ++;
            this.stack[top] = x;
        }
    }
    
    public int pop() {
        if (top != -1) {
            return this.stack[top --];
        }
        return -1;
    }
    
    public void increment(int k, int val) {
        for (int i = 0; i < Math.min(k, top + 1); i ++) {
            this.stack[i] += val;
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * CustomStack obj = new CustomStack(maxSize);
 * obj.push(x);
 * int param_2 = obj.pop();
 * obj.increment(k,val);
 */
```
```C++ []
class CustomStack {
public:
    vector<int> stack;
    int top;

    CustomStack(int maxSize) {
        stack.resize(maxSize);
        top = -1;
    }

    void push(int x) {
        if (top < stack.size() - 1) {
            top++;
            stack[top] = x;
        }
    }

    int pop() {
        if (top != -1) {
            return stack[top--];
        }
        return -1;
    }

    void increment(int k, int val) {
        for (int i = 0; i < min(k, top + 1); i++) {
            stack[i] += val;
        }
    }
};
```
```Python []
class CustomStack:
    def __init__(self, maxSize: int):
        self.stack = [0] * maxSize
        self.top = -1

    def push(self, x: int) -> None:
        if self.top < len(self.stack) - 1:
            self.top += 1
            self.stack[self.top] = x

    def pop(self) -> int:
        if self.top != -1:
            value = self.stack[self.top]
            self.top -= 1
            return value
        return -1

    def increment(self, k: int, val: int) -> None:
        for i in range(min(k, self.top + 1)):
            self.stack[i] += val
```
```C# []
public class CustomStack {
    private int[] stack;
    private int top = -1;

    public CustomStack(int maxSize) {
        stack = new int[maxSize];
    }

    public void Push(int x) {
        if (top < stack.Length - 1) {
            top++;
            stack[top] = x;
        }
    }

    public int Pop() {
        if (top != -1) {
            return stack[top--];
        }
        return -1;
    }

    public void Increment(int k, int val) {
        for (int i = 0; i < Math.Min(k, top + 1); i++) {
            stack[i] += val;
        }
    }
}
```
```Go []
package main

type CustomStack struct {
	stack []int
	top   int
}

func Constructor(maxSize int) CustomStack {
	return CustomStack{stack: make([]int, maxSize), top: -1}
}

func (this *CustomStack) Push(x int) {
	if this.top < len(this.stack)-1 {
		this.top++
		this.stack[this.top] = x
	}
}

func (this *CustomStack) Pop() int {
	if this.top != -1 {
		val := this.stack[this.top]
		this.top--
		return val
	}
	return -1
}

func (this *CustomStack) Increment(k int, val int) {
	for i := 0; i < min(k, this.top+1); i++ {
		this.stack[i] += val
	}
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```
```JavaScript []
class CustomStack {
    constructor(maxSize) {
        this.stack = new Array(maxSize).fill(0);
        this.top = -1;
    }

    push(x) {
        if (this.top < this.stack.length - 1) {
            this.top++;
            this.stack[this.top] = x;
        }
    }

    pop() {
        if (this.top !== -1) {
            return this.stack[this.top--];
        }
        return -1;
    }

    increment(k, val) {
        for (let i = 0; i < Math.min(k, this.top + 1); i++) {
            this.stack[i] += val;
        }
    }
}
```
```Ruby []
class CustomStack
    def initialize(max_size)
        @stack = Array.new(max_size)
        @top = -1
    end

    def push(x)
        if @top < @stack.size - 1
            @top += 1
            @stack[@top] = x
        end
    end

    def pop
        if @top != -1
            result = @stack[@top]
            @top -= 1
            return result
        end
        return -1
    end

    def increment(k, val)
        (0...[k, @top + 1].min).each do |i|
            @stack[i] += val
        end
    end
end
```
```Rust []
struct CustomStack {
    stack: Vec<i32>,
    top: i32,
}

impl CustomStack {
    fn new(max_size: i32) -> Self {
        CustomStack {
            stack: vec![0; max_size as usize],
            top: -1,
        }
    }

    fn push(&mut self, x: i32) {
        if self.top < (self.stack.len() as i32 - 1) {
            self.top += 1;
            self.stack[self.top as usize] = x;
        }
    }

    fn pop(&mut self) -> i32 {
        if self.top != -1 {
            let value = self.stack[self.top as usize];
            self.top -= 1;
            return value;
        }
        -1
    }

    fn increment(&mut self, k: i32, val: i32) {
        for i in 0..std::cmp::min(k, self.top + 1) {
            self.stack[i as usize] += val;
        }
    }
}
```

![image.png](./images/1.png)



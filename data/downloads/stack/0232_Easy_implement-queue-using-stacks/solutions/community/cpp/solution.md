# Short O(1) amortized, C++ / Java / Ruby

**Author:** StefanPochmann
**Votes:** 902
**Link:** [https://leetcode.com/problems/implement-queue-using-stacks/solutions/64206/](https://leetcode.com/problems/implement-queue-using-stacks/solutions/64206/)

---

I have one input stack, onto which I push the incoming elements, and one output stack, from which I peek/pop. I move elements from input stack to output stack when needed, i.e., when I need to peek/pop but the output stack is empty. When that happens, I move all elements from input to output stack, thereby reversing the order so it's the correct order for peek/pop.

The loop in `peek` does the moving from input to output stack. Each element only ever gets moved like that once, though, and only after we already spent time pushing it, so the overall amortized cost for each operation is O(1).

**Ruby**

    class Queue
        def initialize
            @in, @out = [], []
        end
    
        def push(x)
            @in << x
        end
    
        def pop
            peek
            @out.pop
        end
    
        def peek
            @out << @in.pop until @in.empty? if @out.empty?
            @out.last
        end
    
        def empty
            @in.empty? && @out.empty?
        end
    end

**Java**

    class MyQueue {
    
        Stack<Integer> input = new Stack();
        Stack<Integer> output = new Stack();
        
        public void push(int x) {
            input.push(x);
        }
    
        public void pop() {
            peek();
            output.pop();
        }
    
        public int peek() {
            if (output.empty())
                while (!input.empty())
                    output.push(input.pop());
            return output.peek();
        }
    
        public boolean empty() {
            return input.empty() && output.empty();
        }
    }

**C++**

    class Queue {
        stack<int> input, output;
    public:
    
        void push(int x) {
            input.push(x);
        }
    
        void pop(void) {
            peek();
            output.pop();
        }
    
        int peek(void) {
            if (output.empty())
                while (input.size())
                    output.push(input.top()), input.pop();
            return output.top();
        }
    
        bool empty(void) {
            return input.empty() && output.empty();
        }
    };
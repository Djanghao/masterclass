# Explanation + Complexity + Code ✅ 100% Beats 🌟 Best Solution

**Author:** DilpreetSingh0
**Votes:** 2
**Link:** [https://leetcode.com/problems/implement-stack-using-queues/solutions/5409061/](https://leetcode.com/problems/implement-stack-using-queues/solutions/5409061/)

---

### Explanation:

1. **Push Operation**:
    - The `push` function simply appends the element to `queue1`.

2. **Pop Operation**:
    - To simulate stack behavior, we need to remove the last element that was added to `queue1`.
    - We transfer all elements from `queue1` to `queue2` except the last one.
    - We then remove and return the last element from `queue1`.
    - Finally, we swap the queues so that `queue1` always holds the current elements, and `queue2` is ready for the next operation.

3. **Top Operation**:
    - The `top` function returns the last element of `queue1`.

4. **Empty Operation**:
    - The `empty` function checks if both `queue1` and `queue2` are empty.

### Notes:

- The `swap(&queue1, &queue2)` function is used to swap the contents of the two queues, making `queue1` always ready to be used for subsequent operations.
- This implementation ensures that all stack operations are carried out using only the standard operations available for queues.
- This solution is efficient in terms of amortized time complexity: the `push` operation is \\(O(1)\\), and the `pop` operation is \\(O(n)\\) in the worst case. However, swapping the queues and transferring elements ensures that the stack operations behave correctly with respect to the LIFO principle.


# Complexity
### Time Complexity:

1. **Push Operation**:
    - Time complexity: \\(O(1)\\)
    - Reason: Appending an element to the end of a queue (using an array) is a constant time operation.

2. **Pop Operation**:
    - Time complexity: \\(O(n)\\) in the worst case, where \\(n\\) is the number of elements in the stack.
    - Reason: In the worst case, we need to move all elements from `queue1` to `queue2`, which takes \\(O(n)\\) time.

3. **Top Operation**:
    - Time complexity: \\(O(1)\\)
    - Reason: Accessing the last element of a queue (array) is a constant time operation.

4. **Empty Operation**:
    - Time complexity: \\(O(1)\\)
    - Reason: Checking if an array is empty is a constant time operation.

### Space Complexity:

- Space complexity: \\(O(n)\\)
- Reason: We are using two queues (`queue1` and `queue2`) to store the elements. In the worst case, one queue could be empty while the other holds all \\(n\\) elements, leading to a total space usage of \\(O(n)\\).


# Code
```
class MyStack {
    private var queue1 = [Int]()
    private var queue2 = [Int]()
    
    init() {}
    
    func push(_ x: Int) {
        // Always push to queue1
        queue1.append(x)
    }
    
    func pop() -> Int {
        // Transfer all elements except the last one to queue2
        while queue1.count > 1 {
            queue2.append(queue1.removeFirst())
        }

        // The last element of queue1 is the top element of the stack
        let topElement = queue1.removeFirst()

        // Swap the names of queue1 and queue2
        swap(&queue1, &queue2)
        
        return topElement
    }
    
    func top() -> Int {
        return queue1.last!
    }
    
    func empty() -> Bool {
        return queue1.isEmpty && queue2.isEmpty
    }
}


/**
 * Your MyStack object will be instantiated and called as such:
 * let obj = MyStack()
 * obj.push(x)
 * let ret_2: Int = obj.pop()
 * let ret_3: Int = obj.top()
 * let ret_4: Bool = obj.empty()
 */
```
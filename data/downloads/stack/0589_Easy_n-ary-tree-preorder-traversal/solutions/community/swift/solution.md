# Five solutions for Swift with the mindset

**Author:** tzef
**Votes:** 8
**Link:** [https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/2847112/](https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/2847112/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

I personally met this question in Facebook interview
the problem is asking you to design an API for preorder traversal
not asking you to give me a preorder sorted list of values.

You should be able to answer the concept behind your design.

# Code

**The firs way to achieve it, just single line**

```
func preorder(_ root: Node?) -> [Int] {
    return root?.preorderNodes() ?? []
}

extension Node {
    func preorderNodes() -> [Int] {
        return [self.val] + children.flatMap { $0.preorderNodes() }
    }
}
```
But we allocate array in every recursive round
the total time complexity is $$O(N^2)$$ not $$O(N)$$

**To improve it, we can append to a reference array**
avoid the array creation overhead
```
func preorder(_ root: Node?) -> [Int] {
    var inoutResult = [Int]()
    root?.preorderNodes(&inoutResult)
    return inoutResult
}

extension Node {
    func preorderNodes(_ result: inout [Int]) {
            result.append(self.val)
            children.forEach { $0.preorderNodes(&result)}
        }
    }
}
```
But inout still do copy, just override back to original instance
and the recursion mutate the array everytime, the copy on write machanism didn't help you, still $$O(N^2)$$ implicit.

**To do better, we can extract the result variable to class level**
```
var solutionResult = [Int]()
func preorder(_ root: Node?) -> [Int] {
    preorderResult(root)
    return solutionResult
}

extension Node {
    func preorderResult(_ node: Node?) {
        guard let val = node?.val else { return }
        solutionResult.append(val)
        node?.children.forEach { preorderResult($0) }
    }
}
```

Now we have a true $$O(N)$$ solution, 
but not good enough regarding to architecture to me:
we have a high scope variable which shared to all functions,
potential side-effect concern, and not good to the function cohesion.

**We can use closure callback to provide the node in the preorder order**
```
func preorder(_ root: Node?) -> [Int] {
    var result = [Int]()
    root?.preorderNodes { node in
        result.append(node.val)
    }
    return result
}

extension Node {
    func preorderNodes(_ closure: (_ node: Node) -> Void) {
        closure(self)
        children.forEach { $0.preorderNodes(closure) }
    }
}
```

**Last, is about the follow-up**
It's definitely not say:
Recursive solution is trivial, I can do iteratively, more difficult

Nobody want you to show off difficult trick,
you should tell interviewer what the pros & cons why we need iterative solution.

Recursive might cause memory overhead for a big tree,
to resolve the situation with memory concern, 
we can consider BFS

              tree          queue
                1           [1]
             /  |  \\
            2   3   4       [2,3,4]
           / \\   \\
          5   6   7

BFS usually use queue, but we need preorder not level order
for the above example
we don't want 2->3->4->5->6...
we want 2->5->6->3...

5, 6 are the children of 2
the intuition is insert to the head of queue rather than normal enqueue

**but insert to head of queue is O(N)**

The idea is, if we convert queue to stack and reverse the nums
the results of enqueue/dequeue are equal to push/pop

Let's take an example

          stack         pop     children.reversed().forEach { push($0) }
          [1]           -> 1    [2, 3, 4]
                                [] -> [4] -> [4, 3] -> [4, 3, 2]
          [4, 3, 2]     -> 2    [5, 6]
                                [4, 3] -> [4, 3, 6] -> [4, 3, 6, 5]
          [4, 3, 6, 5]  -> 5
          [4, 3, 6]     -> 6
          [4, 3]        -> 3    [7]
                                [4] -> [4, 7]
          [4, 7]        -> 7
          [4]           -> 4
         

The implementation

```
func preorder(_ root: Node?) -> [Int] {
    var stack = [root].compactMap { $0 }
    var preorderResult = [Int]()
    while !stack.isEmpty {
        let node = stack.removeLast()
        preorderResult.append(node.val)
        for next in node.children.reversed() {
            stack.append(next)
        }
    }
    return preorderResult
}

```
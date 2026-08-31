# JS, Python, Java, C++ | Easy DFS/Stack Solution w/ Explanation

**Author:** sgallivan
**Votes:** 19
**Link:** [https://leetcode.com/problems/keys-and-rooms/solutions/1116707/](https://leetcode.com/problems/keys-and-rooms/solutions/1116707/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

Since we can only enter rooms to which we have found a key, we can't just iterate through the entire input array (**R**) normally. If we think of this like a graph problem, we can see that the rooms are like nodes and the keys are like edges.

In that case, we can use a **breadth-first search** (**BFS**) **queue** or a **depth-first search** (**DFS**) **stack** approach, or even a **DFS recursion** approach here to good effect. Here, we'll push newly found keys onto **stack** as we go through.

To eliminate duplicate stack entries, we can use a lightweight **boolean array** (**vis**) to keep track of which rooms have already been pushed onto the stack. Rather than having to count the number of visited rooms again at the end, we can just use another variable (**count**) to keep track of that separately.

Once our stack runs empty, we can just check to see if the **count** is the same as the length of **R** and **return** the answer.

---

#### ***Implementation:***

Javascript can use a Uint8Array instead of a boolean array.

---

#### ***Javascript Code:***

The best result for the code below is **68ms / 40.5MB** (beats 100% / 60%).
```javascript
var canVisitAllRooms = function(R) {
    let vis = new Uint8Array(R.length), stack = [0], count = 1
    vis[0] = 1
    while (stack.length) {
        let keys = R[stack.pop()]
        for (let k of keys)
            if (!vis[k]) stack.push(k), vis[k] = 1, count++
    }
    return R.length === count
};
```

---

#### ***Python Code:***

The best result for the code below is **52ms / 14.6MB** (beats 100% / 95%).
```python
class Solution:
    def canVisitAllRooms(self, R: List[List[int]]) -> bool:
        vis, stack, count = [False for _ in range(len(R))], [0], 1
        vis[0] = 1
        while stack:
            keys = R[stack.pop()]
            for k in keys:
                if not vis[k]:
                    stack.append(k)
                    vis[k] = True
                    count += 1
        return len(R) == count
```

---

#### ***Java Code:***

The best result for the code below is **1ms / 38.4MB** (beats 86% / 100%).
```java
class Solution {
    public boolean canVisitAllRooms(List<List<Integer>> R) {
        boolean[] vis = new boolean[R.size()];
        vis[0] = true;
        Stack<Integer> stack = new Stack<>();
        stack.push(0);
        int count = 1;
        while (stack.size() > 0)
            for (int k : R.get(stack.pop()))
                if (!vis[k]) {
                    stack.push(k);
                    vis[k] = true;
                    count++;
                }
        return R.size() == count;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **4ms / 10.4MB** (beats 99% / 67%).
```c++
class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& R) {
        vector<bool> vis(R.size(), false);
        vis[0] = true;
        stack<int> stk = stack<int>({0});
        int count = 1;
        while (stk.size()) {
            vector<int> keys = R[stk.top()]; stk.pop();
            for (int k : keys)
                if (!vis[k]) stk.push(k), vis[k] = true, count++;
        }
        return R.size() == count;
    }
};
```
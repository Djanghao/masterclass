# [C++, Java, Python] DFS | Track 3 Positive Max 2 Negative Min | Modular Code

**Author:** shivamaggarwal513
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/solutions/4447340/](https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/solutions/4447340/)

---

# Intuition

To calculate coins for current node `curr`, what information do we need?
- Number of nodes in the subtree rooted at `curr`, so that we can decide if we need to place 1 coin or not.
- Something to calculate maximum product of 3 cost values in that subtree.
  - If all costs were positive, then we would have needed maximum 3 values in that, because they will give maximum product.
  - But, here we have negative costs too. Suppose we had subtree costs as `[-100, -50, 1, 30, 5]`, then maximum product would have been $-100\	imes -50\	imes 30$.
  - So, we need 3 positive maximum, and 2 negative minimum.

# Approach

All this can be stored in a class `X` as:

```C++ []
class X {
public:
    // number of nodes in subtree
    int numNodes;
    // posMax: [maximum, second maximum, third maximum]
    // negMin: [minimum, second minimum]
    vector<int> posMax, negMin;

    // default constructor
    X() : numNodes(0) {}

    // constructor with one cost value (or one tree node)
    X(int val) {
        numNodes = 1;
        if (val > 0) {
            posMax.push_back(val);
        }
        else {
            negMin.push_back(val);
        }
    }
};
```
```Java []
class X {
    // number of nodes in subtree
    public int numNodes;
    // posMax: [maximum, second maximum, third maximum]
    // negMin: [minimum, second minimum]
    public ArrayList<Integer> posMax, negMin;

    // default constructor
    public X() {
        numNodes = 0;
        posMax = new ArrayList<>();
        negMin = new ArrayList<>();
    }

    // constructor with one cost value (or one tree node)
    public X(int val) {
        numNodes = 1;
        posMax = new ArrayList<>();
        negMin = new ArrayList<>();
        if (val > 0) {
            posMax.add(val);
        } else {
            negMin.add(val);
        }
    }
}
```
```Python []
class X:
    def __init__(self, val: int):
        '''constructor with one cost value (or one tree node)'''
        
        # number of nodes in subtree
        self.numNodes = 1
        
        # posMax: [maximum, second maximum, third maximum]
        # negMin: [minimum, second minimum]
        self.posMax, self.negMin = [], []
        self.posMax.append(val) if val > 0 else self.negMin.append(val)
```

Now, apply DFS on the given tree starting from root `0`, going down the tree.
- Recursively call on all the children of current node. Here, we assume that these recursive calls will fill the `coins` array for complete subtree rooted at that child.
- Every child returns their object of class `X`.
- Update the information for current tree using that object.
  - Update number of nodes, by adding the child's subtree nodes.
  - Update 3 postive maximum and 2 negative minimum.

```C++ []
// update current node with child's information
void update(X x) {
    // add child's nodes
    numNodes += x.numNodes;

    // add child's maximum(s) and minimum(s)
    posMax.insert(posMax.end(), x.posMax.begin(), x.posMax.end());
    negMin.insert(negMin.end(), x.negMin.begin(), x.negMin.end());

    // sort them and select top 3 maximum and top 2 minimum
    sort(posMax.begin(), posMax.end(), greater<int>());
    sort(negMin.begin(), negMin.end());
    posMax.resize(min((int)posMax.size(), 3));
    negMin.resize(min((int)negMin.size(), 2));
}
```
```Java []
// update current node with child's information
public void update(X x) {
    // add child's nodes
    numNodes += x.numNodes;

    // add child's maximum(s) and minimum(s)
    posMax.addAll(x.posMax);
    negMin.addAll(x.negMin);

    // sort them and select top 3 maximum and top 2 minimum
    posMax.sort(Collections.reverseOrder());
    negMin.sort(null);
    while (posMax.size() > 3) {
        posMax.remove(posMax.size() - 1);
    }
    while (negMin.size() > 2) {
        negMin.remove(negMin.size() - 1);
    }
}
```
```Python []
def update(self, x: X):
    '''update current node with child's information'''
    
    # add child's nodes
    self.numNodes += x.numNodes
    
    # add child's maximum(s) and minimum(s)
    # sort them and select top 3 maximum and top 2 minimum
    self.posMax = sorted(self.posMax + x.posMax, reverse=True)[:3]
    self.negMin = sorted(self.negMin + x.negMin)[:2]
```

To calculate the maximum product, we only need 3 positive maximum and 2 negative minimum. We have two choices for maximum product:
- `posMax[0] * posMax[1] * posMax[2]`
- `negMin[0] * negMin[1] * posMax[0]`

```C++ []
// maximum product of subtree
long long product() {
    // case 1
    if (numNodes < 3) {
        return 1;
    }
    // case 2
    long long result = 0;
    // choice 1 (all positive)
    if (posMax.size() == 3) {
        result = 1LL * posMax[0] * posMax[1] * posMax[2];
    }
    // choice 2 (2 negative 1 positive)
    if (negMin.size() == 2 && !posMax.empty()) {
        result = max(result, 1LL * negMin[0] * negMin[1] * posMax[0]);
    }
    return result;
}
```
```Java []
// maximum product of subtree
public long product() {
    // case 1
    if (numNodes < 3) {
        return 1;
    }
    // case 2
    long result = 0;
    // choice 1 (all positive)
    if (posMax.size() == 3) {
        result = (long)posMax.get(0) * posMax.get(1) * posMax.get(2);
    }
    // choice 2 (2 negative 1 positive)
    if (negMin.size() == 2 && !posMax.isEmpty()) {
        result = Math.max(result, (long)negMin.get(0) * negMin.get(1) * posMax.get(0));
    }
    return result;
}
```
```Python []
def product(self) -> int:
    '''maximum product of subtree'''
    
    # case 1
    if self.numNodes < 3:
        return 1
    # case 2
    result = 0
    # choice 1 (all positive)
    if len(self.posMax) == 3:
        result = self.posMax[0] * self.posMax[1] * self.posMax[2]
    # choice 2 (2 negative 1 positive)
    if len(self.negMin) == 2 and self.posMax:
        result = max(result, self.negMin[0] * self.negMin[1] * self.posMax[0])
    return result
```

# Code

```C++ []
class X {
public:
    // number of nodes in subtree
    int numNodes;
    // posMax: [maximum, second maximum, third maximum]
    // negMin: [minimum, second minimum]
    vector<int> posMax, negMin;

    // default constructor
    X() : numNodes(0) {}

    // constructor with one cost value (or one tree node)
    X(int val) {
        numNodes = 1;
        if (val > 0) {
            posMax.push_back(val);
        }
        else {
            negMin.push_back(val);
        }
    }

    // update current node with child's information
    void update(X x) {
        // add child's nodes
        numNodes += x.numNodes;

        // add child's maximum(s) and minimum(s)
        posMax.insert(posMax.end(), x.posMax.begin(), x.posMax.end());
        negMin.insert(negMin.end(), x.negMin.begin(), x.negMin.end());

        // sort them and select top 3 maximum and top 2 minimum
        sort(posMax.begin(), posMax.end(), greater<int>());
        sort(negMin.begin(), negMin.end());
        posMax.resize(min((int)posMax.size(), 3));
        negMin.resize(min((int)negMin.size(), 2));
    }

    // maximum product of subtree
    long long product() {
        // case 1
        if (numNodes < 3) {
            return 1;
        }
        // case 2
        long long result = 0;
        // choice 1 (all positive)
        if (posMax.size() == 3) {
            result = 1LL * posMax[0] * posMax[1] * posMax[2];
        }
        // choice 2 (2 negative 1 positive)
        if (negMin.size() == 2 && !posMax.empty()) {
            result = max(result, 1LL * negMin[0] * negMin[1] * posMax[0]);
        }
        return result;
    }
};

class Solution {
private:
    // Depth-First Search on tree
    // fills coins array
    X fillCoins(int n, vector<vector<int>>& graph, vector<int>& cost, int curr, int prev, vector<long long>& coins) {
        // maintain information of current subtree
        X x(cost[curr]);
        for (int next : graph[curr]) {
            // avoid calling function back to parent
            if (next != prev) {
                // fillCoins() returns information of child's subtree
                // update current subtree with child's information
                x.update(fillCoins(n, graph, cost, next, curr, coins));
            }
        }
        // once information of current subtree is completed
        // calculate maximum product
        coins[curr] = x.product();
        // return information to parent
        return x;
    }

public:
    vector<long long> placedCoins(vector<vector<int>>& edges, vector<int>& cost) {
        int n = cost.size();
        // make tree in adjacency list form
        vector<vector<int>> graph(n);
        for (auto& edge : edges) {
            graph[edge[0]].push_back(edge[1]);
            graph[edge[1]].push_back(edge[0]);
        }
        vector<long long> coins(n);
        // call DFS and fill coins array
        fillCoins(n, graph, cost, 0, -1, coins);
        return coins;
    }
};
```
```Java []
class X {
    // number of nodes in subtree
    public int numNodes;
    // posMax: [maximum, second maximum, third maximum]
    // negMin: [minimum, second minimum]
    public ArrayList<Integer> posMax, negMin;

    // default constructor
    public X() {
        numNodes = 0;
        posMax = new ArrayList<>();
        negMin = new ArrayList<>();
    }

    // constructor with one cost value (or one tree node)
    public X(int val) {
        numNodes = 1;
        posMax = new ArrayList<>();
        negMin = new ArrayList<>();
        if (val > 0) {
            posMax.add(val);
        } else {
            negMin.add(val);
        }
    }

    // update current node with child's information
    public void update(X x) {
        // add child's nodes
        numNodes += x.numNodes;

        // add child's maximum(s) and minimum(s)
        posMax.addAll(x.posMax);
        negMin.addAll(x.negMin);

        // sort them and select top 3 maximum and top 2 minimum
        posMax.sort(Collections.reverseOrder());
        negMin.sort(null);
        while (posMax.size() > 3) {
            posMax.remove(posMax.size() - 1);
        }
        while (negMin.size() > 2) {
            negMin.remove(negMin.size() - 1);
        }
    }

    // maximum product of subtree
    public long product() {
        // case 1
        if (numNodes < 3) {
            return 1;
        }
        // case 2
        long result = 0;
        // choice 1 (all positive)
        if (posMax.size() == 3) {
            result = (long)posMax.get(0) * posMax.get(1) * posMax.get(2);
        }
        // choice 2 (2 negative 1 positive)
        if (negMin.size() == 2 && !posMax.isEmpty()) {
            result = Math.max(result, (long)negMin.get(0) * negMin.get(1) * posMax.get(0));
        }
        return result;
    }
}

class Solution {
    // Depth-First Search on tree
    // fills coins array
    X fillCoins(int n, ArrayList<ArrayList<Integer>> graph, int[] cost, int curr, int prev, long[] coins) {
        // maintain information of current subtree
        X x = new X(cost[curr]);
        for (int next : graph.get(curr)) {
            // avoid calling function back to parent
            if (next != prev) {
                // fillCoins() returns information of child's subtree
                // update current subtree with child's information
                x.update(fillCoins(n, graph, cost, next, curr, coins));
            }
        }
        // once information of current subtree is completed
        // calculate maximum product
        coins[curr] = x.product();
        return x;
    }

    public long[] placedCoins(int[][] edges, int[] cost) {
        int n = cost.length;
        // make tree in adjacency list form
        ArrayList<ArrayList<Integer>> graph = new ArrayList<>(n);
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            graph.get(edge[0]).add(edge[1]);
            graph.get(edge[1]).add(edge[0]);
        }
        long[] coins = new long[n];
        // call DFS and fill coins array
        fillCoins(n, graph, cost, 0, -1, coins);
        return coins;
    }
}
```
```Python []
class X:
    def __init__(self, val: int):
        '''constructor with one cost value (or one tree node)'''
        
        # number of nodes in subtree
        self.numNodes = 1
        
        # posMax: [maximum, second maximum, third maximum]
        # negMin: [minimum, second minimum]
        self.posMax, self.negMin = [], []
        self.posMax.append(val) if val > 0 else self.negMin.append(val)
    
    def update(self, x: X):
        '''update current node with child's information'''
        
        # add child's nodes
        self.numNodes += x.numNodes
        
        # add child's maximum(s) and minimum(s)
        # sort them and select top 3 maximum and top 2 minimum
        self.posMax = sorted(self.posMax + x.posMax, reverse=True)[:3]
        self.negMin = sorted(self.negMin + x.negMin)[:2]
    
    def product(self) -> int:
        '''maximum product of subtree'''
        
        # case 1
        if self.numNodes < 3:
            return 1
        # case 2
        result = 0
        # choice 1 (all positive)
        if len(self.posMax) == 3:
            result = self.posMax[0] * self.posMax[1] * self.posMax[2]
        # choice 2 (2 negative 1 positive)
        if len(self.negMin) == 2 and self.posMax:
            result = max(result, self.negMin[0] * self.negMin[1] * self.posMax[0])
        return result


class Solution:
    def fillCoins(self, graph: List[List[int]], cost: List[int], curr: int, prev: int, coins: List[int]) -> X:
        '''
        Depth-First Search on tree
        fills coins array
        '''
        
        # maintain information of current subtree
        x = X(cost[curr])
        for next in graph[curr]:
            # avoid calling function back to parent
            if next != prev:
                # fillCoins() returns information of child's subtree
                # update current subtree with child's information
                x.update(self.fillCoins(graph, cost, next, curr, coins))
        
        # once information of current subtree is completed
        # calculate maximum product
        coins[curr] = x.product()
        
        # return information to parent
        return x
    
    def placedCoins(self, edges: List[List[int]], cost: List[int]) -> List[int]:
        n = len(cost)
        # make tree in adjacency list form
        graph = [[] for _ in range(n)]
        for edge in edges:
            graph[edge[0]].append(edge[1])
            graph[edge[1]].append(edge[0])
        coins = [0] * n
        # call DFS and fill coins array
        self.fillCoins(graph, cost, 0, -1, coins)
        return coins
```

# Complexity

## Time Complexity: $O(n)$

**Class X**

- `constructor(s)`: $O(1)$
- `update()`: `posMax` has atmost 3 values and `negMin` has atmost 2 values. Adding two of them will make atmost 6 and 4 values respectively. Sorting them will be $O(6 \\log 6)$ and $O(4 \\log 4)$ respectively. Hence, the function is $O(1)$.
- `product()`: $O(1)$

**Class Solution**

- `fillCoins(root)` visits all $n$ nodes once. In one call, it recursively calls on all child nodes and update information of current node. It has time complexity of $O(V+E)$ in graph terminology. For tree, $V=n$ and $E=n-1$.
- `placedCoins()` makes tree in $O(E)$ time.

## Space Complexity: $O(n)$

- Tree in adjacency list form takes $O(V+E)$ space.
- DFS recursion stack space is $O(V)$ (for skewed tree).

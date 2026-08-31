# Official Solution

**Link:** [https://leetcode.com/problems/maximum-total-importance-of-roads/solution/](https://leetcode.com/problems/maximum-total-importance-of-roads/solution/)

---

## Solution

---

### Approach: Sorting

#### Intuition

We have `N` cities (nodes) numbered `0` to `N-1`, connected by bidirectional roads (edges). Our task is to assign unique values from `1` to `N` to each node, maximizing the total importance of all edges.

Edge importance is defined as the sum of the values of the nodes it connects.

Key observation: A node's value contributes to importance once for each connected edge. This means that nodes with more connections (higher degree) should be assigned higher values.

We can solve the problem in three steps:
1. Calculate the degree of each node (number of connected edges).
2. Sort nodes by degree in ascending order.
3. Assign values `1` to `N` to nodes, starting with the lowest degree.

Note that there might be a case where two or more nodes have the same degree; in such cases, the values assigned to the nodes can be swapped. This is because the importance sum of all the edges will remain the same, as shown in the figure below:

![fig](../Figures/2285/2285A.png)

If we notice now the entire approach we just translated the graph structure into a numerical assignment problem, leveraging the relationship between node connectivity and edge importance.

![fig](../Figures/2285/2285A.png)

#### Algorithm

1. Initialize an array `degree` of size `N` to store the degree of each node. Initially, all values are `0`.
2. Iterate over the list of edges `roads` and increment the degree for each of the nodes the road connects, i.e. `edge[0]` and `edge[1]`.
3. Sort the array `degree` in the ascending order.
4. Initialize the variable `value` to `1`, this will be the value we assign to the nodes.
5. Initialize the variable `totalImportance` to `0` to store the maximum importance of all edges.
6. Iterate over the array `degree` and keep adding the importance as `node degree * assigned value` to the variable `totalImportance`. Also, increment the value `value` to assign it to the next node.
7. Return `totalImportance`.

#### Implementation

<iframe src="https://leetcode.com/playground/8ETbhAuN/shared" frameBorder="0" width="100%" height="429" name="8ETbhAuN"></iframe>

#### Complexity Analysis

Here, $N$ is the number of nodes in the graph.

* Time complexity: $O(N^2)$.

  We iterate over the edges list `roads` to find the degree of each node. In the worst case, the number of edges in the graph could reach $N^2$, assuming an edge exists between every pair of nodes. Assigning degrees thus requires $O(N^2)$ operations.
  Next, sorting the degrees in ascending order takes $O(N \log N)$. Iterating through the degree array to calculate the total importance is an $O(N)$ operation. Therefore, the overall time complexity remains $O(N^2)$.

* Space complexity: $O(N)$

  We need an array of size $N$, `degree`, to keep the edge count of each node. 
  
   Some additional space is required for sorting. The space complexity of the sorting algorithm depends on the programming language.
   - In Python, the `sort` method sorts a list using the Tim Sort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(n)$ additional space. Additionally, Tim Sort is designed to be a stable algorithm.
   - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$ for sorting an array.
   - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log n)$.

   Thus, the inbuilt `sort()` function might add up to $O(\log⁡⁡ N)$ or $O(N)$ to the space complexity.
---
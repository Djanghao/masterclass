# Official Solution

**Link:** [https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solution/](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solution/)

---

[TOC]

## Solution

--- 

### Overview

We have two strings, `s1` and `s2`, of identical length. We need to use equivalence information from these two strings to form the lexicographically smallest string of the given third string, `baseStr`. The characters at respective indices in the two strings are equivalent. So if at index `i` there is a character `c` in `s1` and a character `f` in `s2`, then we can exchange `f` with `c` or vice versa in the string `baseStr`.
</br>

---

### Approach 1: Depth-First Search (DFS)

#### Intuition

This problem can be depicted as a graph problem. Characters can be represented as nodes and the equivalence relation between these characters as an edge between the nodes.

Following this analogy, we can have some connected components. Each character in a component can be converted to any other character in the component. Since we need to find the lexicographically smallest string, we will find the smallest character in the component and convert every other character instance in the `baseStr` to this character. This way, we ensure that each character in the string `baseStr` gets converted to the smallest possible character, and hence we get the smallest string as a whole.

!?!../Documents/1061_Lexicographically_Smallest_Equivalent_String.json:960,720!?!

So, the problem boils down to building the graph and finding the smallest character in each connected component. In the end, we replace the characters in `baseStr` with the corresponding smallest character in its component. In this approach, we will use DFS to find the connected components.

> If you're not familiar with DFS, check out our [Explore card](https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/).

#### Algorithm

1. Create an adjacency matrix `adjMatrix` to store the edges. This matrix will be of size $26 * 26$, as we have only lowercase English letters, with value $1$ at cell `(x, y)` if there is an edge between character `x` and `y`, $0$ otherwise. Also, create an array `visited` that will help us track if a character has been visited by DFS yet.
2. Iterate over all the characters in their integer form (`"a" = 0`, `"b" = 1`, etc.), from $0$ until $25$, and for each character `c`:

    - If `c` is not visited yet (`visited[c] = 0`), perform a DFS starting with `c` and store all the traversed characters in a vector `component`, also store the minimum of all these characters in a variable `minChar`.
    - Iterate over all the characters in `component` and map all these characters to `minChar` in a vector `mappingChar`. This map will store the characters to which the `baseStr` characters will finally map.

3. Iterate over the string `baseStr` and store the mapped character in the string `ans`.
4. Return `ans`.

#### Implementation


<iframe src="https://leetcode.com/playground/buF7LrNq/shared" frameBorder="0" width="100%" height="500" name="buF7LrNq"></iframe>


#### Complexity Analysis

Here, $N$ is the length of strings `s1` and `s2`, $M$ is the length of string `baseStr`, and $|\Sigma|$ is the number of unique characters in `s1` or `s2`, which is $26$ for this problem.

* Time complexity: $O(N + M + |\Sigma|^2)$.

  We first iterate over strings `s1` and `s2`, which costs us $O(N)$. The DFS, in the worst case, will perform $|\Sigma|^2$ number of operations as we iterate over all the $26$ characters and can perform DFS for all of them, leading to another $26$ operations. In the end, we iterate over the string `baseStr` to create the `ans` string; this costs $O(M)$. Therefore, the total time complexity equals $O(N + M + |\Sigma|^2)$.


* Space complexity: $O(|\Sigma|^2)$.

  The adjacency matrix size is $|\Sigma| * |\Sigma| = 26 * 26 = 676$. The size of `mappingChar` and `visited` is also fixed at $|\Sigma|$. The recursion call stack space used by DFS will also be at max $|\Sigma|$, which is one recursive call for each character. Therefore, the total space complexity is $O(|\Sigma|^2)$.

---

### Approach 2: Disjoint Set Union (DSU/Union Find)

#### Intuition

> If you're not familiar with DSU, check out our [Explore card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/).

Another way to find the connected components in a graph is using a Disjoint Set Union (DSU) data structure. Instead of using an adjacency matrix, we will perform a union operation for all the edges. In the end, the nodes that can be converted to each other will be in the same component.

We also need to find the smallest character in each component. For this, we can change how we generally perform the union operation. While merging two components, we will always make the smaller character representative of the whole merged group.

Although generally, we perform union by size to have almost constant time (Inverse Ackermann $\alpha(n)$ to be precise, which is practically $O(1)$) operations, but owing to the smaller constraints ($26$ lowercase English characters), we can still have the constant time complexity. For larger constraints, we can still follow the union by size and have a different method to fetch the components by finding the representative of each character. However, for this problem, we will not use union by size for simplicity and as it's not going to improve the time complexity by much.

#### Algorithm

1. Iterate over all the characters from `0` until `26`, and make each character represent itself in a vector `representative`.
2. Iterate over the characters in `s1` and `s2` and perform the union operation between the characters at their corresponding positions. In the union, we always make the smaller character the representative.
3. Iterate over the characters in the string `baseStr` and map the characters to their representative by calling the `find()` operation and create the answer string `ans`.
4. Return `ans`.

#### Implementation


<iframe src="https://leetcode.com/playground/C8ySgSCz/shared" frameBorder="0" width="100%" height="500" name="C8ySgSCz"></iframe>


#### Complexity Analysis

Here, $N$ is the length of strings `s1` and `s2`, $M$ is the length of string `baseStr`, and $|\Sigma|$ is the number of unique characters in `s1` or `s2`, which is $26$ for this problem.

* Time complexity: $O((N + M) \log |\Sigma| )$.

  We perform the union operation for all the $N$ characters in the strings `s1` and `s2`. Since we didn't use union by size and only have the path compression, the time complexity for the union operation would be equal to $O(\log |\Sigma|)$. Also, we iterate over the characters in `baseStr` and call the `find()` operations which costs $O(M \log |\Sigma|)$ in total. Therefore the total time complexity equals $O((N + M) \log |\Sigma| )$.

* Space complexity: $O(|\Sigma|)$.

  The only space needed is the list of size $|\Sigma|$ `representative` to store the representatives, and hence the total space complexity is constant.


> **Note:** The strings `s1` and `s2`, as per the problem description, can only have lowercase English letters. Therefore, the time complexity of both solutions could also be mentioned as $O(N + M)$, and the space complexity as constant.
---
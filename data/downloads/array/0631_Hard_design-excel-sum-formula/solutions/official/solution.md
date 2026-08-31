# Official Solution

**Link:** [https://leetcode.com/problems/design-excel-sum-formula/solution/](https://leetcode.com/problems/design-excel-sum-formula/solution/)

---

[TOC]

## Solution

---
### Approach 1: Topological Sort

Before discussing the required design, we'll discuss some prerequisites to help ease the understanding of the solution. 

Firstly, we can note that once a formula is applied to any cell in excel, let's say $$C1 = C2 + C3$$, if any change is made to $$C2$$ or $$C3$$, the result to be put into $$C1$$ needs to be evaluated again based on the new values of $$C2$$ and $$C3$$. Further, suppose some other cell, say $$D2$$ is also dependent on $$C1$$ due to some prior formula applied to $$D2$$. Then, when any change is made to, say, $$C2$$, we re-evaluate $$C1$$'s value. Furhter, since $$D2$$ is dependent on $$C1$$, we need to re-evaluate $$D2$$'s value as well. 

Thus, whenever, we make any change to any cell, $$x$$,  we need to determine the cells which are dependent on $$x$$, and update these cells, and further determine the cells which are dependent on the changed cells and so on. We can assume that no cycles are present in the formulas, i.e. Any cell's value won't directly or indirectly be dependent on its own value. 

But, while doing these set of evaluations of the cells to determine their updated values, we need to update the cells in such an order that the cell on which some other cell is dependent is always evaluated prior to the cell which is dependent on the former cell.

In order to do so, we can view the dependence between the cells in the form of a dependency graph, which can be a Directed Graph. Since, no cycles are allowed between the formulas, the graph reduces to a Directed Acyclic Graph. Now, to solve the problem of evaluating the cells in the required order, we can make use of a very well known method specifically used for such problems in Directed Acyclic Graphs, known as the Topological Sorting. 

Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge $$uv$$, vertex $$u$$ comes before $$v$$ in the ordering. For example, a topological sorting of the following graph is `5 4 2 3 1 0`. 

There can be more than one topological sorting for a graph. For example, another topological sorting of the following graph is `4 5 2 3 1 0`. The first vertex in topological sorting is always a vertex with in-degree as 0 (a vertex with no in-coming edges).

![Topological_Sort_Graph](../Figures/631/631_Design_Excel.PNG)


Topological Sorting can be done if we modify the Depth First Search to some extent.  In Depth First Search, we start from a vertex, we first print it and then recursively call DFS for its adjacent vertices. Thus, the DFS obtained for the graph above, starting from node 5, will be `5 2 3 1 0 4`. But, in the case of a topological sort, we can't print a node until all the nodes on which it is dependent have already been printed. 

To solve this problem, we make use of a temporary stack. We do the traversals in the same manner as in DFS, but  we don’t print the current node immediately. Instead, for the current node we do as follows:

* Recursively call topological sorting for all the nodes adjacent to the current node.

* Push the current node onto a stack. 

* Repeat the above process till all the nodes have been considered atleast once. 

* Print the contents of the stack. 

Note that a vertex is pushed to stack only when all of its adjacent(dependent) vertices (and their adjacent(dependent) vertices and so on) are already in stack. Thus, we obtain the correct ordering of the vertices. 

The following animation shows an example of topological sorting for the graph above.

!?!../Documents/631_Topological.json:1000,563!?!

We can make use of the same concept while evaluating the cell values to determine the order in which they need to be evaluated. 

Now, let's discuss how we implement the various required functions. We make use of a simple structure(Class), $$Formula$$, which contains two elements. First, the value of the cell which it represents, $$val$$, and a HashMap, $$cells$$. It is a list of cells on which the current cell's value is dependent. This $$cells$$ hashmap stores the data in the form $$(cellName, count)$$.  $$cellName$$ has the format $$ColRow$$. $$count$$ refers to the number of times the current cell directly or indirectly comes in the current cell's formulas. e.g. $$C1 = C2 + C3 + C2$$. In this case, the frequency of $$C3$$ is 1 and that of $$C2$$ is 2.

* `Excel(int H, char W)` : We simply need to initialize an array of $$Formula$$ with $$H$$ rows and the required number of columns corresponding to $$W$$.

* `set(int row, char column, int val)` : For setting the value of the cell corresponding to the given $$row$$ and $$column$$, we can simply change the value , $$val$$, in the $$Formulas$$ array at the indices corresponding to the current cell. Further, if any new formula is applied to a particular cell, we need to remove  the previously applied formulas on the same cell. This is because two formulas can't be used to determine the value of a cell simultaneously. Now, setting a cell to a particular value can also be seen as a formula e.g. $$C1 = 2$$. Thus, we remove all the $$cells$$ in the $$Formulas$$ for the current cell. Further, when the current cell's value is changed, all the other cells which are dependent on it also need to be evaluated in the correct order. Thus, we make use of Topological Sorting starting with the current cell. We make use of a function `topologicalSort(r, c)` for this purpose.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`topologicalSort(r, c)`: In every call to this function, we traverse over all the cells in the $$Formulas$$ array and further apply topological sorting to all the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cells which are dependent on the current cell(row=r, column=c). To find these cells, we can check the $$cells$$ in the $$Formulas$$ associated with each cell &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and check if the current cell lies in it. After applying Topological sorting to all these dependent cells, we put the current cell onto a $$stack$$. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After doing the topological sorting, the cells on the $$stack$$ lie in the order in which their values should be evaluated given the current dependency chain &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;based on the formulas applied. Thus, we pick up these cells one by one, and evaluate their values. To do the evaluation, we make use of &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`calculate_sum(r, c, cells)`. In this function, we traverse over all the $$cells$$ in the $$Formulas$$ of the current cell(row=r, column=c), and keep on adding &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;their values. When this summing has been done, we update the current cell's value, $$val$$, to the sum just obtained. We keep on doing so till all the cells in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the $$stack$$ have been evaluated.

* `get(int row, char column)` : We can simply obtain the value($$val$$) associated with the current cell's $$Formulas$$. If the cell has never been initialized previously, we can return a 0 value.

* `sum(int row, char column, List of Strings : numbers)` : To implement this function, firstly, we need to expand the given $$numbers$$ to obtain all the cells which need to be added in the current formula. We obtain them, by making use of a `convert` function, which extracts all these cells by doing appropriate expansions based on `:` values. We put all these cells in the $$cells$$ associated with the current cell's $$Formulas$$. We also need to set the current cell's value to a new value based on the current formula added. For this, we make use of `calculate_sum` function as discussed above. We also need to do the topological sorting and evaluate all the cells dependent on the current cell. This is done in the same manner as in the `set` function discussed above. We also need to return the value to which the current cell has been set.


<iframe src="https://leetcode.com/playground/6Xfv2db2/shared" frameBorder="0" width="100%" height="500" name="6Xfv2db2"></iframe>

**Performance Analysis**

* `set` takes $$O\big((r*c)^2\big)$$ time. Here, $$r$$ and $$c$$ refer to the number of rows and columns in the current Excel Form. There can be a maximum of $$O(r*c)$$ formulas for an Excel Form with $$r$$ rows and $$c$$ columns. For each formula, $$r*c$$ time will be needed to find the dependent nodes. Thus, in the worst case, a total of $$O\big((r*c)^2\big)$$ will be needed.

* `sum` takes $$O\big((r*c)^2 + 2*r*c*l\big)$$ time. Here, $$l$$ refers to the number of elements in the  the list of strings used for obtaining the cells required for the current sum. In the worst case, the expansion of each such element requires $$O(r*c)$$ time, leading to $$O(l*r*c)$$ time for expanding $$l$$ such elements. After doing the expansion, `calculate_sum` itself requires $$O(l*r*c)$$ time for traversing over the required elements for obtaining the sum. After this, we need to update all the dependent cells, which requires the use of `set` which itself requires $$O\big((r*c)^2\big)$$ time.

* `get` takes $$O(1)$$ time. 

* The space required will be $$O\big((r*c)^2\big)$$ in the worst case. $$O(r*c)$$ space will be required for the Excel Form itself. For each cell in this form, the $$cells$$ list can contain $$O(r*c)$$ cells.
# Official Solution

**Link:** [https://leetcode.com/problems/binary-tree-nodes/solution/](https://leetcode.com/problems/binary-tree-nodes/solution/)

---

[TOC]

# Solution

---

## pandas

### Approach 1: Utilizing `loc`

This approach efficiently categorizes nodes with straightforward conditional logic and pandas' powerful indexing and conditional selection features. By initially assuming all nodes are "Inner," it simplifies the logic needed to classify nodes as either "Leaf" or "Root," streamlining the process. The method is particularly effective for datasets where vectorized operations provided by pandas can significantly outperform traditional iterative approaches, offering both clarity and performance benefits.

**Visualization of Approach:**

![fig](../Figures/3054/3054-2.png)

#### Intuition

Let's review the intuition behind each step given the following input DataFrames:

Tree DataFrame (`tree`):

| N | P    |
| - | ---- |
| 1 | 2    |
| 3 | 2    |
| 6 | 8    |
| 9 | 8    |
| 2 | 5    |
| 8 | 5    |
<br>

1. **Initializing Node Types:**

- Initially, we label all nodes as "Inner." 

   ```python
   tree["Type"] = "Inner"
   ```
- This is a simplification step that assumes every node could potentially be an inner node before further checks are applied. This step reduces the complexity by eliminating the need for a nested conditional check for nodes that are neither root nor leaf.

| N | P    | Type  |
|---|------|-------|
| 1 | 2    | Inner |
| 3 | 2    | Inner |
| 6 | 8    | Inner |
| 9 | 8    | Inner |
| 2 | 5    | Inner |
| 8 | 5    | Inner |
| 5 | NaN  | Inner |
<br>

2. **Identifying Leaf Nodes:**

- We can label nodes as "Leaf" if they don't have any children and are not parents to any other node.

   ```python
   tree.loc[~tree.N.isin(tree.P), "Type"] = "Leaf"
   ```
- This line uses `.loc` with a condition to find nodes whose values in `N` do not appear in the `P` column (`~tree.N.isin(tree.P)`). 

| N | P    | Type  |
|---|------|-------|
| 1 | 2    | Leaf  |
| 3 | 2    | Leaf  |
| 6 | 8    | Leaf  |
| 9 | 8    | Leaf  |
| 2 | 5    | Inner |
| 8 | 5    | Inner |
| 5 | NaN  | Inner |
<br>

3. **Identifying the Root Node:**

- We can label nodes as "Root" if its parent (`P`) is null.

   ```python
   tree.loc[tree.P.isnull(), "Type"] = "Root"
   ```
- Here, `.loc` is again used to label the node as "Root". 
- This identifies the unique node that doesn't have a parent, which is the root of the tree.

| N | P    | Type  |
|---|------|-------|
| 1 | 2    | Leaf  |
| 3 | 2    | Leaf  |
| 6 | 8    | Leaf  |
| 9 | 8    | Leaf  |
| 2 | 5    | Inner |
| 8 | 5    | Inner |
| 5 | NaN  | Root  |
<br>

4. **Sorting and Returning the Result:**
- The final step is to sort the DataFrame by the `N` column to order the nodes by their values. 
- Only the columns "N" and "Type" are returned, providing a clear, sorted mapping of each node to its type.
   ```python
   return tree[["N", "Type"]].sort_values("N")
   ```

| N | Type  |
|---|-------|
| 1 | Leaf  |
| 2 | Inner |
| 3 | Leaf  |
| 5 | Root  |
| 6 | Leaf  |
| 8 | Inner |
| 9 | Leaf  |
<br>

#### Implementation

<iframe src="https://leetcode.com/playground/UDbnCMcN/shared" frameBorder="0" width="100%" height="208" name="UDbnCMcN"></iframe>

### Approach 2: Utilizing Numpy `where`

This approach efficiently categorizes and displays the nodes of a binary tree according to their structural role using pandas and NumPy functionalities. This method leverages vectorized operations, which are typically faster than looping through rows, especially for larger datasets.

**Visualization of Approach:**

![fig](../Figures/3054/3054-1.png)

#### Intuition

Let's review the intuition behind each step given the following input DataFrames:

Tree DataFrame (`tree`):

| N | P    |
| - | ---- |
| 1 | 2    |
| 3 | 2    |
| 6 | 8    |
| 9 | 8    |
| 2 | 5    |
| 8 | 5    |
<br>

1. **Determining Node Types**

- In this step we determine the type of each node present in the tree.

   ```python
   tree["Type"] = np.where(
           tree["P"].isnull(), "Root", np.where(tree["N"].isin(tree["P"]), "Inner", "Leaf")
       )
   ```
- This line uses nested `np.where` conditions to assign a type to each node.
- `np.where(tree["P"].isnull(), "Root", ...)`: This checks if the `P` (parent) column is null for each node. If a node does not have a parent (`P` is null), it is labeled as "Root". This is because, in a binary tree, the root node is the only node without a parent.
- `np.where(tree["N"].isin(tree["P"]), "Inner", "Leaf")`: For nodes not labeled as "Root", a second `np.where` function checks if a node's value in `N` appears in the `P` column. If it does, the node is an "Inner" node, indicating it has at least one child (it's a parent to another node). If not, the node is labeled as "Leaf", indicating it does not have any children.

| N | P    | Type  |
|---|------|-------|
| 1 | 2    | Leaf  |
| 3 | 2    | Leaf  |
| 6 | 8    | Leaf  |
| 9 | 8    | Leaf  |
| 2 | 5    | Inner |
| 8 | 5    | Inner |
| 5 | NaN  | Root  |
<br>

2. **Sorting and Returning the Result**

- In this step we prepare the final output

   ```python
   return tree.sort_values("N")[["N", "Type"]]
   ```
- The DataFrame `tree` is sorted by the node values (`N`) in ascending order to organize the output. Only the columns "N" and "Type" are included in the final result, which provides a clear mapping of each node to its type.

| N | Type  |
|---|-------|
| 1 | Leaf  |
| 2 | Inner |
| 3 | Leaf  |
| 5 | Root  |
| 6 | Leaf  |
| 8 | Inner |
| 9 | Leaf  |
<br>

#### Implementation

<iframe src="https://leetcode.com/playground/F4sHXogQ/shared" frameBorder="0" width="100%" height="259" name="F4sHXogQ"></iframe>



---

## Database

### Approach: Utlizing `CASE` Statements

The query efficiently categorizes each node in the tree using SQL's conditional logic and subquery features. The use of `CASE` allows for clear, concise determination of each node's type based on its presence or absence in the parent column, as well as whether it has a parent itself. Sorting the results by node value ensures the output is orderly and more comprehensible.

#### Intuition

Let's break down the SQL query step by step and explain the intuition behind each part:

1. **SELECT Statement:**
   - `N,`: This selects the column `N`, which represents the node value in the binary tree.

2. **CASE WHEN Statement:**
   - The `CASE` statement is used to conditionally assign a type to each node based on its relationship with other nodes in the tree.
   - `WHEN P IS NULL THEN "Root"`: This condition checks if the parent column `P` is null. If so, the node is labeled as "Root," because the root of a tree does not have a parent.
   - `WHEN N IN (SELECT P FROM Tree) THEN "Inner"`: This subquery selects all values from the parent column `P`. If the current node's value `N` is found within this selection, it means the node is a parent to at least one other node, and thus, it is labeled as "Inner." This indicates the node has at least one child, making it an internal node of the tree.
   - `ELSE "Leaf"`: If neither of the above conditions is true, the node is labeled as "Leaf." This means the node is not the root and does not have any children, classifying it as a leaf node at the bottom of the tree structure.

3. **FROM Clause:**
   - `FROM Tree`: This specifies the table `Tree` as the source of the data, which contains the binary tree's structure.

4. **ORDER BY Clause:**
   - `ORDER BY N;`: Finally, the query sorts the results by the node value `N` in ascending order. This organizes the output, making it easier to understand the tree's structure sequentially based on node values.

#### Implementation

```mysql []
SELECT
  N,
  CASE
    WHEN P IS NULL THEN
      "Root"
    WHEN N IN (
      SELECT 
        P 
      FROM 
        Tree
    ) THEN
      "Inner"
    ELSE
      "Leaf"
    END as Type
FROM 
  Tree
ORDER BY 
  N;

```
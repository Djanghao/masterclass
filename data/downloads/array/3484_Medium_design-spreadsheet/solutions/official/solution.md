# Official Solution

**Link:** [https://leetcode.com/problems/design-spreadsheet/solution/](https://leetcode.com/problems/design-spreadsheet/solution/)

---

### Approach 1: Simulation

#### Intuition

According to the problem statement, we can directly use a two-dimensional array $\textit{grid}$ with $\textit{rows}$ rows and 26 columns to store the values of the cells. When querying or updating a cell, we simply access the corresponding element in the array. The implementation of the $\text{Spreadsheet}$ class is as follows:

+ Initialization: Call $\text{Spreadsheet(int rows)}$ to create a two-dimensional array $\textit{grid}$ with $\textit{rows}$ rows and 26 columns, initializing all elements to $0$.

+ $\text{void setCell(String cell, int value)}$: Set the value of the specified cell to $\textit{value}$. Parse the row and column indices from the string $\textit{cell}$ according to the rules, and assign $\textit{value}$ to the corresponding entry in $\textit{grid}$.

+ $\text{void resetCell(String cell)}$: Reset the value of the specified cell to $0$. Parse the row and column indices from $\textit{cell}$ and set the corresponding entry in $\textit{grid}$ to $0$.

+ $\text{int getValue(String formula)}$: Compute the value of a formula. The formula format is "=X+Y". Parse $X$ and $Y$ from the string. If the first character of $X$ or $Y$ is a letter, it refers to a cell, and the corresponding value is retrieved from $\textit{grid}$. If the first character is a digit, it represents an integer. Finally, return the sum of the two values.

#### Implementation

<iframe src="https://leetcode.com/playground/CibDRvsP/shared" frameBorder="0" width="100%" height="500" name="CibDRvsP"></iframe>

#### Complexity Analysis

Let $\textit{rows}$ denote the number of rows in the spreadsheet, and let $C = 26$ denote the number of columns.

- Time complexity: Initializing the table takes $O(C \times \textit{rows})$ time, since we must allocate a 2D array of size $\textit{rows} \times 26$. Other operations take $O(1)$ time, since they involve only string parsing and cell lookup.

- Space complexity: $O(C \times \textit{rows})$. Create a two-dimensional array with $\textit{rows}$ rows and $26$ columns, requiring space of $O(C \times \textit{rows})$.

### Approach 2: Hash Table

#### Intuition

Since each cell has a unique identifier, we can store cell values in a hash table. In this case, updating or querying a cell corresponds to updating or retrieving an entry from the hash table. The implementation of the $\text{Spreadsheet}$ class is as follows:

+ Initialization: Call $\text{Spreadsheet(int rows)}$. At this point, simply initialize the hash table $\textit{cellValues}$.

+ $\text{void setCell(String cell, int value)}$: Set the value of the specified cell to $\textit{value}$ by updating the hash table entry corresponding to $\textit{cell}$.

+ $\text{void resetCell(String cell)}$: Reset the value of the specified cell to $0$ by removing the corresponding key from the hash table.

+ $\text{int getValue(String formula)}$: Compute the value of a formula. The format is `"=X+Y"`. Parse $X$ and $Y$. If the first character is a letter, the identifier corresponds to a cell, and the value is retrieved from the hash table. Otherwise, it is treated as an integer. Return the sum of the two values.

#### Implementation

<iframe src="https://leetcode.com/playground/Nwps2jTV/shared" frameBorder="0" width="100%" height="500" name="Nwps2jTV"></iframe>

#### Complexity Analysis

Let $\textit{cellsCount}$ denote the number of non-zero cells, which depends on how many times $\textit{setCell}$ is called.

- Time complexity: All operations run in $O(1)$ time, since they involve only hash table lookups/updates and string parsing.

- Space complexity: $O(\textit{cellsCount})$, as the hash table stores only non-zero cells.

---
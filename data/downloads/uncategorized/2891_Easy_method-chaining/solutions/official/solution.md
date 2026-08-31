# Official Solution

**Link:** [https://leetcode.com/problems/method-chaining/solution/](https://leetcode.com/problems/method-chaining/solution/)

---

[TOC]

## Solution
--- 
### Overview
List the names of animals that weigh strictly more than 100 kilograms, sorted by weight in descending order.

**Key Concepts:**

1. **DataFrame Manipulation with pandas**:
    - **DataFrame**: A two-dimensional, size-mutable, and heterogeneous tabular data structure from the pandas library. Allows for various operations like filtering, sorting, and column selection.
    
2. **Filtering Data**:
    - **Boolean Indexing**: Using boolean conditions to filter rows from a DataFrame. In this problem, we use this technique to select animals that weigh more than 100 kilograms.

3. **Sorting Data**:
    - **sort_values() Method**: A pandas DataFrame method used to sort the data based on one or more columns. In this problem, we sort the animals by their weight in descending order.

4. **Column Selection**:
    - **Subset Selection**: After filtering and sorting, we select a subset of columns from the DataFrame. In this case, we choose only the 'name' column to produce the final list of animal names.

5. **Method Chaining**:
    - **Chaining Operations**: Performing multiple operations on a DataFrame in a single line by connecting methods with dots. This is a powerful feature in pandas, which can make code concise but might be complex to read for newcomers.

6. **Python Functions**:
    - **Function Definition**: We define a function `findHeavyAnimals` to encapsulate our solution and make it reusable. This function takes a DataFrame as an argument and returns another DataFrame as a result.
### Intuition

In the following implementation guide we begin with the initial given DataFrame `animals`:

<table>
    <tr>
        <th>name</th>
        <th>species</th>
        <th>age</th>
        <th>weight</th>
    </tr>
    <tr>
        <td>Tatiana</td>
        <td>Snake</td>
        <td>98</td>
        <td>464</td>
    </tr>
    <tr>
        <td>Khaled</td>
        <td>Giraffe</td>
        <td>50</td>
        <td>41</td>
    </tr>
    <tr>
        <td>Alex</td>
        <td>Leopard</td>
        <td>6</td>
        <td>328</td>
    </tr>
    <tr>
        <td>Jonathan</td>
        <td>Monkey</td>
        <td>45</td>
        <td>463</td>
    </tr>
    <tr>
        <td>Stefan</td>
        <td>Bear</td>
        <td>100</td>
        <td>50</td>
    </tr>
    <tr>
        <td>Tommy</td>
        <td>Panda</td>
        <td>26</td>
        <td>349</td>
    </tr>
</table>
<br>


**Method Chaining Explanation**:

1. **Filtering Operation**:
   We begin by filtering the animals that weigh more than 100 kilograms.
   ```python
   filtered_animals = animals[animals['weight'] > 100]
   ```
 - `animals['weight'] > 100`: This is a boolean indexing operation. For each row in the DataFrame, it checks if the value in the `weight` column is greater than 100. This produces a boolean (`True` or `False`) series.
 - `animals[...]`: By placing our boolean series inside the DataFrame's indexing brackets, we filter out the rows where the condition is `True`.
- After this operation, only rows with animals weighing more than 100 kilograms remain in our DataFrame.

<table>
    <tr>
        <th>name</th>
        <th>species</th>
        <th>age</th>
        <th>weight</th>
    </tr>
    <tr>
        <td>Tatiana</td>
        <td>Snake</td>
        <td>98</td>
        <td>464</td>
    </tr>
    <tr>
        <td>Alex</td>
        <td>Leopard</td>
        <td>6</td>
        <td>328</td>
    </tr>
    <tr>
        <td>Jonathan</td>
        <td>Monkey</td>
        <td>45</td>
        <td>463</td>
    </tr>
    <tr>
        <td>Tommy</td>
        <td>Panda</td>
        <td>26</td>
        <td>349</td>
    </tr>
</table>
<br>

2. **Sorting Operation**:
   Next, we sort these animals based on their weight in descending order.
   ```python
   sorted_animals = filtered_animals.sort_values(by='weight', ascending=False)
   ```
 - `sort_values()`: This is a method applied to DataFrames that allows for sorting based on column values.
 - `by='weight'`: We specify that we want to sort based on the `weight` column.
 - `ascending=False`: By setting this argument to `False`, we indicate that we want the sorting to be in descending order (from the heaviest to lightest).

<table>
    <tr>
        <th>name</th>
        <th>species</th>
        <th>age</th>
        <th>weight</th>
    </tr>
    <tr>
        <td>Tatiana</td>
        <td>Snake</td>
        <td>98</td>
        <td>464</td>
    </tr>
    <tr>
        <td>Jonathan</td>
        <td>Monkey</td>
        <td>45</td>
        <td>463</td>
    </tr>
    <tr>
        <td>Tommy</td>
        <td>Panda</td>
        <td>26</td>
        <td>349</td>
    </tr>
    <tr>
        <td>Alex</td>
        <td>Leopard</td>
        <td>6</td>
        <td>328</td>
    </tr>
</table>
<br>

3. **Selecting the `name` column**:
   Finally, from the sorted DataFrame, we select only the names.
   ```python
   names = sorted_animals[['name']]
   ```
 - After sorting the rows based on the weight, we're only interested in the `name` column for our final result. By using double square brackets `[['name']]`, we select only this column. The double brackets ensure that the result is a DataFrame and not a Series.

<table>
    <tr>
        <th>name</th>
    </tr>
    <tr>
        <td>Tatiana</td>
    </tr>
    <tr>
        <td>Jonathan</td>
    </tr>
    <tr>
        <td>Tommy</td>
    </tr>
    <tr>
        <td>Alex</td>
    </tr>
</table>
<br>


**Visualization of Steps 1-3:**
![fig](../Figures/3307/3307-1.png)

The below code approaches the problem without method chaining. 
```python
def findHeavyAnimals(animals: pd.DataFrame) -> pd.DataFrame:
    filtered_animals = animals[animals['weight'] > 100]
    sorted_animals = filtered_animals.sort_values(by='weight', ascending=False)
    names = sorted_animals[['name']]
    return names
```

Method chaining is useful for creating concise code, but it's crucial to understand each step in the chain for debugging or further development.

### Implementation

<iframe src="https://leetcode.com/playground/g9tod5Zf/shared" frameBorder="0" width="100%" height="140" name="g9tod5Zf"></iframe>
# ✅☑️ Best Pandas Solution with simple meaning of every line

**Author:** sgupta99299
**Votes:** 68
**Link:** [https://leetcode.com/problems/method-chaining/solutions/4920087/](https://leetcode.com/problems/method-chaining/solutions/4920087/)

---



```python
import pandas as pd
```
- `import pandas as pd`: Imports the Pandas library and assigns it the alias `pd`, allowing us to refer to Pandas functions and classes using `pd`.

```python
def findHeavyAnimals(animals: pd.DataFrame) -> pd.DataFrame:
```
- `def findHeavyAnimals(animals: pd.DataFrame) -> pd.DataFrame`: Defines a function named `findHeavyAnimals` that takes one argument, `animals`, which is expected to be a Pandas DataFrame. It specifies that the function returns a Pandas DataFrame. This function appears to filter the DataFrame to find animals whose weight is greater than 100 and return a DataFrame containing only those animals.

```python
    return animals[animals['weight'] > 100].sort_values(['weight'],ascending=False)[['name']]
```
- `return animals[animals['weight'] > 100].sort_values(['weight'],ascending=False)[['name']]`: This line does several operations:
  - `animals['weight'] > 100`: Filters the DataFrame `animals` to select rows where the value in the `'weight'` column is greater than 100. This creates a boolean mask.
  - `animals[...]`: Uses the boolean mask to filter rows from the DataFrame `animals`, keeping only those rows where the weight is greater than 100.
  - `.sort_values(['weight'], ascending=False)`: Sorts the filtered DataFrame by the `'weight'` column in descending order.
  - `[['name']]`: Selects only the `'name'` column from the sorted DataFrame.
  - The entire expression returns a DataFrame containing the names of animals whose weight is greater than 100, sorted by weight in descending order.



# Code
```
import pandas as pd

def findHeavyAnimals(animals: pd.DataFrame) -> pd.DataFrame:
    return animals[animals['weight'] > 100].sort_values(['weight'],ascending=False)[['name']]
```
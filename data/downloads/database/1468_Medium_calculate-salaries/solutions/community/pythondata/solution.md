# Simple Pandas

**Author:** jonnyz
**Votes:** 1
**Link:** [https://leetcode.com/problems/calculate-salaries/solutions/4823942/](https://leetcode.com/problems/calculate-salaries/solutions/4823942/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Create a max_sal column to show the max company salary for every row (aka a Windows Function, aka Transform in Pandas)

Create a tax rate column based on the column above ^

Multiple salary by tax rate to get post-tax salary

*Pandas will round 0.5 down to 0, therefore, apply a lambda function to check whether the remainder = 0.5 or not and hard-code the rounding behavior.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import pandas as pd

def calculate_salaries(salaries: pd.DataFrame) -> pd.DataFrame:
    
    # Find max salary for all companies 
    salaries['max_sal'] = salaries.groupby('company_id')['salary'].transform('max')

    # Create a tax rate column (1 - tax rate)
    salaries['tax_rate'] = salaries['max_sal'].apply(lambda x: 1 if x < 1000 else(.76 if x <= 10000 else (.51)))

    # Multiply salary by tax_rate 
    salaries['post_tax'] = (salaries['salary'] * salaries['tax_rate']).apply(lambda x: round(x) if x % 1 != 0.5 else (np.ceil(x)))

    salaries = salaries.drop(columns=['salary','max_sal','tax_rate']).rename(columns={'post_tax':'salary'})

    return salaries
```
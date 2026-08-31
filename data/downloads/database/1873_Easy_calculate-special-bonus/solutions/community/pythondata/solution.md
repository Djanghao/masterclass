# 🔥💯 Pandas || MySQL: An Effortless and Simple Approach! (With Comments) 🔥💯

**Author:** sriganesh777
**Votes:** 81
**Link:** [https://leetcode.com/problems/calculate-special-bonus/solutions/3853095/](https://leetcode.com/problems/calculate-special-bonus/solutions/3853095/)

---

# Pandas Code
```
import pandas as pd

def calculate_special_bonus(employees: pd.DataFrame) -> pd.DataFrame:
    # Create a new column 'bonus' with default value 0
    employees['bonus'] = 0
    
    # Calculate bonus based on the conditions
    employees.loc[(employees['employee_id'] % 2 != 0) & (~employees['name'].str.startswith('M')), 'bonus'] = employees['salary']
    
    # Select only the required columns and sort the result table by employee_id in ascending order
    result_df = employees[['employee_id', 'bonus']].sort_values(by='employee_id', ascending=True)
    
    return result_df
```
# MySQL
```
SELECT employee_id, 
       IF( employee_id % 2 != 0 AND LEFT(name, 1) <> 'M', salary, 0) as bonus
FROM Employees
ORDER BY employee_id;
```
In the MySQL query, we use the IF function to calculate the bonus based on the conditions specified. If the employee_id is an odd number and the first character of the name is not 'M', then the bonus is set to the salary, otherwise, it is set to 0. We then select the employee_id and the calculated bonus and order the result table by employee_id in ascending order.
![upvote img.jpg](./images/0.jpeg)

# 🔥💯 Pandas || MySQL: An Effortless and Simple Approach! (With Comments and Explanation) 🔥💯

**Author:** sriganesh777
**Votes:** 105
**Link:** [https://leetcode.com/problems/patients-with-a-condition/solutions/3853981/](https://leetcode.com/problems/patients-with-a-condition/solutions/3853981/)

---

# Pandas Approach
- Use the str.contains() method to find patients with Type I Diabetes:
```
patients_with_diabetes = patients[patients['conditions'].str.contains(r'\\bDIAB1')]

```
The str.contains() method with the regex pattern r'\\bDIAB1' checks each entry in the 'conditions' column for the presence of 'DIAB1'. The \\b in the pattern is a word boundary assertion that ensures 'DIAB1' is a separate word and not part of another word. This ensures that we only get patients with Type I Diabetes and not other conditions that might contain 'DIAB1' as part of the word.

- Select only the required columns in the result DataFrame:
```
 result_df = patients_with_diabetes[['patient_id', 'patient_name', 'conditions']]
```
The result_df DataFrame contains only the 'patient_id', 'patient_name', and 'conditions' columns for patients with Type I Diabetes.

# Pandas Code
```
import pandas as pd

def find_patients(patients: pd.DataFrame) -> pd.DataFrame:
    # Use the str.contains() method to find patients with Type I Diabetes
    patients_with_diabetes = patients[patients['conditions'].str.contains(r'\\bDIAB1')]
    
    # Select only the required columns
    result_df = patients_with_diabetes[['patient_id', 'patient_name', 'conditions']]
    
    return result_df
```
# MySQL Query
```
SELECT patient_id, patient_name, conditions
FROM Patients
WHERE conditions LIKE 'DIAB1%' OR conditions LIKE '% DIAB1%';
```
# Explanation
- `SELECT patient_id, patient_name, conditions:` This part of the query selects the columns 'patient_id', 'patient_name', and 'conditions' from the 'Patients' table.

- `FROM Patients:` This specifies the table from which we are selecting the data, which is the 'Patients' table in this case.

- `WHERE conditions LIKE 'DIAB1%' OR conditions LIKE '% DIAB1%':` This is the condition for filtering the rows. The query retrieves rows from the 'Patients' table that meet either of the two conditions:

1. `conditions LIKE 'DIAB1%':` This condition matches rows where the 'conditions' column starts with the string 'DIAB1'. The % wildcard is used to match any sequence of characters after 'DIAB1'. So, this part of the condition will match rows where 'conditions' is exactly 'DIAB1' or starts with 'DIAB1' followed by any characters.

2. `conditions LIKE '% DIAB1%':` This condition matches rows where the 'conditions' column contains the string ' DIAB1'. The % wildcard at the beginning allows for any characters before ' DIAB1', and the % wildcard at the end allows for any characters after ' DIAB1'. This part of the condition will match rows where 'conditions' contains ' DIAB1' as a separate word, with spaces before and after it.

By using the OR operator between the two conditions, the query retrieves rows that meet either of these conditions. It will return rows where the 'conditions' column starts with 'DIAB1' or contains ' DIAB1' as a separate word.

In summary, the SQL query selects the 'patient_id', 'patient_name', and 'conditions' columns from the 'Patients' table for patients who have Type I Diabetes. Type I Diabetes is identified based on the condition that the 'conditions' column either starts with 'DIAB1' or contains ' DIAB1' as a separate word.
![upvote img.jpg](./images/0.jpeg)

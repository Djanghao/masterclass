# Official Solution

**Link:** [https://leetcode.com/problems/patients-with-a-condition/solution/](https://leetcode.com/problems/patients-with-a-condition/solution/)

---

[TOC]

# Solution

---

## pandas

### Overview

We need to identify patients who have a specific medical condition: Type I Diabetes. The condition codes are stored in a space-separated string. If a condition code starts with `"DIAB1"`, it indicates Type I Diabetes.

---

### Approach 1: Using Regular Expression Word Boundaries or Spaces

#### Intuition

If you are not familiar with regular expressions, check out problem [1517](https://leetcode.com/problems/find-users-with-valid-e-mails/) first.

When working with textual data in Pandas, regular expressions (regex) are a powerful tool for pattern matching within strings. For this problem, our objective is to identify patients diagnosed with Type I Diabetes based on their condition codes. The codes are stored within a space-separated string in the `conditions` column of a DataFrame.

Type I Diabetes is indicated by codes that start with "DIAB1". We need to account for two cases:
1. The condition string starts with "DIAB1".
2. "DIAB1" starts after a space within the condition string.

To handle both cases, we use a regular expression that matches either the start of the string or the presence of a space before "DIAB1". The updated regex pattern `(^|\s)DIAB1` ensures we match Type I Diabetes whether it appears at the start of the string or after a space.

Using Pandas' `.str.contains()` method with this regex pattern allows us to filter the DataFrame to only include rows where the `conditions` column contains a condition code starting with "DIAB1" at the appropriate positions, thus identifying patients with Type I Diabetes.

#### Implementation

<iframe src="https://leetcode.com/playground/Ue44Xhu7/shared" frameBorder="0" width="100%" height="123" name="Ue44Xhu7"></iframe>

---

### Approach 2: Without Using Regular Expressions

#### Intuition

If you are not familiar with regular expressions, no worries, the problem can still be solved! We can do so by breaking the problem down into the cases that we need to consider.

This problem boils down to two cases:

1. The condition code starts with `"DIAB1"`.

    **Result Table:**

    ```
    +------------+--------------+--------------+
    | patient_id | patient_name | conditions   |
    +------------+--------------+--------------+
    | 3          | Bob          | DIAB100 MYOP |
    +------------+--------------+--------------+
    ```

2. The condition code contains `" DIAB1"` where there is a space in front.

    **Result Table:**

    ```
    +------------+--------------+--------------+
    | patient_id | patient_name | conditions   |
    +------------+--------------+--------------+
    | 4          | George       | ACNE DIAB100 | 
    +------------+--------------+--------------+
    ```

These are the only ways that a condition code can indicate Type I Diabetes. Therefore, we can simply check for these two cases.


#### Implementation

<iframe src="https://leetcode.com/playground/NsEoBPVo/shared" frameBorder="0" width="100%" height="123" name="NsEoBPVo"></iframe>


**Result Table:**
```
+------------+--------------+--------------+
| patient_id | patient_name | conditions   |
+------------+--------------+--------------+
| 3          | Bob          | DIAB100 MYOP |
| 4          | George       | ACNE DIAB100 | 
+------------+--------------+--------------+
```

---


## Database

### Approach 1: Using Regular Expression Word Boundaries or Spaces

#### Intuition

If you are not familiar with regular expressions, check out problem [1517](https://leetcode.com/problems/find-users-with-valid-e-mails/) first.

In SQL, regular expressions provide a flexible way to search for patterns within text columns. For this problem, we aim to select records of patients who have Type I Diabetes, which is identified by condition codes starting with "DIAB1". These codes are part of a space-separated list in the `conditions` column.

To handle both cases:
1. The condition starts with `"DIAB1"`.
2. `"DIAB1"` is preceded by a space in the string.

The challenge lies in accurately identifying codes that start with "DIAB1" without accidentally selecting codes that contain it in the middle of another word. We can use regular expressions with word boundaries or spaces in our SQL query. The `REGEXP` operator in SQL, with the pattern `(^|[[:space:]])DIAB1.*`, ensures that we match Type I Diabetes codes whether they appear at the start or after a space.

#### Implementation

```mysql []
SELECT patient_id, patient_name, conditions
FROM Patients
WHERE conditions REGEXP '(^|[[:space:]])DIAB1';
```
---

<br>

### Approach 2: Without Using Regular Expressions

If you are not familiar with regular expressions, no worries, the problem can still be solved! We can do so by breaking the problem down into the cases that we need to consider.

#### Intuition

This problem boils down to two cases:

1. The condition code starts with `"DIAB1"`.

    **Result Table:**
    ```
    +------------+--------------+--------------+
    | patient_id | patient_name | conditions   |
    +------------+--------------+--------------+
    | 3          | Bob          | DIAB100 MYOP |
    +------------+--------------+--------------+
    ```

1. The condition code contains `" DIAB1"` where there is a space in front.

    **Result Table:**
    ```
    +------------+--------------+--------------+
    | patient_id | patient_name | conditions   |
    +------------+--------------+--------------+
    | 4          | George       | ACNE DIAB100 | 
    +------------+--------------+--------------+
    ```

These are the only ways that a condition code can indicate Type I Diabetes. Therefore, we can simply check for these two cases.


#### Implementation

```mysql []
SELECT patient_id, patient_name, conditions
FROM Patients
WHERE conditions LIKE 'DIAB1%' OR conditions LIKE '% DIAB1%';
```

**Result Table:**
```
+------------+--------------+--------------+
| patient_id | patient_name | conditions   |
+------------+--------------+--------------+
| 3          | Bob          | DIAB100 MYOP |
| 4          | George       | ACNE DIAB100 | 
+------------+--------------+--------------+
```
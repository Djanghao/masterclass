# Beats 100% |  All Details mentioned | MySQL, SQL server, Oracle | Best Solution |

**Author:** Ikapoor123
**Votes:** 5
**Link:** [https://leetcode.com/problems/patients-with-a-condition/solutions/4724897/](https://leetcode.com/problems/patients-with-a-condition/solutions/4724897/)

---

# Please Upvote !!


 - select *: Selects all columns from the specified table.
 - from Patients: Specifies the table to retrieve data from (Patients).
 - where: Introduces the filtering condition.
 - conditions REGEXP: Applies the regular expression operator (REGEXP) to the conditions column.
 - '\\bDIAB1': Defines the regular expression pattern:
 - \\b: Matches a word boundary (ensuring "DIAB1" isn't part of a larger word).
 - DIAB1: Matches the literal string "DIAB1".

# Code
```
select * from Patients where conditions REGEXP '\\\\bDIAB1';
```
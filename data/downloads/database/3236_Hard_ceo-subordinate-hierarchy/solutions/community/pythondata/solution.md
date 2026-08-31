# pandas ||| bfs, w/ comments || T/S: 84% / 22%

**Author:** Spaulding_
**Votes:** 0
**Link:** [https://leetcode.com/problems/ceo-subordinate-hierarchy/solutions/5555477/](https://leetcode.com/problems/ceo-subordinate-hierarchy/solutions/5555477/)

---


```
import pandas as pd

def find_subordinates(employees: pd.DataFrame) -> pd.DataFrame:

                            # there's a testcase with no managers, thus, this hack
    if not (set(employees.employee_id) & set(employees.manager_id)):
        return pd.DataFrame(columns=['subordinate_id', 'subordinate_name',
                                     'hierarchy_level', 'salary_difference'])

    tree, levels = defaultdict(list), []

                            # identify the CEO
    ceo = employees[employees.manager_id.isna()]

                            # determine the salary differences
    employees['salary_difference'] = employees.salary.apply(lambda x: x - ceo.salary.iloc[0])

                            # build the management tree
    for supID, empID in zip(employees.manager_id, employees.employee_id):
        tree[supID].append(empID)

                            # initiate the bfs on tree with CEO and determine levels 
    bfs = [ceo.employee_id.iloc[0]] 

    for i in range(1,len(employees)):
        bfs = list(chain(*[tree[sup] for sup in bfs]))
        if bfs == []: break
        levels.extend([(i,x) for x in bfs])

                            # build df with two columns from bfs to show management levels
    level, id = zip(*levels)
    df = pd.DataFrame({'employee_id':id, 'hierarchy_level':level})

                            # merge with df with employees, rename and reorder columns
    return df.merge(employees,how = 'left', on = 'employee_id'
            ).rename(columns = {'employee_id': 'subordinate_id',
                              'employee_name':'subordinate_name'}
            ).iloc[:,[0,2,1,5]]
```
[https://leetcode.com/problems/ceo-subordinate-hierarchy/submissions/1337709986/?submissionId=1337710936](https://leetcode.com/problems/ceo-subordinate-hierarchy/submissions/1337709986/?submissionId=1337710936)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(employees)`.

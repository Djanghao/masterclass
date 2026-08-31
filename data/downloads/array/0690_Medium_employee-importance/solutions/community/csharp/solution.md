# Beats 80% | Sum of subtree

**Author:** cPej6S40ao
**Votes:** 0
**Link:** [https://leetcode.com/problems/employee-importance/solutions/5965539/](https://leetcode.com/problems/employee-importance/solutions/5965539/)

---

# Code
```csharp []
/*
// Definition for Employee.
class Employee {
    public int id;
    public int importance;
    public IList<int> subordinates;
}
*/

// Basically sum of the subtree of the ID given
class Solution {
    public int GetImportance(IList<Employee> employees, int id) {
        Dictionary<int, bool> subordinates = new Dictionary<int, bool>();
        subordinates.Add(id, false);
        int sum = 0;
        int count = 0;

        while(true)
        {
            foreach(var employee in employees)
            {
                if(subordinates.ContainsKey(employee.id) && subordinates[employee.id] == false)
                {
                    subordinates[employee.id] = true;
                    sum+=employee.importance;
                    count++;

                    // adding all the subordinates
                    for(int i=0;i<employee.subordinates.Count;i++)
                    {
                        if(!subordinates.ContainsKey(employee.subordinates[i]))
                        {
                            subordinates.Add(employee.subordinates[i], false);
                        }
                    }
                }
            }

            if(count == subordinates.Count) break;
        }
        return sum;
    }
}
```
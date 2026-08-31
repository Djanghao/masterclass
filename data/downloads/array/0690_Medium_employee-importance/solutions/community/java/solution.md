# Java DFS - Simple 8 lines of code, Beats 99.9% submissions

**Author:** pandak91
**Votes:** 12
**Link:** [https://leetcode.com/problems/employee-importance/solutions/2154060/](https://leetcode.com/problems/employee-importance/solutions/2154060/)

---

```
class Solution {
    public int getImportance(List<Employee> employees, int id) {
        Map<Integer, Employee> inputMap = new HashMap<>();
		// Construct HashMap as getting the employee from id is difficult in a list
		for(Employee e : employees) {
			inputMap.put(e.id, e);
		}
		return helper(inputMap, id);
	}

	private static int helper(Map<Integer, Employee> inputMap, int id) {
		//Get the importance of the employee
		int imp = inputMap.get(id).importance;
		
		//Add importance of subordinates to employee importance
		for(int subId : inputMap.get(id).subordinates) {
			imp += helper(inputMap, subId);
		}
		
		return imp;
	}
}
```
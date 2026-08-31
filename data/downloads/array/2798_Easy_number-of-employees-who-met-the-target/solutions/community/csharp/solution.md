# 🎯 Meeting Employee Targets

**Author:** phistellar
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3839171/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3839171/)

---

# Intuition
After watching a fantastic video tutorial by vanAmsen on YouTube, I was inspired to dive into problem 2798 [Number of Employees Who Met the Target](https://youtu.be/Eav1XxXCPMY). My initial thought was that it's a counting problem at its core. We need to count the number of employees who have worked for at least a given number of hours (i.e., the target). A simple loop or a list comprehension in Python can easily solve this problem.

# Approach
The approach we're taking here is to use Python's powerful list comprehension feature. We iterate over the `hours` list and select only those hours that are greater than or equal to the `target`. The selected hours are placed into a new list. The length of this list gives us the number of employees who met the target. The `len()` function in Python returns the number of items in a list, which is exactly what we need.

# Complexity
- Time complexity: \\(O(n)\\)  
The time complexity of this solution is \\(O(n)\\), where \\(n\\) is the number of employees. This is because we need to iterate over the entire `hours` list once.

- Space complexity: \\(O(n)\\)  
The space complexity is also \\(O(n)\\). In the worst-case scenario, all employees meet the target, and we end up creating a new list of the same size as the input list.

In the code above, `[hour for hour in hours if hour >= target]` is a list comprehension that creates a new list containing only the hours that are greater than or equal to the target. The `len()` function then returns the length of this list, which is the number of employees who met the target. This function effectively solves the problem using a simple and efficient approach.

# Code
``` Python []
class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
        return len([hour for hour in hours if hour >= target]) 
               
```
``` C++ []
class Solution {
public:
    int numberOfEmployeesWhoMetTarget(vector<int>& hours, int target) {
        int count = 0;
        for (int hour : hours) {
            if (hour >= target) count++;
        }
        return count;
    }
};
```
``` Java []
class Solution {
    public int numberOfEmployeesWhoMetTarget(int[] hours, int target) {
        int count = 0;
        for (int hour : hours) {
            if (hour >= target) count++;
        }
        return count;       
    }
}
```
``` JavaScript []
/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;
    for (let hour of hours) {
        if (hour >= target) count++;
    }
    return count;
};
```
``` C# []
public class Solution {
    public int NumberOfEmployeesWhoMetTarget(int[] hours, int target) {
        int count = 0;
        foreach (int hour in hours) {
            if (hour >= target) count++;
        }
        return count;
    }
}
```
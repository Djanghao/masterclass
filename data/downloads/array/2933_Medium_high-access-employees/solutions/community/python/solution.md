# PYTHON EASY SOLUTION

**Author:** Teki76
**Votes:** 0
**Link:** [https://leetcode.com/problems/high-access-employees/solutions/5961027/](https://leetcode.com/problems/high-access-employees/solutions/5961027/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The idea is to keep track of the swipe times for each employee, sorting the times to check if three swipes occurred within 100 minutes of each other.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create a dictionary to store the swipe times for each employee.
2. For each employee, sort their swipe times.
3. Check for any three consecutive swipes that happened within 100 minutes.
4. If such swipes exist, add the employee to the result list.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
  Sorting the times for each employee takes $$O(n log(n))$$ , and checking for the 100-minute window takes $$O(n)$$ . So, the overall time complexity is approximately $$O(n log(n))$$, where $$n$$  is the number of swipe entries for each employee.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
  The space complexity is $$O(n)$$, as we store all swipe times in the dictionary.







# Code
```python
class Solution:
    def findHighAccessEmployees(self, access_times: List[List[str]]) -> List[str]:
        # Create a dictionary to store the swipe times for each employee
        rec = {}
        for swipe in access_times:
            # a is the employee name, b is the swipe time
            a, b = swipe[0], swipe[1]
            # Get the existing list of times for the employee, or create an empty list if not present
            arr = rec.get(a, [])
            # Append the new swipe time to the employee's list
            arr.append(b)
            # Update the dictionary with the new list of times
            rec[a] = arr

        ans = []  # This will store the employees who meet the condition
        for e in rec:
            # Get the swipe times for the employee
            times = rec[e]
            # Sort the swipe times in ascending order to check consecutive times
            times.sort()

            flag = False  # This flag will indicate if the employee meets the condition
            # Loop through the sorted times, but stop 2 elements before the end since we're checking in groups of 3
            for i in range(len(times) - 2):
                # Calculate the maximum allowed time for a valid swipe window (100 minutes from the current time)
                maxtime = int(times[i]) + 100
                # Check if the third swipe (times[i+2]) happens within the 100-minute window
                # If true, set flag to True (using bitwise OR for cumulative results)
                flag |= int(times[i+2]) < maxtime

            # If the flag is set (meaning there are 3 swipes within 100 minutes), add the employee to the result
            if flag:
                ans.append(e)

        # Return the list of employees who meet the condition
        return ans
```

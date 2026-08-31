# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3941173/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3941173/)

---

# Intuition
Ask GPT-4

# Approach
Ask GPT-4

# Complexity
- Time complexity:
I have no idea. GPT-4 solved it for me.

- Space complexity:
I have no idea. GPT-4 solved it for me.

# Code
```
-spec number_of_employees_who_met_target(Hours :: [integer()], Target :: integer()) -> integer().
number_of_employees_who_met_target(Hours, Target) ->
    % Using the lists:filter function to filter out employees who worked at least Target hours
    EmployeesMetTarget = lists:filter(fun(Hour) -> Hour >= Target end, Hours),
    % The length function returns the number of employees who met the target
    length(EmployeesMetTarget).
```
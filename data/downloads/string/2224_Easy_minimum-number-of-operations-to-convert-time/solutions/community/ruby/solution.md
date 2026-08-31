# Simple solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/5125489/](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/5125489/)

---


# Code
```
# @param {String} current
# @param {String} correct
# @return {Integer}
def convert_time(current, correct)

    answer = 0
    hours = current[0..1].to_i
    minutes = current[3..-1].to_i
    goal_hours = correct[0..1].to_i
    goal_minutes = correct[3..-1].to_i
    if minutes > goal_minutes
        goal_minutes += 60
    end

    while minutes != goal_minutes
        # Increase minutes to lap an hour.
        diff = goal_minutes - minutes
        if diff >= 15
            minutes += 15
        elsif diff >= 5
            minutes += 5
        elsif diff >= 1
            minutes += 1
        end

        answer += 1
    end

    if minutes > 59
        hours += 1
    end

    answer += (goal_hours - hours)
    answer 
end
```
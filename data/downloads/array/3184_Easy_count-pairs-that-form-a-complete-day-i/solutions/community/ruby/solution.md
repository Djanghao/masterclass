# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5322647/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5322647/)

---


# Code
```
# @param {Integer[]} hours
# @return {Integer}
def count_complete_day_pairs(hours)
    answer = 0
    i = 0
    while i < hours.size
        j = i + 1
        while j < hours.size
            if (hours[i] + hours[j]) % 24 == 0
                answer += 1
            end
            j += 1
        end
        i += 1
    end
    answer
end
```
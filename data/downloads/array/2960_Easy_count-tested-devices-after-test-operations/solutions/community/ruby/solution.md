# One loop, O(n), O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/5031834/](https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/5031834/)

---


# Code
```
# @param {Integer[]} battery_percentages
# @return {Integer}
def count_tested_devices(battery_percentages)
    decrease_all = 0
    answer = 0
    i = 0
    while i < battery_percentages.size
        battery_percentages[i] -= decrease_all
        if battery_percentages[i] > 0
            answer += 1
            decrease_all += 1
        end
        i += 1
    end
    
    answer
end
```
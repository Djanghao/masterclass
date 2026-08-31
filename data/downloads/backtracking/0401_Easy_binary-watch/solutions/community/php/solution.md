# Just loops (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-watch/solutions/5340464/](https://leetcode.com/problems/binary-watch/solutions/5340464/)

---

# Approach
The approach of this solution is to iterate over all possible hours (0-11) and minutes (0-59) and check if the number of turned-on LEDs matches the input. If it does, the time is formatted and added to the result list.

# Complexity
- Time complexity:
$$O(12 * 60)$$ because there are 12 possible hours and 60 possible minutes.

- Space complexity:
$$O(12 * 60)$$ because the result list can grow up to 12 * 60 elements.

# Code
``` python3 []
class Solution:
    def readBinaryWatch(self, turnedOn: int) -> List[str]:
        res = []
    
        # Iterate over all possible hours (0-11)
        for hour in range(12):
            # Iterate over all possible minutes (0-59)
            for minute in range(60):
                # Check if the number of turned-on LEDs matches the input
                if bin(hour).count('1') + bin(minute).count('1') == turnedOn:
                    # Format the time string and add it to the result list
                    if minute < 10:
                        res.append(f"{hour}:0{minute}")
                    else:
                        res.append(f"{hour}:{minute}")
        
        # Return the list of all possible times
        return res
```
``` javascript []
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    let res = [];
    
    // Iterate over all possible hours (0-11)
    for (let hour = 0; hour < 12; hour++) {
        // Iterate over all possible minutes (0-59)
        for (let minute = 0; minute < 60; minute++) {
            // Check if the number of turned-on LEDs matches the input
            if (hour.toString(2).split('1').length - 1 + minute.toString(2).split('1').length - 1 === turnedOn) {
                // Format the time string and add it to the result list
                if (minute < 10) {
                    res.push(`${hour}:0${minute}`);
                } else {
                    res.push(`${hour}:${minute}`);
                }
            }
        }
    }
    
    // Return the list of all possible times
    return res;
};
```
``` php []
class Solution {

    /**
     * @param Integer $turnedOn
     * @return String[]
     */
    function readBinaryWatch($turnedOn) {
        $res = [];
    
        // Iterate over all possible hours (0-11)
        for ($hour = 0; $hour < 12; $hour++) {
            // Iterate over all possible minutes (0-59)
            for ($minute = 0; $minute < 60; $minute++) {
                // Check if the number of turned-on LEDs matches the input
                if (substr_count(decbin($hour), '1') + substr_count(decbin($minute), '1') == $turnedOn) {
                    // Format the time string and add it to the result list
                    if ($minute < 10) {
                        $res[] = "$hour:0$minute";
                    } else {
                        $res[] = "$hour:$minute";
                    }
                }
            }
        }
        
        // Return the list of all possible times
        return $res;
    }
}
```
# Sliding window (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-ii/solutions/5429792/](https://leetcode.com/problems/alternating-groups-ii/solutions/5429792/)

---

# Approach
This solution is using a sliding window approach. In a sliding window approach, we define a window of fixed size and slide it over the input data. 

The sliding window is defined by the start and end indices. The start index represents the beginning of the current alternating group, and the end index represents the end of the current alternating group.

The code iterates over the circle, considering k contiguous tiles at a time. It checks if the current tile has the same color as the previous tile. If they have the same color, it updates the start and end indices. Otherwise, it updates the end index.

If the current group has size k-1 or k, it is considered an alternating group. In this case, the start and end indices are incremented, and the count is incremented by 1.

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the colors list. This is because the code iterates over the circle once, considering k contiguous tiles at a time.

- Space complexity:
$$O(1)$$, as the code only uses a constant amount of additional memory. It uses a few variables to keep track of the start, end, and count indices, which do not depend on the size of the input.

# Code
``` python3 []
class Solution:
    def numberOfAlternatingGroups(self, colors: List[int], k: int) -> int:
        count = 0
        # The index of the start of the current alternating group
        start = 0
        # The index of the end of the current alternating group
        end = 0
        
        # Iterate over the circle, considering k contiguous tiles at a time
        for i in range(1, len(colors) + k - 1):
            current_index = i % len(colors)
            previous_index = (i - 1 + len(colors)) % len(colors)

            # If the current tile has the same color as the previous tile, 
            # update the start and end indices
            if colors[current_index] == colors[previous_index]:
                start = current_index
                end = start
            else:
                end = current_index
                
                # If the current group has size k-1 or k, it is an alternating group
                if (end - start == k - 1) or (len(colors) + end - start == k - 1):
                    start += 1
                    end += 1
                    count += 1
                    
        return count

```
``` javascript []
/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    let count = 0;
    // The index of the start of the current alternating group
    let start = 0;
    // The index of the end of the current alternating group
    let end = 0;

    for (let i = 1; i < colors.length + k - 1; i++) {
        let current_index = i % colors.length;
        let previous_index = (i - 1 + colors.length) % colors.length;

        // If the current tile has the same color as the previous tile, 
        // update the start and end indices
        if (colors[current_index] === colors[previous_index]) {
            start = current_index;
            end = start;
        } else {
            end = current_index;

            // If the current group has size k-1 or k, it is an alternating group
            if (end - start === k - 1 || colors.length + end - start === k - 1) {
                start += 1;
                end += 1;
                count += 1;
            }
        }
    }

    return count;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $colors
     * @param Integer $k
     * @return Integer
     */
    function numberOfAlternatingGroups($colors, $k) {
        $count = 0;
        // The index of the start of the current alternating group
        $start = 0;
        // The index of the end of the current alternating group
        $end = 0;

        for ($i = 1; $i < count($colors) + $k - 1; $i++) {
            $current_index = $i % count($colors);
            $previous_index = ($i - 1 + count($colors)) % count($colors);

            // If the current tile has the same color as the previous tile, 
            // update the start and end indices
            if ($colors[$current_index] === $colors[$previous_index]) {
                $start = $current_index;
                $end = $start;
            } else {
                $end = $current_index;

                // If the current group has size k-1 or k, it is an alternating group
                if ($end - $start === $k - 1 || count($colors) + $end - $start === $k - 1) {
                    $start += 1;
                    $end += 1;
                    $count += 1;
                }
            }
        }

        return $count;
    }
}
```
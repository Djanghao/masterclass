# Ruby solution beats 100%.

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/crawler-log-folder/solutions/5457170/](https://leetcode.com/problems/crawler-log-folder/solutions/5457170/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String[]} logs
# @return {Integer}
def min_operations(logs)
    folder_depth = 0

    # Iterate through each log operation
    logs.each do |current_operation|
        # Go up one directory if "../" is encountered, but don't go above the root
        if current_operation == "../"
            folder_depth = [0, folder_depth - 1].max
        # Increase depth if the log is not 'stay in the current directory'
        elsif current_operation != "./"
            # Go down one directory
            folder_depth += 1
        # Ignore "./" operations as they don't change the current folder
        end
    end

    return folder_depth
end
```
# Beats 100% | Detailed Explanation

**Author:** amitbasuri123
**Votes:** 0
**Link:** [https://leetcode.com/problems/reorder-data-in-log-files/solutions/4589737/](https://leetcode.com/problems/reorder-data-in-log-files/solutions/4589737/)

---

# Intuition
The problem involves reordering log files based on specific rules for letter-logs and digit-logs. The key is to correctly identify and separate these two types of logs and then apply the sorting criteria. Letter-logs should be sorted lexicographically by their contents and then by their identifiers if the contents are the same, while digit-logs should maintain their original order.

# Approach
1. **Separate Logs**: First, split the logs into two groups - letter-logs and digit-logs.
2. **Custom Sorting for Letter-Logs**: Implement a custom sorting function for letter-logs. This involves sorting them lexicographically by their contents. If contents are the same, sort by their identifiers.
3. **Maintain Order of Digit-Logs**: Since digit-logs should retain their original order, no sorting is needed for them.
4. **Merge Logs**: Finally, concatenate the sorted letter-logs with the digit-logs in their original order to form the final array.

# Complexity
- Time complexity: $$O(N \\log N)$$, where $$N$$ is the number of logs. The sorting algorithm dominates the time complexity.
- Space complexity: $$O(N)$$ for storing the separated letter-logs and digit-logs.

# Code
```Go []
func isDigit(c byte) bool {
    return c >= '0' && c <= '9' 
}

func reorderLogFiles(logs []string) []string {
    sort.SliceStable(logs, func(i, j int) bool {
        l1 := strings.SplitN(logs[i], " ", 2)
        l2 := strings.SplitN(logs[j], " ", 2)

        digit1 := isDigit(l1[1][0])
        digit2 := isDigit(l2[1][0])

        if digit1 && digit2 {
            return false // Keep original order
        } else if digit1 {
            return false // Place digit logs after
        } else if digit2 {
            return true // Place letter logs before
        }

        if l1[1] == l2[1] {
            return l1[0] < l2[0] // Sort by identifier if contents are same
        }
        return l1[1] < l2[1] // Sort by content
    })
    return logs
}
```
```python []
class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        def get_key(log):
            identifier, rest = log.split(" ", 1)
            return (0, rest, identifier) if rest[0].isalpha() else (1,)

    return sorted(logs, key=get_key)


```
```rust []
use std::cmp::Ordering;


impl Solution {
    pub fn reorder_log_files(logs: Vec<String>) -> Vec<String> {
        let mut logs = logs;

        // Define a closure to determine if a log is a digit log
        let is_digit_log = |s: &str| s.split_whitespace().nth(1).unwrap().chars().next().unwrap().is_digit(10);

        // Sort the logs using a custom comparison function
        logs.sort_by(|a, b| {
            let a_split = a.find(' ').unwrap();
            let b_split = b.find(' ').unwrap();

            let (a_id, a_log) = a.split_at(a_split);
            let (b_id, b_log) = b.split_at(b_split);

            let a_is_digit = is_digit_log(a);
            let b_is_digit = is_digit_log(b);

            match (a_is_digit, b_is_digit) {
                // For two digit-logs, maintain the original order
                (true, true) => Ordering::Equal,

                // For two letter-logs, sort by log content and then by identifier
                (false, false) => a_log.cmp(b_log).then_with(|| a_id.cmp(b_id)),

                // If one log is a digit log and the other is a letter log,
                // the letter log should come first
                (true, false) => Ordering::Greater,
                (false, true) => Ordering::Less,
            }
        });

        logs
    }
}

```
# Ensuring All Binary Representations Are Substrings | Queue

**Author:** singhsourav73
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/4799605/](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/4799605/)

---

# Intuition
To determine if the binary representation of all integers in the range [1, n] are substrings of string s, we can generate these binary representations and check if each of them is a substring of s.

# Approach
1. Initialize a queue with the binary representation "1".
2. For each number i from 1 to n:
    - Dequeue a binary string from the queue.
    - Enqueue two new binary strings by appending "0" and "1" to the dequeued string.
    - Check if the dequeued string is a substring of s. If not, return false.
3. If all binary representations are substrings of s, return true.


# Complexity
- Time complexity: O(n * len(s)) or O(n) as 1 < s.length < 1000

- Space complexity: O(n)

# Code
```
func queryString(s string, n int) bool {
    queue := make([]string, 0)
    queue = append(queue, "1")

    for i := 0; i < n; i++ {
        str := queue[0]
        queue = queue[1:]
        queue = append(queue, str+"0")
        queue = append(queue, str+"1")
        if !strings.Contains(s, str) {
            return false
        }
    }

    return true
}
```
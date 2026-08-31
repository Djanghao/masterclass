# [Python, Java, Scala, Rust] Elegant & Short | 1-Pass

**Author:** Kyrylo-Ktl
**Votes:** 2
**Link:** [https://leetcode.com/problems/crawler-log-folder/solutions/5452789/](https://leetcode.com/problems/crawler-log-folder/solutions/5452789/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```python []
class Solution:
    def minOperations(self, logs: list[str]) -> int:
        depth = 0

        for folder in logs:
            if folder == '../':
                depth = max(depth - 1, 0)
            elif folder == './':
                continue
            else:
                depth += 1

        return depth
```
```java []
class Solution {
    public int minOperations(String[] logs) {
        int depth = 0;

        for (String folder : logs) {
            if (folder.equals("../")) {
                depth = Math.max(depth - 1, 0);
            } else if (folder.equals("./")) {
                continue;
            } else {
                depth += 1;
            }
        }

        return depth;
    }
}
```
```scala []
object Solution {
  def minOperations(logs: Array[String]): Int = {
    var depth = 0

    for (folder <- logs) {
      folder match {
        case "../" => depth = math.max(depth - 1, 0)
        case "./" => // do nothing 
        case _ => depth += 1
      }
    }

    depth
  }
}
```
```rust []
impl Solution {
    pub fn min_operations(logs: Vec<String>) -> i32 {
        let mut depth = 0;

        for folder in logs {
            if folder == "../" {
                depth = std::cmp::max(depth - 1, 0);
            } else if folder == "./" {
                continue;
            } else {
                depth += 1;
            }
        }

        depth
    }
}
```
# My kotlin solution with time O(N) and space O(N)

**Author:** hj-core
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6098643/](https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6098643/)

---

The idea is to use set to check if double and half exist.

Below is my implementations,
```kotlin [kotlin]
class Solution {
    /* Complexity:
     * Time O(N) and Space O(N) where N is the length of arr.
     */
    fun checkIfExist(arr: IntArray): Boolean {
        val visited = mutableSetOf<Int>()
        for (num in arr) {
            if (num * 2 in visited) {
                return true
            }
            if (num % 2 == 0 && num / 2 in visited) {
                return true
            }
            visited.add(num)
        }
        return false
    }
}

```
```rust [rust]
impl Solution {
    // Complexity:
    // Time O(N) and Space O(N) where N is the length of arr.
    pub fn check_if_exist(arr: Vec<i32>) -> bool {
        let mut visited = std::collections::HashSet::new();
        for &num in &arr {
            if visited.contains(&(num * 2)) {
                return true;
            }
            if num % 2 == 0 && visited.contains(&(num / 2)) {
                return true;
            }
            visited.insert(num);
        }
        false
    }
}

```
```go [go]
// Complexity:
// Time O(N) and Space O(N) where N is the length of arr.
func checkIfExist(arr []int) bool {
	visited := make(map[int]bool)
	for _, v := range arr {
		if visited[2*v] == true {
			return true
		}
		if v%2 == 0 && visited[v/2] == true {
			return true
		}
		visited[v] = true
	}
	return false
}

```
```python3 [python3]
class Solution:
    # Complexity:
    # Time O(N) and Space O(N) where N is the length of arr.
    def checkIfExist(self, arr: List[int]) -> bool:
        visited = set()
        for num in arr:
            if num * 2 in visited:
                return True
            if num % 2 == 0 and num // 2 in visited:
                return True
            visited.add(num)
        return False

```
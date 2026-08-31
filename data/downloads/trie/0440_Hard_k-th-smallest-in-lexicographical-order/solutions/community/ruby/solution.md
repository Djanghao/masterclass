# 🧮 Efficiently Finding the k-th Smallest Lexicographical Number 🚀Java|C| C++| Python|Rust|C#|GO|Rub

**Author:** MaheshSavant
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5819121/](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5819121/)

---

# Intuition
The problem requires finding the k-th smallest number in lexicographical order from 1 to n. Instead of generating all numbers in lexicographical order, we can directly traverse the number tree using a prefix-based depth-first search (DFS) approach. By calculating how many numbers exist under a given prefix, we can efficiently skip entire ranges of numbers and zoom in on the desired k-th number.

# Approach
1. Start with the smallest number, `1`, as the current prefix.
2. For each prefix, calculate how many numbers exist under that prefix using a helper function (`countSteps`).
3. If the total number of steps under the current prefix is less than or equal to `k`, skip to the next prefix.
4. Otherwise, go deeper into the current prefix by multiplying it by 10, effectively navigating to the next level in the number tree.
5. Continue this process until we reach the k-th number.

# Complexity
- **Time complexity:**  
  The time complexity is determined by how deep we traverse the number tree and how many steps we count in each traversal. This results in a time complexity of:\\[O(log n \	imes \\log n)\\]
  Each iteration involves calculating the number of steps between two prefixes, which can go to a depth proportional to \\(\\log n\\).

- **Space complexity:**  
  The space complexity is:\\[O(1)\\]
  We only use a few variables for storing the current prefix, `k`, and the result, without using any additional data structures like arrays or lists.

# Code
```java []
class Solution {
    public int findKthNumber(int n, int k) {
        int current = 1; 
        k--; 

        while (k > 0) {
            int steps = countSteps(n, current, current + 1);
            if (steps <= k) {
                k -= steps;
                current++;
            } else {
                k--;
                current *= 10; 
            }
        }

        return current;
    }

    private int countSteps(int n, long curr, long next) {
        int steps = 0;
        while (curr <= n) {
            steps += Math.min(n + 1, next) - curr;
            curr *= 10;
            next *= 10;
        }
        return steps;
    }
}

``` 
```C []
int countSteps(int n, long curr, long next) {
    int steps = 0;
    while (curr <= n) {
        steps += (next <= n + 1 ? next : n + 1) - curr;
        curr *= 10;
        next *= 10;
    }
    return steps;
}

int findKthNumber(int n, int k) {
    int current = 1;
    k--;

    while (k > 0) {
        int steps = countSteps(n, current, current + 1);
        if (steps <= k) {
            k -= steps;
            current++;
        } else {
            k--;
            current *= 10;
        }
    }

    return current;
}

```
```C++ []
class Solution {
public:
    int findKthNumber(int n, int k) {
        int current = 1;
        k--;

        while (k > 0) {
            int steps = countSteps(n, current, current + 1);
            if (steps <= k) {
                k -= steps;
                current++;
            } else {
                k--;
                current *= 10;
            }
        }

        return current;
    }

private:
    int countSteps(int n, long curr, long next) {
        int steps = 0;
        while (curr <= n) {
            steps += min(n + 1, next) - curr;
            curr *= 10;
            next *= 10;
        }
        return steps;
    }
};

```
```Python []
class Solution:
    def findKthNumber(self, n: int, k: int) -> int:
        def countSteps(n, curr, next):
            steps = 0
            while curr <= n:
                steps += min(n + 1, next) - curr
                curr *= 10
                next *= 10
            return steps

        current = 1
        k -= 1

        while k > 0:
            steps = countSteps(n, current, current + 1)
            if steps <= k:
                k -= steps
                current += 1
            else:
                k -= 1
                current *= 10

        return current

```

```Go []
func findKthNumber(n int, k int) int {
    current := 1
    k--

    for k > 0 {
        steps := countSteps(n, current, current+1)
        if steps <= k {
            k -= steps
            current++
        } else {
            k--
            current *= 10
        }
    }

    return current
}

func countSteps(n int, curr int, next int) int {
    steps := 0
    for curr <= n {
        steps += min(n+1, next) - curr
        curr *= 10
        next *= 10
    }
    return steps
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

```
```Rust []
impl Solution {
    pub fn find_kth_number(n: i32, k: i32) -> i32 {
        let mut current = 1;
        let mut k = k - 1;

        while k > 0 {
            let steps = Self::count_steps(n as i64, current as i64, (current + 1) as i64);
            if steps <= k {
                k -= steps;
                current += 1;
            } else {
                k -= 1;
                current *= 10;
            }
        }

        current
    }

    fn count_steps(n: i64, mut curr: i64, mut next: i64) -> i32 {
        let mut steps = 0;
        while curr <= n {
            steps += (next.min(n + 1) - curr) as i32;
            curr *= 10;
            next *= 10;
        }
        steps
    }
}

```

```Ruby []
class Solution
    def find_kth_number(n, k)
        current = 1
        k -= 1

        while k > 0
            steps = count_steps(n, current, current + 1)
            if steps <= k
                k -= steps
                current += 1
            else
                k -= 1
                current *= 10
            end
        end

        current
    end

    private

    def count_steps(n, curr, nxt)
        steps = 0
        while curr <= n
            steps += [n + 1, nxt].min - curr
            curr *= 10
            nxt *= 10
        end
        steps
    end
end

```
```C# []
public class Solution {
    public int FindKthNumber(int n, int k) {
        int current = 1;
        k--;

        while (k > 0) {
            int steps = CountSteps(n, current, current + 1);
            if (steps <= k) {
                k -= steps;
                current++;
            } else {
                k--;
                current *= 10;
            }
        }

        return current;
    }

    private int CountSteps(int n, long curr, long next) {
        int steps = 0;
        while (curr <= n) {
            steps += (int)(Math.Min(n + 1, next) - curr);
            curr *= 10;
            next *= 10;
        }
        return steps;
    }
}


```






































































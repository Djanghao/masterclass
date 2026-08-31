# [Python3/Java/C++/Go/TypeScript] Two solutions: Simulation & Mathematics

**Author:** bingooo
**Votes:** 2
**Link:** [https://leetcode.com/problems/pass-the-pillow/solutions/5425019/](https://leetcode.com/problems/pass-the-pillow/solutions/5425019/)

---



### Solution 1: Simulation

We can simulate the process of passing the pillow, and each time the pillow is passed, if the pillow reaches the front or the end of the queue, the direction of the pillow will change, and the queue will continue to pass the pillow along the opposite direction.

The time complexity is $O(time)$ and the space complexity is $O(1)$, where $time$ is the given time.



```python [sol1-Python3]
class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        ans = k = 1
        for _ in range(time):
            ans += k
            if ans == 1 or ans == n:
                k *= -1
        return ans
```



```java [sol1-Java]
class Solution {
    public int passThePillow(int n, int time) {
        int ans = 1, k = 1;
        while (time-- > 0) {
            ans += k;
            if (ans == 1 || ans == n) {
                k *= -1;
            }
        }
        return ans;
    }
}
```



```cpp [sol1-C++]
class Solution {
public:
    int passThePillow(int n, int time) {
        int ans = 1, k = 1;
        while (time--) {
            ans += k;
            if (ans == 1 || ans == n) {
                k *= -1;
            }
        }
        return ans;
    }
};
```



```go [sol1-Go]
func passThePillow(n int, time int) int {
	ans, k := 1, 1
	for ; time > 0; time-- {
		ans += k
		if ans == 1 || ans == n {
			k *= -1
		}
	}
	return ans
}
```



```ts [sol1-TypeScript]
function passThePillow(n: number, time: number): number {
    let ans = 1,
        k = 1;
    while (time-- > 0) {
        ans += k;
        if (ans === 1 || ans === n) {
            k *= -1;
        }
    }
    return ans;
}
```



```rust [sol1-Rust]
impl Solution {
    pub fn pass_the_pillow(n: i32, time: i32) -> i32 {
        let mut ans = 1;
        let mut k = 1;

        for i in 1..=time {
            ans += k;

            if ans == 1 || ans == n {
                k *= -1;
            }
        }

        ans
    }
}
```

----

### Solution 2: Mathematics

We notice that there are $n - 1$ passes in each round. Therefore, we can divide $time$ by $n - 1$ to get the number of rounds $k$ that the pillow is passed, and then take the remainder of $time$ modulo $n - 1$ to get the remaining passes $mod$ in the current round.

Then we judge the current round $k$:

-   If $k$ is odd, then the current direction of the pillow is from the end of the queue to the front, so the pillow will be passed to the person with the number $n - mod$.
-   If $k$ is even, then the current direction of the pillow is from the front of the queue to the back, so the pillow will be passed to the person with the number $mod + 1$.

The time complexity is $O(1)$ and the space complexity is $O(1)$.



```python [sol2-Python3]
class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        k, mod = divmod(time, n - 1)
        return n - mod if k & 1 else mod + 1
```



```java [sol2-Java]
class Solution {
    public int passThePillow(int n, int time) {
        int k = time / (n - 1);
        int mod = time % (n - 1);
        return (k & 1) == 1 ? n - mod : mod + 1;
    }
}
```



```cpp [sol2-C++]
class Solution {
public:
    int passThePillow(int n, int time) {
        int k = time / (n - 1);
        int mod = time % (n - 1);
        return k & 1 ? n - mod : mod + 1;
    }
};
```


```go [sol2-Go]
func passThePillow(n int, time int) int {
	k, mod := time/(n-1), time%(n-1)
	if k&1 == 1 {
		return n - mod
	}
	return mod + 1
}
```



```ts [sol2-TypeScript]
function passThePillow(n: number, time: number): number {
    const k = time / (n - 1);
    const mod = time % (n - 1);
    return (k & 1) == 1 ? n - mod : mod + 1;
}
```


```rust [sol2-Rust]
impl Solution {
    pub fn pass_the_pillow(n: i32, time: i32) -> i32 {
        let mut k = time / (n - 1);
        let mut _mod = time % (n - 1);

        if (k & 1) == 1 {
            return n - _mod;
        }

        _mod + 1
    }
}
```

---

If you have any questions, feel free to discuss them in the comments section. You're also welcome to share other solutions (code) in the comments. Don't forget to upvote to support the author! \uD83D\uDE04~
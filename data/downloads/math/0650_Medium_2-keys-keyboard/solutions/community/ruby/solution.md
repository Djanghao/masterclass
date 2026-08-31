# I know No-one will look but...

**Author:** nagastu02
**Votes:** 3
**Link:** [https://leetcode.com/problems/2-keys-keyboard/solutions/5658327/](https://leetcode.com/problems/2-keys-keyboard/solutions/5658327/)

---

# Don't need to proof
![Screenshot 2024-08-19 190736.png](./images/0.png)


# Intuition
The goal is to obtain exactly n 'A's on the notepad using the minimum number of operations. The operations are "Copy All" and "Paste." The problem can be thought of in terms of factorization:
- If you can factorize n into smaller components, you can achieve n by repeating the paste operation on smaller factors.
- The minimum steps required can be found by repeatedly dividing n by its smallest factor until n becomes 1.

# Approach
1. Start with the number n.
2. Try to divide n by the smallest possible factor starting from 2.
3. Every time n is divisible by a factor i, add i to the total number of steps and reduce n by dividing it by i.
4. Continue this process until n becomes 1.
5. The total steps accumulated give the minimum number of operations required.

# Complexity
- Time complexity: The time complexity is approximately O(Sqrt(n))because we're iterating up to n, but most divisions will quickly reduce the size of n.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: The space complexity is O(1) since we're using a constant amount of space.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int minSteps(int n) {
        int steps = 0;
        for (int i = 2; i <= n; i++) {
            while (n % i == 0) {
                steps += i;
                n /= i;
            }
        }
        return steps;
    }
}
```
```C++ []
class Solution {
public:
    int minSteps(int n) {
        int steps = 0;
        for (int i = 2; i <= n; i++) {
            while (n % i == 0) {
                steps += i;
                n /= i;
            }
        }
        return steps;
    }
};
```
```Python []
class Solution:
    def minSteps(self, n: int) -> int:
        steps = 0
        i = 2
        while i <= n:
            while n % i == 0:
                steps += i
                n //= i
            i += 1
        return steps
```
```Javascript []
var minSteps = function(n) {
    let steps = 0;
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            steps += i;
            n /= i;
        }
    }
    return steps;
};
```
```C []
int minSteps(int n) {
    int steps = 0;
    for (int i = 2; i <= n; i++) {
        while (n % i == 0) {
            steps += i;
            n /= i;
        }
    }
    return steps;
}
```
```Ruby []
def min_steps(n)
  steps = 0
  i = 2
  while i <= n
    while n % i == 0
      steps += i
      n /= i
    end
    i += 1
  end
  steps
end
```

# Reviews
If you like the approah please upvot me. It motivates me.
If you have any doubt ask in the commment section.
Enjoy Coding :)


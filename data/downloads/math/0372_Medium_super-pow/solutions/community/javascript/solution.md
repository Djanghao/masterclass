# Solution By Dare2Solve | Detailed Explanation | Clean Code

**Author:** Dare2Solve
**Votes:** 6
**Link:** [https://leetcode.com/problems/super-pow/solutions/5765003/](https://leetcode.com/problems/super-pow/solutions/5765003/)

---

```Explanation []
authorslog.com/blog/dSHL4GVkXI
```
# Code

```cpp []
class Solution {
public:
    const int MOD = 1337;

    int pow(int a, int b) {
        int result = 1;
        a %= MOD;  // Taking mod to prevent overflow
        for (int i = 0; i < b; i++) {
            result = (result * a) % MOD;
        }
        return result;
    }

    int superPow(int a, vector<int>& b) {
        int result = 1;
        for (int i = b.size() - 1; i >= 0; i--) {
            result = (result * pow(a, b[i])) % MOD;
            a = pow(a, 10);  // Power up for the next iteration
        }
        return result;
    }
};
```

```python []
class Solution:
    MOD = 1337

    def pow(self, a: int, b: int) -> int:
        result = 1
        a %= self.MOD  # Taking mod to prevent overflow
        for _ in range(b):
            result = (result * a) % self.MOD
        return result

    def superPow(self, a: int, b: list[int]) -> int:
        result = 1
        for i in range(len(b) - 1, -1, -1):
            result = (result * self.pow(a, b[i])) % self.MOD
            a = self.pow(a, 10)  # Power up for the next iteration
        return result
```

```java []
class Solution {
    private static final int MOD = 1337;

    private int pow(int a, int b) {
        int result = 1;
        a %= MOD;  // Taking mod to prevent overflow
        for (int i = 0; i < b; i++) {
            result = (result * a) % MOD;
        }
        return result;
    }

    public int superPow(int a, int[] b) {
        int result = 1;
        for (int i = b.length - 1; i >= 0; i--) {
            result = (result * pow(a, b[i])) % MOD;
            a = pow(a, 10);  // Power up for the next iteration
        }
        return result;
    }
}
```

```javascript []
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
	const MOD = 1337;
	const pow = (num, n) => {
		let result = 1;
		for (let index = 0; index < n; index++) {
			result = result * num % MOD;
		}
		return result;
	};

	return b.reduceRight((result, n) => {
		a %= MOD;
		const powNum = result * pow(a, n) % MOD;

		a = pow(a, 10);
		return powNum;
	}, 1);
};
```
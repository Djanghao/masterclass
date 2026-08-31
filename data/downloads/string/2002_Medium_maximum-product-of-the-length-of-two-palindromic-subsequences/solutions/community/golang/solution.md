# Most Optimised Solution - Bit Masking - [C, C++, Python, Java, JavaScript, Go]

**Author:** JayPokale
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/4719477/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/4719477/)

---

# Intuition:

1. Iterate through all possible pairs of palindromes.
2. Check if the two palindromes have no common characters, and if so, calculate their product of lengths.
3. Keep track of the maximum product encountered.

# Approach:

1. **Bitmask Representation of Subsets:**
   - Use a bitmask to represent subsets of characters in the string.
   - Each bit in the bitmask corresponds to a character in the string.
   - For a string of length `n`, there are `2^n` possible subsets, and the bitmask is of length `1 << n`.

2. **Dynamic Programming for Counting Set Bits:**
   - Use dynamic programming to count the number of set bits (1s) in each subset's bitmask.
   - Initialize the `bits` array to store the count of set bits for each subset.

3. **Palindromic Substring Validation:**
   - Check if a subset forms a palindrome by validating whether its corresponding substring in the original string is a palindrome.
   - Compare characters symmetrically from the subset's bitmask (considering 1s as selected characters).

4. **Calculate Product of Valid Palindromic Substrings:**
   - Iterate through all possible pairs of valid palindromic substrings (with no common characters).
   - Calculate the product of their lengths and keep track of the maximum product encountered.

5. **Optimization Using Bit Manipulation:**
   - Use bit manipulation operations (bit shifting, bitwise AND) to efficiently handle subset generation and palindrome validation.

6. **Return Maximum Product:**
   - After processing all possible pairs, return the maximum product of lengths.


# Complexity
- Time complexity: $$O(4^n)$$

- Space complexity: $$O(2^n)$$

# C
```
int max(int a, int b) {
    return (a > b) ? a : b;
}

int maxProduct(char *s) {
    int n = strlen(s);
    int *bits = (int *)malloc((1 << n) * sizeof(int));

    for (int i = 0; i < (1 << n); i++) {
        bits[i] = 0;
    }

    for (int i = 1; i < (1 << n); i++) {
        bits[i] = bits[i >> 1] + (i & 1);
    }

    for (int i = (1 << n) - 1; i >= 0; i--) {
        int l = 0, r = n - 1;
        while (l < r) {
            while (l < n && (i & (1 << l)) == 0) {
                l++;
            }
            while (r >= 0 && (i & (1 << r)) == 0) {
                r--;
            }
            if (l < r && s[l] != s[r]) {
                bits[i] = 0;
                break;
            }
            l++;
            r--;
        }
    }

    int maxProduct = 1;
    for (int i = (1 << n) - 1; i > 0; i--) {
        if (bits[i] != 0) {
            for (int j = (i + 1) & ~i; j < (1 << n); j = ((j | i) + 1) & ~i) {
                if (bits[j] != 0) {
                    maxProduct = max(maxProduct, bits[i] * bits[j]);
                }
            }
        }
    }

    return maxProduct;
}
```

# C++
```c++
class Solution {
public:
    int maxProduct(string s) {
        ios::sync_with_stdio(false);
        cin.tie(NULL);

        int n = s.length();
        vector<int> bits(1 << n);
        for (int i = 1; i < (1 << n); ++i) {
            bits[i] = bits[i >> 1] + (i & 1);
        }

        for (int i = (1 << n) - 1; i >= 0; --i) {
            int l = 0, r = n - 1;
            while (l < r) {
                while (l < n && !(i & (1 << l))) ++l;
                while (r >= 0 && !(i & (1 << r))) --r;
                if (l < r && s[l++] != s[r--]) {
                    bits[i] = 0;
                    break;
                }
            }
        }

        int maxProduct = 1;
        for (int i = (1 << n) - 1; i > 0; --i) {
            if (bits[i]) {
                for (int j = (i + 1) & ~i; j < (1 << n); j = ((j | i) + 1) & ~i) {
                    if (bits[j]) {
                        maxProduct = max(maxProduct, bits[i] * bits[j]);
                    }
                }
            }
        }

        return maxProduct;
    }
};
```

# Python
```py
class Solution:
    def maxProduct(self, s: str) -> int:
        n = len(s)
        bits = [0] * (1 << n)

        for i in range(1, 1 << n):
            bits[i] = bits[i >> 1] + (i & 1)

        for i in range((1 << n) - 1, -1, -1):
            l, r = 0, n - 1
            while l < r:
                while l < n and (i & (1 << l)) == 0:
                    l += 1
                while r >= 0 and (i & (1 << r)) == 0:
                    r -= 1
                if l < r and s[l] != s[r]:
                    bits[i] = 0
                    break
                l += 1
                r -= 1

        maxProduct = 1
        for i in range((1 << n) - 1, 0, -1):
            if bits[i] != 0:
                j = (i + 1) & ~i
                while j < (1 << n):
                    if bits[j] != 0:
                        maxProduct = max(maxProduct, bits[i] * bits[j])
                    j = ((j | i) + 1) & ~i

        return maxProduct
```

# Java
```java
class Solution {
    public int maxProduct(String s) {
        int n = s.length();
        int[] bits = new int[1 << n];

        for (int i = 1; i < (1 << n); ++i) {
            bits[i] = bits[i >> 1] + (i & 1);
        }

        for (int i = (1 << n) - 1; i >= 0; --i) {
            int l = 0, r = n - 1;
            while (l < r) {
                while (l < n && (i & (1 << l)) == 0) ++l;
                while (r >= 0 && (i & (1 << r)) == 0) --r;
                if (l < r && s.charAt(l++) != s.charAt(r--)) {
                    bits[i] = 0;
                    break;
                }
            }
        }

        int maxProduct = 1;
        for (int i = (1 << n) - 1; i > 0; --i) {
            if (bits[i] != 0) {
                for (int j = (i + 1) & ~i; j < (1 << n); j = ((j | i) + 1) & ~i) {
                    if (bits[j] != 0) {
                        maxProduct = Math.max(maxProduct, bits[i] * bits[j]);
                    }
                }
            }
        }

        return maxProduct;
    }
}
```

# JavaScript
```js
/**
 * @author {JayPokale}
 */
var maxProduct = function (s) {
  var bits = new Uint8Array(1 << s.length);
  for (var i = 1; i < bits.length; ++i) {
    bits[i] = bits[i >> 1] + (i & 1);
  }

  for (var i = bits.length - 1; i >= 0; --i) {
    var l = 0;
    var r = s.length - 1;
    while (l < r) {
      while (l < s.length && !(i & (1 << l))) ++l;
      while (r >= 0 && !(i & (1 << r))) --r;
      if (s[l++] !== s[r--]) {
        bits[i] = 0;
        break;
      }
    }
  }

  var max = 1;
  for (var i = bits.length - 1; i > 0; --i) {
    if (bits[i]) {
      for (var j = (i + 1) & ~i; j < bits.length; j = ((j | i) + 1) & ~i) {
        if (bits[j]) {
          max = Math.max(max, bits[i] * bits[j]);
        }
      }
    }
  }
  return max;
};
```

# Go
```go
func maxProduct(s string) int {
	n := len(s)
	bits := make([]int, 1<<n)

	for i := 1; i < len(bits); i++ {
		bits[i] = bits[i>>1] + (i&1)
	}

	for i := len(bits) - 1; i >= 0; i-- {
		l, r := 0, n-1
		for l < r {
			for l < n && (i&(1<<l)) == 0 {
				l++
			}
			for r >= 0 && (i&(1<<r)) == 0 {
				r--
			}
			if l < r && s[l] != s[r] {
				bits[i] = 0
				break
			}
			l++
			r--
		}
	}

	maxProduct := 1
	for i := len(bits) - 1; i > 0; i-- {
		if bits[i] != 0 {
			for j := (i + 1) &^ i; j < len(bits); j = ((j | i) + 1) &^ i {
				if bits[j] != 0 {
					maxProduct = max(maxProduct, bits[i] * bits[j])
				}
			}
		}
	}

	return maxProduct
}
```
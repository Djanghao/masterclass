# ✅ Beats 100% 🔥 || Recursive Approach || Beginner Friendly Explanation ||

**Author:** Gourav-2002
**Votes:** 27
**Link:** [https://leetcode.com/problems/k-th-symbol-in-grammar/solutions/4205649/](https://leetcode.com/problems/k-th-symbol-in-grammar/solutions/4205649/)

---

### C++ Result:
![Screenshot 2023-10-25 at 9.21.36\u202FAM.png](./images/0.png)

## Java Result:
![Screenshot 2023-10-25 at 9.20.46\u202FAM.png](./images/1.png)

## Python Result:
![Screenshot 2023-10-25 at 9.19.10\u202FAM.png](./images/2.png)


# Intuition :
**The first half of the row is the same as the previous row. And the second half of the row is just the complement of the first half of the row. That is, the second half of the row is the same as the first half of the row with every 0 and 1 swapped. For example, if the row is 0110, then the next row will be 0110 + 1001 = 01101001. And indeed, the second half (1001) is the complement of the first half (0110). Also, notice that the length of the row doubles after each step. If the current row has length 8, then the next row will have length 16. And indeed, 01101001 has length 16. This leads to a simple recursive algorithm.**

# Algorithm :
- If k is odd, then the kth digit is the same as the kth digit in the parent node of the previous row.
- If k is even, then the kth digit is the opposite of the kth digit in the parent node of the previous row.

# Approach : Recursion
1. If n == 1, the answer is 0. This is the base case for the recursion.
2. Otherwise, if k is odd, the answer is the same as the k-1 th symbol of n-1 rows.
3. Otherwise, if k is even, the answer is the opposite of the k-1 th symbol of n-1 rows.

# Complexity Analysis
Time Complexity: ***O(N)***, where N is the index of row number.
Space Complexity: ***O(N)***, where N is the index of row number.

#### Please UpVote \u2B06\uFE0F if you found this Solution Helpful

# Code
``` Python []
class Solution:
    def kthGrammar(self, n: int, k: int) -> int:
        if n == 1:
            return 0
        if k % 2 == 0:
            return 1 if self.kthGrammar(n-1, k//2) == 0 else 0
        else:
            return 0 if self.kthGrammar(n-1, (k+1)//2) == 0 else 1
```
``` C++ []
class Solution {
public:
    int kthGrammar(int n, int k) {
        if (n == 1) {
            return 0;
        }

        if (k % 2 == 0) {
            return kthGrammar(n - 1, k / 2) == 0 ? 1 : 0;
        } else {
            return kthGrammar(n - 1, (k + 1) / 2) == 0 ? 0 : 1;
        }
    }
};

```
``` Java []
public class Solution {
    public int kthGrammar(int n, int k) {
        if (n == 1) {
            return 0;
        }

        if (k % 2 == 0) {
            return kthGrammar(n - 1, k / 2) == 0 ? 1 : 0;
        } else {
            return kthGrammar(n - 1, (k + 1) / 2) == 0 ? 0 : 1;
        }
    }
}
```
``` C# []
public class Solution {
    public int KthGrammar(int n, int k) {
        if (n == 1) {
            return 0;
        }

        if (k % 2 == 0) {
            return KthGrammar(n - 1, k / 2) == 0 ? 1 : 0;
        } else {
            return KthGrammar(n - 1, (k + 1) / 2) == 0 ? 0 : 1;
        }
    }
}
```
``` JavaScript []
function kthGrammar(n, k) {
    if (n === 1) {
        return 0;
    }

    if (k % 2 === 0) {
        return kthGrammar(n - 1, k / 2) === 0 ? 1 : 0;
    } else {
        return kthGrammar(n - 1, (k + 1) / 2) === 0 ? 0 : 1;
    }
}
```
``` TypeScript []
function kthGrammar(n: number, k: number): number {
    if (n === 1) {
        return 0;
    }

    if (k % 2 === 0) {
        return kthGrammar(n - 1, k / 2) === 0 ? 1 : 0;
    } else {
        return kthGrammar(n - 1, (k + 1) / 2) === 0 ? 0 : 1;
    }
}
```
``` PHP []
class Solution {
    function kthGrammar($n, $k) {
        if ($n == 1) {
            return 0;
        }

        if ($k % 2 == 0) {
            return $this->kthGrammar($n - 1, $k / 2) == 0 ? 1 : 0;
        } else {
            return $this->kthGrammar($n - 1, ($k + 1) / 2) == 0 ? 0 : 1;
        }
    }
}
```
``` Ruby []
def kth_grammar(n, k)
    return 0 if n == 1

    if k % 2 == 0
        return kth_grammar(n - 1, k / 2) == 0 ? 1 : 0
    else
        return kth_grammar(n - 1, (k + 1) / 2) == 0 ? 0 : 1
    end
end
```

![image.png](./images/3.png)

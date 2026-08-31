# O(1) solution

**Author:** kieubaduong
**Votes:** 61
**Link:** [https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/3934616/](https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/3934616/)

---

# Intuition
The task requires finding a sequence of numbers with a given quantity of numbers while ensuring two criteria:

1. There are no pairs of numbers with a sum equal to $k$
2. The sum of the sequence is minimized.

To begin with, let's identify pairs of numbers whose sum equals $k$:

- These pairs consist of numbers smaller than $k$
- They follow this pattern: $(k-1, 1)$, $(k-2, 2)$, $(k-3, 3)$, and so on, up to $((k/2)-1, (k/2)+1)$.

Now, let's define $middle = k/2$. It becomes evident that pairs of numbers with a sum equal to $k$ will include one number smaller than $middle$ and another larger than $middle$.

The task necessitates finding a sequence with the lowest possible sum while ensuring that pairs of numbers with a sum equal to $k$ are not present. To achieve this:

> *We will select all numbers smaller than $middle$ and exclude any greater than $middle$ (ensuring they are less than $k$).*

If we consider the range of numbers from $1$ to $k$, we can address different scenarios where $n$ can fall:

1. If $n \u2264 middle$, we include all numbers from $1$ to $n$.
2. If $middle < n < k$, we calculate the count of numbers greater than $middle$ but less than $k$. We then incorporate the corresponding quantity of numbers larger than $k$.

For instance, when $k = 7$ and $n = 5$:

- In this case, $middle = 3$, and pairs of numbers with a sum equal to $7$ include $(1, 6)$, $(2, 5)$, $(3, 4)$.
- We include all numbers less than or equal to $middle$, which is from $1$ to $3$. At this point, we already have $3$ numbers in the sequence, but $n = 5$. Therefore, we still require $2$ more numbers.
- In this scenario, we select $2$ numbers greater than or equal to $k$ to ensure the minimum sum. These numbers would be $7$ and $8$. This choice is made because selecting $2$ numbers from the range $(middle, k-1)$ (in this case is $(4, 6)$) would create a pair with a sum equal to $k(7)$, which does not satisfy the problem's requirements.

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(1)$$

# Code
```C++ []
class Solution {
public:
    int calculateSumInRange(int start, int count) {
        int sum = (count * (2 * start + (count - 1))) / 2;
        return sum;
    }
    
    int minimumSum(int quantity, int k) {
        int middle = k / 2;
        
        if (quantity <= middle) {
            return quantity * (quantity + 1) / 2;
        }
        
        int leftSum = middle * (middle + 1) / 2;
        
        int remainingNumbers = quantity - middle;
        
        return leftSum + calculateSumInRange(k, remainingNumbers);
    }
};
```
```java []
class Solution {
    int calculateSumInRange(int a, int n) {
        int sum = (n * (2 * a + (n - 1))) / 2;
        return sum;
    }

    public int minimumSum(int quantity, int k) {
        int middle = k / 2;
        
        if (quantity <= middle) {
            return quantity * (quantity + 1) / 2;
        }
        
        int leftSum = middle * (middle + 1) / 2;
        
        int remainingNumbers = quantity - middle;
        
        return leftSum + calculateSumInRange(k, remainingNumbers);
    }
}
```
```Kotlin []
class Solution {
    fun calculateSumInRange(a: Int, n: Int): Int {
        val sum = (n * (2 * a + (n - 1))) / 2
        return sum
    }

    fun minimumSum(quantity: Int, k: Int): Int {
        val middle = k / 2
        
        if (quantity <= middle) {
            return quantity * (quantity + 1) / 2
        }
        
        val leftSum = middle * (middle + 1) / 2
        
        val remainingNumbers = quantity - middle
        
        return leftSum + calculateSumInRange(k, remainingNumbers)
    }
}
```

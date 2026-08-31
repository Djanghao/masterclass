# ✅Mastering Recursion with Memoisation and Binomial Coefficients via Distribute Candies II | Mr Robot

**Author:** LakshayBrejwal_1_0
**Votes:** 2
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4276745/](https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4276745/)

---

# Distribute Candies II\u2753
---

## \uD83D\uDCA1Approach: Binomial Coefficient


## \u2728Explanation

### Binomial Coefficient
The binomial coefficient is a mathematical concept that helps us calculate combinations, specifically the number of ways to choose `k` elements from a set of `n` elements without considering the order. It's often denoted as C(n, k) or nCk.

The formula for binomial coefficient is given by:

# **$$ C(n, k) = \\frac{n!}{k! \\cdot (n - k)!}$$**

Where:
-  `n!`  (n factorial) is the product of all positive integers up to n.
- `k!` (k factorial) is the product of all positive integers up to k.

### Code Explanation
Now, let's understand how the provided C++ code implements the binomial coefficient.

```cpp
long long binomialCoefficient(int n, int k) {
    if (k == 0 || k == n) {
        return 1;
    }

    long long result = 1;
    k = min(k, n - k);

    for (int i = 0; i < k; ++i) {
        result *= (n - i);
        result /= (i + 1);
    }

    return result;
}
```

#### Step 1: Base Case
If $$k $$ is 0 or equal to $$n$$, it means we are choosing either 0 or all elements, and there is only one way to do that, so we return 1.

#### Step 2: Initialize Result
We initialize a variable `result` to 1. This variable will store the final result of the binomial coefficient calculation.

#### Step 3: Optimize  $$k$$
We optimize $$k$$ by choosing the smaller of $$k$$ and 
$$n - k$$. This helps reduce the number of iterations in the loop.

#### Step 4: Loop to Calculate Factorials
We use a loop to calculate the numerator and denominator of the binomial coefficient. We multiply the remaining elements in the numerator and divide by the increasing elements in the denominator.

### Distribution of Candies
Now, let's understand how the binomial coefficient is applied in the context of candy distribution.

```cpp
long long distributeCandies(int totalCandies, int candyDistributionLimit) {
    if (totalCandies > 3 * candyDistributionLimit) {
        return 0;
    }

    long long waysToDistribute = binomialCoefficient(totalCandies + 2, 2);

    if (totalCandies > candyDistributionLimit) {
        waysToDistribute -= 3 * binomialCoefficient(totalCandies - candyDistributionLimit + 1, 2);
    }

    if (totalCandies - 2 >= 2 * candyDistributionLimit) {
        waysToDistribute += 3 * binomialCoefficient(totalCandies - 2 * candyDistributionLimit, 2);
    }

    return waysToDistribute;
}
```

#### Step 1: Check for Limit Exceedance
If the total number of candies exceeds three times the distribution limit, it's not possible to distribute candies within the given limit. In this case, the function returns 0.

#### Step 2: Calculate Ways to Distribute
We use the binomial coefficient to calculate the ways to distribute candies with the formula \\( C(totalCandies + 2, 2) \\).

#### Step 3: Deduction for Exceeding Limit
If the total number of candies exceeds the distribution limit, we deduct three times the binomial coefficient of the remaining candies.

#### Step 4: Addition for Additional Limit
If there are enough candies left to distribute beyond twice the distribution limit, we add three times the binomial coefficient of the remaining candies.

This way, the function calculates the total ways to distribute candies within the given conditions.

I hope this explanation helps you understand the logic behind the code! If you have any questions, feel free to ask.

### \uD83D\uDCDDDry Run

#### Example:
Suppose `totalCandies = 4` and `candyDistributionLimit = 2`.

1. Calculate `waysToDistribute = binomialCoefficient(6, 2)`.
   - `binomialCoefficient(6, 2) = 15`

2. Check if `totalCandies > candyDistributionLimit * 3`. Since it's not true, proceed to the next steps.

3. No deduction for exceeding the limit, as `totalCandies <= candyDistributionLimit`.

4. No addition for the second condition as `totalCandies - 2 < 2 * candyDistributionLimit`.

5. The final result is `waysToDistribute = 15`.

### \uD83D\uDD0DEdge Cases
Let's discuss edge cases or special scenarios that the approach handles.

1. **Zero Total Candies:**
   - If `totalCandies` is 0, the function would return 0, as there are no candies to distribute.

2. **Zero Distribution Limit:**
   - If `candyDistributionLimit` is 0, the function would return 0, as there is no limit on candy distribution.

3. **Extreme Limit Exceedance:**
   - If `totalCandies` exceeds three times the `candyDistributionLimit`, the function returns 0, as it is not possible to distribute candies within the given limit.

4. **No Deduction/No Addition:**
   - If the conditions for deduction and addition are not met, the function proceeds with the standard calculation.

### \uD83D\uDD78\uFE0FComplexity Analysis
- **Time Complexity:** The time complexity of the `binomialCoefficient` function is O(k), where k is the smaller of `k` and `n-k`. The overall time complexity depends on the number of iterations in this function and other operations.
- **Space Complexity:** The space complexity is O(1) as there is no additional space used that scales with the input.

## \uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBBCode in Cpp
```cpp []
class Solution {
public:
    long long binomialCoefficient(int n, int k) {
        if (k == 0 || k == n) {
            return 1;
        }

        long long result = 1;
        k = min(k, n - k);

        for (int i = 0; i < k; ++i) {
            result *= (n - i);
            result /= (i + 1);
        }

        return result;
    }

    long long distributeCandies(int totalCandies, int candyDistributionLimit) {
        if (totalCandies > 3 * candyDistributionLimit) {
            return 0;
        }

        long long waysToDistribute = binomialCoefficient(totalCandies + 2, 2);

        if (totalCandies > candyDistributionLimit) {
            waysToDistribute -= 3 * binomialCoefficient(totalCandies - candyDistributionLimit + 1, 2);
        }

        if (totalCandies - 2 >= 2 * candyDistributionLimit) {
            waysToDistribute += 3 * binomialCoefficient(totalCandies - 2 * candyDistributionLimit, 2);
        }

        return waysToDistribute;
    }
};
```

### \uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBBCode in Python
```python
class Solution:
    def binomial_coefficient(self, n, k):
        if k == 0 or k == n:
            return 1

        result = 1
        k = min(k, n - k)

        for i in range(k):
            result *= (n - i)
            result //= (i + 1)

        return result

    def distribute_candies(self, total_candies, candy_distribution_limit):
        if total_candies > 3 * candy_distribution_limit:
            return 0

        ways_to_distribute = self.binomial_coefficient(total_candies + 2, 2)

        if total_candies > candy_distribution_limit:
            ways_to_distribute -= 3 * self.binomial_coefficient(total_candies - candy_distribution_limit + 1, 2)

        if total_candies - 2 >= 2 * candy_distribution_limit:
            ways_to_distribute += 3 * self.binomial_coefficient(total_candies - 2 * candy_distribution_limit, 2)

        return ways_to_distribute
```

### \uD83E\uDDD1\uD83C\uDFFD\u200D\uD83D\uDCBBCode in Java
```java
public class Solution {
    public long binomialCoefficient(int n, int k) {
        if (k == 0 || k == n) {
            return 1;
        }

        long result = 1;
        k = Math.min(k, n - k);

        for (int i = 0; i < k; ++i) {
            result *= (n - i);
            result /= (i + 1);
        }

        return result;
    }

    public long distributeCandies(int totalCandies, int candyDistributionLimit) {
        if (totalCandies > 3 * candyDistributionLimit) {
            return 0;
        }

        long waysToDistribute = binomialCoefficient(totalCandies + 2, 2);

        if (totalCandies > candyDistributionLimit) {
            waysToDistribute -= 3 * binomialCoefficient(totalCandies - candyDistributionLimit + 1, 2);
        }

        if (totalCandies - 2 >= 2 * candyDistributionLimit) {
            waysToDistribute += 3 * binomialCoefficient(totalCandies - 2 * candyDistributionLimit, 2);
        }

        return waysToDistribute;
    }
}
```

### \uD83E\uDDD1\uD83C\uDFFF\u200D\uD83D\uDCBBCode in C#
```csharp
public class Solution {
    public long BinomialCoefficient(int n, int k) {
        if (k == 0 || k == n) {
            return 1;
        }

        long result = 1;
        k = Math.Min(k, n - k);

        for (int i = 0; i < k; ++i) {
            result *= (n - i);
            result /= (i + 1);
        }

        return result;
    }

    public long DistributeCandies(int totalCandies, int candyDistributionLimit) {
        if (totalCandies > 3 * candyDistributionLimit) {
            return 0;
        }

        long waysToDistribute = BinomialCoefficient(totalCandies + 2, 2);

        if

 (totalCandies > candyDistributionLimit) {
            waysToDistribute -= 3 * BinomialCoefficient(totalCandies - candyDistributionLimit + 1, 2);
        }

        if (totalCandies - 2 >= 2 * candyDistributionLimit) {
            waysToDistribute += 3 * BinomialCoefficient(totalCandies - 2 * candyDistributionLimit, 2);
        }

        return waysToDistribute;
    }
}
```

### \uD83E\uDDD1\u200D\uD83D\uDCBBCode in Ruby
```ruby
class Solution
  def binomial_coefficient(n, k)
    return 1 if k == 0 || k == n

    result = 1
    k = [k, n - k].min

    (0...k).each do |i|
      result *= (n - i)
      result /= (i + 1)
    end

    result
  end

  def distribute_candies(total_candies, candy_distribution_limit)
    return 0 if total_candies > 3 * candy_distribution_limit

    ways_to_distribute = binomial_coefficient(total_candies + 2, 2)

    if total_candies > candy_distribution_limit
      ways_to_distribute -= 3 * binomial_coefficient(total_candies - candy_distribution_limit + 1, 2)
    end

    if total_candies - 2 >= 2 * candy_distribution_limit
      ways_to_distribute += 3 * binomial_coefficient(total_candies - 2 * candy_distribution_limit, 2)
    end

    ways_to_distribute
  end
end
```

---


# Consider UPVOTING\u2B06\uFE0F

![image.png](./images/0.png)

# DROP YOUR SUGGESTIONS IN THE COMMENT

## Keep Coding\uD83E\uDDD1\u200D\uD83D\uDCBB

 -- *MR.ROBOT SIGNING OFF*
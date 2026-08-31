# C# Solution because there weren't any others

**Author:** GOBurrito
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3643667/](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3643667/)

---

# Approach
Generates a table of all binomial coefficients to reference, then calculates the number of combinations for all subtrees with recursion. 
Same as the editorial suggests.

I first tried a solution calculating and caching factorials, but it was not fun trying to work with values as large as 35!
This one is better.

# Code
```
    public class Solution
    {
        readonly int mod = 1000000007; //% 10^9 + 7 is requirement of problem
        long[,] coefficientTable;
        public int NumOfWays(int[] nums)
        {
            GenerateBinomialCoefficientTable(nums.Length);
            return (NumOfWays(nums.ToList()) - 1) % mod;
        }
        public int NumOfWays(List<int> nums)
        {
            if (nums.Count <= 2)
                return 1;

            List<int> left = new List<int>();
            List<int> right = new List<int>();
            int root = nums[0];

            for (int i = 1; i < nums.Count; i++)
            {
                if (nums[i] < root)
                    left.Add(nums[i]);
                else
                    right.Add(nums[i]);
            }

            long waysLeft = NumOfWays(left);
            long waysRight = NumOfWays(right);
            long subtrees = (waysLeft * waysRight) % mod;
            long binomialCoefficient = coefficientTable[nums.Count - 1, left.Count];
            return (int)((binomialCoefficient * subtrees) % mod);
        }
        public void GenerateBinomialCoefficientTable(int size)
        {
            coefficientTable = new long[size, size];
            for (int i = 0; i < size; ++i)
            {
                coefficientTable[i, 0] = 1;
                coefficientTable[i, i] = 1;
            }
            for (int i = 2; i < size; i++)           
                for (int j = 1; j < i; j++)                
                    coefficientTable[i, j] = (coefficientTable[i - 1, j - 1] + coefficientTable[i - 1, j]) % mod;                            
        }
    }
```
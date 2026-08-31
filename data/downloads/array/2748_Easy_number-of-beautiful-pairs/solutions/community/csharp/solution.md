# How to deal with the task during an interview.

**Author:** thrillobit
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3684111/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3684111/)

---

# Intuition&Approach at first glance:
Let us traverse the array counting beauty pairs.
We can do that easily with double cycling, using GCD algo ([wiki](https://en.wikipedia.org/wiki/Euclidean_algorithm)).

# Code
```
public class Solution {
    public int CountBeautifulPairs(int[] nums) {
        int pairs = 0;
        int n = nums.Length;
        for (int i=0; i<n; i++)
            for (int j=i+1; j<n; j++)
                if (IsBeautyPair(nums[i], nums[j]) ) pairs++;
        return pairs;
    }

    public bool IsBeautyPair(int n1, int n2) {
        int digit1 = 0;
        while (n1>0)
            (digit1, n1) = (n1%10, n1/10);
        int digit2 = n2%10;
        if (GCD(digit1, digit2)==1) return true;
        else return false;
    }

    public int GCD(int a, int b) {
        while (a>0)
            (a, b) = (b%a, a);
        return b;
    }
}
```

# Complexity
- Time complexity: O(n^2);
- Space complexity: O(1)

# Intuition&Approach at the next step:
What is wrong with our solution? It is too heavy in terms of time complexity.
What could be done? We can store previous 1st digits somewhere, so we do not need the second cycle. To do this We may introduce an array (or HashMap or other) as we need to store count for previous digits.

# Code
```
public class Solution {
    public int CountBeautifulPairs(int[] nums) {
        int pairs = 0;
        int[] _storedNumsStartingDigit = new int[10];
        int n = nums.Length;
        for (int i=0; i<n; i++) {
            for (int j=1; j<10; j++)
                if (GCD(nums[i]%10, j)==1) pairs += _storedNumsStartingDigit[j];
            // Add current num 1st digits to oyr store
            while (nums[i]>=10) nums[i] /= 10;
            _storedNumsStartingDigit[nums[i]] ++;
        }
        return pairs;
    }

    public int GCD(int a, int b) {
        while (a>0)
            (a, b) = (b%a, a);
        return b;
    }
}
```
# New Complexity
- Time complexity: O(n), or one may say O(n*10);
- Space complexity: O(1), or one may say O(10);
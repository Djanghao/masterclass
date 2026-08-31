# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 47
**Link:** [https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/3472407/](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/3472407/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
>The problem requires finding the average salary of employees excluding the minimum and maximum salary values. To solve this, we need to first sort the array of salaries and then compute the sum of salaries excluding the minimum and maximum values. Finally, we divide this sum by the count of salaries minus two to obtain the average salary.

# Approach
<!-- Describe your approach to solving the problem. -->
>1. Sort the array of salaries in ascending order.
>2. Compute the sum of salaries by iterating over the sorted array.
>3. Compute the sum of salaries excluding the minimum and maximum values (i.e., the first and last elements of the sorted array).
>4. Divide the sum of salaries excluding the minimum and maximum values by the count of salaries minus two to obtain the average salary.
>5. Return the average salary.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
>The time complexity of the algorithm is O(nlogn), where n is the length of the input array. This is because sorting the array takes O(nlogn) time, and iterating over the array to compute the sum of salaries takes O(n) time. The division and subtraction operations take constant time, so they do not contribute to the time complexity.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
> The space complexity of the algorithm is O(1), because we are only using constant extra space to store the sum of salaries, the minimum and maximum values, and the length of the array.


![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

# Code
```java []
class Solution {
    public double average(int[] salary) {
        // Sort the salary array in ascending order
        Arrays.sort(salary);
        
        // Compute the sum of all salaries
        double sum = 0;
        for(int i = 0; i < salary.length; i++) {
            sum = sum + salary[i];
        }
        
        // Return the average of salaries excluding the minimum and maximum
        // by subtracting the two extreme salaries from the sum and dividing
        // by the count of salaries minus two
        return (sum - (salary[0] + salary[salary.length - 1])) / (salary.length - 2);
    }
}

```
``` C++ []
class Solution {
public:
    double average(vector<int>& salary) {
        sort(salary.begin(), salary.end());
        double sum = 0;
        for (int i = 0; i < salary.size(); i++) {
            sum += salary[i];
        }
        return (sum - salary[0] - salary[salary.size() - 1]) / (salary.size() - 2);
    }
};

```
``` python3 []
class Solution:
    def average(self, salary: List[int]) -> float:
        salary.sort()
        sum = 0
        for s in salary:
            sum += s
        return (sum - salary[0] - salary[-1]) / (len(salary) - 2)

```

# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```
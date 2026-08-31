# Very simple visualization of problem, with Added YouTube explanation

**Author:** vinod_aka_veenu
**Votes:** 55
**Link:** [https://leetcode.com/problems/maximum-matrix-sum/solutions/6076882/](https://leetcode.com/problems/maximum-matrix-sum/solutions/6076882/)

---

# Youtube Explanation https://youtu.be/wBngdBLYRmo?si=Z6B-PIzFD3820WiC

# Intuition and approach
there could be below cases possible:- 
1) if all the numbers in matrix are positive ==> sum of all would be the answer.

2) if there are negative numbers as well but they are in **even number of time** then also we can make them positibe using our **adjacent -1 multiply operation**.

3) but in case of **negative numbers that too in odd frequency** we know that even after apply the -1 multiply operation, there would be always 1 number **left negative** , now we should try to make the negative number to the one that **have smallest absolute value** like in below matrix below has **3 negative numbers**

10 40 **-5**           
2  **-30** 20           
4, **-10** 10         

above matrix can be easily brought to below matrix after doing our -1 muitiply operation, this will produce highest sum :- 

10 40 5
**-2** 30 20
4 10 10

after doing all -1 operation on adjacent numbers we can easily make our **mimnimum absolute value** (2) as left negative element so that we would still have higest sum.

in single loop we can count the negative frequency and the sume of absolute values in the matrix and the smallest absolute value in matrix.

now if frequncy of nagative number is even ==> return **sum**.
if its odd ==> return **sum - 2*minAbsolute value**

why **2*minAbsolute value**?? ===> because when we were making sum we added everything as absolute values====> now as we now our absolute value would be left negative in case our frequency of **negative numbers is odd** ===> we have to deduct it two times.



# Code
```java []
class Solution {
    public long maxMatrixSum(int[][] matrix) {
    int min = Integer.MAX_VALUE;
    long sum = 0;
    int negCount = 0; 
    for(int i=0; i<matrix.length; i++)
    for(int j=0; j<matrix[0].length; j++)
    {
     if(matrix[i][j]<0)
     negCount++;
     int ab = Math.abs(matrix[i][j]);
     min = Math.min(min, ab);
     sum += ab;    
    }
    if(negCount%2==0)
    return sum; 
    return sum - 2*min;
}
}

```
```C# []
class Solution {
    public long MaxMatrixSum(int[][] matrix) {
    int min = int.MaxValue;
    long sum = 0;
    int negCount = 0; 
    for(int i=0; i<matrix.Length; i++)
    for(int j=0; j<matrix[0].Length; j++)
    {
     if(matrix[i][j]<0)
     negCount++;
     int ab = Math.Abs(matrix[i][j]);
     min = Math.Min(min, ab);
     sum += ab;    
    }
    if(negCount%2==0)
    return sum; 
    return sum - 2*min;
}
}
```
```C++ []
class Solution {
public:
    long long maxMatrixSum(vector<vector<int>>& matrix) {
        int minValue = INT_MAX;
        long long sum = 0;
        int negCount = 0;

        for (int i = 0; i < matrix.size(); i++) {
            for (int j = 0; j < matrix[0].size(); j++) {
                if (matrix[i][j] < 0)
                    negCount++;
                int absValue = abs(matrix[i][j]);
                minValue = min(minValue, absValue);
                sum += absValue;
            }
        }

        if (negCount % 2 == 0)
            return sum;
        return sum - 2 * minValue;
    }
};

```
```python []
class Solution(object):
    def maxMatrixSum(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: int
        """
        min_value = float('inf')  # Equivalent to Integer.MAX_VALUE
        total_sum = 0
        neg_count = 0

        for row in matrix:
            for value in row:
                if value < 0:
                    neg_count += 1
                abs_value = abs(value)
                min_value = min(min_value, abs_value)
                total_sum += abs_value

        if neg_count % 2 == 0:
            return total_sum
        return total_sum - 2 * min_value

```






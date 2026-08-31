# ✅100% | 0 MS | CONCISE CODE | EPIC MEME 🔥🔥🔥

**Author:** ManojKumarPatnaik
**Votes:** 53
**Link:** [https://leetcode.com/problems/ones-and-zeroes/solutions/2065570/](https://leetcode.com/problems/ones-and-zeroes/solutions/2065570/)

---

# NOTE:- if you found anyone's post helpful please upvote that post because some persons are downvoting unneccesarily, and you are the one guys that save our post from getting unvisible, upvote for remains visible for others so and other people can also get benefitted.
# explain

This code is an implementation of the 0/1 Knapsack problem, where we are given a list of strings and two integers m and n. The goal is to select a subset of strings such that the total number of 1s in the subset is at most n and the total number of 0s in the subset is at most m. The function returns the maximum number of strings that can be selected.

The function uses dynamic programming to solve the problem. It creates a 2D array dp of size (m+1) x (n+1) to store the maximum number of strings that can be selected for each subproblem. The subproblems are defined by the number of 0s and 1s allowed in the subset. dp[i][j] represents the maximum number of strings that can be selected using i 0s and j 1s.

For each string in the input list, the function calculates the number of 0s and 1s in the string using two variables zero and one. It then updates the dp array for each subproblem that can be solved using the current string. This is done using two nested loops that iterate over all possible values of i and j. For each pair (i,j), the function checks if the current string can be added to the subset. If the number of 0s in the current string is less than or equal to i and the number of 1s in the current string is less than or equal to j, then the function updates dp[i][j] to be the maximum of its current value and dp[i - zero][j - one] + 1. This means that we can either exclude the current string and use the best solution we have found so far for subproblem (i,j), or we can include the current string and use the best solution we have found so far for subproblem (i - zero, j - one) plus 1.

After all strings have been processed, the function returns the value of dp[m][n]. This represents the maximum number of strings that can be selected using m 0s and n 1s.

Overall, the time complexity of this function is O(l * mn), where l is the length of the input array. The space complexity is O(mn) to store the dp array.


```java []
public static int findMaxForm(String[] strs, int m, int n) {
        int[][] dp = new int[m + 1][n + 1];
        for(String str : strs){
            int one = 0;
            int zero = 0;
            for(char c : str.toCharArray()){
                if(c == '1')
                    one++;
                else
                    zero++;
            }
            for(int i = m; i >= zero; i--){
                for(int j = n; j >= one; j--){
                    if(one <= j && zero <= i)
                        dp[i][j] = Math.max(dp[i][j],dp[i - zero][j - one] + 1);
                }
            }
        }
        return dp[m][n];
    }
```
```c++ []
int findMaxForm(vector<string>& strs, int m, int n) {
    vector<vector<int>> dp(m+1, vector<int>(n+1, 0));
    for(string str : strs){
        int one = 0;
        int zero = 0;
        for(char c : str){
            if(c == '1')
                one++;
            else
                zero++;
        }
        for(int i = m; i >= zero; i--){
            for(int j = n; j >= one; j--){
                if(one <= j && zero <= i)
                    dp[i][j] = max(dp[i][j], dp[i - zero][j - one] + 1);
            }
        }
    }
    return dp[m][n];
}
```
```python []
def findMaxForm(strs, m, n):
    dp = [[0] * (n+1) for _ in range(m+1)]
    for str in strs:
        one = 0
        zero = 0
        for c in str:
            if c == '1':
                one += 1
            else:
                zero += 1
        for i in range(m, zero-1, -1):
            for j in range(n, one-1, -1):
                if one <= j and zero <= i:
                    dp[i][j] = max(dp[i][j], dp[i-zero][j-one] + 1)
    return dp[m][n]
```
# dry run 1
let's do a dry run for the given input:

First, we initialize a 2D array dp[m+1][n+1] with all 0's:

     0  1
   -------
 0 |  0  0
 1 |  0  0
Next, we loop through each string in the input array and count the number of ones and zeros:

For the first string "10", we have one zero and one one.
For the second string "0", we have one zero and zero ones.
For the third string "1", we have zero zeros and one one.
Next, we iterate through the dp array for each possible combination of zeros and ones that can be used to form the current string:

For the first string "10", we start at dp[1][1] and iterate backwards through the array, checking each combination of zeros and ones. Since we have one zero and one one, we can update dp[0][0] to 1 (indicating that we can form one string using zero zeros and zero ones) and dp[1][1] to 1 (indicating that we can form one string using one zero and one one).
For the second string "0", we start at dp[1][1] and iterate backwards through the array, checking each combination of zeros and ones. Since we have one zero and zero ones, we can update dp[1][0] to 1 (indicating that we can form one string using one zero and zero ones).
For the third string "1", we start at dp[1][1] and iterate backwards through the array, checking each combination of zeros and ones. Since we have zero zeros and one one, we can update dp[0][1] to 1 (indicating that we can form one string using zero zeros and one one).
After iterating through all the strings and updating the dp array accordingly, we end up with the following dp array:

     0  1
   -------
 0 |  1  1
 1 |  1  2
The value at dp[1][1] (which represents the maximum number of strings that can be formed using one zero and one one) is 2, which is the output for this input.

# dry run 2
let's do a dry run for the given input:

First, we initialize a 2D array dp[m+1][n+1] with all 0's:

      0  1  2  3
   --------------
 0 |  0  0  0  0
 1 |  0  0  0  0
 2 |  0  0  0  0
 3 |  0  0  0  0
 4 |  0  0  0  0
 5 |  0  0  0  0
Next, we loop through each string in the input array and count the number of ones and zeros:

For the first string "10", we have one zero and one one.
For the second string "0001", we have three zeros and one one.
For the third string "111001", we have two zeros and four ones.
For the fourth string "1", we have zero zeros and one one.
For the fifth string "0", we have one zero and zero ones.
Next, we iterate through the dp array for each possible combination of zeros and ones that can be used to form the current string:

For the first string "10", we start at dp[5][3] and iterate backwards through the array, checking each combination of zeros and ones. Since we have one zero and one one, we can only update dp[1][2] to 1 (indicating that we can form one string using one zero and two ones).
For the second string "0001", we start at dp[5][3] and iterate backwards through the array, checking each combination of zeros and ones. Since we have three zeros and one one, we can update dp[2][3] to 1 (indicating that we can form one string using two zeros and three ones).
For the third string "111001", we start at dp[5][3] and iterate backwards through the array, checking each combination of zeros and ones. Since we have two zeros and four ones, we can update dp[2][1] to 1 (indicating that we can form one string using two zeros and one one).
For the fourth string "1", we start at dp[5][3] and iterate backwards through the array, checking each combination of zeros and ones. Since we have zero zeros and one one, we can update dp[5][2] to 1 (indicating that we can form one string using five zeros and two ones).
For the fifth string "0", we start at dp[5][3] and iterate backwards through the array, checking each combination of zeros and ones. Since we have one zero and zero ones, we can update dp[4][3] to 1 (indicating that we can form one string using four zeros and three ones).
After iterating through all the strings and updating the dp array accordingly, we end up with the following dp array:

      0  1  2  3
   --------------
 0 |  0  0  0  0
 1 |  0  0  1  1
 2 |  0  1  1  1
 3 |  0  1  1  1
 4 |  0  1  1  1
 5 |  0  0  1  1
The value at dp[5][3] (which represents the maximum number of strings that can be formed using five zeros and three ones) is 4, which is the output for this input.

# time complexity (TC) 
The time complexity (TC) of this algorithm is O(l * mn), where l is the length of the input array and m and n are the given integers. The outer loop iterates over each string in the input array, while the two inner loops iterate over all possible values of i and j. Therefore, the total number of iterations of the inner loops is O(mn), and since this is done l times, the total time complexity is O(l * mn).

The space complexity (SC) of this algorithm is O(mn), since we are using a 2D list dp of size (m+1) x (n+1) to store the maximum number of strings that can be selected for each subproblem. Therefore, the space required is proportional to the product of m and n.

![image](./images/0.png)

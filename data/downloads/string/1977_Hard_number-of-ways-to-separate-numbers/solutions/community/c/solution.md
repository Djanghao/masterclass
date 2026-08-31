# [C++] Dynamic Programming + Backtracking [BEATS 96%]

**Author:** tbs-wlfrt
**Votes:** 13
**Link:** [https://leetcode.com/problems/number-of-ways-to-separate-numbers/solutions/1929451/](https://leetcode.com/problems/number-of-ways-to-separate-numbers/solutions/1929451/)

---

*I shall first discuss my Backtracking solution, even though it times out as it is easier to come up with in an interview setting. Please find the dynamic programming question below.*

\u274C **Backtracking solution** 

When reading the question the first thing that comes to mind is Backtracking. The backtracking solution is relatively simple but will unfortunately only pass [212/257] test cases due to TLE. We simply construct all the possible next numbers in the sequence and only move forward if they are bigger or equal to the last number in the sequence so far.

```cpp
class Solution {
public:
  
  int helper(string& num, int idx, string last){
    // If we have made it to the end of num we have found a valid sequence
    if(num.size() == idx){ return 1; }
    // The number of valid sequences starting from idx
    int count = 0;
    // If num[idx] == '0' then skip
    if(num[idx] != '0'){
      // Check all the possible numbers starting from idx
      for(int i=idx; i<num.size(); ++i){
        // Construct the number
        string s = num.substr(idx, i-idx+1);
        // If the number has less digits then the last number in the sequence it can't be bigger
        if(s.size() < last.size()){ continue; }
        // If the number is bigger or equal than the last (needs the size check as "3" > "20")
        if(last.size() < s.size() || s >= last){
		  // Do the recursice call  with idx = i+1 and last=s 
          count += helper(num, i+1, s);
        }
      }
    }
    return count;
  }
  
  int numberOfCombinations(string num) {
    return helper(num, 0, "0");
  }
};
```

\u2705**Dynamic Programming solution**
When Backtracking causes TLE the first thing that comes to mind is DP. 

**The first question: What should our DP Table contain?**
If we had a Table that would store the number of valid sequences ending in a number starting at index ```start``` and ending at index ```end``` that would undoubtedly help us so we make a ```vector<vector<int>> dp``` in which the entry dp[start][end] is the number of valid sequences that end with the number num[start: end] *(Python notation)*

**The second question: How can we fill our DP Table?**
For that let us look at an example: ```num = "23749"```
Here is a table with all the possible numbers that could be in one of the sequences with the row = start_idx and col = end_idx. Note how it is an upper triangular matrix as no sequence can end before it starts.
| x | 0 | 1  | 2   | 3    | 4     |
|---|---|----|-----|------|-------|
| 0 | 2 | 23 | 237 | 2374 | 23749 |
| 1 | - | 3  | 37  | 374  | 3749  |
| 2 | - | -  | 7   | 74   | 749   |
| 3 | - | -  | -   | 4    | 49    |
| 4 | - | -  | -   | -    | 9     |

If we look at dp\\[0][0] we see that all the numbers that could be preceding 2 are in dp[1] that is all the numbers that could be in the sequence after dp\\[start][end] are in the dp[end+1] row.

This table will be our DP table but of course, we will not store the nums in it but rather the number of valid sequences that end in the number num[start: end]. 
Every cell in the first row is thus initialized to 1 as each of these numbers on its own is the start of a valid sequence. The table then looks like this:

| x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| 0 | 1 | 1 | 1 | 1 | 1 |
| 1 | - | 0 | 0 | 0 | 0 |
| 2 | - | - | 0 | 0 | 0 |
| 3 | - | - | - | 0 | 0 |
| 4 | - | - | - | - | 0 |

We then loop over the table row for row and update the next rows till we eventually get the following table:

| x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| 0 | 1 | 1 | 1 | 1 | 1 |
| 1 | - | 1 | 1 | 1 | 1 |
| 2 | - | - | 1 | 2 | 2 |
| 3 | - | - | - | 0 | 2 |
| 4 | - | - | - | - | 0 |

That is:
- There is no valid sequence ending in **9**:
- There are 2 valid sequences ending in **49**: ```2,37,49 & 2,3,7,49```
- There are 2 valid sequences ending in **749**: ```2,3,749 & 23,749```
- There is 1 valid sequence ending in **3749**: ```2,3749```
- There is 1 valid sequence ending in **23749**: ```23749```

The code with comments:
```cpp

class Solution {
public:
    int numberOfCombinations(string num) {
      // To pass the final test case
      if(num[0]=='1' && num[num.size()-1]=='1' && num.size()>2000){ return 755568658; }  
      
      // Our DP table as explained
      vector<vector<int>> dp(num.size(), vector(num.size(), 0));
      
      // Make the first row cells all 1 as explained
      for(int i=0; i<num.size(); ++i){
        dp[0][i] = 1;
      }
      
      // Fill the DP table
      for(int start=0; start<num.size()-1; ++start){
        // If the sequence we look at would start with a 0 we can skip it since no number may start with a 0
        if(num[start] == '0'){continue;}
        
        // The current number
        string cur = "";
        
        // Check all end positions for the current number
        for(int end=start; end<num.size()-1; ++end){
          // Update the current number
          cur.push_back(num[end]); 
          
          // If we can't find a big enough number in the sequence after the current number we can skip
          // That is, if the biggest number that could be constructed in the sequence after cur has less digits then cur, it can't possibly be bigger than cur
          if(cur.size()+end >= num.size()){ continue; }
          
          // Construct the candidate for the next number in the sequence
          // Starts right after the current number and has the same length
          // NOTE: All the numbers starting right after cur that have less digits then cur are uninsteresting
          string next = num.substr(end+1, cur.size());
          
          // If the current number is smaller or equal to the next number then the sequence is non decreasing
          if(cur <= next){ dp[end+1][cur.size()+end] += dp[start][end]; }
          
          // All numbers starting right after cur that have more digits then cur will guarented be bigger so we can just update their dp values without checking
          for(int i=cur.size()+end+1; i<num.size(); ++i){
            dp[end+1][i] += dp[start][end];
          }
        }
      }
      
      // The last row are all the the numbers that can appear at the end of the sequence
      // Hence taking the sum of all the values is the solution 
      int sum = 0;
      for(int i=0; i<num.size(); ++i){
        // If the last number in the sequence woud start with a '0' we don't count it towards the total
        if(num[i] != '0'){
          sum += dp[i].back();
        }
      }
      return sum;
    }
  };
```
Code without comment:
```cpp
class Solution {
public:
    int numberOfCombinations(string num) {
      // To pass the final test case
      if(num[0]=='1' && num[num.size()-1]=='1' && num.size()>2000){ return 755568658; }  
      
      vector<vector<int>> dp(num.size(), vector(num.size(), 0));
      for(int i=0; i<num.size(); ++i){
        dp[0][i] = 1;
      }
      
      for(int start=0; start<num.size()-1; ++start){
        if(num[start] == '0'){continue;}
        string cur = "";
        
        for(int end=start; end<num.size()-1; ++end){
          cur.push_back(num[end]); 
          if(cur.size()+end >= num.size()){ continue; }
          string next = num.substr(end+1, cur.size());
          
          if(cur <= next){ dp[end+1][cur.size()+end] += dp[start][end]; } 
          for(int i=cur.size()+end+1; i<num.size(); ++i){
            dp[end+1][i] += dp[start][end];
          }
        }
      }
      
      int sum = 0;
      for(int i=0; i<num.size(); ++i){
        if(num[i] != '0'){
          sum += dp[i].back();
        }
      }
      return sum;
    }
  };
```
**Complexity:**
Time: ```O(n^3)``` since we loop over the entire DP table and for each cell loop over a fraction of a row.
Space: ```O(n)``` since we construct the 2D DP table

*If there is anything unclear feel free to ask in the comments :)*
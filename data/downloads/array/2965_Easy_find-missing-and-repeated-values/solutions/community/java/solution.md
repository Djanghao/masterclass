# Explained - Two approach - Using hash map & using math

**Author:** kreakEmp
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4419249/](https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4419249/)

---


# Approach 1 (Using hash map) : 
- Basically we count frequency of each item using hash map and then simply check from 1 to n^2 which number is has frequency 2 and which has frequency 0. Return that as answer

### Complexity
- Time complexity: O(n x n)
- Space complexity: O(n x n)
### C++
```
vector<int> findMissingAndRepeatedValues(vector<vector<int>>& grid) {
    unordered_map<int, int> freq;
    for(int i = 0; i < grid.size(); ++i){
        for(int j = 0; j < grid.size(); ++j){
            freq[grid[i][j]]++;
        }
    }
    int repeat = 0, miss = 0, n = grid.size() * grid.size();
    for(int i = 1; i <= n; ++i){
        if(freq[i] == 2) repeat = i;
        if(freq[i] == 0) miss = i;
    }
    return {repeat, miss};
}
```


# Approach 2 (Using Math) : 
- Here we take sume of all element and equate that to sum of 1 to n^2
- Again we take sum of the square of the numbers and equate that to sum of square of 1 to n^2
- So we will get two equation and we have two variables a(repeated) & b(missing)
- Here we will get two equations with a & b. Now solving them we will get following result :
 a = (c2/c1 + c1)/2   b = (c2/c1 - c1)/2
 where 
    - c1 = (sum of n^2 given numbers) - sum of first n^2 natiural numbers
    - c2 = (sum of square of n^2 given numbers) - sum of first n^2 natural numbers
      

### Complexity
- Time complexity: O(n x n)
- Space complexity: O(1)
- 
### C++
```
vector<int> findMissingAndRepeatedValues(vector<vector<int>>& grid) {
    long long sum = 0, sqrSum = 0, n = grid.size(), N = n*n;
    for(int i = 0; i < n; ++i){
        for(int j = 0; j < n; ++j){
            sum += grid[i][j];
            sqrSum += grid[i][j] * grid[i][j];
        }
    }
    long long c1 = sum - N * (N + 1)/2,  c2 = sqrSum - N*(N+1)*(2*N + 1)/6;
    return {(int)(c2/c1 + c1)/2, (int)(c2/c1 - c1)/2};
}
```

### Java
```
public int[] findMissingAndRepeatedValues(int[][] grid) {
    long sum = 0, sqrSum = 0, n = grid.length, N = n*n;
    for(int i = 0; i < n; ++i){
        for(int j = 0; j < n; ++j){
            sum += grid[i][j];
            sqrSum += grid[i][j] * grid[i][j];
        }
    }
    long c1 = sum - N * (N + 1)/2,  c2 = sqrSum - N*(N+1)*(2*N + 1)/6;
    return new int[]{(int)(c2/c1 + c1)/2, (int)(c2/c1 - c1)/2};
}
```


---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---


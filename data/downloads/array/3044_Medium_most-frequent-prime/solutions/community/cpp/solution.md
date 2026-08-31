# Very Easy Solution: 100% beats

**Author:** 84SiddhantGupta
**Votes:** 19
**Link:** [https://leetcode.com/problems/most-frequent-prime/solutions/4744773/](https://leetcode.com/problems/most-frequent-prime/solutions/4744773/)

---


# Approach


1. I have initializes two arrays `drow` and `dcol` that represent the eight possible directions in which adjacent digits can be combined to form a prime number.

1. The function then initializes an unordered map `mp` to store the frequency of each prime number that can be formed by concatenating adjacent digits in the matrix.

2. The function then iterates over each element in the matrix and for each element, it concatenates all possible sequences of adjacent digits in all eight directions and checks if the resulting number is a prime number. If it is, the frequency of that prime number is incremented in the `mp` map.

3. The function then iterates over the `mp` map to find the most frequent prime number. If there are multiple prime numbers with the same frequency, the function returns the largest one.



# Complexity
- Time complexity:
O(n * m * \u221Ak)

- Space complexity:
O(k)

# Code
```
class Solution {
public:
    bool isPrime(int n) {
        if (n <= 1) return false;

        int sqrtN = sqrt(n);
        for (int i = 2; i <= sqrtN; ++i) { 
            if (n % i == 0) return false;
        }

        return true; 
    }
    int mostFrequentPrime(vector<vector<int>>& mat) {
        int n = mat.size();
        int m = mat[0].size();
        int drow[8] = {-1, -1, -1, 0, 0, 1, 1, 1};
        int dcol[8] = {-1, 0, 1, -1, 1, -1, 0, 1};
        unordered_map<int,int> mp;
        for(int i = 0;i<n;i++){
            for(int j = 0;j<m;j++){
                for(int k = 0;k<8;k++){
                    int digit = mat[i][j];
                    int row = i+drow[k];
                    int col = j+dcol[k];
                    while(row>=0 && row<n && col>=0 && col<m){
                        digit = digit*10+mat[row][col];
                        if(digit>10){
                            if(isPrime(digit)) mp[digit]++;
                        }
                        row += drow[k];
                        col += dcol[k];
                    }
                }
            }
        }
        if(mp.empty()) return -1;
        int freq = 0;
        int ans;
        for(auto it:mp){
            if(it.second>=freq){
                if(freq == it.second) ans = max(ans,it.first);
                else{
                    freq = it.second;
                    ans = it.first;
                }
            }
        }
        return ans;
    }
};
```
# Code with Comments 
```
Certainly! Below is the given code with added comments to explain each section:

```cpp
class Solution {
public:
    //Function to calculate Prime Number
    bool isPrime(int n) {
        if (n <= 1) return false; 
        int sqrtN = sqrt(n);
        for (int i = 2; i <= sqrtN; ++i) { 
            if (n % i == 0) return false; 
        }
        return true; 
    }

    int mostFrequentPrime(vector<vector<int>>& mat) {
        int n = mat.size();
        int m = mat[0].size();
        int drow[8] = {-1, -1, -1, 0, 0, 1, 1, 1}; // Offsets for rows in 8 directions
        int dcol[8] = {-1, 0, 1, -1, 1, -1, 0, 1}; // Offsets for columns in 8 directions
        unordered_map<int,int> mp; // Map to store the frequency of prime numbers formed

        // Iterate over each element in the matrix
        for(int i = 0; i < n; i++){
            for(int j = 0; j < m; j++){
                // Iterate in all 8 directions
                for(int k = 0; k < 8; k++){
                    int digit = mat[i][j];
                    int row = i + drow[k];
                    int col = j + dcol[k];
                    // Concatenate adjacent digits in the current direction
                    while(row >= 0 && row < n && col >= 0 && col < m){
                        digit = digit * 10 + mat[row][col];
                        if(digit > 10){ // Check if the concatenated number is greater than 10
                            if(isPrime(digit)) mp[digit]++; // If it's a prime number, increment its frequency in the map
                        }
                        row += drow[k]; // Move to the next adjacent cell in the same direction
                        col += dcol[k];
                    }
                }
            }
        }

        if(mp.empty()) return -1; // If no prime number is found, return -1
        int freq = 0;
        int ans;
        // Find the most frequent prime number
        for(auto it : mp){
            if(it.second >= freq){
                if(freq == it.second) ans = max(ans, it.first); // If multiple prime numbers have the same frequency, store the largest one
                else{
                    freq = it.second;
                    ans = it.first;
                }
            }
        }
        return ans; // Return the most frequent prime number formed by concatenating adjacent digits in the matrix
    }
};
```

I hope these comments help in understanding the code better!
```

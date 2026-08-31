# [Java / C++ / C / JavaScript / C#] %100 easy to understand

**Author:** zeldox
**Votes:** 350
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/953267/](https://leetcode.com/problems/richest-customer-wealth/solutions/953267/)

---

if you like it pls upvote

Java
```
class Solution {
    public int maximumWealth(int[][] accounts) {
        int res = 0;
        for(int i =0;i<accounts.length;i++){
            int temp = 0;
            for(int j = 0;j<accounts[i].length;j++){
                temp+=accounts[i][j];
            }
            res = Math.max(res,temp);
        }
        return res;
    }
}
```

C++
```
class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int res = 0;
        for(int i =0;i<accounts.size();i++){
            int temp = 0;
            for(int j = 0;j<accounts[i].size();j++){
                temp+=accounts[i][j];
            }
            res = max(res,temp);
        }
        return res;
    }
};
```

C
```
int maximumWealth(int** accounts, int accountsSize, int* accountsColSize){
        int res = 0;
        for(int i =0;i<accountsSize;i++){
            int temp = 0;
            for(int j = 0;j<*accountsColSize;j++){
                temp+=accounts[i][j];
            }
            if(temp > res) res = temp;
        }
        return res;
}
```

JavaScript
```
var maximumWealth = function(accounts) {
        var res = 0;
        for(var i =0;i<accounts.length;i++){
            var temp = 0;
            for(var j = 0;j<accounts[i].length;j++){
                temp+=accounts[i][j];
            }
            res = Math.max(res,temp);
        }
        return res;
};
```

C#
```
public class Solution {
    public int MaximumWealth(int[][] accounts) {
        int res = 0;
        for(int i =0;i<accounts.Length;i++){
            int temp = 0;
            for(int j = 0;j<accounts[i].Length;j++){
                temp+=accounts[i][j];
            }
            res = Math.Max(res,temp);
        }
        return res;
    }
}
```
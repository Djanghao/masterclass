# [C++] DFS + backtracking | Added comments to archit91's solution

**Author:** theGateway
**Votes:** 18
**Link:** [https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/1712176/](https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/1712176/)

---

**Note:** I have described the isValid() function with comments, and that is the main part for understanding this problem. 
Basically we are trying to create a configuration in cur of good or bad people by trying out all ways, then we are checking what we made is in accordance with what these people said (what good people said) is true or not. This part is described further in isValid().

**Why is it backtracking** - Backtracking means to try out all possible ways, hence I think backtracking is correct word to describe what we are doing.

**Time and space complexity**
**T.C:** O(2^n * n^2) -
-> 2^n - Create all possible combinations of size n.
-> n^2 - Check validity of 2^n combinations each time by going through statements of all good persons (goodPersons == n persons in worst case leading to n^2).

**S.C:** O(n) - Storing cur of size n.

```
class Solution {
public:
    int result = 0;
    int n = 0;
    int maximumGood(vector<vector<int>>& statements) {
        n = statements.size();
        string cur = "";
        dfs(statements, cur, 0, 0);
        return result;
    }
    
    void dfs(vector<vector<int>>& statements, string& cur, int index, int goodPersonCount){
        if(index == n){
            //Check if cur is valid
            if(isValid(cur, statements)) result = max(goodPersonCount, result);
            return;
        }
        
        //Make current person a good person and call DFS
        cur.push_back('1');
        dfs(statements, cur, index+1, goodPersonCount+1);
        
        //Backtrack: Make current person a bad person and call DFS
        cur.back() = '0';
        dfs(statements, cur, index+1, goodPersonCount);
        
        cur.pop_back();
    }
    
    bool isValid(string& cur, vector<vector<int>>& statements){
        //isValid() will check if the statement of goodPerson (i) about person (j) i.e. statement[i][j], is contradictory to what we have in cur[j]
        
        //If it is contradictory, then in terms of question i is lying, and is not a goodPerson, so this is not a valid count.
        
        //If s[i][j] == 2, i.e. person i said nothing about j, then we can skip it.
        for(int i=0; i<n; i++){
            if(cur[i] == '1'){ //We only care about what good people say
                //Now we check what they said is in accordance with what we have in cur
                for(int j=0; j<n; j++){
                    if(statements[i][j] != 2 && statements[i][j] != cur[j] - '0') return false;
                }
            }
        }
        
        //All statements made by good person is in accordance with cur, so we have a valid count of good people
        return true;
    }
};
```
# C++ | Faster than 100% | Implementation Explained

**Author:** persistentBeast
**Votes:** 57
**Link:** [https://leetcode.com/problems/combination-sum-iii/solutions/2024061/](https://leetcode.com/problems/combination-sum-iii/solutions/2024061/)

---

* This is a simple backtracking problem.
* Try every k length combination for having sum equal to n.
* For this try including each number from 1 to 9 to be or not be in a combination. If at any point length of combination equal to k, check for its sum.
* If sum == n, include this combination in your answer otherwise backtrack.
* To check sum either you can pass a variable in your arguments or decrement n or check sum of elements in the combination vector at the end (like I have done).
```
class Solution {
    
    vector<vector<int>> ansArr;
    
public:
    
    int sum(vector<int>& combination){
        int ans = 0;
        for(auto x: combination){
            ans += x;
        }
        return ans;
    }
    
    void combinationSumHelper(int k, int n, vector<int>& combination, int num){
        
        if(k == 0){
            if(sum(combination) == n ){
                ansArr.push_back(combination);
            }
            return;
        }
        
        if(num > 9) return;
        
        combination.push_back(num);  // Including num in combination
        combinationSumHelper(k - 1, n, combination, num + 1);
        combination.pop_back(); // Not including num in combination
        combinationSumHelper(k, n, combination, num + 1);    
        
    }
    
    vector<vector<int>> combinationSum3(int k, int n) {
        
        vector<int> combination;
        combinationSumHelper(k, n, combination, 1);
        return ansArr;
        
    }
};
```

Other Similiar Problems : 
1. https://leetcode.com/problems/combinations/
2. https://leetcode.com/problems/combination-sum/
3. https://leetcode.com/problems/combination-sum-ii/
4. https://leetcode.com/problems/combination-sum-iv/
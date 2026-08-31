# [C++/Python] Easy and Concise Solution with Minimax Algorithm

**Author:** sjtuluo
**Votes:** 12
**Link:** [https://leetcode.com/problems/stone-game-iii/solutions/564266/](https://leetcode.com/problems/stone-game-iii/solutions/564266/)

---

The idea is not that hard as long as we figure out using minimax algorithm to solve this problem. 

Some similiar questions include:

https://leetcode.com/problems/can-i-win/
https://leetcode.com/problems/predict-the-winner/

Players play in an **optimal** way, which is a typical sign to use minimax algorithm. The trick here is to use memorization techniques in case there are memory errors. The dictionary `seen` here records the maximum winning points someone can get from a stoneValue list. Different from the solution in https://leetcode.com/problems/can-i-win/, we don't need to transform the whole list to a tuple and use it as a key. An index would be sufficient as a key for our dictionary as we only traverse the list from left to right. 

**C++**
```
class Solution {
    int seen[50005];
    bool visited[50005];
    int maxWin(vector<int>& stoneValue, int idx) {
        if (idx == stoneValue.size())
            return 0;
        
        if (visited[idx])
            return seen[idx];
        
        int res = INT_MIN;
        int myStone = 0;
        for (int i = idx; i < stoneValue.size() & i < idx + 3; i++) {
            myStone += stoneValue[i];
            res = max(res, myStone - maxWin(stoneValue, i + 1));
        }
        visited[idx] = true;
        seen[idx] = res;
        return res;
    }
    
public:
    string stoneGameIII(vector<int>& stoneValue) {
        int res = maxWin(stoneValue, 0);
        if (res > 0)
            return "Alice";
        else if (res < 0)
            return "Bob";
        else
            return "Tie";
    }
};
```

**Python**
```
class Solution:
    def stoneGameIII(self, stoneValue: List[int]) -> str:
        seen = {}

        def maxWin(idx):
            if idx == len(stoneValue):
                return 0
            if idx in seen:
                return seen[idx]
            
            myStone = 0
            res = float('-inf')
            for i in range(idx, min(idx + 3, len(stoneValue))):
                myStone += stoneValue[i]
                res = max(res, myStone - maxWin(i+1))
            seen[idx] = res
            return res
        
        res = maxWin(0)
        if res > 0:
            return 'Alice'
        elif res < 0:
            return 'Bob'
        else:
            return 'Tie'
```
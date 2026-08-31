# ✅☑Beats 98.22% Users || [C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 101
**Link:** [https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4566935/](https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4566935/)

---

# PLEASE UPVOTE IF IT HELPED

---
![Screenshot 2024-01-15 053113.png](./images/0.png)

---

# Approaches
(Also explained in the code)

#### ***Approaches 1(With Sets)***

1. **Data Structures:**

    - Maintain three sets: `zeroLoss`, `oneLoss`, and `moreLoss` to keep track of the winners in different categories based on their losses.
1. **Processing Matches:**

    - Iterate through each match in the input vector `matches`.
    - For each match, identify the winner and loser.
1. **Handling Winners:**

    - Check if the winner has zero losses (`zeroLoss`) and hasn't moved to `oneLoss` or `moreLoss`.
    - If so, insert the winner into `zeroLoss`.
1. **Handling Losers:**

    - Determine the category of the loser based on their current status in sets.
    - Move the loser from `zeroLoss` to `oneLoss` if they were in `zeroLoss`.
    - Move the loser from `oneLoss` to `moreLoss` if they were in `oneLoss`.
    - If the loser is already in `moreLoss`, skip.
1. **Building the Answer:**

    - Create a 2D vector `answer` with two rows: one for winners with zero losses and the other for winners with one loss.
    - Populate the rows of `answer` with the winners from corresponding sets, sorted in ascending order.
1. **Return Result:**

    - Return the `answer` vector containing the winners in different categories.



# Complexity
- Time complexity:
   $$O(nlogn)$$
    

- Space complexity:
   $$O(n)$$
    


# Code
```C++ []
User
class Solution {
public:
    vector<vector<int>> findWinners(vector<vector<int>>& matches) {
        unordered_set<int> zeroLoss, oneLoss, moreLoss;

        for (auto& match : matches) {
            int winner = match[0], loser = match[1];
            // Add winner.
            if ((oneLoss.find(winner) == oneLoss.end()) &&
                (moreLoss.find(winner) == moreLoss.end())) {
                zeroLoss.insert(winner);
            }
            // Add or move loser.
            if (zeroLoss.find(loser) != zeroLoss.end()) {
                zeroLoss.erase(loser);
                oneLoss.insert(loser);
            } else if (oneLoss.find(loser) != oneLoss.end()) {
                oneLoss.erase(loser);
                moreLoss.insert(loser);
            } else if (moreLoss.find(loser) != moreLoss.end()) {
                continue;
            } else {
                oneLoss.insert(loser);
            }
        }

        vector<vector<int>> answer(2, vector<int>());
        answer[0].assign(zeroLoss.begin(), zeroLoss.end());
        answer[1].assign(oneLoss.begin(), oneLoss.end());
        
        sort(answer[0].begin(), answer[0].end());
        sort(answer[1].begin(), answer[1].end());

        return answer;
    }
};


------------------------EASY TO UNDERSTAND CODE-----------------------

class Solution {
public:
    vector<vector<int>> findWinners(vector<vector<int>>& matches) {
        map<int,int>mp;

        for(int i=0;i<matches.size();i++){
            mp[matches[i][0]]+=0;
            mp[matches[i][1]]++;
        }

        vector<vector<int>>ans(2);
        for(auto a: mp){
            if(a.second==0)ans[0].push_back(a.first);
            if(a.second==1)ans[1].push_back(a.first);
        }
        // sort(ans.begin(),ans.end());
        return ans;
    }
};


```
```Java []
import java.util.*;

class Solution {
    public int[][] findWinners(int[][] matches) {
        Set<Integer> zeroLoss = new HashSet<>();
        Set<Integer> oneLoss = new HashSet<>();
        Set<Integer> moreLoss = new HashSet<>();

        for (int[] match : matches) {
            int winner = match[0];
            int loser = match[1];

            // Add winner.
            if (!oneLoss.contains(winner) && !moreLoss.contains(winner)) {
                zeroLoss.add(winner);
            }

            // Add or move loser.
            if (zeroLoss.contains(loser)) {
                zeroLoss.remove(loser);
                oneLoss.add(loser);
            } else if (oneLoss.contains(loser)) {
                oneLoss.remove(loser);
                moreLoss.add(loser);
            } else if (moreLoss.contains(loser)) {
                continue;
            } else {
                oneLoss.add(loser);
            }
        }

        List<List<Integer>> answerList = new ArrayList<>();
        answerList.add(new ArrayList<>(zeroLoss));
        answerList.add(new ArrayList<>(oneLoss));

        int[][] answer = new int[2][];
        for (int i = 0; i < 2; i++) {
            answer[i] = new int[answerList.get(i).size()];
            for (int j = 0; j < answerList.get(i).size(); j++) {
                answer[i][j] = answerList.get(i).get(j);
            }
        }

        // Sorting winners in each category.
        Arrays.sort(answer[0]);
        Arrays.sort(answer[1]);

        return answer;
    }
}



```
```python3 []
from typing import List

class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        zeroLoss, oneLoss, moreLoss = set(), set(), set()

        for match in matches:
            winner, loser = match[0], match[1]

            # Add winner.
            if winner not in oneLoss and winner not in moreLoss:
                zeroLoss.add(winner)

            # Add or move loser.
            if loser in zeroLoss:
                zeroLoss.remove(loser)
                oneLoss.add(loser)
            elif loser in oneLoss:
                oneLoss.remove(loser)
                moreLoss.add(loser)
            elif loser in moreLoss:
                continue
            else:
                oneLoss.add(loser)

        answer = [sorted(list(zeroLoss)), sorted(list(oneLoss))]
        return answer



```
```javascript []

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let zeroLoss = new Set();
    let oneLoss = new Set();
    let moreLoss = new Set();

    for (let match of matches) {
        let winner = match[0];
        let loser = match[1];

        // Add winner.
        if (!oneLoss.has(winner) && !moreLoss.has(winner)) {
            zeroLoss.add(winner);
        }

        // Add or move loser.
        if (zeroLoss.has(loser)) {
            zeroLoss.delete(loser);
            oneLoss.add(loser);
        } else if (oneLoss.has(loser)) {
            oneLoss.delete(loser);
            moreLoss.add(loser);
        } else if (moreLoss.has(loser)) {
            continue;
        } else {
            oneLoss.add(loser);
        }
    }

    let answer = [
        Array.from(zeroLoss).sort((a, b) => a - b),
        Array.from(oneLoss).sort((a, b) => a - b)
    ];
    
    return answer;
};


```
---





# PLEASE UPVOTE IF IT HELPED

---
---


---
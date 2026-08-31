# ✅ Easiest C++ solution with detailed explanation

**Author:** ayushsenapati123
**Votes:** 260
**Link:** [https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2995189/](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2995189/)

---

**PLEASE UPVOTE IF YOU FIND MY APPROACH HELPFUL, MEANS A LOT \uD83D\uDE0A**

**Intuition:** question revolves around frequency so we will use map 

**Approach:**
From observation, we can see that there's only 3 possible outcomes.
1. If the frequency is 1, the task cannot be performed so we return -1.
2. If the frequency is 3, the task can be performed and we return frequency/3.
3. Now if the frequency is not completely divisible by 3, then the possible remainders are 1 and 2. Lets check them out:
* If remainder is 1, i.e, lets take 7 frequency, then \uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E the groups are something like this "\uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E" "\uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E" "\uD83D\uDD2E", i.e, one \uD83D\uDD2E is left alone so the solution is to break the second last group into two parts of 2 and 1 so that it becomes like: "\uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E" "\uD83D\uDD2E\uD83D\uDD2E" "\uD83D\uDD2E\uD83D\uDD2E", i.e, one is added to the division by 3.
* If remainder is 2, i.e, lets take 8 frequency, then \uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E the groups are something like this "\uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E" "\uD83D\uDD2E\uD83D\uDD2E\uD83D\uDD2E" "\uD83D\uDD2E\uD83D\uDD2E", i.e, two \uD83D\uDD2E are left so the solution is to just add 1,i.e, one group of two to the solution.

```
class Solution {
public:
    int minimumRounds(vector<int>& tasks) {
        unordered_map<int,int> mp;
        for(int i=0;i<tasks.size();i++){
            mp[tasks[i]]++;
        }
        
        int output=0;
        
        for (auto freq : mp){
            if(freq.second==1)
                return -1;
            if(freq.second%3==0){
                output += freq.second/3;
            }
            else{
                output += freq.second/3 + 1;
            }
        }
        return output;
    }
};
```

**Time Complexity** => `O(N)`
**Space Complexity** => `O(N)`

![image](./images/0.png)

# C++✅✅ | Faster🧭 than 75%🔥| Straight Forward Method🆗 | Clean And Concise Code |

**Author:** mr_kamran
**Votes:** 525
**Link:** [https://leetcode.com/problems/jump-game-ii/solutions/3158218/](https://leetcode.com/problems/jump-game-ii/solutions/3158218/)

---


# Code

# Please Do Upvote!!!!
##### Connect with me on Linkedin -> https://www.linkedin.com/in/md-kamran-55b98521a/
```

class Solution {
public:

    int jump(vector<int>& nums) {

      for(int i = 1; i < nums.size(); i++)
      {
        nums[i] = max(nums[i] + i, nums[i-1]);
      }

      int ind = 0;
      int ans = 0;

      while(ind < nums.size() - 1)
      {
        ans++;
        ind = nums[ind];
      }

      return ans;
    }
};


```
![b62ab1be-232a-438f-9524-7d8ca4dbd5fe_1675328166.1161866.png](./images/0.png)

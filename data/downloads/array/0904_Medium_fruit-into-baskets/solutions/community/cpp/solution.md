# C++✅✅ | Faster🧭 than 85%🔥| Dynamic Sliding Window🆗 | Clean Code |

**Author:** mr_kamran
**Votes:** 162
**Link:** [https://leetcode.com/problems/fruit-into-baskets/solutions/3153512/](https://leetcode.com/problems/fruit-into-baskets/solutions/3153512/)

---


# Code

# **PLEASE DO UPVOTE!!!**

##### **Connect with Me on Linkedin -> https://www.linkedin.com/in/md-kamran-55b98521a/**
```

class Solution {
public:

    int totalFruit(vector<int>& fruits) {

        unordered_map<int, int> mpp;

        int i = 0, j = 0, res = 0;
        
        while(j < fruits.size())
        {

            mpp[fruits[j]]++;
            
            if(mpp.size() <= 2) res = max(res, j-i+1);
            
            else
            {
                mpp[fruits[i]]--;

                if(mpp[fruits[i]] == 0) mpp.erase(fruits[i]);

                i++;
            }

            j++;
        }

        return res; 
    }
};


```
![b62ab1be-232a-438f-9524-7d8ca4dbd5fe_1675328166.1161866.png](./images/0.png)

# Easy C++ and JavaScript Solution || Frequency Map

**Author:** himanshumude01
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2995478/](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2995478/)

---

# Good Morning
![Spider-Man-No-Way-Home-Doctor-Strange-Puffer-Jacket-568x614.jpg](./images/0.jpeg)


# C++ Code
```
class Solution {
public:
    int minimumRounds(vector<int>& tasks) {
        map<int,int>m;
        for(auto &i:tasks) m[i]++;
        int ans=0;
        for(auto &i:m)
        {
            if(i.second==1)
            {
                return -1;
            }
            ans+=ceil(i.second/3.0);
        }
        return ans;
    }
};
```


# JavaScript Code
```
/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let freq={}
    for(let i=0;i<tasks.length;i++)
    {
        if(freq[tasks[i]])
        {
            freq[tasks[i]]+=1;
        }
        else
        {
            freq[tasks[i]]=1;
        }
        
    }
    let ans=0;
    // console.log(freq);
    for(let obj in freq)
    {
        if(freq[obj]==1) return -1;
        else
        {
            ans+=Math.ceil(freq[obj]/3.0);
        }
    }
    return ans;
};
```

#### Upvote to keep me motivated.
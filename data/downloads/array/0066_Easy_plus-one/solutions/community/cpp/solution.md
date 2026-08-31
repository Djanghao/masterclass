# ✅ Simple [C++] solution with good explanation.

**Author:** AbdalrahmanShaban
**Votes:** 1008
**Link:** [https://leetcode.com/problems/plus-one/solutions/3054321/](https://leetcode.com/problems/plus-one/solutions/3054321/)

---

# Intuition
If we thought that all elements of the vector is a number we need to increase it by 1. The input can be 100 digits so we must handle that through digits.

# Approach
First we increment the first digit (last element) by 1, if it becomes 10 we make it 0 ans add 1 to the second digit.. until the last digit (first element), if it becoms 10 we make it 1 and push_back a leading zero.

# Complexity
- Time complexity:
O(n)


# Code
```
class Solution {
public:
    vector<int> plusOne(vector<int>& v) {
        int n = v.size();
        for(int i = n-1; i >= 0; i--){
            if(i == n-1)
                v[i]++;
            if(v[i] == 10){
                v[i] = 0;
                if(i != 0){
                    v[i-1]++;
                }
                else{
                    v.push_back(0);
                    v[i] = 1;
                }
            }
        }
        return v;
    }
};
```

Don't forget please :')

![UPVOTE.jpg](./images/0.jpeg)

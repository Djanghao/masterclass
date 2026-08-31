# 🏆 C++ || Freq Table || Easy Understanding

**Author:** intellisense
**Votes:** 20
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/1767697/](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/1767697/)

---

\uD83D\uDC68\u200D\uD83D\uDCBB Friend's if you find this solution helpful \uD83D\uDE0A, PLEASE do UPVOTE. By doing that motivates me to create a better post like this \u270D\uFE0F
____________________________________________________________________________________________________________
____________________________________________________________________________________________________________

#### \u2714\uFE0F **Question Conclusion**
* Make the array with alternate elements with min changes
#### \u2714\uFE0F **Solution - I (Best Approach)**
##### **Intuition :-**
* Store the frequencies of odd and even indexes.
* Then, keep track of the maximum frequency of elements in the j and k variable.
* It will give us how many elements we don't need to change.
* In last, just find out how many elements we have to change by subtracting from the total number of elements.
##### **Code :-**
```
class Solution
{
public:
    int minimumOperations(vector<int> &nums)
    {
        int mark[100001][2] = {}, i, j, k, res = 0;
        for (i = 0; i < nums.size(); i++)
            mark[nums[i]][i & 1]++;
        for (i = 1, j = k = 0; i <= 100000; i++)
            res = max(res, max(mark[i][0] + k, mark[i][1] + j)), j = max(j, mark[i][0]), k = max(k, mark[i][1]);
        return nums.size() - res;
    }
};
```
 
_____________________________________________________________________________________________________________
_____________________________________________________________________________________________________________

\uD83D\uDCBBIf there are any suggestions/questions in my post, comment below \uD83D\uDC47
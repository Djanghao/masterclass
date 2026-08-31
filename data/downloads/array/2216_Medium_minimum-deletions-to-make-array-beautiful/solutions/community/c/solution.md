# ✅ Best and Most Easy Explanantion || 3 line of code

**Author:** intellisense
**Votes:** 165
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/1887411/](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/1887411/)

---

\uD83D\uDC68\u200D\uD83D\uDCBB Friend's if you find this solution helpful \uD83D\uDE0A, PLEASE do UPVOTE. By doing that motivates me to create a better post like this \u270D\uFE0F
____________________________________________________________________________________________________________
____________________________________________________________________________________________________________

#### \u2714\uFE0F **Question Conclusion**
* there must be no repetitive value next to even index
* if we found any element for the above point we have to delete the element and shift every right element to its left by 1.
#### \u2714\uFE0F **Solution - I (Best Approach)**
##### **Intuition :-**
* we will fly the vector.
* every time we find a duplicate we will increment ans by 1.
* thus to check the second condition we will subtract the ans value from the index as we are shifting the element to the left.
* for the last edge case we will check the remaining size after removing ans element from the vector if the result is odd we have to remove 1 more element else just return the ans.
##### **Code :-**
```
class Solution {
public:
    int minDeletion(vector<int> &nums) {
        int ans = 0;
        for (int i = 0; i < nums.size() - 1; i++)
            if (nums[i] == nums[i + 1] and (i - ans) % 2 == 0) ans++;
        return ans + (nums.size() - ans) % 2;
    }
};
```
**Time Complexity** : `O(N)` time to fly the vector, 
**Space Complexity** : `O(1)` no extra space is  used, 
 
_____________________________________________________________________________________________________________
_____________________________________________________________________________________________________________

\uD83D\uDCBBIf there are any suggestions/questions in my post, comment below \uD83D\uDC47
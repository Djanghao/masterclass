# C++ easy O(NlogN) monotonic stack || multiset || similar to next greater element

**Author:** nervangera147
**Votes:** 24
**Link:** [https://leetcode.com/problems/next-greater-element-iv/solutions/2756340/](https://leetcode.com/problems/next-greater-element-iv/solutions/2756340/)

---

# Approach
we have to find every element's next to next greater element, we can use a stack for finding an element's next greater element.

so in the example [2,4,0,9,6] next greater element for 2 is 4.

as soon as next greater element of a number arrives, we can push that number in a multiset, and just lookout for one more greater element than that number which will be our answer.

so in the example, as soon as 4 arrives (next greater of 2) we push 2 in a multiset, when 9 arrives, we check multiset whether the elements in the multiset are smaller than 9, all the elements smaller than 9 will have answer = 9.

# Complexity
- Time complexity:
O(Nlog(N))

- Space complexity:
O(N)

# Code
```
class Solution {
public:

    vector<int> secondGreaterElement(vector<int>& nums) {
        stack<int> s;
        multiset<vector<int>> m;
        vector<int> ans(nums.size(),-1);
        s.push(0);
        for(int i=1;i<nums.size();i++){

            // check if current element is greater than any element present in multiset
            while(!m.empty() && nums[i] > (*m.begin())[0]){
                ans[(*m.begin())[1]] = nums[i];
                m.erase(m.begin());
            }

            // all the elements whose next greater element exist will be pushed in multiset, we keep this track with the help of stack
            while(!s.empty() && nums[i]>nums[s.top()]){
                m.insert({nums[s.top()],s.top()});
                s.pop();
            }
            s.push(i);
        }
        return ans;
    }
};
```
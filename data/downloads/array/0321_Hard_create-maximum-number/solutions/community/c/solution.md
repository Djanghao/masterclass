# ✅[C++] Intuition w/reference question | Stack and Merge sort Concept

**Author:** biT_Legion
**Votes:** 23
**Link:** [https://leetcode.com/problems/create-maximum-number/solutions/1917528/](https://leetcode.com/problems/create-maximum-number/solutions/1917528/)

---


This question is a combination of multiple topics and also one of the best question i have encountered so far. 
Before solving this question, you need have knowledge about merge sort technique and also you need to solve its prerequisite question ([1673. Find the Most Competitive Subsequence](https://leetcode.com/problems/find-the-most-competitive-subsequence/))

First, Try that question and if you dont get any intuition, don't feel bad. Even i took some help. You can read its editorial from [here](https://leetcode.com/problems/find-the-most-competitive-subsequence/discuss/1903056/C%2B%2B-Stack-Solution-intuition-or-Monotonic-Stack)

***Basic Idea*** of this problem is that we have two arrays, so we find the largest 'i' digit number from nums1 and largest 'k-i' digit number from nums2. After having these two, we merge them using merge sort algorithm. We use merge sort because it can be proved that largest number will always be sorted in descending order. The only thing to keep in mind while merging is the case where array elements are equal. In that case, we have to loop untill we find a greater element in one of the two arrays and then act accordingly.
            So after finding a i digit number from nums1 and k-i digit number from nums2, we merge them to form the maximum k digit number from these two arrays.


```
class Solution {
public:
    vector<int> maxNumber(vector<int>& nums1, vector<int>& nums2, int k) {
        vector <int>res;

        for(int i = 0; i<=k; i++){
            vector <int> a = fun(nums1, i);
            vector <int> b = fun(nums2, k-i);

            vector <int> m;
            merge(a, b, m);

            if(m.size()==k) res = max(res,m);
        }
        return res;
    }
protected:
    // This function is the code of "Find most consecutive subsequence" problem, which finds the k digit maximum number possible
    vector <int> fun(vector <int>&nums, int k){
        if(k>nums.size()) return {};
        vector <int> res;
        stack <int> st;
        int rem = k, n = nums.size();
        for(int i = 0; i<n; i++){
            if(st.empty()) st.push(nums[i]), rem--;
            else{
                int avail = n-i;
                while(!st.empty() and st.top()<nums[i] and rem<k and avail>rem) st.pop(), rem++;
                st.push(nums[i]), rem--;
            }
        }
        while(st.size()>k) st.pop();
        while(!st.empty()) res.push_back(st.top()), st.pop();
        reverse(res.begin(), res.end());
        return res;
    }
    void merge(vector <int>&a, vector <int>&b, vector <int>&res){
        int i = 0, j = 0, k = 0;
        // This is the only case which we need to take care of. Here, we loop until we find a number greater than another number
        // in other array. When we do that, we push the element in result array accordingly. Note that i am not using the pointer
        // i and j to loop, instead i have creater a temporary pointers which finds the position where elements are different.
        while(i<a.size() and j<b.size()){
            if(a[i]==b[j]){
                int ti = i, tj = j;
                while(ti<a.size() and tj<b.size() and a[ti]==b[tj]) ti++, tj++;

                if(tj==b.size()) res.push_back(a[i]), i++;
                else
                if(ti<a.size() and a[ti]>b[tj]) res.push_back(a[i]), i++;
                else res.push_back(b[j]), j++;
            }
            else
            if(a[i]>b[j]) res.push_back(a[i]), i++;
            else res.push_back(b[j]), j++;
        }
        while(i<a.size()) res.push_back(a[i]), i++;
        while(j<b.size()) res.push_back(b[j]), j++;
    }
};
```
# [C++] clean solution[Tricks explained] 100% time, 100% space

**Author:** harshit0311
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/684013/](https://leetcode.com/problems/count-largest-group/solutions/684013/)

---

***Please upvote if you found this post helpful :)***
There are a few tricks I learned while solving this questions. First one being how to write the sum of digits of a number in a single line and cleanly. Thanks to @votrubac for that. Secondly, the use of max_element for a vector. It's such a relief to know this function. I hope you too learned something. Cheers!

P.S: If you are wondering why the size of the vector is 37, the reason is because the maximum number according to the question will be 9999, the sum of which is 36. To store the frequency of the sum, we need a vector of size 37 because of 0 indexing. 
```
class Solution {
public:
    int countLargestGroup(int n) {
        vector<int> count(37,0);
        for(int i=1;i<=n;i++){
            count[calc_sum(i)]++;
        }
        int maxi=*max_element(count.begin(),count.end());
        int ans=0;
        for(auto i:count){
            if(i==maxi)ans++;
        }
        return ans;
    }
    int calc_sum(int n){
        return n==0?0:(n%10)+calc_sum(n/10);
    }
};
```
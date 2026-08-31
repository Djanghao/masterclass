# 3(n-1) API call C++ original solution

**Author:** xz2210
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-the-celebrity/solutions/71274/](https://leetcode.com/problems/find-the-celebrity/solutions/71274/)

---

knows(int a, int b) has two outcomes:

**true**: a knows b, so a is not celebrity, b is the candidate

**false**: a doesn't know b, so b can't be the celebrity, then a is the candidate. 

By calling API n - 1 times, each call we pick one and drop the other one, so in the end, we have one candidate left. Then we do another pass to check if everyone else know the candidate, and the candidate knows nobody else.



    // Forward declaration of the knows API.
    bool knows(int a, int b);
    
    class Solution {
    public:
        int findCelebrity(int n) {
            int ans = 0;
            for(int i = 1; i < n; i++){ //  n - 1 API call
                if(knows(ans, i)) ans = i;
            } 
            
            for(int i = 0; i < n; i++){
                if(i == ans) continue;
                if(knows(ans, i) || !knows(i, ans)) return -1; //  2*(n - 1) API call
            }
            
            return ans;
        }
    };
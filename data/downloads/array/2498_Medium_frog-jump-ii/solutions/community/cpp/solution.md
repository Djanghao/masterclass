# Detailed Explanation Greedy Algorithm ( O(n) time , O(1) space )

**Author:** prathamn1
**Votes:** 10
**Link:** [https://leetcode.com/problems/frog-jump-ii/solutions/2898192/](https://leetcode.com/problems/frog-jump-ii/solutions/2898192/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First of all it is always optimal to jump at alternate stones so that the length of each jump can be as minimum as possible, keeping in mind that we have to return back also.

suppose we have 5 stones kept at 0,1,2,3,4 positon respectively. so travelling from
0 -> 1 -> 2 -> 3 -> 4 will take 4-> 0 to return back means maximum jump=4
0 -> 2 -> 4 will take 4-> 3 -> 1 -> 0 to return back means maximum jump=2

so it is always optimal to take alternate stones for jump.


# Approach
<!-- Describe your approach to solving the problem. -->

**Odd Stones**
Now suppose we have 5 stones as a,b,c,d,e
so one path can be 
a -> c -> e and e -> d -> b -> a
so here the jump value would be absolute value of -:
*c-a , e-c , e-d , d- b , b-a*

**Even Stones**
Now suppose we have 6 stones as a,b,c,d,e,f
so one path can be 
a -> c -> e -> f and f -> d -> b -> a
so here the jumps would be  value of -:
*c-a , e-c , f-e , f-d , d-b , b-a*

---

So from above we see that the differece of stone values which matters to us from the stone array [0,1,2, ... , n-1,n] are :

one unit jump : 0->1 and n->(n-1).

Two unit jump : 2->0, 3->1 , 4->2 , ... ,(n-1)-> (n-1)-2, n->n-2.
 or all the valid '-2' jumps
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
We are traversing the array one time so 
    **$$O(n)$$**

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Only one extra variable ans is used to store the maximum jump so ,
    **$$O(1)$$**

# Code
```
class Solution {
public:
    int maxJump(vector<int>& stones) {
        int n=stones.size();
        //one unit jumps as stones.size()>=2
        int ans=max(stones[1]-stones[0],stones[n-1]-stones[n-2]);
        for(int i=0;i<n;i++) {
            if(i-2>=0) {
                ans=max(ans,stones[i]-stones[i-2]);
            }
        }
        return ans;
    }
};
```
Please upvote if you like it!

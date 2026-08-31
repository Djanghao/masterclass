# 3-D DP || Easy Detailed c++ solution

**Author:** viraj7403
**Votes:** 20
**Link:** [https://leetcode.com/problems/remove-boxes/solutions/4831819/](https://leetcode.com/problems/remove-boxes/solutions/4831819/)

---


# Approach

Question seems complex but if you can see how you make states then it will be easy to visualize. 


take case : 

2 2 2 3 3 3 4 4 4 

here you will think remove (2 ,2,2) then (3,3,3) and then (4,4,4) which will give you score of (3*3) + (3*3) + (3*3). 

is that all about this question ? 
Greedy approach ?  

Hold on dear , think about different cases. 
You know that (a + b) ^ 2 > a ^ 2 + b^ 2. 

so till this point you know above greedy method won't help you to give high score , because by doing combination you will get more score. 

ya that's true but one problem arise. 
how do you which combinaton to take ? 

Ummmmmmmmmmmmmmmm

Have you found out ? 

Yes, you have guessed right. It's DP. 

but hold on , will two state DP which have left and right index as dp[l][r] will work ? 

Um..... NO. 

what about if you want to combine. 

see this case: 

2 2 2 3 3 3 4 4 4 2 2  

here you can all 3's first then 4's then combine 2's but second chunk of 2 , how do you know that i have 3 remaining 2's at left part ?

you guessed right, Think about 3rd state. 

Ummmm..... but wait wait ... 

How do you know that this chunk and previous have same element. 

let take , 2 2 2 3 3 3 4 4 2 2 3 3 3 

here you can say 2 and 3 both have two chunks , how do you know that previous remaining length have came from element 2 or 3. 

will you make another state to store for each element what is previous length ? 

Are you mad ? No at all. 

then how will you know ? 


instead of making state add a loop , 
whenver you encounter that previous and next chunk have same element then only give length of previous chunk, 

I know above statement is bit difficult to digest. 

Don't Worry look at code or continue reading. 


```
let take case 

2 2 2 3 3 3 4 4 4 2 2 2

case 1 : take 1st chunk of 2's in score and check for next. 

ans_not-jump = (3*3) + dp(3 , 11 , 0);

means take this chunk of 2 into score and count answer for remaining array. In that case i will check answer for array of index from 3 to 11 with remaining element length = 0 , because you have consider this chunk of 2's. 



case 2 : 

I have chunk of 2 which has length 3 and hold on , i don't want to take this into score instead i will go further and looking for next chunk , but for which element ? 

Yes for element - 2. 

so from index 3 you go unto last index and whenever you found element 2 you can say i have remaining of k length which previous chunk and i want to continue from here. 


2 2 2 ,  ---------------> , 2 2 2  
        skip(3 3 3 4 4 4)         

0 1 2        3 4 5 6 7 8   9 10 11

from index 2 you skip in between elements and jump to index 9 with previous chunk length of 3. 

so ans = dp(9 , 11 , 3) but wait what about element which are from index 3 to 8. 

you have add term dp(3 , 8 , 0); you have previous chunk length = 0 right ? try to dry run for this step. 

now ans_jump = dp(9 , 11 , 3) + dp(3 , 8 , 0); 


now return max(ans_jump , ans_not-jump); 

and use 3D DP array to store this state, That all step ypu know right ? you are genious enough to handle that stuff.  

```
# Complexity
- Time complexity:
O(n^4)

- Space complexity:
O(n^3)

# Code
```
class Solution {
public:

    int solve(int l , int r , vector < int > & boxes , int k , int dp[101][101][101]){
       
        if(l > r) return 0; 

        int k_here = k; 
        int l_here = l; 

        if(dp[l][r][k_here] >= 0) return dp[l][r][k];  

        while(l+1 <= r && boxes[l] == boxes[l+1]) {
            k++; 
            l++; 
        }

        int ans = (k+1)*(k+1) + solve(l+1 , r , boxes , 0 , dp); 

        for(int m = l+1 ; m <=r ; m++){
            if(boxes[l] == boxes[m]){

                ans = max(ans , solve(m , r, boxes , k+1 , dp) + solve(l+1 , m-1 , boxes , 0 , dp)); 

            }
        }

        return dp[l_here][r][k_here] = ans; 
    }
    int removeBoxes(vector<int>& boxes) {


        int dp[101][101][101]; 

        memset(dp , -1 , sizeof(dp)); 


        int n = boxes.size(); 
        return solve(0 , n-1 , boxes , 0 , dp); 


        
    }
};
```


![image.png](./images/0.png)

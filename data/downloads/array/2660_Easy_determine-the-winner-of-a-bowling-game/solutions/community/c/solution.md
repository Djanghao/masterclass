# easy and simple solution in c++

**Author:** Manuka_Rahul
**Votes:** 5
**Link:** [https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/3468562/](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/3468562/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
traverse and check the previous 2
# Approach
<!-- Describe your approach to solving the problem. -->
-here we set a variable named 'set' that works when it is near the 2 or 1 only as it is moving forward it will decrease 
-use this in the function and check for the both the vectors
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {
public:
    int getcount(vector<int>& a)
    {
        int count=0,set=0;
        for(int i=0;i<a.size();i++)
        {
            if(set)
            {
                count+=2*a[i];
                set--;
            }
            else
            {
                count+=a[i];
            }
            if(a[i]==10)
            set=2;
        }
        return count;

    }

    int isWinner(vector<int>& player1, vector<int>& player2) 
    {
        int first=getcount(player1);
        int second=getcount(player2);
        return first == second ? 0 : (first<second) + 1 ;  
    }
};
```
# upvote me if you like the solution comment if any doubts
![images.jpeg](./images/0.jpeg)

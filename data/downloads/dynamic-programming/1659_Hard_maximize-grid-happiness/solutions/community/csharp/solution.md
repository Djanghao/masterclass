# C# Top Down 4D Memoization | Ternary state representation | Beats 100%

**Author:** beanskun
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-grid-happiness/solutions/4024260/](https://leetcode.com/problems/maximize-grid-happiness/solutions/4024260/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    private int?[,,,] memo;
    private int iCount, eCount, totalStates;
    private int pm, pn;

    public int GetMaxGridHappiness(int m, int n, int introvertsCount, int extrovertsCount) {
        totalStates = (int) Math.Pow(3, n);
        memo = new int?[m * n, introvertsCount + 1, extrovertsCount + 1, totalStates];
        iCount = introvertsCount;
        eCount = extrovertsCount;
        pn = n;
        pm = m;

        return dp(0, introvertsCount, extrovertsCount, 0);
    }


    private int dp(int position, int remICount, int remECount, int prevState){
        if(pn * pm == position){
            return 0;
        }

        if(memo[position, remICount, remECount, prevState] != null){
            return memo[position, remICount, remECount, prevState].Value;
        }

        //Skip position
        int skipState = SetLastState(prevState, 0);
        int result = dp(position + 1, remICount, remECount, skipState);

        
        int left = GetState(prevState, 0);
        int up = GetState(prevState, pn - 1);

        //Place introvert
        if(remICount > 0){
            int diff = 0;
            if(position % pn > 0 && left != 0){
                diff -= 30;
                if(left == 1) diff -= 30;
                else diff += 20;
            }

            if(position / pn > 0 && up != 0){
                diff -= 30;
                if(up == 1) diff -= 30;
                else diff += 20;
            }

            result = Math.Max(result, 120 + diff + dp(position + 1, remICount - 1, remECount, SetLastState(prevState, 1)));
        }

        if(remECount > 0){
            int diff = 0;
            if( position % pn > 0 && left != 0){
                diff += 20;
                if(left == 1) diff -= 30;
                else diff += 20;
            }

            if(position / pn > 0 && up != 0){
                diff += 20;
                if(up == 1) diff -= 30;
                else diff += 20;
            }

            result = Math.Max(result, 40 + diff + dp(position + 1, remICount, remECount - 1, SetLastState(prevState, 2)));
        }

        return (memo[position, remICount, remECount, prevState] = result).Value;
    }

    //0 -> empty
    //1 -> introvert
    //2 -> extrovert
    //i is 0 based starting from the LSB

    private int GetState(int state, int i){
        state = state / (int) Math.Pow(3, i);
        return state % 3;
    }

    private int SetLastState(int state, int value){
        return ((state * 3) + value) % totalStates;
    }

}
```
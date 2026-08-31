# ✅C# || ✅Java || ✔Simple Solution || ✅Easy to Understand || Code with Comments

**Author:** Santhosh1608
**Votes:** 16
**Link:** [https://leetcode.com/problems/jump-game-ii/solutions/3158252/](https://leetcode.com/problems/jump-game-ii/solutions/3158252/)

---

# Intuition
Advice: Frist ,You need to analyse the question to which data structure to apply for this solution,It will come automatically,when you solve more problems.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
My first Approach was Dynammic programming,but solution beats 50%.
I moved to greedy method and Beats 95%.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
//Greedy Approach
public class Solution {
    public int Jump(int[] nums) {
        int length=nums.Length;

        int highJump=0;
        int jump=0;
        int currPos=0;
        // corner case :only one positio don't need jump
        if(length==1){
            return 0;
        }
        // base case : If start position given range,you won't jump more So,return -1;
        if(nums[0]==0){
            return -1;
        }
        //Loop through steps 
        for(int i=0;i<length;i++){
            highJump=Math.Max(highJump, i+nums[i]);
            // When the jump reaches the end return the total jumps
            if(highJump>=length-1){
                return jump+1;
            }
            if(i==currPos){
                currPos=highJump;
                jump++;
            }
        }
        return -1;
    }
}
```UPVOTE THE POST (Upvote karo masth.. Karo bhaiye..)
    //Dynammic Programming
    int length=nums.Length;
    //It's the way to assign value to all indexes
    int[] dp = Enumerable.Repeat(Int32.MaxValue,length).ToArray();
    dp[0] = 0;
    for(int i = 0; i <length; i++) {
        for(int j = 0; j <= nums[i] && i + j < length; j++) {
            dp[i+j] = Math.Min(dp[i+j], dp[i] + 1);                
        }
    }
    return dp[length - 1];

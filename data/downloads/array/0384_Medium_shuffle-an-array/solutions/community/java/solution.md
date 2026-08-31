# Easy Solution

**Author:** Ikapoor123
**Votes:** 7
**Link:** [https://leetcode.com/problems/shuffle-an-array/solutions/4582956/](https://leetcode.com/problems/shuffle-an-array/solutions/4582956/)

---


# Code
```
class Solution {
    int data[];
    public Solution(int[] nums) {
        data = new int[nums.length];

        for(int i=0;i<nums.length;i++)  data[i] = nums[i];
    }
    
    public int[] reset() {
        return data;
    }
    
    int Random(){
        Random rand = new Random();

        return rand.nextInt(data.length);
    }

    public int[] shuffle() {
        
        int[] ans = new int[data.length];
        boolean added[] = new boolean[data.length];

        for(int i=0;i<ans.length;i++){
            int index = Random();
            if(!added[index]){
                added[index] = true;
                ans[i] = data[index];
            }
            else i--;

        }    
        return ans;
        // return data;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int[] param_1 = obj.reset();
 * int[] param_2 = obj.shuffle();
 */
```

![upvote.png](./images/0.png)

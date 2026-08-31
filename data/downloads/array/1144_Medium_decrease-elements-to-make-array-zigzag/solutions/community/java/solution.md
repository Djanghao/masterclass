# Simple JAVA Greedy Solution with explaination

**Author:** raghu6306766
**Votes:** 2
**Link:** [https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/1734780/](https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/1734780/)

---

class Solution {
    
	//Basic idea is to minimize each index with respect to its neighbours
	public int movesToMakeZigzag(int[] nums) {
        int n = nums.length, 
			oddCost = 0,  //cost to make odd indices lower than their neighbours cost to make even indices lower than their neighbours
			evenCost = 0; //cost to make odd indices lower than their neighbours cost to make even indices lower than their neighbours
       
	   for(int i = 0; i < nums.length; i++){
            
            if((i - 1 >= 0 && nums[i - 1] <= nums[i]) || (i + 1 < n && nums[i + 1] <= nums[i])){ //if any of the neighbour is less than the curr index then reduce it 
                int min = Integer.MAX_VALUE; //find neigbour with minimum value
                
                if(i - 1 >= 0)
                    min = Math.min(min, nums[i - 1]);
                if(i + 1 < n)
                    min = Math.min(min, nums[i + 1]);
                
                int cost = nums[i] - min + 1; //caluclate cost to make the value of current index lower than its neighbours
                
				//add cost to corresponding index cost variable
                if(i % 2 == 0)
                    evenCost += cost;
                else
                    oddCost += cost;
                
            }
        }
        
        return Math.min(oddCost, evenCost);
    }
}
# TIme: O(n), Space: O(1)

**Author:** riyakushwaha
**Votes:** 351
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/1583741/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/1583741/)

---

For each value in the array mark its presence by making the number negative at that place in array 
eg. if you hae array [3,1,4,1] for 3, i will go to index 2 and make its value negative ie. now nums[2] becomes -4. present array: [3,1,-4,1]
for 1, i will go to index 0 and make its value negative ie. now nums[0] becomes -3. present array: [-3,1,-4,1]
for 4, (take abs value), i will go to index 3 and make its value negative ie. now nums[3] becomes -1. present array: [-3,1,-4,-1]
for 1 take abs value), i will go to index 0 as it is already -ve do nothing. present array: [-3,1,-4,-1]
At last I will have [-3,1,-4,-1]. now i will iterate over the array, whichever idx has positive value that number will not be in the array so as we have nums[1]>0 so 2 is not in the list.

**PLEASE UPVOTE** if you liked the solution, comment for any queries

```
    public List<Integer> findDisappearedNumbers(int[] nums) {
        List<Integer> list = new ArrayList<>();
        int idx = -1;
        for(int i = 0; i < nums.length; i++){
            if(nums[i] < 0){
                idx = nums[i]*-1-1;
            }else{
                idx = nums[i]-1;
            }
            
            if(nums[idx]>0){
                nums[idx] = -nums[idx];
            }
            
        }
        
        for(int i = 0; i < nums.length; i++){
            if(nums[i] > 0){
                list.add(i+1);
            };
            
        }
        
        return list;
    }
	```
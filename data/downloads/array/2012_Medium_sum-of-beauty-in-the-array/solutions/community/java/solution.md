# Simple Solution with reasoning || c++ || java

**Author:** book11she
**Votes:** 66
**Link:** [https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/1471916/](https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/1471916/)

---

For the beauty value of the ith element to be 2, it should be greater than all the elements on its left and smaller than all the elements on its right.
So, it should be greater than the maximum of all elements on the left and smaller than minimum of all elements on the right.
    
For the beauty value of the ith element to be 1, it should firstly not satisfy the above statement and secondly the ith element should be greater than the (i - 1)th element and lesser than (i + 1)th element

C++:
```
int sumOfBeauties(vector<int>& nums) {
    int n = nums.size();
    vector<int> minOnRight(n, 0);
    minOnRight[n - 1] = nums[n - 1];
    
    // loop for maintaing values of minimum on the right
    for(int i = n - 2; i >= 2; i--){
        //minimum is either the number itself or the minimum that is on right of this element we are traversing
        minOnRight[i] = min(minOnRight[i + 1], nums[i]);           
    }
        
    int maxOnLeft = nums[0];
    int ans = 0;
    for(int i = 1; i < n - 1; i++){
        if(nums[i] > maxOnLeft && nums[i] < minOnRight[i + 1]) ans += 2;
        else if(nums[i] > nums[i - 1] && nums[i] < nums[i + 1]) ans += 1;
        maxOnLeft = max(nums[i], maxOnLeft);
    }
        
    return ans;
}
```

Java: 
```
public int sumOfBeauties(int[] nums) {
    int n = nums.length;
    int minOnRight[] = new int[n];
    minOnRight[n - 1] = nums[n - 1];
	
	// loop for maintaing values of minimum on the right
    for(int i = n - 2; i >= 2; i--){
	    //minimum is either the number itself or the minimum that is on right of this element we are traversing
        minOnRight[i] = Math.min(minOnRight[i + 1], nums[i]);           
    }
    
    int maxOnLeft = nums[0];
    int ans = 0;
    for(int i = 1; i < n - 1; i++){
        if(nums[i] > maxOnLeft && nums[i] < minOnRight[i + 1]) ans += 2;
        else if(nums[i] > nums[i - 1] && nums[i] < nums[i + 1]) ans += 1;
        maxOnLeft = Math.max(nums[i], maxOnLeft);
    }
      
    return ans; 
}
```
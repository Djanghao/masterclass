# C++ | Two Approaches (2Pass -> 1Pass) | O(n), Beats 100% | No Extra Space | Explanation

**Author:** akash2099
**Votes:** 90
**Link:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/1082404/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/1082404/)

---

**APPROACH 1 (Two Pass)**
Create a `start` and `end` variable to store the indexes of **starting** and **ending** positions of the *Shortest Unsorted Continuous Subarray* respectively.
```
int n=nums.size();
int start=-1,end=n;
```
**PASS 1** : Iterate from the **end**, and check weather the element at index `i` is the **current minimum element** (`curr_min`) or not. If not then `i` is the **starting index** (`start`) as `nums[i] > nums[i-1] > nums[i-2] > ..`. (array needs to be in ascending order)
```
int curr_min=MAX_VAL;
for(int i = n - 1; i>=0; i--) {
	if(curr_min > nums[i]) curr_min = nums[i];
	if(nums[i] > curr_min) start = i;
}
```
**PASS 2** : Iterate from the **start**, and check weather the element at index `i` is the **current maximum element** (`curr_max`) or not. If not then `i` is the **ending index** (`end`) as `nums[i] < nums[i+1] < nums[i+2] < ..`. (array needs to be in ascending order)
```
int cur_max = -MAX_VAL;
for(int i=0; i<n; i++) {
	if(cur_max < nums[i]) cur_max = nums[i];
	if(nums[i] < cur_max) end = i;
}
```
In the end, check for a valid `start` index :
- If *not found* then `return 0`.
- If *found* then `return end-start+1`, that is the length of range in between **[start, end]**.
```
if(start==-1){ 
	return 0;
}
return end-start+1;
```

**COMPLETE CODE**
```
// From constraints of the problem -10^5 <= nums[i] <= 10^5
# define MAX_VAL 100001
class Solution {
public:
    int findUnsortedSubarray(vector<int>& nums) {
        int n=nums.size();
        int start=-1,end=n;        
        // Since, the array needs to be in ascending order.
        
        // PASS 1
        // Iterate from the end, and check weather the element at index "i" is the current minimum element or not. If not then "i" is the starting index.
        int curr_min=MAX_VAL;
        for(int i = n - 1; i>=0; i--) {
            if(curr_min > nums[i]) curr_min = nums[i];
            
            if(nums[i] > curr_min) start = i;
        }
        
        // PASS 2
        // Iterate from the start, and check weather the element at index "i" is the current maximum element or not. If not then "i" is the ending index.
        int cur_max = -MAX_VAL;
        for(int i=0; i<n; i++) {
            if(cur_max < nums[i]) cur_max = nums[i];
            
            if(nums[i] < cur_max) end = i;
        }
        
        // if no starting index found, that means the array is already sorted in ascending order
        if(start==-1){ 
            return 0;
        }
        return end-start+1; // number of elements between start and end index
    }
};
```

Considering, *n* = size of `nums`
**TIME COMPLEXITY**
**O(n+n)=O(n)** [ *Each pass takes O(n)* ]

**SPACE COMPLEXITY**
**O(1)**

---

**APPROACH 2 (Single Pass)**
As suggested by [@Niks291](https://leetcode.com/Niks291), we can combine the two passes into one using the **two-pointer** technique and maintaining **max so far** (`curr_max`) and **min so far** (`curr_min`).

**EXAMPLE**
**Input**: nums = [2,6,4,8,10,9,15]

- **Initialize few variables**:
	```
	int ans = 0; // answer
	// Two pointers
	int i = 0;
	int j = nums.size() - 1;
	int curr_max=INT_MAX; // keeps the maximum so far
	int curr_min=INT_MIN; // keeps the minimum so far
	// Initialize end to -1, if we have all sorted in ascending order, then end-start+1 = -1+0+1 = 0 
	// starting index and ending index of answer
	int start=0,end=-1;
	```

- **Iterate `nums` using the two-pointers technique**:
	```
	while(j >= 0){
		// Check if the "num[start]" is greater than the minimum element so far
		if(nums[i] >= curr_min) curr_min = nums[i];
		else end = i; // m contains the 

		// Check if the "num[end]" is less than the maximum element so far
		if(nums[j] <= curr_max) curr_max = nums[j];
		else start = j;

		++i;
		--j;
	}
	```
	
	**DRY RUN:**
	
	```
	For i = 0 (nums[0] = 2) and j = 6 (nums[6] = 15) :
	curr_max = 15 and curr_min = 2
	start = 0 and end = -1

	For i = 1 (nums[1] = 6) and j = 5 (nums[5] = 9) :
	curr_max = 9 and curr_min = 6
	start = 0 and end = -1

	For i = 2 (nums[2] = 4) and j = 4 (nums[4] = 10) :
	curr_max = 9 and curr_min = 6
	start = 4 and end = 2

	For i = 3 (nums[3] = 8) and j = 3 (nums[3] = 8) :
	curr_max = 8 and curr_min = 8
	start = 4 and end = 2

	For i = 4 (nums[4] = 10) and j = 2 (nums[2] = 4) :
	curr_max = 4 and curr_min = 10
	start = 4 and end = 2

	For i = 5 (nums[5] = 9) and j = 1 (nums[1] = 6) :
	curr_max = 4 and curr_min = 10
	start = 1 and end = 5

	For i = 6 (nums[6] = 15) and j = 0 (nums[0] = 2) :
	curr_max = 2 and curr_min = 15
	start = 1 and end = 5
	```

- **Finally**, return the range between [start, end], that is `end-start+1`.
	```
	return end - start + 1
	```

**CODE IMPLEMENTATION**
```
class Solution {
public:
    int findUnsortedSubarray(vector<int>& nums) {

        int ans = 0;  
        
        // Two pointers
        int i = 0;
        int j = nums.size() - 1;

        int curr_max=INT_MAX;
        int curr_min=INT_MIN;
        
        // Initialize end to -1, if we have all sorted in ascending order, then end-start+1 = -1+0+1 = 0 
        int start=0,end=-1;
        
        while(j >= 0){
            // Check if the "num[start]" is greater than the minimum element so far
            if(nums[i] >= curr_min) curr_min = nums[i];
            else end = i; // m contains the 

            // Check if the "num[end]" is less than the maximum element so far
            if(nums[j] <= curr_max) curr_max = nums[j];
            else start = j;

            ++i;
            --j;
        }
        return end - start + 1;
    }
};
```

Considering, *n* = size of `nums`
**TIME COMPLEXITY**
**O(n)** [ *Each element is traversed exactly once* ]

**SPACE COMPLEXITY**
**O(1)**
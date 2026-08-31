# Best approach in JAVA,C++,PYTHON,GO with 0ms runtime!!

**Author:** madhavbsnl013
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/3707735/](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/3707735/)

---



# Approach
The given code defines a class named "Solution" with a member function named "minOperations". This function takes a vector of integers "nums" as input and returns an integer.

The purpose of the function is to calculate the minimum number of operations required to make the elements in the input vector strictly increasing. An operation involves incrementing an element by a certain amount to make it greater than the next element.

Here's how the function works:

1. It declares an integer variable named "count" and initializes it to 0. This variable keeps track of the total number of operations performed.

2. The function enters a for loop that iterates over each element in the input vector "nums", except for the last element.

3. Inside the loop, it checks if the current element "nums[i]" is greater than or equal to the next element "nums[i+1]". If it is, it means that an operation is required to make the elements strictly increasing.

4. If an operation is needed, the function calculates the difference between the current element and the next element plus 1, and adds it to the "count" variable. This accounts for the number of increments required to make the current element greater than the next element.

5. Additionally, it updates the next element "nums[i+1]" to be equal to the current element plus 1. This ensures that the next element is greater than the current element after the operation is performed.

6. If the current element is already less than the next element, the code continues to the next iteration of the loop.

7. After the loop completes, the function returns the value of the "count" variable, which represents the minimum number of operations required to make the elements in the vector strictly increasing.

In summary, the "minOperations" function calculates the minimum number of operations needed to transform the elements in the input vector into a strictly increasing sequence. It iterates through the vector, performs operations when necessary, and keeps track of the total number of operations performed.


# Code

```java []
import java.util.List;

class Solution {
    public int minOperations(List<Integer> nums) {
        int count = 0;
        for (int i = 0; i < nums.size() - 1; i++) {
            if (nums.get(i) >= nums.get(i + 1)) {
                count += nums.get(i) - nums.get(i + 1) + 1;
                nums.set(i + 1, nums.get(i) + 1);
            }
        }
        return count;
    }
}

```
```C++ []
class Solution {
public:
    int minOperations(vector<int>& nums) {
        int count=0;
        for(int i=0;i<nums.size()-1;i++){
            if(nums[i]>=nums[i+1]){
                count=count+nums[i]-nums[i+1]+1;
                nums[i+1]=nums[i]+1;
            }
            else
                continue;
        }
        return count;
          
        
    }
};
```
```Python []
class Solution:
    def minOperations(self, nums):
        count = 0
        for i in range(len(nums) - 1):
            if nums[i] >= nums[i + 1]:
                count += nums[i] - nums[i + 1] + 1
                nums[i + 1] = nums[i] + 1
        return count

```
```Go []
package main

import (
	"fmt"
)

type Solution struct{}

func (s Solution) minOperations(nums []int) int {
	count := 0
	for i := 0; i < len(nums)-1; i++ {
		if nums[i] >= nums[i+1] {
			count += nums[i] - nums[i+1] + 1
			nums[i+1] = nums[i] + 1
		}
	}
	return count
}

func main() {
	s := Solution{}
	nums := []int{1, 3, 1, 1, 2, 5, 2, 2}
	result := s.minOperations(nums)
	fmt.Println("Minimum Operations:", result)
}

```

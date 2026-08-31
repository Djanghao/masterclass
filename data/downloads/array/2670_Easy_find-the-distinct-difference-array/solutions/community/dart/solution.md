# Short But Foxy

**Author:** Youssef1911
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/6038663/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/6038663/)

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
```dart []
class Solution {
  List<int> distinctDifferenceArray(List<int> nums) {
    List<int> distenct = []; // only stores the unique numbers using a condition
    List<int> res = []; // what er returns
int b4 = 0 ; // stores the length of unique numbers untill the current index of the main loop
int after= 0 ; //stores the length of unique numbers after the current index of the main loop
for(int i = 0 ; i<nums.length ; i++){ //main loop

    for(int v =  0 ; v <= i ; v++){ // loops from 0 to i
        if(!distenct.contains(nums[v])){ // store numbe in distenct
            distenct.add(nums[v]); // conditon 1
            }
            b4 = distenct.length ;  // b4 value

    }
distenct.clear(); // 
    for(int k = i+1 ; k < nums.length ; k++){ // loops from i+1 to end
        if(!distenct.contains(nums[k])){
            distenct.add(nums[k]);
        }
        after = distenct.length ; 
    }
    res.add(b4-after);

    after= 0;
    b4 = 0;
    distenct.clear();

    }



return res;
  }

}

```
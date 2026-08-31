# 2 solutions -- brute force (n^3) and 2 pointer approach

**Author:** dclif
**Votes:** 4
**Link:** [https://leetcode.com/problems/valid-triangle-number/solutions/1305720/](https://leetcode.com/problems/valid-triangle-number/solutions/1305720/)

---

**Solution 1**
Given that we need to sum 2 numbers and the result must be greater than a 3rd number, i got the feeling that sorting the input first would help us alot. This way we can have small values in the front and large ones on the back. 

In a way you can sort of think of this as a 3sum problem where the question is essentially asking us to find 3 pairs of numbers where
the following must be true: `num1 + num2 > num3 `

Imagine an array that looks like this, where we have our pointers like this:
```
[2  4  6  8   9]
 a        b   c     ----> a + b > c, then solutions_count += b-a, which is 3..3 possible solutions from index b to a
 a     b  c         ----> a + b > c, then solutions_count += b-a which is  2..2possible solutions from index b to a
```

High level steps
- sort the input
- use 2 pointer approach
- start for loop from the end (call this side_c_index)
  - create a side_a_index and side_b_index inside the for loop



```
var triangleNumber = function (nums) {
    if(nums.length < 3) return 0;
    
    nums.sort((a,b) => a-b)
    let solutions_count = 0;
    
    for(let side_c_index=nums.length-1; side_c_index >= 2; side_c_index--){
        let side_a_index =0;
        let side_b_index = side_c_index-1;

        while(side_a_index < side_b_index){
            if(nums[side_a_index] + nums[side_b_index] > nums[side_c_index]){
                solutions_count += side_b_index - side_a_index;
                side_b_index -= 1
            }
            else {
                side_a_index +=1;
            }
        }
    }

    return solutions_count;
};
```


**Solution 2: Brute Force**
- use 3 loops (nested) to test triplets
- slow n^3

```
var triangleNumber = function (nums) {
    if(nums.length < 3) return 0;
    let solutions_count = 0;
    
    for(let i=0; i < nums.length; i++){
        for(let j=i+1; j < nums.length; j++){
            for(let k=j+1; k < nums.length; k++){
                const [side_a, side_b, side_c] = [ nums[i], nums[j], nums[k] ];
                
                if(is_valid_triangle(side_a, side_b, side_c)){
                    solutions_count += 1
                }
            }
        }
    }
    return solutions_count;
};

function is_valid_triangle(side_a, side_b, side_c){
    return (
        side_a + side_b  > side_c && 
        side_a + side_c > side_b && 
        side_c + side_b > side_a
    )
}
```


Note
- this problem has  similarities to [3sum smaller](https://leetcode.com/problems/3sum-smaller/submissions/). Specifically the part where once we find a solution that works, we subtract to indices to indicate this and solutions within this index range also work
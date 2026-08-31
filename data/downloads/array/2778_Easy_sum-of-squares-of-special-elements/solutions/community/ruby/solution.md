# c++ beest optimal easy solution made by self beats 100%of users

**Author:** ANKITBI1713
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/4637597/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/4637597/)

---


<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->it is simple approach in this you have to remember that i starts from 1 to n we have to chech the num i divedes n or not if yes then add the element at this positoin
but imp thing is that the numbering starts from one but the index starts from 0 so we add the number i th positino -1
then simplyiterate for loop and store in a variable sum and return sum;


# Code
```
int sumOfSquares(int* nums, int numsSize){
    int sum=0;
    for(int i=0;i<numsSize;i++)
        {
            if(numsSize%(i+1)==0)
            {
                sum+=nums[i]*nums[i];
            }
        }
        return sum;
}
```
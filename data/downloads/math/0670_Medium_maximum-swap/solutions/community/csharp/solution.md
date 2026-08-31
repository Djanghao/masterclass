# traverse right to left get swap index, beat 100%  added YouTube video link

**Author:** vinod_aka_veenu
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-swap/solutions/5923252/](https://leetcode.com/problems/maximum-swap/solutions/5923252/)

---

# YouTube Explanation https://youtu.be/O0KGZX2_tMs
# Intuition and Approach

if we convert the num to character array, then our aim is to swap a leftmost index ===>  if(arr[left]<arr[left+1]) ====> we have to find a biggest value on right side (there could be multiple bigger) 

===> 1234355 ===> leftmostIndex = 0,   rightmostIndex= 6
====> swap ==> **5**23435**1** (one swap biggest)

**but wait , what if number = 11123455**?
in this case we need to swap it with first occurence of '1'==>
why?? because we are looking for biggest number so we should try to give it for leftmost guy satisfying the condition.

11123455===> swap(0, 7) ===> **5**112345**1**

ok then what if number is like **987654321**

in this case (arr[left]<arr[left+1]) this will never occur==> return **nums** itself.

also there could the cases ==> 8888777734===> leftIndex = 8, rightIndex = 9 ==> 88887777***4*****3**

so to achove this we will start from end of the array ===> right to left.

we keep track of the **maxValueIndex**, from right, inintially we would have three variables
maxValueIndex=0, swapIndex1=-1, swapIndex2=-1;

for i=n-1; i>=0; i--
whenever we found nums[i]>nums[maxIndex]==> maxIndex=i

          OR if we found nums[i]<nums[maxIndex] 
          ==> we found potentially swap index swapIndex1 = maxIndex, swapIndex2 = i

**had a question? why we are not swaping now swapIndex1, and swapIndex2??**

because we want to get the index as mush as possible in left side because we need to get greatest num.

so finally we would come out of loop===> then we would check ==>

if (swapIndex==-1 || swapIndex2==-1)==> condition never found==> return num....otherwise===>

swap the values at **swapIndex1** and **swapIndex2** and convert the char array to integer and return.

**still have doubt, no prob Youtube video is coming soon**

# Code
```java []
class Solution {
    public int maximumSwap(int num) {
    int maxIndex = -1, swap1 =-1, swap2=-1 ;
    char nums[] = Integer.toString(num).toCharArray();
    int n = nums.length;

    for(int i=n-1; i>=0; i--)
    {
      if(maxIndex==-1 || nums[i]>nums[maxIndex])
      {
        maxIndex = i; 
      } 
      else if(nums[i]<nums[maxIndex])
      {
        swap1 = i;
        swap2 = maxIndex;
      }  
    }

    if(swap1!=-1 && swap2!=-1)
    {
       char temp = nums[swap1];
       nums[swap1] = nums[swap2];
       nums[swap2] = temp;
    }
      return Integer.parseInt(new String(nums)) ;
    }
}
```
```C++ []
class Solution {
public:
    int maximumSwap(int num) {
        int maxIndex = -1, swap1 = -1, swap2 = -1;
        std::string nums = std::to_string(num);
        int n = nums.size();

        for (int i = n - 1; i >= 0; i--) {
            if (maxIndex == -1 || nums[i] > nums[maxIndex]) {
                maxIndex = i;
            } 
            else if (nums[i] < nums[maxIndex]) {
                swap1 = i;
                swap2 = maxIndex;
            }
        }

        if (swap1 != -1 && swap2 != -1) {
            std::swap(nums[swap1], nums[swap2]);
        }

        return std::stoi(nums);
    }
};
```





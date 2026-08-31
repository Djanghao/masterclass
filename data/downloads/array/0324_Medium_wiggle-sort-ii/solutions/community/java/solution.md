# O(n) + O(1) after median --- NO indexing required

**Author:** monkbaby
**Votes:** 72
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/755415/](https://leetcode.com/problems/wiggle-sort-ii/solutions/755415/)

---

Since most of the topvoted posts use virtual indexing/three-way-partitioning, I decided to solve the question without it. I didn't think I could come up with it in an interview so I wanted something more intuitive.

The idea is as follows : 
1. Find the median using quickselect. ( **O(n**) average time)
2. Larger numbers than the median can be filled on odd positions starting from the beginning.
3. Smaller numbers than the median can be filled on even positions from the end.

Why can't both larger and smaller numbers be filled from the beginning or end? It's because when there are duplicate median elements they will be adjacent to each other in some cases.
e.g  
[2, 3, 5, 5, 5, 6]  with median **5** outputs:
[2, 6, 3, 5, 5, 5] when filled from the beginning.
[5, 5, 3, 5, 2, 6] when filled from the end.

We just try to maintain two variables - one from the end **(smallPos)**, one from the start **(largePos)** while traversing the nums array.
1. If the current element is smaller than median, we check if it's an **already visited** even position (We decided above that smaller numbers will be placed on even positions). If not, we swap the current element with the smallPos indexed element.
2. We similary check for elements larger than median, only difference being that we check if it's at an **already visited** odd position

```
public void wiggleSort(int[] nums) {
     
        int len = nums.length;
        if(len==1 || len==0)return;
        
        int mid = findKthSmall(nums, (len-1)/2); //median
        int largePos = 1; //Odd position from start for larger than median numbers
        int smallPos = len%2==0 ? len-2: len-1; //Even position from end for smaller than median numbers
        int cur = 0;
        while(cur<len) {
			//Avoiding already checked even positions from the end
            if(nums[cur]<mid && (cur<smallPos || (cur>=smallPos && cur%2!=0))) {
                swap(nums, cur, smallPos);
                smallPos-=2;
            }
			//Avoiding already checked odd positions from the start
            else if(nums[cur]>mid && (largePos<cur || (largePos>=cur && cur%2==0))) {
                swap(nums, cur, largePos);
                largePos+=2;
            }
            
            else cur++;
        }
    }
```

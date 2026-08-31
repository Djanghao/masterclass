# FULL Explanation Of Everything

**Author:** speedyy
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-right-interval/solutions/3560131/](https://leetcode.com/problems/find-right-interval/solutions/3560131/)

---


## Question
```
intervals = [[3,4],[2,3],[1,2]]
Note : Here each value is a 'list'.

For x = [3,4] : 
Is there any value/list whose first value ([f,_]) is EQUAL OR GREATER THAN x[1] (4) ? 
               No! "-1"
For x = [2,3] : Say y = [3,4], so for x[1] (3), y[0] is >= x[1].
               So answer is the index of [3,4] = "0"
For x = [1,2] : The answer is the index of [2,3] = "1"

return [-1, 0, 1]
```
``` 
   "any value/list" I meant ANY VALUE INCLUDING ITSELF! LIKE

intervals = [[1,1], [3,4]]

If we map for every x[0] and it's index :
                        1 - 0
                        3 - 2 
now if x = [1,1] and x[1] = 1, is there any value ( I mean anyyyy ) 
which first value (x[0]) starts with 1? Yes, [1,1] itself. so 0 for [1,1]
and -1 for [3,4] as no x[0] is equal or greater than 4  
```
## Implementation :
```
x = every item in the 'intervals'
                  _______________________
                 |                       |
If I had every 'x[0]' with its index 'sorted' cause Q said 'minimized', like 

                                                        MAP
         x    index     x[0]  index                 x[0]  index
       [3,4] -  0        3   -  0       sort         1  -  2
       [2,3] -  1        2   -  1     ------->       2  -  1
       [1,2] -  2        1   -  2                    3  -  0

Now it will be easier like : for x = [3,4], x[1] = 4 and there is no x[0] which is >= 4 in MAP.

"EQUAL OR GREATER THAN" - lower_bound in CPP for map and bisect_left in Python for list.

add [Maximum value , -1] in map/list so you don't need to say if 
lower_bound()/bisect_left() == end: add -1, else index stuffs.
```
```CPP []
class Solution 
{
public:
    vector<int> findRightInterval(vector<vector<int>>& intervals) 
    {
        vector<int> ans;
        map<int, int> m { {INT_MAX, -1} };

        for(int i=0; i<intervals.size(); i++)
            m[intervals[i][0]] = i; // < x[0], index >

        for(auto &arr : intervals)
            ans.push_back( m.lower_bound(arr[1])->second );

        return ans;
    }
};
```
```Python []
class Solution:
    def findRightInterval(self, intervals: List[List[int]]) -> List[int]:
        # first = [[x[0], index],[x[0], index]....]
        first = sorted([ [arr[0], i] for i,arr in enumerate(intervals) ]) + [[float('inf'), -1]]
        return [ first[ bisect_left(first, [arr[1]] )][1] for arr in intervals ]
```
```
Time  complexity : O(nlogn)
Space complexity : O(n)
```
# bisect_left
```
intervals = [[3,4],[2,3],[1,2]] -- here every item is a list.
For nums = [1,2,3,4] we say bisect_left(nums, 4) for finding 4.
here in 2D intervals if you want to find the "list" whose first value is >= than 4, 
then you've to write bisect_left(first, [4])
                                             |__ Since we want to find the "list".

HOW THIS WORKS ? bisect_left will iterate over 'first' list and check if the 1st item
has started with 4 or greater than 4, if it starts it return the index of that item.
If it doesn't, We don't care what the next value inside that item.
like for item x = [3,4], does x[0] starts with 4 or greater than 4? NO! So we don't care if 
x[1] starts with 4, cause we specifically said [4] means only the first value will be checked.     

EXTRA INFO :
Find the index of the list whose second value is >= 4 :
bisect_left(first, [float('-inf'), 4])
                      |
                      |_ the 1st value just need to be anything IDC
                         Our main focus on the 'second' value.

Find the index of the list whose first value >= 4 and second value >= 5 :
   bisect_left(first, [4,5])

if first = [[4,4], [5,7], [8,9]], answer would be [5,7] 
```

### If the post was helpful, an upvote will really me happy since instead of sleeping I've been writing. Thank you for reading this.
## If you have any Q, feel free to ask:) 

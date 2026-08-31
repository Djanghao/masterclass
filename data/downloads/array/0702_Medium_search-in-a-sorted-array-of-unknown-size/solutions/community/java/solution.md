# 2 different approaches with explanation in C++ and java

**Author:** hardik03
**Votes:** 2
**Link:** [https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/1244342/](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/1244342/)

---

***Approach 1 :***

Idea here is to do binary search on the whole array but we are not given the end index of the array. If we look at the question it is mentioning that `You may assume all integers in the array are less than 10000` that means we can keep the start as 0  and end as 9999 and perform binary search on the array 

***C++ Solution***

```
class Solution {
public:
    int search(const ArrayReader& reader, int target) {
        
        int start = 0;
        int end = 9999;
        
        while(start <= end){
            int mid = (start + end) / 2;
            if(reader.get(mid) == target){
                return mid;
            }else if(reader.get(mid) > target){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }
        
        return -1;
    }
};
```

***Java Solution***

```
class Solution {
    public int search(ArrayReader reader, int target) {
        
        int start = 0;
        int end = 9999;
        
        while(start <= end){
            int mid = (start + end) / 2;
            if(reader.get(mid) == target){
                return mid;
            }else if(reader.get(mid) > target){
                end = mid - 1; 
            }else {
                start = mid + 1;
            }
        }
        return -1;
    }
}
```

***Approach 2 :***
Idea here is define the search boundaries first and then perform binary search on the search boundaries. In order to define the search boundaries take start and end index as 0 and 1 respectively and check 

* If the target now is less than the right element, we're done, the boundaries are set. If not, repeat these two steps till the boundaries are established:
	* Move the left boundary to the right: left = right.
	* Extend the right boundary: right = right * 2.


***C++ Solution***

```
class Solution {
public:
    int search(const ArrayReader& reader, int target) {
        
        int start = 0;
        int end = 1;
        
        while(reader.get(end) < target){
            start = end;
            end <<= 1;
        }
        
        while(start <= end){
            int mid = (start + end) / 2;
            if(reader.get(mid) == target){
                return mid;
            }else if(reader.get(mid) > target){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }
        
        return -1;
    }
};
```

***Java Solution***
```
class Solution {
    public int search(ArrayReader reader, int target) {
        
       int start = 0;
        int end = 1;
        
        while(reader.get(end) < target){
            start = end;
            end <<= 1;
        }
        
        while(start <= end){
            int mid = (start + end) / 2;
            if(reader.get(mid) == target){
                return mid;
            }else if(reader.get(mid) > target){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }
        
        return -1;
    }
}
```

***Please upvote if you like the solution***
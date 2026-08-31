# JAVA || C++ || O(n) || FASTER THAN 100% || WITH MAP || WITHOUT MAP

**Author:** rajat_gupta_
**Votes:** 23
**Link:** [https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1020912/](https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1020912/)

---

**C++**

**1.using map**

**Runtime: 36 ms, faster than 100.00% of C++ online submissions 
Memory Usage: 20.2 MB, less than 100.00% of C++ online submissions**

```
class Solution {
public:
    int countGoodRectangles(vector<vector<int>>& rectangles) {
        unordered_map<int,int> map;
        for(vector<int> rectangle: rectangles){
		    //storing number of time a particular square can obtain
            map[min(rectangle[0],rectangle[1])]++; //[4,6], you can cut it to get a square with a side length of at most  4.
        }
        int cnt=INT_MIN,maxlen=INT_MIN;
        for(auto m: map){
            if(m.first>maxlen) cnt=m.second,maxlen=m.first; //finding out the maxlength square then storing its count in cnt
        }
        return cnt;
    }
};
```
**2.Without map**

**Runtime: 48 ms, faster than 100.00% of C++ online submissions 
Memory Usage: 20.2 MB, less than 100.00% of C++ online submissions**

```
class Solution {
public:
    int countGoodRectangles(vector<vector<int>>& rectangles) {
         int cnt = 0, max = 0;
        for (vector<int>rectangle: rectangles) {
		//get the minimum from width and height
            int side = min(rectangle[0], rectangle[1]); //[4,6], you can cut it to get a square with a side length of at most  4.
            if (side > max) {  //comparing max side with new side 
                cnt = 1; // intialise count with 1
                max = side; //update the max by new side 
            }else if (side == max) { // square with maxlength 
                cnt++; //just increase the count of square with max len
            }
        }
        return cnt;
    }
};
```

**JAVA**

**1.Without map**

**Runtime: 1 ms, faster than 100.00% of Java online submissions
Memory Usage: 39.1 MB, less than 100.00% of Java online submissions**

```
class Solution {
    public int countGoodRectangles(int[][] rectangles) {
        int cnt = 0, max = 0;
        for (int []rectangle: rectangles) {
	    //	get the minimum from width and height
            int side = Math.min(rectangle[0], rectangle[1]); //[4,6], you can cut it to get a square with a side length of at most  4.
            if (side > max) {  //comparing max side with new side 
                cnt = 1; // intialise count with 1
                max = side; //update the max by new side 
            }else if (side == max) { // square with maxlength 
                cnt++; //just increase the count of square with max len
            }
        }
        return cnt;
    }
}
```

**2.using map**

**Runtime: 5 ms, faster than 80.00% of Java online submissions 
Memory Usage: 39.7 MB, less than 20.00% of Java online submissions** 

```
class Solution {
    public int countGoodRectangles(int[][] rectangles) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int max = 0, ans = 0;
        for (int[] rectangle : rectangles) {
            int min = Math.min(rectangle[0], rectangle[1]); //get the minimum from width and height
            map.put(min, map.getOrDefault(min, 0) + 1);
            ans = (min >= max) ? map.get(min) : ans;
            max = Math.max(max, min);
        }
        return ans;
    }
}
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)

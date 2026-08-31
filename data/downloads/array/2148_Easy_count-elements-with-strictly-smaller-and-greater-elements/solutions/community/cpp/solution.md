# C++ | O(N) Time | O(1) Space | 100% Efficient | 3 Approaches

**Author:** mindwr4pper
**Votes:** 92
**Link:** [https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/1711307/](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/1711307/)

---

# 3 Approaches Discussed \u26A1
## 1. Min Max using Multiple passes [Easy Understanding]
Credits to [Apurva Sharma (Github)](https://github.com/Apurva-tech)
## Algorithm 
* Find the max and min element of array, store in M and m variables
* Compare each element with Min and Max and count while iterating through array in O(N) time
* Return the count as result. 
* **Space Complexity:** O(1) 
* **Time Complexity:** O(N) 

## Intuition: 
If you find the max and min of complete array, each element compared will satisfy the condition that needs to checked.

```
Array = [11, 7, 2, 15]
Max = 15 
Min = 2

For iteration i = 0: check if (11>2 && 11 <15)
increase count

And so on.. 

Finally return count
```

## C++ Code: 
```
class Solution {
public:
    int countElements(vector<int>& nums) {
        int M = *max_element(nums.begin(), nums.end()); 
        int m = *min_element(nums.begin(), nums.end()); 
        int res = 0;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] > m && nums[i] < M) res++;
        }
        return res;
    }
};
```

Considering the comments on this post, these 2 approaches were also discussed: 
## 2. Min Max using Single passes [Map]
#### [Credits (link)](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/discuss/1711307/C++-or-O(N)-Time-or-O(1)-Space-or-100-Efficient/1233043) to [suryamshrivastav1](https://leetcode.com/suryamshrivastav1)

## Algorithm 
* Find the max and min element of array, store in m and l variables
* In the same loop use an unordered map to store the frequenecy of each element 
* Return the value of nums.size()-map[m]-map[l] as result. 
* **Space Complexity:** O(N) 
* **Time Complexity:** O(N) Single Pass

## C++ Code: 
```
class Solution {
public:
    int countElements(vector<int>& nums) {
        unordered_map<int,int>map;
        int m=INT_MIN;
        int l=INT_MAX;
        for(int x:nums){
            map[x]++;
            m=max(m,x);
            l=min(l,x);
        }
        if(m==l){
            return 0;
        }
        return nums.size()-map[m]-map[l];
    }
};
```

## 3. Min Max using Single passes [Count occurences without Map]
#### [Credits (link)](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/discuss/1711307/C++-or-O(N)-Time-or-O(1)-Space-or-100-Efficient/1233264) to [ezpzm9](https://leetcode.com/ezpzm9)

## Algorithm 
* Find the max and min element of array.
* Count occurences in the same loop.
* **Space Complexity:** O(1) 
* **Time Complexity:** O(N) Single Pass

## Intuition
```
[11,7,2,15] 
min = 11, minOcc = 1, max = 11, maxOcc = 1;

For i = 1: minOcc = 2 and maxOcc = 2; 
For i = 2: min = 7, minOcc = 1, maxOCc = 2;
and so on..

Finally check if min == max then return 0
or else return nums.size() - minOccurrences - maxOccurrences

```

## C++ Code: 
```
class Solution {
public:
    int countElements(vector<int>& nums) {
	    int n = nums.size(); 
        if (n == 0) return 0;
		int m = nums[0], minOcc = 1, M = nums[0], maxOcc = 1;
		for (int i = 1; i < n; ++i) {
			if (nums[i] < m) {
				m = nums[i];
				minOcc = 1;
			} else if (nums[i] == m) {
				minOcc++;
			}
			if (M < nums[i]) {
				M = nums[i];
				maxOcc = 1;
			} else if (M == nums[i]) {
				maxOcc++;
			}
		}
		return m == M ? 0 : n - minOcc - maxOcc;
		}
};
```

### Please upvote the solution if it helped you \u2B50\u2728
# Detailed Explanation | Binary Search | JAVA | Beats 100% 🚀🚀✨👌

**Author:** 2200032870
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5755595/](https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5755595/)

---

> # Intuition
The constrains of this problem doesnt exceed 10 pow 5. So we can do it in O(n) or O(n logn).

Also always keep Binary search at the back of your mind whenever a find min - max question is asked.

# Approach
<!-- Describe your approach to solving the problem. -->
we sort the array.

we search through all the possible value of mid from 0 - 10 pow 5.
Mid represents the min distance between evry two consecutive values such that there is one value from the range start[i] - start[i] + d using Binary search, we store the possible if we find it and search for a better one.

Checker function
The checked function isValid tells if we can put all values in the array with minimum distance of mid ensuring that the value does not exceed start[i] + d. So we essentially have to adjust the range greedily and check if mid can be the possible minumum distance.

lets take an example of start =  2 , 6 , 13 , 13, d = 5
imagine we get mid = 6 somewhere in the search space.

ranges -> (2 - 8), (6 - 12), (13 - 19), (13 - 19)

we need one value from evry range such the min differnce between 2 is mid.

so we check for 1st range
takin 2 will be the greedily the best value for 1st range since it gives us more room to adjust the other values because the 2 being the smaller one will give us maximum difference.

Check for 2nd range
min value for the next range will be prev value + mid aka min dist = 8
now if 8 lies in the range, well and good but it exceeds the range, we can not put all our elements, hence we return false.
In this case, 8 lies in the range sooo we check further with 8 as our prev val for next iteration.

Check for 3rd range
min value = 8 + 6 = 14, 14 lies in the range (13 - 19)
prev = 14

Check for 4th range
min value = 14 + 6 = 20
Now 20 does not exist in the range, it is exceeding the range, hence we return false.

The search goes on till it find mid = 5, which is the most optimal ans.

# Note
Its alright if the min value falls short of the range, since we are takin about min being the minimum differnce, differnce more than mid is also allowed but differnce less than mid is not.



# Complexity
- Time complexity: O(n logn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int maxPossibleScore(int[] start, int d) {
        int low = 0;
        int high = Integer.MAX_VALUE;
        int res = -1;
        Arrays.sort(start);

        while(low <= high){
            int mid = low + (high - low)/2;

            if(isValid(start, d, mid)){
                res = mid;
                low = mid + 1;
            }

            else high = mid - 1;
        }

        return res;
    }

    private boolean isValid(int[] nums, int d, int mid){
        int n = nums.length;
        int prev = nums[0];

        for(int i=1;i<n;i++){
            if(prev + mid > nums[i] + d) return false;
            prev = Math.max(nums[i], prev + mid);
        }

        return true;
    }
}
```
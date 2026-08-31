# Explained - Sort & Two Pointer || Very Simple & Easy to Understand Solution

**Author:** kreakEmp
**Votes:** 63
**Link:** [https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3312240/](https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3312240/)

---

#### Up vote if you like the solution
# Approach
1. Sort the array.
2. Simply iterate (i) over the array, then check for num[j] which is just larger than nums[i]. once found increament ans & increament i.

To understand 2nd point, lets take an example

[1,   1,   1,   2,   3,   3,   5] 
..i,j

[1,   1,   1,   2,   3,   3,   5] => ans = 1;
. i ...........j

[1,   1,   1,   2,   3,   3,   5] => ans = 2;
..... i. ..........j

[1,   1,   1,   2,   3,   3,   5] => ans = 3;
 ......... i . . . . . . j

[1,   1,   1,   2,   3,   3,   5] => ans = 4;
 . . . . . . . .i . . . . . j



# Code
```

int maximizeGreatness(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    int i = 0, j = 0, ans = 0;
    while(j < nums.size()){
        if(nums[j] > nums[i]) { i++; ans++; }
        j++;
    }
    return ans;
}

```

<b>Here is an article of my interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted
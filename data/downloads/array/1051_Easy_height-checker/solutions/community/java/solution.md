# 💯✅🔥Easy Java ,Python3 ,C++ Solution|| 2 ms ||≧◠‿◠≦✌

**Author:** suyalneeraj09
**Votes:** 41
**Link:** [https://leetcode.com/problems/height-checker/solutions/5286562/](https://leetcode.com/problems/height-checker/solutions/5286562/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is to find the number of students who are not in their correct positions in a line based on their heights. This is achieved by comparing the actual order of students with the order they would be in if they were sorted by height.
# Approach
<!-- Describe your approach to solving the problem. -->
- **Create a Copy of the Original Array**: Create a copy of the original array to maintain the original order of students.
- **Sort the Copy**: Sort the copy of the array in ascending order based on the heights.
- **Compare the Original and Sorted Arrays**: Iterate through both arrays and count the number of students who are not in their correct positions.
# Complexity
- Time complexity:O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```Java []
class Solution {
    public int heightChecker(int[] heights) {
        int[] expected = heights.clone();
        Arrays.sort(expected);
        int count = 0;
        for (int i = 0; i < heights.length; i++) {
            if (heights[i] != expected[i])
                count++;
        }
        return count;
    }
}
```
```python3 []
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        return sum(h1 != h2 for h1, h2 in zip(heights, sorted(heights)))
```
```C++ []
class Solution {
public:
    int heightChecker(vector<int>& heights) {
        vector<int> v(heights);
        sort(v.begin(),v.end());
        int count = 0;
        for(int i=0;i<heights.size();i++){
            if(heights[i] != v[i])
             count++;
        }
        return count;
    }
};
```

![upvote.png](./images/0.png)



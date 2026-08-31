# Day 28 || Ordered Set || Easiest Beginner Friendly Sol

**Author:** singhabhinash
**Votes:** 100
**Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3107293/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3107293/)

---

# Intuition of this Problem:
**Lets understand disjoint set with example:**
If we have given input array : [1, 2, 3, 5, 7, 9, 10, 11]
At 4,6,8 we have disjoint so 5,7 keep in two different array
then output 2d array will be: [[1,3], [5,5], [7,7], [9,11]]

If we have given input array : [1, 2, 3, 5, 6, 7, 9, 10, 11]
then output 2d array will be: [[1,3], [5,7], [9,11]]

The intuition behind this problem is to maintain a set of non-negative integers as a stream of input and to summarize them as a list of disjoint intervals. The intervals are determined by finding contiguous groups of integers in the stream. The set data structure is used to maintain the integers in sorted order, which makes it easy to find contiguous groups of integers.
<!-- Describe your first thoughts on how to solve this problem. -->
**NOTE - PLEASE READ APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.**

# Approach for this Problem:
1. Initialize an empty set nums to store the integers in the data stream.
2. In the addNum() function, insert the given value into the set nums.
3. In the getIntervals() function, initialize a vector of vectors called intervals to store the disjoint intervals.
4. Initialize variables start and end to the first element in the set nums.
5. Iterate through the set nums starting from the second element. For each element, check if its value minus the current value of end is 1.
If it is, update the value of end to the current element's value.If not, push the current interval [start, end] into the intervals vector and update start and end to the current element's value.
1. After the loop, push the last interval [start, end] into the intervals vector and return the intervals vector.
<!-- Describe your approach to solving the problem. -->

# Humble Request:
- If my solution is helpful to you then please **UPVOTE** my solution, your **UPVOTE** motivates me to post such kind of solution.
- Please let me know in comments if there is need to do any improvement in my approach, code....anything.
- **Let's connect on** https://www.linkedin.com/in/abhinash-singh-1b851b188

![57jfh9.jpg](./images/0.jpeg)

# Code:
```C++ []
class SummaryRanges {
public:
    set<int> nums;
    SummaryRanges() {
        
    }
    
    void addNum(int value) {
        nums.insert(value);
    }
    
    vector<vector<int>> getIntervals() {
        vector<vector<int>> intervals;
        int start = *nums.begin();
        int end = *nums.begin();
        for (auto it = ++nums.begin(); it != nums.end(); it++) {
            int val = *it;
            if (val - end == 1) {
                end = val;
            } else {
                intervals.push_back({start, end});
                start = end = val;
            }
        }
        intervals.push_back({start, end});
        return intervals;
        
    }
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * SummaryRanges* obj = new SummaryRanges();
 * obj->addNum(value);
 * vector<vector<int>> param_2 = obj->getIntervals();
 */
```
```C++ []
class SummaryRanges {
public:
    set<int> nums;
    SummaryRanges() {
        
    }
    
    void addNum(int value) {
        nums.insert(value);
    }
    
    vector<vector<int>> getIntervals() {
        vector<vector<int>> intervals;
        int start = -1;
        int end = -1;
        for (auto num : nums) {
            if(end < 0)
                start = end = num;
            else if (num - end == 1) {
                end = num;
            } else {
                intervals.push_back({start, end});
                start = end = num;
            }
        }
        intervals.push_back({start, end});
        return intervals;
        
    }
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * SummaryRanges* obj = new SummaryRanges();
 * obj->addNum(value);
 * vector<vector<int>> param_2 = obj->getIntervals();
 */
```
```Java []
class SummaryRanges {
    TreeSet<Integer> nums;
    SummaryRanges() {
        nums = new TreeSet<>();
    }
    
    void addNum(int value) {
        nums.add(value);
    }
    
    int[][] getIntervals() {
        int[][] intervals;
        int start = nums.first();
        int end = nums.first();
        int i = 0;
        for (Integer val : nums.tailSet(nums.first()+1)) {
            if (val - end == 1) {
                end = val;
            } else {
                intervals[i][0] = start;
                intervals[i][1] = end;
                i++;
                start = end = val;
            }
        }
        intervals[i][0] = start;
        intervals[i][1] = end;
        return intervals;
    }
}

```
```Python []
class SummaryRanges:
    def __init__(self):
        self.nums = set()
        
    def addNum(self, value: int) -> None:
        self.nums.add(value)
        
    def getIntervals(self) -> List[List[int]]:
        intervals = []
        start = None
        end = None
        for val in self.nums:
            if start is None:
                start = val
                end = val
            elif val - end == 1:
                end = val
            else:
                intervals.append([start, end])
                start = end = val
        if start is not None:
            intervals.append([start, end])
        return intervals

```

# Time Complexity and Space Complexity:
- Time complexity: **The time complexity of the addNum() function is O(log(n)) due to the use of the set data structure, where n is the number of elements in the set. The time complexity of the getIntervals() function is O(n) where n is the number of elements in the set. This is because we are iterating through all the elements in the set once.**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **The space complexity is O(n) where n is the number of elements in the set. This is because we are using a set data structure to store all the elements in the stream**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
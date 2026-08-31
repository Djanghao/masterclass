# 🔥Simple and Detailed Explanation🔥 With Video | Tree Map

**Author:** jeevankumar159
**Votes:** 14
**Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3107283/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3107283/)

---

# Understanding  the problem:
Disjoint Intervals: [1,2,3,4, 6,7, 9] the numbers that are continious i.e 1,2,3,4 belong to one interval i.e [1,4]. Since 5 is not there 6,7 form another interval and [9,9] itself.

# Intuition 
# 1. How to form intervals?? 
[1,2,3,4, 6,7, 9] First the input has to be sorted then we check if the element  = PREVIOUS element+1, if yes it belongs to same interval, if not we create a new interval.
Initiate left = A[0] right = A[0]
Iterate over the array and 
	if A[i]=right+1   (//Don't store duplicates) A[i] belongs to same interval. 
	Else left = A[i] and right = A[i]
One Easy solution that comes to mind is to use arraylist and insertion sort i.e whenever a new element is added we just insert at right position. But We have a built in data structure that does the job for us treeSet in java or ordered Set in others.


# 2. Approach 1(Less optimized):
Store the numbers in treeset and form intervals every time getInterval is asked.(use above mentioned approach to form intervals).

# 3.  Optimized:
Instead of forming the intervals there has to be a way to store the intervals and update it every time a new number is added.
The initial answer is again a 2d array[[left, right], [l2,r2]]. But we again have a built in DS i.e TreeMaps.

The key are left and values are right. 
TreeMap <Integer, Integer> intervals;
When a new integer is added .

**Case 1**. There is no entry --> left = n right = n or key = n and value =n 1
eg{
	1:1
}

**Case 2.**     There is a entry but forms a new interval. 4
	{
	1:1
	4:4
	}
	
**Case 3.** There is an entry that belong to or changes just one entry.
	eg 2
	get key value lesser than 2 .i.e 1
	if the value i.e 1 == 2-1, then we can just update this entry
	
	{
			1:2
			4:4
	}
	
**Case 4:**      
There is a entry but changes 2 intervals:
eg 3 will merge both intervals

initiate left =3 and right = 3

get an key lesser that 3 i.e 1 and since 3 == 2+1, 

left = 1;


get a key greater than 3 i.e 4

since 3 == 4-1

right = 4 (the value)


Remove the above 2 values and add the left as key and right as value into the tree map.


{
	1:4
}


https://youtu.be/XJpitOiAQ_Y

![upvote.webp](./images/0.webp)

```
private TreeMap<Integer, Integer> intervals;

    public SummaryRanges() {
        intervals = new TreeMap<>(); 
    }
    
    public void addNum(int value) {
        final Map.Entry<Integer, Integer> minEntry = intervals.floorEntry(value); 
        int left = value, right = value;
        if (minEntry != null) {
            int rightEntry = minEntry.getValue();
            if (rightEntry >= value) {
                return;
            }
            if (rightEntry == value - 1) {
                left = minEntry.getKey();
            }
        }
        final Map.Entry<Integer, Integer> maxEntry = intervals.higherEntry(value); 
        if (maxEntry != null && maxEntry.getKey() == value + 1) {
            right = maxEntry.getValue();
            intervals.remove(value + 1);
        }
        intervals.put(left, right);
    }
    
    public int[][] getIntervals() {
        final int[][] answer = new int[intervals.size()][2];
        int i = 0;
        for (Map.Entry<Integer, Integer> entry : intervals.entrySet()) {
            answer[i][0] = entry.getKey();
            answer[i][1] = entry.getValue();
            i++;
        }
        return answer; 
    }
```	

```
	class SummaryRanges {
    map<int, int> intervals;

	public:
		SummaryRanges() {}

    void addNum(int value) {
        int left = value, right = value;
        auto min_entry = intervals.upper_bound(value);
        if (min_entry != intervals.begin()) {
            auto max_entry = min_entry;
            --max_entry;
            if (max_entry->second >= value) {
                return;
            }
            if (max_entry->second == value - 1) {
                left = max_entry->first;
            }
        }
        if (min_entry != intervals.end() && min_entry->first == value + 1) {
            right = min_entry->second;
            intervals.erase(min_entry);
        }
        intervals[left] = right;
    }

    vector<vector<int>> getIntervals() {
        vector<vector<int>> answer;
        for (const auto& p : intervals) {
            answer.push_back({p.first, p.second});
        }
        return answer;
    }
	};
```

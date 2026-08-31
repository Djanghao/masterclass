# [C++] Greedy Algorithm Easy to understand

**Author:** m7md-hussein
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/1375877/](https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/1375877/)

---

Greedy approach is the best here which is to find the max element  **For example**:
[5,2,3] I can say i have 2 projects with [5,5] because i have two other projects the sum of them is 5 so the milestones will excute as follows
[5,5] -> [4,4]->[3,3]->[2,2]->[1,1] -> and finally [0,0] so if i have at least one MAX element is smaller than or equal to the rest of the elemnts so i can do all milestones on time.
Example for a max element with sum of other elements which is bigger ->

[5,4,3,2,1] -> first i will do a milestone in project 0
[4,4,3,2,1] ->  [3,3,3,2,1] now i have three projects with the same number of milestones i can do like so ->
milestone project ->0   [2,3,3,2,1]
milestone project ->1   [2,2,3,2,1]
milestone project ->2   [2,2,2,2,1]
I have now four projects with the same number of milestones i can do what i did before ->
milestone project ->0    [1,2,2,2,1]
milestone project ->1    [1,1,2,2,1]
milestone project ->2    [1,1,1,2,1]
milestone project ->2    [1,1,1,1,1]

**You Know the rest **

```
class Solution {
public:
    long long numberOfWeeks(vector<int>& milestones) {
        
        long long max = *max_element(milestones.begin(), milestones.end());
        long long sum = 0;
        for(auto x : milestones)
            sum += x;
        if(sum - max >= max)
            return sum;
        else return 2*(sum-max) +1;
    }
};
```

Or  i can simply say return the minimum of the two (sum and  2*(sum-max) +1) if it possible to do all milestones on time the sum will be minimum .

```
class Solution {
public:
    long long numberOfWeeks(vector<int>& milestones) {
        
        long long max = *max_element(milestones.begin(), milestones.end());
        long long sum = 0;
        for(auto x : milestones)
            sum += x;
         return min(2*(sum-max) +1, sum);
    }
};
```


**what 2*(sum-max) +1 really means ?**

I will explain it with an Example:
[5,1,1] so it can't be done on time because it is not satisfying the condition.
so I am going to calculate the number of weeks as follows.
First i have [5,1,1].
sum = 7 , max = 5 -> (sum-max) 7 - 5 = 2;
milestone project 0 -> [4,1,1]->1
milestone project 1 -> [4,0,1]->2
milestone project 0 -> [3,0,1]->3
milestone project 2 -> [3,0,0]->4

So 2 is because first is the max milestone then any other project it doesn't matter,
then the second milestone for the max project and so on ........ till I can't do anymore because I will end up with only the max and
the others are just zeros and if you wondering where is the 1 after 2 * (sum - max).
It is because I start with the max project so I can end with it, so continuing the example will be

milestone project 0 -> [2,0,0]->5 ----> 2 ( 7 - 5 ) +1 = 5.
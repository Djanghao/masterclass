# Sliding Window Golang Solution

**Author:** sukratiagrawal192
**Votes:** 0
**Link:** [https://leetcode.com/problems/high-access-employees/solutions/6084045/](https://leetcode.com/problems/high-access-employees/solutions/6084045/)

---

# Intuition
The problem is to identify employees who accessed a system at least 3 times within any 1-hour time frame. The key observation is that sorting the access times makes it easier to traverse the log in a systematic manner. By maintaining a sliding window of access logs, we can efficiently track access frequencies for each employee.

# Approach
1. Sort the Access Times:
First, the access log is sorted by time (column 1). This ensures that all logs are processed chronologically.

2. Sliding Window Technique:
Use two pointers (i and j) to define the range of access logs being considered within the 1-hour window:

    - i represents the start of the window.
    - j represents the end of the window.
    - As j moves forward, we process each new access and update the frequency count of employees in the window.
    - If the frequency of an employee reaches or exceeds 3, we mark the employee as high-access.
3. Window Shrinking:
    After processing j, move i forward to ensure the window only includes valid entries within the 1-hour range. Decrement the frequency count of employees whose logs are removed from the window.

4. Result Compilation:
Use a map to store employees who meet the condition. Convert the keys of this map into a list for the final result.

# Complexity
- Time complexity:
    - Sorting: Sorting the logs takes O(nlogn), where n is the number of access entries.
    - Sliding Window Traversal: The i and j pointers each traverse the array at most once, leading to O(n) operations.
    - Overall: O(nlogn) (dominated by sorting).

- Space complexity:
    - Frequency map: O(u), where u is the number of unique employees.
    - Employee result map: O(u) for the final list.

# Code
```golang []
func findHighAccessEmployees(access_times [][]string) []string {
    sort.Slice(access_times,func(i,j int)bool{
        return access_times[i][1]<access_times[j][1]
    })  
    accessFreq:=map[string]int{}
    employees:=map[string]bool{}
    i,j:=0,0
    for i<len(access_times) && j<len(access_times){
        currTime,_:=strconv.Atoi(access_times[j][1])
        globalTime,_:=strconv.Atoi(access_times[i][1])
        for currTime<globalTime+100{
            accessFreq[access_times[j][0]]++ 
            if accessFreq[access_times[j][0]]>=3{
                employees[access_times[j][0]]=true
            } 
            j++  
            if j>=len(access_times){
                break
            }
            currTime,_=strconv.Atoi(access_times[j][1])
        }
        accessFreq[access_times[i][0]]--
        i++
    }
    ans:=[]string{}
    for key,_:=range employees{
        ans=append(ans,key)
    }
    return ans
}
```
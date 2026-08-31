# C# - Simple Solution Explained - Beats 72%

**Author:** harrysrangal
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3275700/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3275700/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
We don't have to maintain any sort of data. Just keep track of last value that was not equals to `value`.

# Code
```
public class DataStream {

    int val;
    int k;
    int counter; // to track no. of total elements inserted.
    int temp; // using this to track last value that was != value

    public DataStream(int value, int k) {
        this.k = k;
        this.val = value;
        counter = 0;
        temp = -1;
    }
    
    public bool Consec(int num) {
        
        counter++;
        if(num != val){
            // saving which num was not equals to value
            temp = counter;
        }
        if(counter < k) {
            return false;
        }
        else{
            // if temp is in last k numbers, return false
            if((counter - k < temp) && temp <= counter){
                return false;
            } 
        }
        return true;
    }
}
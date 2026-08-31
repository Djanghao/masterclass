# Pure BinarySearch | No fancy util functions

**Author:** napster01
**Votes:** 3
**Link:** [https://leetcode.com/problems/time-based-key-value-store/solutions/2880857/](https://leetcode.com/problems/time-based-key-value-store/solutions/2880857/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- whenever we any data which is in sorted order we always need to think about binarySearch
- here we can see the data we are getting by timestamp, which will always be in increasing order, so that's the click.

# Approach
<!-- Describe your approach to solving the problem. -->
- Set() - straight forward append the data
- Get() - pure binary serach

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Set() - O(1)
Get() - O(logn) - binary search

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) - array

# Code
```
type TimeMap struct {
    KeyMap map[string][]Pair
}

type Pair struct {
    val string
    timeStamp int
}


func Constructor() TimeMap {
    return TimeMap{
        KeyMap: make(map[string][]Pair),
    }
}


func (this *TimeMap) Set(key string, value string, timestamp int)  {
    pairObj := Pair{
        val: value,
        timeStamp: timestamp,
    }

    if _, ok := this.KeyMap[key]; !ok {
        this.KeyMap[key] = make([]Pair, 0)
    }
    this.KeyMap[key] = append(this.KeyMap[key], pairObj)
}


func (this *TimeMap) Get(key string, timestamp int) string {
    if _, ok := this.KeyMap[key]; !ok {
        return ""
    }
    arr := this.KeyMap[key]
    if arr[0].timeStamp > timestamp {
        return ""
    }

    left := 0
    right := len(arr)-1

    for left < right {
        mid := left + (right-left)/2
        if arr[mid].timeStamp == timestamp  {
            return arr[mid].val
        } else if arr[mid].timeStamp > timestamp {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    if arr[left].timeStamp > timestamp {
        return arr[left-1].val
    }
    return arr[left].val
}


/**
 * Your TimeMap object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Set(key,value,timestamp);
 * param_2 := obj.Get(key,timestamp);
 */
```
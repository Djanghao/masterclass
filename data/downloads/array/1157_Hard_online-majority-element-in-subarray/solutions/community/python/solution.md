# Bias against Python (again...)

**Author:** leetcoder289
**Votes:** 10
**Link:** [https://leetcode.com/problems/online-majority-element-in-subarray/solutions/355908/](https://leetcode.com/problems/online-majority-element-in-subarray/solutions/355908/)

---

Python gets TLE for this simple O(1) construction and O(n) query implementation:
```
class MajorityChecker(object):

    def __init__(self, arr):
        self.arr = arr

    def query(self, left, right, threshold):
        candidate = 0
        count = 0
        for i in range(left, right+1):
            if count == 0:
                candidate = self.arr[i]
                count = 1
            elif candidate == self.arr[i]:
                count += 1
            else:
                count -= 1
        
        count = 0
        for i in range(left, right+1):
            if candidate == self.arr[i]:
                count += 1
        
        if count >= threshold:
            return candidate
        return -1
```

But it gets Accepted for Java
```
class MajorityChecker {
    int[] arr;
        
    public MajorityChecker(int[] arr) {
        this.arr = arr;
    }
    
    public int query(int left, int right, int threshold) {
        int candidate = -1;
        int count = 0;

        for (int i = left; i <= right; i++) {
            if (count == 0) {
                candidate = arr[i];
                count = 1;
            } else if (candidate == arr[i]) {
                count++;
            } else {
                count--;
            }
        }

        count = 0;
        for (int i = left; i <= right; i++) {
            if (arr[i] == candidate){
                count++;
            }
        }
        if (count >= threshold){
            return candidate;
        } else {
            return -1;
        }
    }
}
```

and Accepted for Javascript
```
var MajorityChecker = function(arr) {
    this.arr = arr;
};

MajorityChecker.prototype.query = function(left, right, threshold) {
    var candidate = 0
    var count = 0
    for (var i = left; i < right+1; i++) {
        if (count == 0) {
            candidate = this.arr[i];
            count = 1;
        }
        else if (candidate == this.arr[i]) {
            count += 1
        }
        else {
            count -= 1
        }
    }
    
    count = 0
    for (var i = left; i < right+1; i++) {
        if (candidate == this.arr[i]) {
            count += 1
        }
    }

    if (count >= threshold) {
        return candidate
    }   
    return -1
};
```

and probably accepted for other languages...

Dear LeetCode Moderators: Please be consistent with TLE across different languages. If a O(1) constructor and O(n) query time should either be Accepted in all languages, or TLE in all languages. This is not the first time python time restrictions have been set more strict than other languages. Do you have hatred towards Python and you want us to compete in a different language?
# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 23
**Link:** [https://leetcode.com/problems/my-calendar-i/solutions/5834151/](https://leetcode.com/problems/my-calendar-i/solutions/5834151/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/my-calendar-i/submissions/1402386155?envType=daily-question&envId=2024-09-26
- ***C++ Code -->*** https://leetcode.com/problems/my-calendar-i/submissions/1246140809?envType=daily-question&envId=2024-09-26
- ***Python3 Code -->*** https://leetcode.com/problems/my-calendar-i/submissions/1246527319?envType=daily-question&envId=2024-09-26
- ***Java Code -->*** https://leetcode.com/problems/my-calendar-i/submissions/1246539226?envType=daily-question&envId=2024-09-26
- ***C Code -->*** https://leetcode.com/problems/my-calendar-i/submissions/1246541516?envType=daily-question&envId=2024-09-26
- ***Python Code -->*** https://leetcode.com/problems/my-calendar-i/submissions/1246527939?envType=daily-question&envId=2024-09-26
- ***C# Code -->*** https://leetcode.com/problems/my-calendar-i/submissions/1402384526?envType=daily-question&envId=2024-09-26
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(logn) //Python3 Solution
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(N) //Python3 Solution
# Code
```javascript []

var MyCalendar = function() {
    this.val = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let left = 0
    let right = this.val.length-1;

    while(left <= right){
        let mid = Math.floor(left + (right - left)/2);
        const [s, e] = this.val[mid];
       if(s<end && e>start) return false;

        if(start>=e) left=mid+1; 
        else right=mid-1;

    }
        this.val.splice(left,0,[start,end]);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
```
![th.jpeg](./images/1.jpeg)

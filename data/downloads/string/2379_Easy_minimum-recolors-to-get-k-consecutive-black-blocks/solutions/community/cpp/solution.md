# ✅✅✅  C++ using Sliding Window || Very Simple and Easy to Understand Solution

**Author:** kreakEmp
**Votes:** 75
**Link:** [https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/2454159/](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/2454159/)

---

<b>Up Vote if you like the solution
- Sliding window of size K and minimize the no. of 'W' in window 
- When found a 'W' in forward pointer, increament counter
- when found 'W' in back pointer, decreament counter
- Take the minimum of counter as the answer
```
int minimumRecolors(string blocks, int k) {
    int back = 0, front = 0, count_w = 0, ans = INT_MAX;
    while(front < blocks.size()){
        if(blocks[front] == 'W'){ count_w++; }
        if(front - back + 1 == k){
            ans = min(ans, count_w);
            if(blocks[back] == 'W') count_w--;
            back++;
        }
        front++;
    }
    return ans;
}
```

<b>Here is an article of my interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted
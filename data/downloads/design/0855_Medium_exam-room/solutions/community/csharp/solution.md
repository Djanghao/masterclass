# C# Solution || Easy Solution

**Author:** mohamedAbdelety
**Votes:** 2
**Link:** [https://leetcode.com/problems/exam-room/solutions/3287349/](https://leetcode.com/problems/exam-room/solutions/3287349/)

---

# Complexity
- Time complexity:
Remove => O(1), Seat => O(N)
- Space complexity:
O(N)
# Code
```
public class ExamRoom {
    SortedSet<int> reserved;
    int N;
    public ExamRoom(int n) {
        reserved = new SortedSet<int>();
        N = n - 1;
    } 
    public int Seat() {  
        int cur = 0, dis = 0;
        var seats = reserved.ToList();
        if(seats.Count > 0) dis = seats[0];
        for(int i = 1; i < seats.Count;i++)
        {
            int diff = seats[i] - seats[i - 1];
            int mid = (diff / 2) + seats[i - 1];
            if(mid -  seats[i - 1] > dis){
                cur = mid;
                dis = mid - seats[i - 1];
            }
        }
        if(seats.Count > 0 && N - seats[seats.Count - 1] > dis)
            cur = N;
        reserved.Add(cur);
        return cur;
    }
    
    public void Leave(int p) {
        reserved.Remove(p);
    }
}

```
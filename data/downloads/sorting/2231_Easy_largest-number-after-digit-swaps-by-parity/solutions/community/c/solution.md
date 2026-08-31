# C++|| 0 ms || O(nlogn) || Easy to understand || Commented Explanation || Priority Queue

**Author:** gnipun05
**Votes:** 93
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/1931547/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/1931547/)

---

The simple idea is to store even and odd digits of the number **num** into 2 priority queues (max heap); and then iterate over every digit of **num** to look for places having odd (or even) digits. And then placing the top of the respected queues over those postions.

Please do upvote if this solution helps.

```
class Solution {
public:
    int largestInteger(int num) {
        priority_queue<int> p; // priority queue to store odd digits in descending order
        priority_queue<int> q; // priority queue to store even digits in descending order
        string nums=to_string(num); // converting num to a string for easy access of the digits
        int n=nums.size(); // n stores the number of digits in num
        
        for(int i=0;i<n;i++){
            int digit=nums[i]-'0'; 
            if((digit)%2) // if digit is odd, push it into priority queue p
                p.push(digit);
            else
                q.push(digit); // if digit is even, push it into priority queue q
        }
        
        int answer=0;
        for(int i=0; i<n; i++){
            answer=answer*10;
            if((nums[i]-'0')%2) // if the digit is odd, add the largest odd digit of p into the answer
                {answer+=p.top();p.pop();}
            else
                {answer+=q.top();q.pop();} // if the digit is even, add the largest even digit of q into the answer
        }
        return answer;
    }
};
```
Space: O(n)
Time: O(nlogn)

Any reccomendations are highly appreciated...
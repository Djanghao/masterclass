# Very slow solution based on PQueue. Also version for odd and even digits positions.

**Author:** thrillobit
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/3811351/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/3811351/)

---

# Code
```
public class Solution {
    public int LargestInteger(int n) {
        int num = n;
        var odd = new PriorityQueue<int, int>();
        var even = new PriorityQueue<int, int>();

        while (num>0) {
            if ( (num%10)%2 == 0)
                odd.Enqueue(num%10, num%10);
            else
                even.Enqueue(num%10, num%10);
            
            num = num/10;
        }

        int ans = 0, multiple = 1;
        while (n>0) {
            if ( (n%10)%2 == 0)
                ans += multiple * odd.Dequeue();
            else
                ans += multiple * even.Dequeue();

            multiple = multiple*10;
            n = n/10;
        }
        
        return ans;
    }
}


/*
Solution for odd and even digits POSITIONS
public int LargestInteger(int num) {
        var odd = new PriorityQueue<int, int>();
        var even = new PriorityQueue<int, int>();
        bool oddEven = true;

        while (num>0) {
            if (oddEven)
                odd.Enqueue(num%10, -num%10);
            else
                even.Enqueue(num%10, -num%10);
            
            oddEven = !oddEven;
            num = num/10;
        }

        int ans = 0;
        if (odd.Count>even.Count)
            ans = odd.Dequeue();
        while (odd.Count>0) {
            ans = ans*10;
            ans += even.Dequeue();
            ans = ans*10;
            ans += odd.Dequeue();
        }
        
        return ans;
    }
*/
```
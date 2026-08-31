# CPP, Simply Count the number of Ongoing Process. O(n)

**Author:** harshbansal1000
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/586848/](https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/586848/)

---

**We Will focus here maximum number of On Going Process. Once we find one complete "croak" we reudce the OnGoing variable by 1 and once we found a new 'c' we will increase the ongoing process.**

We will maintain an array and it will record the count of occurence of each element. As any character increases more than it's previous char then it returns -1. (Example : "crorak", here when we come to 4th char i.e. to 'r' the count of 'r' become 2 greater then 'o' which is one so not possible so return -1 here.)

```
int minNumberOfFrogs(string cOf) {
        int onGoing = 0;
        int maxOngoing = 0;
        vector<int> dp(5, 0);
        for(auto a : cOf){
            if(a == 'c'){
                dp[0]++;
                onGoing++;
                maxOngoing = max(maxOngoing, onGoing);
            }else{
                if(a == 'r'){
                    if(dp[0] <= dp[1]) return -1;
                    dp[1]++;
                }else if(a == 'o'){
                    if(dp[1] <= dp[2]) return -1;
                    dp[2]++;
                }else if(a == 'a'){
                    if(dp[2] <= dp[3]) return -1;
                    dp[3]++;
                }else if(a == 'k'){
                    if(dp[3] <= dp[4]) return -1;
                    dp[4]++;
                    onGoing--;
                }
            }
        }
        int total = dp[0];
        for(int i = 1; i < 5; i++){
            if(dp[i] != total) return -1;
        }
        
        return maxOngoing;
    }
```

# JAVA | STORY BASED | 0ms | SINGLE PASS | EASY TO UNDERSTAND | SIMPLE | HASHMAP

**Author:** DeEpAk08
**Votes:** 415
**Link:** [https://leetcode.com/problems/number-of-good-pairs/solutions/1457646/](https://leetcode.com/problems/number-of-good-pairs/solutions/1457646/)

---


# HANDSHAKES IN GATHERING

# **YOU ALL CAN BUY ME A ******BEER \uD83C\uDF7A****** AT \uD83D\uDC47**

**https://www.buymeacoffee.com/deepakgupta**

Imagine this problem like, There is a gathering organized by some guy, the guest list is [1,2,3,1,1,3].
The problem with the guest is they only handshake with like minded people. (Like minded here is basically the digit should be same , for example, 1 will handshake with 1 only, 2 will handshake with 2 only and so on)



**So, finally we just need to count number of handshakes in the gathering. \uD83D\uDCAF \uD83D\uDCAF**

(To distinguish , multiple 1's and 3's , a,b,c,d... letters are used)

**\uD83D\uDD25 the day of arrival \uD83D\uDD25** 

one by one guests are arriving at the gathering

\u2705 first guest: 1

\u2705 second guest: 2
(at this moment, in gathering hall we have **1** (2 is about to enter) , since they are not like minded they wont shake hands)

\u2705 third guest:3
(at this moment, in gathering hall we have **1 ,2** (3 is about to enter), since they are not like minded they wont shake hands)

\u2705 fourth guest : 1
(at this moment, fourth guest will see in gathering hall , there is **one like minded guy** ie(1) , so he will handshake with him)
therefore totalHandShake = 1

\u2705 fifth guest : 1
(at this moment, fifth guest will see in gathering hall, there are **two like minded guys** ie(1,1) , so he will handshake with them)
therefore totalHandShake = 1(last handshake between 1a-1b ) + 2(current handshake between 1a-1c, 1b-1c) = 3

\u2705 sixth guest : 3
(at this moment, sixth guest will see in gathering hall, there is **one like minded guy** ie(3) , so he will handshake with him)
therefore totalHandShake = 3(last handshake) + 1(3a-3b) = 4 


Here, in code we can imagine

**given array as guest list.
Hashmap as gathering hall
ans as totalHandshakes.**

# IF YOU GUYS ENJOYED THIS, PLEASE UPVOTE AND COMMENT, THIS GIVES ME HUGE MOTIVATION.
# **YOU ALL CAN BUY ME A BEER \uD83C\uDF7A AT \uD83D\uDC47**

**https://www.buymeacoffee.com/deepakgupta**



```
class Solution {
    public int numIdenticalPairs(int[] guestList) {
        HashMap<Integer, Integer> hm = new HashMap<>();
        
        int ans = 0;
        
        for(int friend:guestList)
        {
            int friendCount = hm.getOrDefault(friend,0);
            ans+=friendCount;
            hm.put(friend,friendCount+1);
        }
        
        
        return ans;
    }
}
```

**SPACE : O(N)
TIME   :  O(N)**





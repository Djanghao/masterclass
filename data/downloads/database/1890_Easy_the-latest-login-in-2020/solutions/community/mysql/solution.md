# Top 95.21 % from last ! (Selected Code of the Day)

**Author:** GOGOLE
**Votes:** 71
**Link:** [https://leetcode.com/problems/the-latest-login-in-2020/solutions/2174992/](https://leetcode.com/problems/the-latest-login-in-2020/solutions/2174992/)

---

# **Leave or Upvote !** 

![image](./images/0.gif)


PS:- I am kidding or am I \uD83D\uDE02\uD83D\uDE12



```
select user_id, max(time_stamp) 'last_stamp'
from logins
where time_stamp like '2020%'
group by user_id ;
```
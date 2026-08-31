# Accepted but unable to submit why?

**Author:** Amykc
**Votes:** 1
**Link:** [https://leetcode.com/problems/ad-free-sessions/solutions/1275925/](https://leetcode.com/problems/ad-free-sessions/solutions/1275925/)

---

Select session_id
From Playback p
Join Ads a 
on p.customer_id = a.customer_id
Where a.timestamp  not between p.start_time and  p.end_time
Group by Session_id
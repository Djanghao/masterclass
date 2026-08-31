# Simple Java Solution with explanation

**Author:** cyqqz
**Votes:** 168
**Link:** [https://leetcode.com/problems/design-hit-counter/solutions/83505/](https://leetcode.com/problems/design-hit-counter/solutions/83505/)

---

 In this problem, I use a queue to record the information of all the hits. Each time we call the function getHits( ), we have to delete the elements which hits beyond 5 mins (300). The result would be the length of the queue : )

  

    public class HitCounter {
            Queue<Integer> q = null;
            /** Initialize your data structure here. */
            public HitCounter() {
                q = new LinkedList<Integer>();
            }
            
            /** Record a hit.
                @param timestamp - The current timestamp (in seconds granularity). */
            public void hit(int timestamp) {
                q.offer(timestamp);
            }
            
            /** Return the number of hits in the past 5 minutes.
                @param timestamp - The current timestamp (in seconds granularity). */
            public int getHits(int timestamp) {
                while(!q.isEmpty() && timestamp - q.peek() >= 300) {
                    q.poll();
                }
                return q.size();
            }
        }
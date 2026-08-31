# ✅Full Explanation||✅O(n)🔥|| Easy Approach||✅

**Author:** singhhh_sidhantttt
**Votes:** 72
**Link:** [https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/3974020/](https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/3974020/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The given problem is about **determining the optimal time** to **close** a shop based on **customer visit patterns**, while aiming to minimize the penalty incurred. The goal is to **find the hour** at which closing the shop results in the least penalty.


# Approach
<!-- Describe your approach to solving the problem. -->
1. **Scoring System:** The code employs a scoring system where each customer arriving at the shop increments the score by 1, and each hour without a customer decrements the score by 1. This score represents the difference between the number of arriving customers and the number of non-arriving hours.
**this line of code ensure scoring system-**
```
score += (customers[i] == 'Y') ? 1 : -1;
```
2. **Max Score and Right time:** The code maintains **two variables:** **max_score** and **right_time**. max_score keeps track of the **highest score encountered** during iteration, and right_time stores the hour **at** **which this maximum score** occurs.


3. **Iterating Through Hours:** The code iterates through each hour in the customer visit log. **For each hour, it updates the score** based on **whether a customer arrived or not**. **If** the **updated score** surpasses the **previously recorded maximum score**, the **max_score is updated**, and the **right_time** is set to the current hour.


4. **Returning the Result:** After iterating through all hours, the code returns **right_time + 1**. **Adding 1 is necessary because hours are 0-indexed**, and the **expected output is 1-indexed**.


# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# REQUEST : If you found this post even remotely helpful, be kind enough to smash a upvote. I will be grateful.

# Code C++
```
class Solution {
public:
    int bestClosingTime(string customers) {
        int max_score = 0, score = 0, right_time = -1;
        for(int i = 0; i < customers.size(); ++i) {
            score += (customers[i] == 'Y') ? 1 : -1;
            if(score > max_score) {
                max_score = score;
                right_time = i;
            }
        }
        return right_time + 1;
    }
};
```
# Code Java
```
class Solution {
    public int bestClosingTime(String customers) {
        int maxScore = 0, score = 0, rightTime = -1;
        for (int i = 0; i < customers.length(); ++i) {
            score += (customers.charAt(i) == 'Y') ? 1 : -1;
            if (score > maxScore) {
                maxScore = score;
                rightTime = i;
            }
        }
        return rightTime + 1;
    }
}

```
# Code Python
```
class Solution:
    def bestClosingTime(self, customers: str) -> int:
        max_score = 0
        score = 0
        right_time = -1
        for i in range(len(customers)):
            score += 1 if customers[i] == 'Y' else -1
            if score > max_score:
                max_score = score
                right_time = i
        return right_time + 1
```
# REQUEST : If you found this post even remotely helpful, be kind enough to smash a upvote. I will be grateful.

![UPVOTE.png](./images/0.png)


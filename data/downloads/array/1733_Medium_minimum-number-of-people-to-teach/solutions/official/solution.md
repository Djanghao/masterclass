# Official Solution

**Link:** [https://leetcode.com/problems/minimum-number-of-people-to-teach/solution/](https://leetcode.com/problems/minimum-number-of-people-to-teach/solution/)

---

### Approach: Greedy

#### Intuition

The task requires us to choose a language so that all friends can communicate with each other. Between any two friends, there are two possible situations:

1. If their sets of languages intersect, they can communicate with each other.
2. If their sets of languages do not intersect, they cannot communicate with each other.

In the first case, we do not need to do anything, since the friends can already communicate. In the second case, we need to choose a language that both friends can learn, which will allow them to communicate.

Our goal is to find the minimum number of people who need to be taught a language. To do this, we first identify all friends who cannot currently communicate with each other.

Next, we need to find a language that all of these friends could potentially learn. If they all share this language, then communication becomes possible.

How do we select such a language? We count how many of the non-communicating friends already know each language, and then greedily choose the language known by the largest number of them. This minimizes the number of additional people who need to learn it. It can be proven that choosing any other language would result in teaching at least as many, if not more, people. Therefore, this greedy strategy is correct.

For the implementation, we use a hash table $\textit{mp}$ to check whether each pair of friends can already communicate. We then use a set $\textit{cncon}$ to store all friends who cannot communicate. We also maintain an array $\textit{cnt}$ of length $n$ to count how many of these friends know each language. Finally, we find the maximum value $\textit{max_cnt}$ in this array. The minimum number of people to teach is then given by the size of the $\textit{cncon}$ set minus $\textit{max_cnt}$.

#### Implementation

<iframe src="https://leetcode.com/playground/VgFhxAap/shared" frameBorder="0" width="100%" height="500" name="VgFhxAap"></iframe>

#### Complexity Analysis

Let $m$ be the number of friendship pairs and $n$ be the number of available languages.

- Time complexity: $O(m \times n)$.
  
  For each friendship pair in $\textit{friendships}$, we may need to check all the languages spoken by both people. Since there are $m$ pairs and up to $n$ languages, the overall time complexity is $O(m \times n)$.

- Space complexity: $O(m + n)$.
  
  We use $O(m)$ space for the $\textit{cncon}$ set, which stores the friends who cannot communicate, and $O(n)$ space for the $\textit{cnt}$ array, which counts how many people know each language. Thus, the total space complexity is $O(m + n)$.

---
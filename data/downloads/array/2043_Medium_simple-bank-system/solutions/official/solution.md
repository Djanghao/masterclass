# Official Solution

**Link:** [https://leetcode.com/problems/simple-bank-system/solution/](https://leetcode.com/problems/simple-bank-system/solution/)

---

### Approach: Simulation

#### Intuition

The existing account numbers range from $1$ to $n$. We analyze the three operations as follows:

+ operation $\textit{transfer}$

    If either of the specified accounts does not exist (i.e., $\textit{account1} > n$ or $\textit{account2} > n$), the transaction is invalid. If the balance of $\textit{account1}$ is less than $\textit{money}$, the transaction is also invalid. When the transaction is valid, we deduct $\textit{money}$ from the balance of $\textit{account1}$ and add the same amount to the balance of $\textit{account2}$.

+ operation $\textit{deposit}$

    If the specified account does not exist (i.e., $\textit{account} > n$), the transaction is invalid. When the transaction is valid, we increase the balance of $\textit{account}$ by $\textit{money}$.

+ operation $\textit{withdraw}$

    If the specified account does not exist (i.e., $\textit{account} > n$), the transaction is invalid. If the balance of $\textit{account}$ is less than $\textit{money}$, the transaction is invalid. When the transaction is valid, we decrease the balance of $\textit{account}$ by $\textit{money}$.

#### Implementation

<iframe src="https://leetcode.com/playground/GCCGRNmH/shared" frameBorder="0" width="100%" height="500" name="GCCGRNmH"></iframe>

#### Complexity Analysis

Let $n$ be the number of existing accounts.

+ Time complexity:
  + $\textit{transfer}$: $O(1)$
  + $\textit{deposit}$: $O(1)$
  + $\textit{withdraw}$: $O(1)$

+ Space complexity:
  + Initialize: $O(n)$
  + $\textit{transfer}$: $O(1)$
  + $\textit{deposit}$: $O(1)$
  + $\textit{withdraw}$: $O(1)$

---
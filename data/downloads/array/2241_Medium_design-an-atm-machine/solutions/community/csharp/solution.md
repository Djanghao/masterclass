# C# Greedy Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-an-atm-machine/solutions/5917655/](https://leetcode.com/problems/design-an-atm-machine/solutions/5917655/)

---

# Intuition
- <!-- Describe your first thoughts on how to solve this problem. -->Break down the problem requirements: The ATM needs to prioritize larger denominations first when making a withdrawal. If a withdrawal can\u2019t be completed after using the largest available notes, the transaction must fail entirely.
- Modeling the problem: Maintain a count of each type of banknote.
For withdrawals, attempt to use the largest denominations first (since we want to minimize the total number of notes). Use division to determine how many notes of a particular denomination are needed.
- Handle edge cases: Ensure that withdrawals are either all or nothing (transaction succeeds completely or fails entirely).
Make sure that if the remaining amount can\u2019t be covered, the ATM\u2019s state remains unchanged.
- Greedy strategy makes sense here: Since the goal is to use fewer banknotes, using the highest value notes first is the optimal approach. If that fails, no other smaller combination will succeed for the same amount.
___
# Approach
- <!-- Describe your approach to solving the problem. -->Initalization:
*We store the denominations in an array [20, 50, 100, 200, 500] for easy access. 
*A banknoteCounts array keeps track of the count of each denomination.
Deposit Method: Adds the given number of banknotes to the respective counts.
- Withdraw Method:
*We attempt to withdraw the required amount starting from the largest denomination.
*If we successfully withdraw the amount, we update the ATM\u2019s state.
*If not, the transaction fails, and we return [-1] without modifying the ATM\u2019s state.
___
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(1). The operations are performed on a fixed-size array (5 denominations), so the number of iterations is constant. Both the Deposit and Withdraw methods involve iterating over the array of size 5, which takes constant time.
___
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1). We use a constant amount of extra space for storing the counts of banknotes and the array used for withdrawal (toWithdraw). No additional space is required that grows with input size.
___
# Code
```csharp []
public class ATM {
    // Store the denominations and their counts
    private readonly int[] denominations = { 20, 50, 100, 200, 500 };
    private readonly long[] banknoteCounts = new long[5]; // Store count of each denomination

    public ATM() { }

    // Deposit new banknotes
    public void Deposit(int[] banknotesCount) {
        for (int i = 0; i < 5; i++) {
            banknoteCounts[i] += banknotesCount[i]; // Update counts
        }
    }

    // Withdraw an amount if possible, using the largest denominations first
    public int[] Withdraw(int amount) {
        int[] toWithdraw = new int[5]; // Store banknotes to withdraw
        long remaining = amount;

        // Try to use the largest denominations first (in reverse order)
        for (int i = 4; i >= 0; i--) {
            int use = (int)Math.Min(remaining / denominations[i], banknoteCounts[i]);
            toWithdraw[i] = use;
            remaining -= use * denominations[i];
        }

        // Check if the withdrawal was successful
        if (remaining == 0) {
            // Update the ATM with the withdrawn banknotes
            for (int i = 0; i < 5; i++) {
                banknoteCounts[i] -= toWithdraw[i];
            }
            return toWithdraw;
        } else {
            return new int[] { -1 }; // Withdraw failed
        }
    }
}

/**
 * Your ATM object will be instantiated and called as such:
 * ATM obj = new ATM();
 * obj.Deposit(banknotesCount);
 * int[] param_2 = obj.Withdraw(amount);
 */
```
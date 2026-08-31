# Java | JavaScript | TypeScript | C++ | C# | Kotlin Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/4994054/](https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/4994054/)

---

```Java []
public class Solution {

    public String gameResult(ListNode head) {
        ListNode current = head;
        int balanceEvenScoresMinusOddScores = 0;

        while (current != null) {
            balanceEvenScoresMinusOddScores += (current.val > current.next.val) ? 1 : -1;
            current = current.next.next;
        }

        return (balanceEvenScoresMinusOddScores > 0)
                ? "Even"
                : (balanceEvenScoresMinusOddScores < 0)
                ? "Odd"
                : "Tie";
    }
}
```
```JavaScript []
/**
 * @param {ListNode} head
 * @return {string}
 */
var gameResult = function (head) {
    let current = head;
    let balanceEvenScoresMinusOddScores = 0;

    while (current !== null) {
        balanceEvenScoresMinusOddScores += (current.val > current.next.val) ? 1 : -1;
        current = current.next.next;
    }

    return (balanceEvenScoresMinusOddScores > 0)
            ? "Even"
            : (balanceEvenScoresMinusOddScores < 0)
            ? "Odd"
            : "Tie";
};
```
```TypeScript []
function gameResult(head: ListNode | null): string {
    let current = head;
    let balanceEvenScoresMinusOddScores = 0;

    while (current !== null) {
        balanceEvenScoresMinusOddScores += (current.val > current.next.val) ? 1 : -1;
        current = current.next.next;
    }

    return (balanceEvenScoresMinusOddScores > 0)
           ? "Even"
           : (balanceEvenScoresMinusOddScores < 0)
           ? "Odd"
           : "Tie";
};
```
```C++ []
using namespace std;

class Solution {

public:
    string gameResult(ListNode* head) const {
        ListNode* current = head;
        int balanceEvenScoresMinusOddScores = 0;

        while (current != nullptr) {
            balanceEvenScoresMinusOddScores += (current->val > current->next->val) ? 1 : -1;
            current = current->next->next;
        }

        return (balanceEvenScoresMinusOddScores > 0)
                ? "Even"
                : (balanceEvenScoresMinusOddScores < 0)
                ? "Odd"
                : "Tie";
    }
};
```
```C# []
using System;

public class Solution
{
    public string GameResult(ListNode head)
    {
        ListNode current = head;
        int balanceEvenScoresMinusOddScores = 0;

        while (current != null)
        {
            balanceEvenScoresMinusOddScores += (current.val > current.next.val) ? 1 : -1;
            current = current.next.next;
        }

        return (balanceEvenScoresMinusOddScores > 0)
                ? "Even"
                : (balanceEvenScoresMinusOddScores < 0)
                ? "Odd"
                : "Tie";
    }
}
```
```Kotlin []
class Solution {
    fun gameResult(head: ListNode?): String {
        var current: ListNode? = head;
        var balanceEvenScoresMinusOddScores = 0

        while (current != null) {
            balanceEvenScoresMinusOddScores += if (current.`val` > current.next!!.`val`) 1 else -1
            current = current.next?.next
        }

        return when {
            (balanceEvenScoresMinusOddScores > 0) -> "Even"
            (balanceEvenScoresMinusOddScores < 0) -> "Odd"
            else -> "Tie";
        }
    }
}
```
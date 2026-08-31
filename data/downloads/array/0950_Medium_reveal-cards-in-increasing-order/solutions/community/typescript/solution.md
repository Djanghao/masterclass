# js and ts with queue solution.

**Author:** anuchataowkaen
**Votes:** 1
**Link:** [https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5002140/](https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5002140/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
``` javascript []
function deckRevealedIncreasing(deck) {
  deck.sort((a, b) => a - b)
  const result = Array.from(deck).fill(0)
  const q = []
  for (let i = 0; i < result.length; i++) q.push(i)

  for (let i = 0; i < result.length; i++) {
    result[q[0]] = deck[i]
    q.shift()
    const temp = q[0]
    q.shift()
    q.push(temp)
  }
  return result
}
```
``` typescript []
function deckRevealedIncreasing(deck: number[]): number[] {
  deck.sort((a, b) => a - b)
  const result = Array.from(deck).fill(0)
  const q: number[] = []
  for (let i = 0; i < result.length; i++) q.push(i)

  for (let i = 0; i < result.length; i++) {
    result[q[0]] = deck[i]
    q.shift()
    const temp = q[0]
    q.shift()
    q.push(temp)
  }
  return result
}
```